# ARCHITECTURE

This is a high‑level tour of the main modules and the data flow.

```
camera → tracker‑service (MediaPipe) → pose‑store.subscribe()
     → axis tuning (gain/gamma + optional undistort)
     → center‑origin meters + offsets
     → preview‑3D (visual) & WebSocket packet (v1)
```

## Modules

- **`src/main.js`** — App entry: wires UI, receives pose updates, applies tuning/offsets, updates the
  3D preview and emits the v1 packet.
- **`src/config.js`** — Loads/saves defaults and persisted calibration (localStorage).
- **`src/core/tracker-service.js`** — MediaPipe graph bootstrap and runtime (delegates, eye mode, resolution).
- **`src/core/pose-store.js`** — A tiny pub/sub store that emits `{ pe, raw, z_m, ts, procMs }` to subscribers.
- **`src/ui/preview-3d.js`** — Three.js mini scene: **screen plane at z=0**, center‑origin scaling, eye sphere.
- **`src/camera/camera-setup.js`** — Device enumeration, constraints, resolution helpers; `actualBadge()`.
- **`src/net/ws-client.js`** — Reconnect‑friendly WebSocket client with a small TX pulse indicator.
- **`src/ui/tracker-panel.js`** — Optional developer overlay (toggle with **T**).

## Data flow details

1. **Capture** — `camera-setup` selects a device & resolution and feeds a hidden `<video>`.
2. **Inference** — `tracker-service` runs Face Landmarker and publishes a `pe` (normalized eye point) plus raw landmarks.
3. **Tuning** — `main.js` applies optional **wide‑angle undistort** and **axis gain/gamma** (via `tuneX/tuneY`).
4. **Mapping** — We convert to **meters relative to screen center** and add **Y/Z offsets**.
5. **Preview & Publish** — The preview shows the eye vs screen; a **v1 packet** is sent at ~60Hz to `VITE_LUCI_WS_URL`.

## Minimize Window helpers
- **Document Picture‑in‑Picture (Chromium)** — A floating always‑on‑top mini window showing the camera stream.
- **Pop‑out Window** — Opens a minimal, resizable second window (`?mode=mini`) that runs the tracker so it stays “visible” to the browser.
- **Wake Lock** — Optional screen wake lock to avoid OS sleep during demos.
