// src/core/tracker-service.js
import { getDevices, startStream, attach, stopStream } from '../camera/camera-setup.js';
import { initLandmarker, closeLandmarker, detect } from '../mp/face-landmarker.js';
import { publish } from './pose-store.js';

/* =========================
   Runtime state
   ========================= */
let running = false;
let reconfiging = false;
let pendingReconfig = null;

let videoEl = null;
let lm = null;

let eyeMode = 'center';
let deviceIdPref = null;
let resPref = { width: 1280, height: 720 };
let delegatePref = 'GPU';

// Z calibration (baseline distance + baseline Z)
let zCalib = { d0: null, Z0: 0 };
const zEMA = { val: null }; // light smoothing

// Last-good pose hold (avoid snapping to zeros on brief losses)
const HOLD_MS = 1500; // tweak to taste (or expose via config)
let lastGood = { pe: null, z_m: null, ts: 0 };
// expose tuning knobs (optional, read from config.js if present in page)
window.LUCI_CFG = window.LUCI_CFG || {}; // can be overwritten in main.js if desired

/* =========================
   Public API
   ========================= */
export async function startTracker({
  delegate = 'GPU',
  video = document.createElement('video'),
  deviceId = null,
  width = 1280,
  height = 720,
  initZ_m = 0.6, // HeadInit Z from main.js
} = {}) {
  if (running) return;

  delegatePref = delegate || 'GPU';
  deviceIdPref = deviceId ?? deviceIdPref;
  resPref = { width, height };
  zCalib = { d0: null, Z0: initZ_m };
  zEMA.val = null;
  lastGood = { pe: null, z_m: null, ts: 0 };

  videoEl = video;
  videoEl.muted = true;
  videoEl.playsInline = true;

  // Start fresh: stream + landmarker
  await restartCamera();
  await recreateLandmarker();

  running = true;
  videoEl.requestVideoFrameCallback(onFrame);
}

export async function stopTracker() {
  running = false;
  try { await closeLandmarker(); } catch {}
  lm = null;
  stopStream();
  videoEl = null;
  zCalib = { d0: null, Z0: 0 };
  zEMA.val = null;
  lastGood = { pe: null, z_m: null, ts: 0 };
}

export async function setEyeMode(next) {
  eyeMode = next || 'center';
}

export async function setCameraDevice(deviceId) {
  deviceIdPref = deviceId || null;
  if (videoEl) await reconfigureCamera({ resetZ: true }); // new camera → recalibrate Z baseline
}

export async function setResolution(width, height) {
  resPref = { width, height };
  if (videoEl) await reconfigureCamera({ resetZ: false }); // keep Z; change if you prefer true
}

// Optional: live delegate swap (GPU <-> CPU)
export async function setDelegate(delegate = 'GPU') {
  if (!videoEl) return;
  delegatePref = delegate || 'GPU';

  const wasRunning = running;
  running = false;

  await recreateLandmarker();

  running = wasRunning;
  if (running) videoEl.requestVideoFrameCallback(onFrame);
}

/* =========================
   Internals
   ========================= */
async function restartCamera() {
  const devices = await getDevices();
  const pickedId = deviceIdPref ?? devices[0]?.deviceId ?? undefined;
  const stream = await startStream({
    deviceId: pickedId,
    width: resPref.width,
    height: resPref.height
  });
  await attach(videoEl, stream);
}

async function recreateLandmarker() {
  try { await closeLandmarker(); } catch {}
  lm = await initLandmarker(delegatePref);
}

async function reconfigureCamera({ resetZ = false } = {}) {
  // Collapse rapid successive requests
  if (reconfiging) {
    pendingReconfig = { resetZ: pendingReconfig?.resetZ || resetZ };
    return;
  }

  reconfiging = true;
  const wasRunning = running;
  running = false; // pause onFrame loop

  // 1) Stop & restart stream with current prefs
  stopStream();
  await restartCamera();

  // 2) Wait for new dimensions
  await new Promise((res) => {
    const handler = () => { videoEl.removeEventListener('loadedmetadata', handler); res(); };
    videoEl.addEventListener('loadedmetadata', handler, { once: true });
    if (videoEl.videoWidth && videoEl.videoHeight) handler();
  });

  // 3) Close & recreate landmarker for the new stream/context
  await recreateLandmarker();

  // 4) Optional Z baseline reset
  if (resetZ) {
    zCalib = { d0: null, Z0: zCalib.Z0 };
    zEMA.val = null;
    // keep lastGood; we may still want to hold briefly during the swap
    lastGood.ts = performance.now();
  }

  // 5) Resume
  running = wasRunning;
  if (running) videoEl.requestVideoFrameCallback(onFrame);

  reconfiging = false;

  // If another reconfig was queued, run it now
  if (pendingReconfig) {
    const next = pendingReconfig;
    pendingReconfig = null;
    return reconfigureCamera(next);
  }
}

/* =========================
   Per-frame loop
   ========================= */
function onFrame(ts, meta) {
  if (!running) return;
  videoEl.requestVideoFrameCallback(onFrame);

  const nowMs = (meta && typeof meta.mediaTime === 'number') ? meta.mediaTime * 1000 : ts;

  // Inference
  const t0 = performance.now();
  const result = lm ? detect(videoEl, nowMs) : null;
  const procMs = performance.now() - t0;

  const lmks = result?.faceLandmarks?.[0];
  let pe = lmks ? pickEyePoint(lmks, eyeMode) : null;

  // Mirror X so rightward movement is +X in screen space
  if (pe) pe = { x: 1 - pe.x, y: pe.y };

    // Live Z estimation (configurable)
  let z_m = null;
  if (lmks) {
    const { cL, cR } = eyeCenters(lmks);
    const mode   = (window.LUCI_CFG?.zEstimator) || 'hybrid';
    const alpha  = Math.max(0.01, Math.min(0.9, (window.LUCI_CFG?.zAlpha ?? 0.08)));
    const zMin   = (window.LUCI_CFG?.zClampMin_m ?? 0.25);
    const zMax   = (window.LUCI_CFG?.zClampMax_m ?? 2.5);

    let rawZ = null;
    // A) classic inter-ocular distance → farther head => smaller apparent eye spacing
    if (cL && cR) {
      const d = Math.hypot(cL.x - cR.x, cL.y - cR.y); // normalized [0..1]
      if (!zCalib.d0 && d > 0) zCalib.d0 = d; // first good frame baseline
      if (zCalib.d0 && d > 1e-6) {
        rawZ = zCalib.Z0 * (zCalib.d0 / d);
      }
    }
    // B) nose bridge landmark depth (less yaw-sensitive, but needs scale)
    const nz = noseBridgeZ(lmks); // negative toward camera
    let rawZnose = null;
    if (nz != null && zCalib.d0) {
      // convert relative nose depth to meters by normalizing with eye spacing baseline
      // constant picked empirically; tune k to taste
      const k = 0.85; // hybrid gain
      rawZnose = zCalib.Z0 * (1 + k * (-nz)); // nz ~ [-0.2..0] typically
    }

    // choose mode
    let fused = rawZ;
    if (mode === 'nose') fused = rawZnose ?? rawZ;
    else if (mode === 'hybrid'){
      if (rawZ != null && rawZnose != null) fused = 0.65 * rawZ + 0.35 * rawZnose;
      else fused = rawZnose ?? rawZ;
    }

    if (fused != null) {
      zEMA.val = ema(zEMA.val, fused, alpha); // stronger smoothing by default
      z_m = Math.min(zMax, Math.max(zMin, zEMA.val));
    }
  }

  // --- Last-good hold logic ---
  let tracking = !!lmks && !!pe && z_m != null;
  let held = false;

  if (tracking) {
    lastGood = { pe, z_m, ts: nowMs };
  } else if (lastGood.pe && lastGood.z_m != null && (nowMs - lastGood.ts) <= HOLD_MS) {
    pe = lastGood.pe;
    z_m = lastGood.z_m;
    held = true;
  } else {
    pe = null;
    z_m = null;
  }

  // Publish (tracking reflects current lock; 'held' signals frozen output)
  publish({ ts: nowMs, pe, raw: result, procMs, z_m, tracking, held });
}

/* =========================
   Helpers
   ========================= */
function pickEyePoint(lmks, mode) {
  const RIGHT = [33, 133, 159, 145];
  const LEFT  = [263, 362, 386, 374];
  const center = (idxs) => {
    let sx = 0, sy = 0, n = 0;
    for (const i of idxs) { const p = lmks[i]; if (p) { sx += p.x; sy += p.y; n++; } }
    return n ? { x: sx / n, y: sy / n } : null;
  };
  const cR = center(RIGHT), cL = center(LEFT);
  if (mode === 'left')  return cL || cR || null;
  if (mode === 'right') return cR || cL || null;
  if (cL && cR) return { x: (cL.x + cR.x) / 2, y: (cL.y + cR.y) / 2 };
  return cL || cR || null;
}

function eyeCenters(lmks) {
  const RIGHT = [33, 133, 159, 145];
  const LEFT  = [263, 362, 386, 374];
  const center = (idxs) => {
    let sx = 0, sy = 0, n = 0;
    for (const i of idxs) { const p = lmks[i]; if (p) { sx += p.x; sy += p.y; n++; } }
    return n ? { x: sx / n, y: sy / n } : null;
  };
  return { cR: center(RIGHT), cL: center(LEFT) };
}

// ----- Z helpers -----
function noseBridgeZ(lmks){
  // a small set around the nose bridge / tip that’s stable
  const IDS = [6, 4, 1, 195, 5]; // glabella / bridge / tip neighborhood
  let s = 0, n = 0;
  for (const i of IDS){ const p = lmks[i]; if (p && Number.isFinite(p.z)) { s += p.z; n++; } }
  return n ? (s / n) : null; // MediaPipe: z ~ negative toward camera
}

function ema(prev, next, alpha){
  return prev == null ? next : (prev * (1 - alpha) + next * alpha);
}