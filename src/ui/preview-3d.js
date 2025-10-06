// src/ui/preview-3d.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function makePreview3D(mountEl) {
  // container must be position:relative to place overlay nicely
  if (getComputedStyle(mountEl).position === 'static') {
    mountEl.style.position = 'relative';
  }
  // ensure the canvas will visually fill the mount
  mountEl.style.display = 'block';

  // renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  // let Three set the <canvas> style size to match mount (fills container)
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  mountEl.appendChild(renderer.domElement);

  // scene & camera
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0b0b);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 50);
  camera.position.set(0.7, 0.5, 1.6);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // --- TVA amber palette ---
  const AMBER = 0xffb14e;            // bright lines / accents
  const AMBER_DIM = 0x7a4c1c;        // subdued grid lines

  // helpers (TVA-styled)
  const grid = new THREE.GridHelper(2.5, 25, AMBER, AMBER_DIM);
  grid.material.opacity = 0.35;
  grid.material.transparent = true;
  grid.position.set(0, -0.0005, 0);
  scene.add(grid);

  const axes = new THREE.AxesHelper(0.25);
  // dim the axes so the amber elements pop
  axes.material.opacity = 0.75;
  axes.material.transparent = true;
  scene.add(axes);

  // monitor (flat plane at z=0)
  const monitorGeo  = new THREE.PlaneGeometry(1, 1);
  const monitorFill = new THREE.MeshBasicMaterial({
    color: AMBER,
    transparent: true,
    opacity: 0.22,
    side: THREE.DoubleSide
  });
  const monitor = new THREE.Mesh(monitorGeo, monitorFill);
  scene.add(monitor);

  const monitorEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(monitorGeo),
    new THREE.LineBasicMaterial({ color: AMBER })
  );
  monitor.add(monitorEdges);

  // eye (amber sphere)
  const eye = new THREE.Mesh(
    new THREE.SphereGeometry(0.03, 32, 24),
    new THREE.MeshBasicMaterial({ color: AMBER })
  );
  scene.add(eye);

  // tiny overlay tooltip
  const tip = document.createElement('div');
  tip.textContent = 'Left Click: Rotate | Right Click: Pan | Scroll: Zoom';
  Object.assign(tip.style, {
    position: 'absolute',
    left: '8px',
    bottom: '8px',
    padding: '6px 8px',
    font: '12px/1.2 system-ui, sans-serif',
    color: '#ffb14e',
    border: '1px solid #333',
    borderRadius: '8px',
    background: 'rgba(255,177,78,0.10)',
    pointerEvents: 'none',
    userSelect: 'none'
  });
  mountEl.appendChild(tip);

  // sizing
  function resize() {
    // fill the available content box of the mount
    const w = mountEl.clientWidth || 640;
    const h = mountEl.clientHeight || 360;
    // set drawing buffer AND update the <canvas> CSS size
    renderer.setSize(w, h, true);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(mountEl);
  window.addEventListener('resize', resize);
  resize();

  // render loop
  let raf = 0;
  function loop() {
    raf = requestAnimationFrame(loop);
    controls.update();
    renderer.render(scene, camera);
  }
  loop();

  // API
  return {
    setScreenSize(width_m, height_m) {
      monitor.scale.set(width_m, height_m, 1);
      monitor.position.set(0, height_m * 0.5, 0);
    },
    setEye(x_m, y_m, z_m) {
      eye.position.set(x_m, y_m, z_m);
    },
    dispose() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', resize);
      renderer.dispose();
      try { mountEl.removeChild(renderer.domElement); } catch {}
      try { mountEl.removeChild(tip); } catch {}
    }
  };
}
