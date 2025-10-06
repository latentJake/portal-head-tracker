# CONFIGURATION

This document lists the **user‑facing controls** and relevant hidden defaults used by the tracker.

## Calibration group (UI)

| Setting         | Type   | Default | Purpose |
|-----------------|--------|---------|---------|
| **Monitor X (m)** | number | `0.59`  | Physical screen width in meters. |
| **Monitor Y (m)** | number | `0.34`  | Physical screen height in meters. |
| **X Offset (m)**  | number | `0.00`  | Adds a horizontal bias in meters (up positive) *after* center‑origin mapping. |
| **Y Offset (m)**  | number | `0.00`  | Adds a vertical bias in meters (up positive) *after* center‑origin mapping. |
| **Z Offset (m)**  | number | `0.00`  | Adds a depth bias in meters (**+z toward the user**). |
| **X Gain**        | number | `1.00`  | Horizontal sensitivity; unitless multiplier around midline. |
| **Y Gain**        | number | `1.00`  | Vertical sensitivity; unitless multiplier around midline. |

> These values are persisted in localStorage and used immediately by the tracker.

## Device & Quality

| Setting   | Type     | Default | Notes |
|-----------|----------|---------|-------|
| **Camera**    | select   | (first device) | The capture device. |
| **Resolution**| select   | `1280×720`      | Higher isn’t always better; choose what’s stable for your machine. |
| **Eye**       | select   | `center`        | `left`, `center`, or `right`. |
| **Delegate**  | select   | `GPU`           | Switch to `CPU` on very old GPUs or for debug. |

## Hidden defaults (kept, not exposed)

| Key             | Default | Purpose |
|-----------------|---------|---------|
| `headInitZ_m`   | `0.6`   | Startup fallback for depth when landmarks are not ready. |
| `headInitY_m`   | `0.1`   | Startup fallback for vertical eye height. |
| `zEstimator`    | `hybrid`| Strategy for estimating z (io/nose/hybrid). |
| `zAlpha`        | `0.08`  | Smoothing factor for z estimation. |
| `zClampMin_m`   | `0.15`  | Depth lower clamp. |
| `zClampMax_m`   | `2.5`   | Depth upper clamp. |
| `wideAngleMode` | `true`  | Enable radial undistortion pass for wide‑FOV webcams. |
| `lens.k1/k2,u0,v0` | `-0.22,0,0.5,0.5` | Radial correction parameters. | 
| `xCalib/yCalib` | `null`  | Optional quadratic fine‑tuning maps (not implemented). |

## Environment variables

| Name | Default | Meaning |
|------|---------|---------|
| `VITE_LUCI_WS_URL` | `ws://<host>:8787` | The WebSocket endpoint to publish pose packets. |
