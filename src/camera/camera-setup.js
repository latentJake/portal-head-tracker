// src/camera/camera-setup.js
let stream = null;

export const RESOLUTIONS = {
  '640x480':  { width: 640,  height: 480  },
  '1280x720': { width: 1280, height: 720 },
  '1920x1080':{ width: 1920, height: 1080 }
};

export async function getDevices() {
  try {
    const t = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    t.getTracks().forEach(tr => tr.stop());
  } catch {}
  const all = await navigator.mediaDevices.enumerateDevices();
  return all.filter(d => d.kind === 'videoinput');
}

export async function startStream({ deviceId, width, height }) {
  if (stream) stopStream();
  const constraints = {
    video: {
      deviceId: deviceId ? { exact: deviceId } : undefined,
      frameRate: { ideal: 60, max: 60 },
      ...(width && height ? { width: { ideal: width }, height: { ideal: height } } : {}),
      resizeMode: 'none',
      facingMode: 'user'
    },
    audio: false
  };
  stream = await navigator.mediaDevices.getUserMedia(constraints);
  return stream;
}

export async function attach(videoEl, s = stream) {
  videoEl.srcObject = s;
  await videoEl.play();
}

export function stopStream() {
  if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
}

export function currentStream() { return stream; }

export function actualBadge(videoEl) {
  const tr = stream?.getVideoTracks?.()[0];
  const s = tr?.getSettings?.() || {};
  const w = s.width || videoEl.videoWidth || 0;
  const h = s.height || videoEl.videoHeight || 0;
  const fps = s.frameRate ? Math.round(s.frameRate) : '—';
  return w && h ? `Actual: ${w}×${h} @ ${fps}` : 'Actual: —';
}

export function currentSettings() {
  const tr = stream?.getVideoTracks?.()[0];
  return tr?.getSettings?.() || {};
}
