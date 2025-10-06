// src/ui/tracker-panel.js
import { subscribe, getPose } from '../core/pose-store.js';

export function mountTrackerPanel(root, { videoEl }){
  // panel shell
  root.innerHTML = `
    <div id="trackerPanel" style="position:fixed; right:12px; bottom:12px; width:320px; background:#111; border:1px solid #333; border-radius:12px; z-index:9999">
      <div style="display:flex; align-items:center; justify-content:space-between; padding:6px 8px; border-bottom:1px solid #222">
        <strong>Face Tracker</strong>
        <button id="trkClose" aria-label="close">✕</button>
      </div>
      <div style="position:relative; aspect-ratio:16/9">
        <video id="trkVideo" style="position:absolute; inset:0; width:100%; height:100%; object-fit:contain; background:#000" playsinline muted></video>
        <canvas id="trkOverlay" style="position:absolute; inset:0; width:100%; height:100%"></canvas>
      </div>
      <pre id="trkReadout" style="margin:8px; white-space:pre-wrap"></pre>
    </div>
  `;

  // Wire provided video element into the panel (optional UI echo)
  const panelVideo = root.querySelector('#trkVideo');
  if (videoEl) {
    // Show the same MediaStream; it's safe to attach to multiple <video> by using the same stream object
    panelVideo.srcObject = videoEl.srcObject;
    panelVideo.play();
  }

  const overlay = root.querySelector('#trkOverlay');
  const ctx = overlay.getContext('2d');
  function resize(){
    const r = overlay.getBoundingClientRect();
    overlay.width = Math.round(r.width * Math.min(devicePixelRatio||1,2));
    overlay.height= Math.round(r.height* Math.min(devicePixelRatio||1,2));
    ctx.setTransform(overlay.width/r.width,0,0,overlay.height/r.height,0,0);
  }
  new ResizeObserver(resize).observe(overlay.parentElement); resize();

  // draw loop (subscribe to store)
  const unsub = subscribe(({ pe })=>{
    ctx.clearRect(0,0,overlay.width, overlay.height);
    if (!pe) return;
    const r = overlay.getBoundingClientRect();
    ctx.beginPath(); ctx.arc(pe.x*r.width, pe.y*r.height, 6, 0, Math.PI*2);
    ctx.fillStyle = '#ffb14e'; ctx.fill();
    root.querySelector('#trkReadout').textContent = `Pe: ${pe.x.toFixed(4)}, ${pe.y.toFixed(4)}`;
  });

  root.querySelector('#trkClose').onclick = ()=> root.firstElementChild.style.display = 'none';

  return { destroy(){ unsub(); root.innerHTML=''; } };
}
