// src/config.js
const KEY = 'luci.config.v1';

export const DEFAULTS = {
  delegate: 'GPU',

  // — Physical screen size (meters) —
  monitorX_m: 0.59,
  monitorY_m: 0.34,

  // — User calibration (meters) —
  // Exposed in UI
  offsetX_m: 0.0,
  offsetY_m: 0.3,
  offsetZ_m: 0.0,

  // — Initial eye pose fallbacks (meters)
  // Kept for renderer-side startup/neutral behavior; not exposed in UI
  headInitZ_m: 0.6,
  headInitY_m: 0.1,

  // — Z estimation (kept; not exposed yet) —
  zEstimator: 'hybrid', // 'io' | 'nose' | 'hybrid'
  zAlpha: 0.08,
  zClampMin_m: 0.15,
  zClampMax_m: 2.5,

  // — Y axis tuning —
  yGain: 1.00,      // >1 = more vertical sensitivity
  yGamma: 1.00,     // 1.0 = linear
  yClamp01: false,  // clamp normalized Y after tuning

  // — X axis tuning —
  xGain: 1.50,      // >1 = more horizontal sensitivity
  xGamma: 1.00,
  xClamp01: false,

  // — Wide-angle lens support (shared by X & Y) —
  wideAngleMode: true,
  lens: {
    // principal point (normalized 0..1)
    u0: 0.5,
    v0: 0.5,
    // radial distortion (barrel): r_d = r * (1 + k1 r^2 + k2 r^4)
    // inverse approx; negative k1 corrects barrel
    k1: -0.22,
    k2: 0.0
  },

  // — Optional per-axis quadratic calibration —
  // y' = a + b*y + c*y^2  (and same for x')
  yCalib: null, // e.g., { a:0, b:1, c:0 }
  xCalib: null
};

export function loadConfig(){
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
  catch { return { ...DEFAULTS }; }
}

export function saveConfig(cfg){
  localStorage.setItem(KEY, JSON.stringify(cfg));
}
