// src/main.js
// ——————————————————————————————————————————————
// Imports
import { RESOLUTIONS, actualBadge, getDevices } from './camera/camera-setup.js';
import { startTracker, stopTracker, setCameraDevice, setDelegate, setResolution, setEyeMode } from './core/tracker-service.js';
import { subscribe } from './core/pose-store.js';
import { mountTrackerPanel } from './ui/tracker-panel.js';
import { loadConfig, saveConfig } from './config.js';
import { makePreview3D } from './ui/preview-3d.js';
import { LuciWS } from './net/ws-client.js';

// ——————————————————————————————————————————————
// Elements
const startBtn   = document.getElementById('start');
const stopBtn    = document.getElementById('stop');
const delegateEl = document.getElementById('delegate');
const cameraSel  = document.getElementById('cameraSel');
const resSel     = document.getElementById('resSel');
const eyeSel     = document.getElementById('eyeSel');
const statusEl   = document.getElementById('status');
const actualEl   = document.getElementById('actual');
const fpsEl      = document.getElementById('fps');
const msEl       = document.getElementById('ms');
const readoutEl  = document.getElementById('readout');

const toggleWebcamBtn = document.getElementById('toggleWebcam');
const toggleMeshBtn   = document.getElementById('toggleMesh');
const toggle3dBtn     = document.getElementById('toggle3d');
const mirrorFeedEl    = document.getElementById('mirrorFeed');

const previewEl      = document.getElementById('preview');
const overlay        = document.getElementById('overlay');
const octx           = overlay ? overlay.getContext('2d') : null;
const themeToggleBtn = document.getElementById('themeToggle');

// Calibration inputs
const monXEl  = document.getElementById('monX');
const monYEl  = document.getElementById('monY');
const saveCal = document.getElementById('saveCal');

// Offsets & gains inputs (consolidated)
const offXEl  = document.getElementById('offX');
const offYEl  = document.getElementById('offY');
const offZEl  = document.getElementById('offZ');
const gainXEl = document.getElementById('gainX');
const gainYEl = document.getElementById('gainY');

// Popout/PictureInPicture
const btnPopout = document.getElementById('btnPopout');
const btnDocPiP = document.getElementById('btnDocPiP');
const btnWake   = document.getElementById('btnWake');

// ——————————————————————————————————————————————
// Prefs
const PREF_KEY = 'luci.tracker.prefs.v1';
const loadPrefs = () => { try { return JSON.parse(localStorage.getItem(PREF_KEY)) || {}; } catch { return {}; } };
const savePrefs = obj => {
  const prev = loadPrefs();
  localStorage.setItem(PREF_KEY, JSON.stringify({ ...prev, ...obj }));
};

const applyTheme = theme => {
  const next = (theme === 'light') ? 'light' : 'dark';
  document.body.dataset.theme = next;
  if (themeToggleBtn) {
    const isLight = next === 'light';
    themeToggleBtn.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    themeToggleBtn.setAttribute('aria-pressed', String(isLight));
  }
};

// ——————————————————————————————————————————————
// Config (physical + tuning)
let CFG = loadConfig();

// Expose select knobs to tracker-service (Z estimator etc.)
window.LUCI_CFG = {
  zEstimator  : CFG.zEstimator,
  zAlpha      : CFG.zAlpha,
  zClampMin_m : CFG.zClampMin_m,
  zClampMax_m : CFG.zClampMax_m
};

// Axis tuning / lens params (defaults from config)
const AXIS = {
  // Y
  yGain:    CFG.yGain,
  yGamma:   CFG.yGamma,
  yClamp01: CFG.yClamp01,
  yCalib:   CFG.yCalib,
  // X
  xGain:    CFG.xGain,
  xGamma:   CFG.xGamma,
  xClamp01: CFG.xClamp01,
  xCalib:   CFG.xCalib,
  // Lens / wide-angle
  wideAngleMode: CFG.wideAngleMode,
  lens: { u0: CFG.lens?.u0 ?? 0.5, v0: CFG.lens?.v0 ?? 0.5, k1: CFG.lens?.k1 ?? 0.0, k2: CFG.lens?.k2 ?? 0.0 }
};

// Seed inputs
if (monXEl)  monXEl.value  = String(CFG.monitorX_m);
if (monYEl)  monYEl.value  = String(CFG.monitorY_m);
if (offXEl)  offXEl.value  = String(CFG.offsetX_m ?? 0);
if (offYEl)  offYEl.value  = String(CFG.offsetY_m ?? 0);
if (offZEl)  offZEl.value  = String(CFG.offsetZ_m ?? 0);
if (gainXEl) gainXEl.value = String(CFG.xGain ?? 1);
if (gainYEl) gainYEl.value = String(CFG.yGain ?? 1);

// Prefs -> controls
const P = loadPrefs();
if (resSel && P.resKey)        resSel.value = P.resKey;
if (eyeSel && P.eye)           eyeSel.value = P.eye;
if (delegateEl && P.delegate)  delegateEl.value = P.delegate;
applyTheme(P.theme || 'dark');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const nextTheme = (document.body.dataset.theme === 'light') ? 'dark' : 'light';
    applyTheme(nextTheme);
    savePrefs({ theme: nextTheme });
  });
}

// ——————————————————————————————————————————————
// Mirror Feed (persisted; default ON to preserve prior mirrored behavior)
let mirrorFeed = (P.mirrorFeed !== undefined) ? !!P.mirrorFeed : true;
if (mirrorFeedEl) {
  mirrorFeedEl.checked = mirrorFeed;
  mirrorFeedEl.addEventListener('change', () => {
    mirrorFeed = !!mirrorFeedEl.checked;
    savePrefs({ mirrorFeed });
    reflectMirrorToPiP(); // keep Mini-PiP in sync
  });
}



// ——————————————————————————————————————————————
// Hidden video for the model
const trackerVideo = document.createElement('video');
trackerVideo.muted = true;
trackerVideo.playsInline = true;
Object.assign(trackerVideo.style, { position:'fixed', left:'-10000px', top:'0', width:'1px', height:'1px' });
document.body.appendChild(trackerVideo);

// ——————————————————————————————————————————————
// 3D Preview
const threeMount = document.getElementById('threeMount');
let preview3D = null;
let threeOn   = true;
let lastEye   = { x: 0, y: 0, z: 0 };
const label3d = (on)=> `3D Preview: ${on ? 'On' : 'Off'}`;

function ensurePreview(on){
  if (!threeMount) return;
  if (on && !preview3D){
    preview3D = makePreview3D(threeMount);
    preview3D.setScreenSize(CFG.monitorX_m, CFG.monitorY_m);
    preview3D.setEye(lastEye.x, lastEye.y, lastEye.z);
  } else if (!on && preview3D){
    preview3D.dispose?.();
    preview3D = null;
  }
}
if (toggle3dBtn){
  toggle3dBtn.textContent = label3d(threeOn);
  ensurePreview(threeOn);
  toggle3dBtn.addEventListener('click', ()=>{
    threeOn = !threeOn;
    toggle3dBtn.textContent = label3d(threeOn);
    ensurePreview(threeOn);
  });
}

// ——————————————————————————————————————————————
// Save calibration (monitor size) → refresh 3D box
if (saveCal){
  saveCal.addEventListener('click', ()=>{
    CFG = {
      ...CFG,
      monitorX_m: Number(monXEl?.value ?? CFG.monitorX_m),
      monitorY_m: Number(monYEl?.value ?? CFG.monitorY_m),
    };
    saveConfig(CFG);
    preview3D?.setScreenSize(CFG.monitorX_m, CFG.monitorY_m);
  });
}

// Binders for numeric/boolean inputs
function bindNum(el, key, onChange){
  if (!el) return;
  el.addEventListener('change', ()=>{
    const v = Number(el.value);
    CFG = { ...CFG, [key]: v };
    saveConfig(CFG);
    if (typeof onChange === 'function') onChange(v);
  });
}
// Offsets
bindNum(offXEl, 'offsetX_m');
bindNum(offYEl, 'offsetY_m');
bindNum(offZEl, 'offsetZ_m');
// Gains (update both CFG and live AXIS so tuning takes immediately)
bindNum(gainXEl, 'xGain', v => { AXIS.xGain = v; });
bindNum(gainYEl, 'yGain', v => { AXIS.yGain = v; });

// ——————————————————————————————————————————————
// Toggle dev panel (T)
let panel = null;
window.addEventListener('keydown', (e)=>{
  if (e.key.toLowerCase() !== 't') return;
  if (panel){ panel.destroy(); panel = null; }
  else {
    const host = document.createElement('div');
    document.body.appendChild(host);
    panel = mountTrackerPanel(host, { videoEl: trackerVideo });
  }
});

// ——————————————————————————————————————————————
// Overlay sizing + UV helpers
let cssW=0, cssH=0, DPR=1;
function resizeOverlay(){
  if (!overlay || !octx) return;
  const rect = overlay.getBoundingClientRect();
  cssW = rect.width; cssH = rect.height;
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  overlay.width  = Math.round(cssW * DPR);
  overlay.height = Math.round(cssH * DPR);
  octx.setTransform(DPR,0,0,DPR,0,0); // keep DPR transform active
}
if (overlay && previewEl) new ResizeObserver(resizeOverlay).observe(previewEl);
resizeOverlay();

const calcContain = (sw,sh,dw,dh)=> {
  const s = Math.min(dw/sw, dh/sh);
  const w = sw*s, h = sh*s;
  return { offX:(dw-w)/2, offY:(dh-h)/2, drawW:w, drawH:h };
};
const toUV = (px,py,map)=> {
  const u = (px - map.offX)/map.drawW;
  const v = (py - map.offY)/map.drawH;
  return { u: Math.min(1, Math.max(0,u)), v: Math.min(1, Math.max(0,v)) };
};

// ——————————————————————————————————————————————
// Axis tuning / lens helpers
const clamp01 = x => Math.max(0, Math.min(1, x));

function undistortWide(u, v, lens){
  const { u0=0.5, v0=0.5, k1=0, k2=0 } = lens || {};
  let x = u - u0, y = v - v0;
  const r2 = x*x + y*y;
  const r4 = r2*r2;
  // First-order inverse approximation
  const a1 = -k1, a2 = -k2;
  x *= (1 + a1*r2 + a2*r4);
  y *= (1 + a1*r2 + a2*r4);
  return { u: x + u0, v: y + v0 };
}

// Y axis: input v is 0..1 (top→bottom). Convert to "up" (0 bottom → 1 top),
// then apply gain/gamma around midline; optional quadratic calibration.
function tuneY(v){
  let yUp = 1 - v;
  yUp = (yUp - 0.5) * AXIS.yGain + 0.5;
  yUp = AXIS.yGamma !== 1.0 ? Math.pow(clamp01(yUp), AXIS.yGamma) : yUp;
  if (AXIS.yCalib){ const {a=0,b=1,c=0} = AXIS.yCalib; yUp = clamp01(a + b*yUp + c*yUp*yUp); }
  return AXIS.yClamp01 ? clamp01(yUp) : yUp;
}

// X axis: input u is 0..1 (left→right). Symmetric gain/gamma around 0.5,
// optional quadratic calibration. Return tuned xRight in 0..1.
function tuneX(u){
  let xRight = (u - 0.5) * AXIS.xGain + 0.5;
  xRight = AXIS.xGamma !== 1.0 ? Math.pow(clamp01(xRight), AXIS.xGamma) : xRight;
  if (AXIS.xCalib){ const {a=0,b=1,c=0} = AXIS.xCalib; xRight = clamp01(a + b*xRight + c*xRight*xRight); }
  return AXIS.xClamp01 ? clamp01(xRight) : xRight;
}

// ——————————————————————————————————————————————
// Toggles
let showWebcam = true;
let showMesh   = false;

if (toggleWebcamBtn){
  const setLbl = ()=> toggleWebcamBtn.textContent = `Webcam: ${showWebcam ? 'On' : 'Off'}`;
  setLbl();
  toggleWebcamBtn.addEventListener('click', ()=>{ showWebcam = !showWebcam; setLbl(); });
}
if (toggleMeshBtn){
  const setLbl = ()=> toggleMeshBtn.textContent = `FaceMesh: ${showMesh ? 'On' : 'Off'}`;
  setLbl();
  toggleMeshBtn.addEventListener('click', ()=>{ showMesh = !showMesh; setLbl(); });
}

// ——————————————————————————————————————————————
// FPS / perf displays
let cbLast=0, cbEMA=0, videoLast=0, videoEMA=0, inferLast=0, inferEMA=0, lastProcMs=null;
function tick(ts){
  if (!cbLast) cbLast = ts;
  const inst = 1000/Math.max(1, ts-cbLast);
  cbEMA = cbEMA ? cbEMA*0.85 + inst*0.15 : inst;
  cbLast = ts;

  if (fpsEl){
    const parts = [`cb: ${cbEMA.toFixed(1)}`];
    if (videoEMA) parts.push(`vid: ${videoEMA.toFixed(1)}`);
    if (inferEMA) parts.push(`inf: ${inferEMA.toFixed(1)}`);
    fpsEl.textContent = parts.join(' • ');
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

function onVFC(_, meta){
  if (meta && typeof meta.mediaTime === 'number'){
    const dt = meta.mediaTime - (videoLast || meta.mediaTime);
    if (dt>0){ const inst = 1/dt; videoEMA = videoEMA ? videoEMA*0.85 + inst*0.15 : inst; }
    videoLast = meta.mediaTime;
  }
  trackerVideo.requestVideoFrameCallback(onVFC);
}

// ——————————————————————————————————————————————
// Minimize/Picture In Picture

function applyMiniLayout() {
  document.querySelectorAll('.tva-panel').forEach(panel => {
    const title = (panel.querySelector('.tva-title')?.textContent || '').toLowerCase();
    const keep = title.includes('camera & overlay') || title.includes('3d preview');
    if (!keep) panel.style.display = 'none';
  });
  const previewHost = document.getElementById('preview');
  if (previewHost) previewHost.style.maxHeight = '280px';
}

// If this window was opened in mini mode, trim the UI immediately.
if (new URLSearchParams(location.search).get('mode') === 'mini') applyMiniLayout();

function openPopout() {
  const url = new URL(location.href);
  url.searchParams.set('mode', 'mini');       // child will call applyMiniLayout()
  const w = 420, h = 360;
  window.open(
    url.toString(),
    'luci_tracker_pop',
    `width=${w},height=${h},resizable=yes,menubar=no,toolbar=no,location=no,status=no`
  );
}
btnPopout?.addEventListener('click', openPopout);

let pipWindow = null;

function reflectMirrorToPiP() {
  if (!pipWindow) return;
  const vid = pipWindow.document.querySelector('video');
  if (vid) {
    const mirrorVideo = !mirrorFeed;              // <- keep in sync with draw
    vid.style.transform = mirrorVideo ? 'scaleX(-1)' : 'scaleX(1)';
  }
}

async function openDocPiP() {
  // Feature detection
  if (!('documentPictureInPicture' in window)) {
    alert('Mini PiP is only available in Chromium-based browsers.');
    return;
  }

  // Toggle behavior: if already open, close it.
  if (pipWindow && !pipWindow.closed) {
    try { pipWindow.close(); } catch {}
    pipWindow = null;
    btnDocPiP.textContent = 'Mini PiP (Chromium)';
    return;
  }

  // Require an active stream (start the tracker first)
  const stream = trackerVideo?.srcObject;
  if (!stream) {
    alert('Start the tracker first, then open Mini PiP.');
    return;
  }

  // Create the floating window
  pipWindow = await documentPictureInPicture.requestWindow({ width: 320, height: 240 });

  // Basic styles
  const style = pipWindow.document.createElement('style');
  style.textContent = `
    html,body{margin:0;padding:0;background:#000;height:100%;display:grid;place-items:center}
    video{max-width:100%;max-height:100%;object-fit:contain;transition:transform 80ms linear}
  `;
  pipWindow.document.head.appendChild(style);

  // Mirror the camera stream
  const vid = pipWindow.document.createElement('video');
  vid.autoplay = true; vid.muted = true; vid.playsInline = true;
  vid.srcObject = stream;
  vid.style.transform = mirrorFeed ? 'scaleX(-1)' : 'scaleX(1)';
  pipWindow.document.body.appendChild(vid);

  // Clean up on close
  pipWindow.addEventListener('pagehide', () => {
    pipWindow = null;
    btnDocPiP.textContent = 'Mini PiP (Chromium)';
  });

  btnDocPiP.textContent = 'Close Mini PiP';
}
btnDocPiP?.addEventListener('click', openDocPiP);

// Disable the button when unsupported (Safari/Firefox)
if (btnDocPiP && !('documentPictureInPicture' in window)) {
  btnDocPiP.disabled = true;
  btnDocPiP.title = 'Mini PiP not supported in this browser';
}

// ——————————————————————————————————————————————
// WebSocket (display-only URL + status)
const wsStatusEl = document.getElementById('wsStatus');
const wsAddrEl   = document.getElementById('wsAddr');

const setWS = (status, cls) => {
  if (!wsStatusEl) return;
  wsStatusEl.textContent = `WS: ${status}`;
  wsStatusEl.className = `badge ${cls || ''}`;
};

// Uses env if provided (VITE_LUCI_WS_URL), otherwise ws(s)://<host>:8787
const WS_URL =
  import.meta.env.VITE_LUCI_WS_URL ||
  `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.hostname}:8787`;

if (wsAddrEl) wsAddrEl.textContent = WS_URL;

// WS client instance + tiny TX pulse
let ws = null;
let txPulseTimer = null;

ws = new LuciWS(WS_URL, {
  debug: false,
  onOpen:  () => setWS('Connected', 'ok'),
  onClose: () => setWS('Reconnecting…', 'warn'),
  onError: () => setWS('Error', 'err'),
});

ws.onTx = () => {
  if (!wsStatusEl) return;
  wsStatusEl.classList.add('tx');
  clearTimeout(txPulseTimer);
  txPulseTimer = setTimeout(() => wsStatusEl.classList.remove('tx'), 120);
};

ws.connect();

// publisher loop
let latestPose = null, lastSend = 0;
const SEND_HZ = 60, SEND_INTERVAL_MS = Math.round(1000 / SEND_HZ);
(function pumpSend() {
  requestAnimationFrame(pumpSend);
  if (!latestPose || !ws) return;
  const ts = performance.now();
  if (ts - lastSend < SEND_INTERVAL_MS) return;
  lastSend = ts;
  ws.send(latestPose);
})();

// ——————————————————————————————————————————————
// Subscription: draw overlay, map to meters (+Y/Z offsets), publish pose
subscribe(({ ts, pe, procMs, raw, z_m }) => {
  // perf EMAs
  if (typeof ts === 'number') {
    if (inferLast) {
      const inst = 1000 / Math.max(1, ts - inferLast);
      inferEMA = inferEMA ? (inferEMA * 0.85 + inst * 0.15) : inst;
    }
    inferLast = ts;
  }
  if (procMs != null) lastProcMs = procMs;
  if (msEl && lastProcMs != null) msEl.textContent = `proc: ${lastProcMs.toFixed(1)} ms`;

  // drawing guards
  if (!overlay || !octx) return;

  // video→overlay mapping
  const sw  = trackerVideo.videoWidth  || 640;
  const sh  = trackerVideo.videoHeight || 360;
  const map = calcContain(sw, sh, cssW, cssH);

 // ——— Background + overlays ——————————————————————————————
octx.setTransform(DPR, 0, 0, DPR, 0, 0);
octx.clearRect(0, 0, cssW, cssH);

// Extra flip for the preview image itself (invert once vs. the logic flip)
const mirrorVideo = !mirrorFeed;

// draw webcam
if (showWebcam && trackerVideo?.readyState >= 2) {
  octx.save();
  if (mirrorVideo) {
    // place origin at top-right of crop box and flip X
    octx.translate(map.offX + map.drawW, map.offY);
    octx.scale(-1, 1);
  } else {
    octx.translate(map.offX, map.offY);
  }
  octx.drawImage(trackerVideo, 0, 0, sw, sh, 0, 0, map.drawW, map.drawH);
  octx.restore();
} else {
  octx.fillStyle = '#000';
  octx.fillRect(0, 0, cssW, cssH);
}

// crop box
octx.strokeStyle = 'rgba(255,177,78,0.45)';
octx.lineWidth = 1;
octx.strokeRect(map.offX, map.offY, map.drawW, map.drawH);

// facemesh: match the VIDEO orientation (not the logic flip)
if (showMesh && raw?.faceLandmarks?.length) {
  const lmks = raw.faceLandmarks[0];
  octx.fillStyle = '#ffb14e';
  for (let i = 0; i < lmks.length; i++) {
    const p  = lmks[i];
    const nx = mirrorVideo ? (1 - p.x) : p.x;
    const x  = map.offX + nx * map.drawW;
    const y  = map.offY + p.y * map.drawH;
    octx.beginPath(); octx.arc(x, y, 1.5, 0, Math.PI * 2); octx.fill();
  }
}

// eye dot + mapping (keep using logical flip for downstream math)
if (!pe) {
  if (readoutEl) readoutEl.textContent = 'screen (m): —  Z: —  uv: —';
  return;
}

// logical flip used for uv/meters/WS (unchanged)
const peX = mirrorFeed ? (1 - pe.x) : pe.x;
const peY = pe.y;

// draw eye indicator
const px = map.offX + peX * map.drawW;
const py = map.offY + peY * map.drawH;
octx.beginPath(); octx.arc(px, py, 4, 0, Math.PI * 2);
octx.fillStyle = '#ffb14e'; octx.fill();

// uv now reflect the logical flip (used downstream)
const { u, v } = toUV(px, py, map);



  // (1) optional wide-angle undistort
  let u1 = u, v1 = v;
  if (AXIS.wideAngleMode) {
    const uv2 = undistortWide(u1, v1, AXIS.lens);
    u1 = clamp01(uv2.u); v1 = clamp01(uv2.v);
  }

  // (2) axis tuning (gain/gamma/calib live inside tuneX/tuneY)
  const xRight = tuneX(u1); // 0..1 (left→right)
  const yUp    = tuneY(v1); // 0..1 (bottom→top)

  // (3) map to meters (center-origin) + apply user offsets (meters)
  const x_m = (xRight - 0.5) * CFG.monitorX_m + (CFG.offsetX_m || 0);
  const y_m = (yUp    - 0.5) * CFG.monitorY_m + (CFG.offsetY_m || 0);
  const z_m_out = (z_m ?? CFG.headInitZ_m) + (CFG.offsetZ_m || 0);

  // readout
  if (readoutEl) {
    readoutEl.textContent =
      `screen (m): x=${x_m.toFixed(3)}  y=${y_m.toFixed(3)}  ` +
      `Z (m): ${z_m_out.toFixed(3)}  ` +
      `uv: u=${xRight.toFixed(4)} v=${(1 - yUp).toFixed(4)}`;
  }

  // update 3D preview + next WS payload
  lastEye = { x: x_m, y: y_m, z: z_m_out };
  preview3D?.setEye(x_m, y_m, z_m_out);

  const camW = trackerVideo.videoWidth  || 0;
  const camH = trackerVideo.videoHeight || 0;
  latestPose = {
    type: 'pose', v: 1, ts: Date.now(),
    eyeMode: (eyeSel?.value || 'center'),
    screen: { x: x_m, y: y_m },         // meters, center-origin (+offsets)
    uv:     { u: xRight, v: 1 - yUp },  // 0..1, origin at bottom-left
    head:   { z: z_m_out },
    camera: { width: camW, height: camH },
    perf: {
      infer_fps: Number.isFinite(inferEMA) ? Number(inferEMA.toFixed(1)) : null,
      video_fps: Number.isFinite(videoEMA) ? Number(videoEMA.toFixed(1)) : null,
    },
  };
});

// ——————————————————————————————————————————————
// Start/Stop
let vfcStarted = false;

async function start(){
  statusEl && (statusEl.textContent = 'starting…');
  startBtn?.setAttribute('disabled','true');
  stopBtn?.setAttribute('disabled','true');

  const delegate = (delegateEl?.value || 'GPU');
  const resKey   = (resSel?.value || '1280x720');
  const { width, height } = RESOLUTIONS[resKey] || { width:1280, height:720 };

  try{
    await startTracker({ delegate, video: trackerVideo, width, height, initZ_m: CFG.headInitZ_m });

    if (eyeSel?.value) await setEyeMode(eyeSel.value);

    trackerVideo.addEventListener('loadedmetadata', ()=>{
      actualEl && (actualEl.textContent = actualBadge(trackerVideo));
    }, { once:true });

    if (!vfcStarted){
      vfcStarted = true;
      trackerVideo.requestVideoFrameCallback(onVFC);
    }

    if (cameraSel){
      const devices = await getDevices();
      cameraSel.innerHTML = devices.map(d =>
        `<option value="${d.deviceId}">${d.label || 'Camera'}</option>`).join('');
      const targetId = P.cameraId && devices.find(d => d.deviceId === P.cameraId)
        ? P.cameraId
        : (cameraSel.value || devices[0]?.deviceId || '');
      if (targetId) cameraSel.value = targetId;
    }

    actualEl && (actualEl.textContent = actualBadge(trackerVideo));
    statusEl && (statusEl.textContent = 'running');
  } catch (err){
    console.error('start() failed:', err);
    statusEl && (statusEl.textContent = 'error starting (see console)');
  } finally {
    startBtn?.removeAttribute('disabled');
    stopBtn?.removeAttribute('disabled');
  }
}

async function stop(){
  statusEl && (statusEl.textContent = 'stopping…');
  startBtn?.setAttribute('disabled','true');
  stopBtn?.setAttribute('disabled','true');
  try{
    await stopTracker();
    if (overlay && octx) octx.clearRect(0,0,overlay.width, overlay.height);
    statusEl && (statusEl.textContent = 'stopped');
  } catch (err){
    console.error('stop() failed:', err);
    statusEl && (statusEl.textContent = 'error stopping (see console)');
  } finally {
    startBtn?.removeAttribute('disabled');
    stopBtn?.removeAttribute('disabled');
  }
}

// ——————————————————————————————————————————————
// Controls
startBtn?.addEventListener('click', start);
stopBtn?.addEventListener('click', stop);
window.addEventListener('pagehide', ()=> stop());

cameraSel?.addEventListener('change', async ()=>{
  savePrefs({ cameraId: cameraSel.value });
  statusEl && (statusEl.textContent = 'reconfiguring…');
  startBtn?.setAttribute('disabled','true'); stopBtn?.setAttribute('disabled','true');
  try{
    await setCameraDevice(cameraSel.value);
    actualEl && (actualEl.textContent = actualBadge(trackerVideo));
    statusEl && (statusEl.textContent = 'running');
  } catch (e){
    console.error('camera change failed:', e);
    statusEl && (statusEl.textContent = 'camera error');
  } finally {
    startBtn?.removeAttribute('disabled'); stopBtn?.removeAttribute('disabled');
  }
});

resSel?.addEventListener('change', async ()=>{
  savePrefs({ resKey: resSel.value });
  statusEl && (statusEl.textContent = 'reconfiguring…');
  startBtn?.setAttribute('disabled','true'); stopBtn?.setAttribute('disabled','true');
  try{
    const { width, height } = RESOLUTIONS[resSel.value] || { width:1280, height:720 };
    await setResolution(width, height);
    actualEl && (actualEl.textContent = actualBadge(trackerVideo));
    statusEl && (statusEl.textContent = 'running');
  } catch (e){
    console.error('resolution change failed:', e);
    statusEl && (statusEl.textContent = 'resolution error');
  } finally {
    startBtn?.removeAttribute('disabled'); stopBtn?.removeAttribute('disabled');
  }
});

eyeSel?.addEventListener('change', async ()=>{
  savePrefs({ eye: eyeSel.value });
  try { await setEyeMode(eyeSel.value); } catch {}
});

delegateEl?.addEventListener('change', async ()=>{
  savePrefs({ delegate: delegateEl.value });
  const next = delegateEl.value || 'GPU';
  if (!next) return;
  statusEl && (statusEl.textContent = 'switching delegate…');
  startBtn?.setAttribute('disabled','true'); stopBtn?.setAttribute('disabled','true');
  try{
    await setDelegate(next);
    statusEl && (statusEl.textContent = 'running');
  } catch (e){
    console.error('delegate change failed:', e);
    statusEl && (statusEl.textContent = 'delegate error');
  } finally {
    startBtn?.removeAttribute('disabled'); stopBtn?.removeAttribute('disabled');
  }
});

// ——————————————————————————————————————————————
// Auto-start
start();
