# Luci Face Tracker (Local Model)

A lightweight, browser‑based face tracker designed to drive off-axis/portal-style rendering.  Utilizes Mediapipe's Face Landmarker Model for video processing to coordinate output.  It outputs a pose packet over WebSocket so any renderer (Three.js, Unreal, etc.) can consume the same data.

## Quick start

### Requirements
- Node 18+ (or any modern LTS)
- A webcam
- A Chromium‑based browser for **Mini PiP** (Chrome, Edge). Non‑Chromium can use **Pop‑out Window**.

### Install & run
```bash
npm install
npm run dev
# open the printed localhost URL
npm run ws
# starts the websocket server
npm run dev:all 
#launches Application and Websocket Server Simultaneously

### Build
```bash
npm run build
# dist/ contains a static site you can host anywhere
```

### Configure WebSocket target (optional)
By default, the tracker sends to `ws://<host>:8787`. Override with an env var at build time:

```bash
# example:
VITE_LUCI_WS_URL=ws://localhost:8787 npm run dev
```
## Using the app

1) **Start** the session (grant camera permission).  
2) Pick **Camera**, **Resolution**, **Eye** (left/center/right), and **Delegate** (GPU/CPU).  
3) In **Calibration**:
   - Enter **Monitor X/Y (m)** (physical screen size).
   - Adjust **Y Offset (m)** so your neutral eyeline matches the screen’s midline.
   - Adjust **Z Offset (m)** to match a comfortable neutral distance.
   - Tune **X Gain** / **Y Gain** for feel (unitless).
4) Watch the **3D Preview**: the orange sphere (eye) should move realistically relative to the screen pane.
5) Optional: click **Mini PiP (Chromium)** or **Pop‑out Window** to keep the tracker visible while you work elsewhere.

## Key concepts

- **Coordinate convention**
  - Screen plane: **z = 0**.
  - Eye `pe = (x, y, z)` with **+z toward user**; rendered space is **−z**.
  - `screen.{x,y}` are **meters relative to the screen center** (right/up positive).
  - `uv.{u,v}` are normalized **0..1** with origin at **bottom‑left** (for overlays / debugging).

- **What’s exposed**
  - See [`docs/CONFIGURATION.md`](./CONFIGURATION.md) for every user‑facing knob.

- **What gets sent**
  - See [`docs/PROTOCOL.md`](./PROTOCOL.md) for the `pose[v1]` packet.

- **How it’s built**
  - See [`docs/ARCHITECTURE.md`](./ARCHITECTURE.md) for modules and data flow.

---

## Common issues & fixes

- **Tracker stops when minimized**  
  Use **Mini PiP (Chromium)** or the **Pop‑out Window**. On any browser you can drag the pop‑out to a corner
  or second monitor. Consider enabling a Screen Wake Lock to keep the display awake.

- **Eyeline is too high/low**  
  Increase/decrease **Y Offset (m)** until the preview matches reality. Gains should stay near 1.0;
  they change sensitivity, not bias.

  **My Webcam isn't centered**  
  Increase/decrease **X Offset (m)** until the preview matches reality. Gains should stay near 1.0;
  they change sensitivity, not bias.

- **Depth feels wrong**  
  Adjust **Z Offset (m)** for your neutral seated distance. If depth wiggles, lower the resolution or switch the delegate to **GPU**.

- **Mirrored video confusion**  
  If your output looks flipped on the X-axis we provided a mirror toggle to compensate.

