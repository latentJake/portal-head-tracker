# SERVER (Headpose WebSocket)

A tiny WebSocket relay that receives **pose[v1]** packets from the **Luci Face Tracker** and broadcasts
them to any connected renderers (e.g., the Three.js PortalRenderer).

> If you already have this running in your repo, this doc captures the usage and common pitfalls.

---

## TL;DR

Open **another terminal** in the tracker repo and run:

```bash
npm run ws
```

By default the server listens on **ws://0.0.0.0:8787**.  
The tracker publishes to `VITE_LUCI_WS_URL` (defaults to `ws://<host>:8787`).

---

## Prerequisites

- Node 18+ (LTS recommended)
- Port **8787** open/unused on your machine
- Local network clients allowed (optional, for multi-device demos)

---

## Dev flow (3 terminals)

**Terminal A — Tracker UI**

```bash
npm run dev
# opens the face tracker at http://localhost:5173 (vite default)
```

**Terminal B — Headpose server**

```bash
npm run ws
# starts the WebSocket relay on ws://0.0.0.0:8787
```

**Terminal C — Renderer (e.g., PortalRenderer)**

```bash
# in your renderer project
npm run dev
# make sure the renderer connects to ws://<tracker-host>:8787
```

> On a single machine, `ws://localhost:8787` is fine. For a second device, use the LAN IP (e.g., `ws://192.168.1.22:8787`).

---

## Config

### Tracker → Server

- The tracker sends to `VITE_LUCI_WS_URL`:
  - **Dev**: `VITE_LUCI_WS_URL=ws://localhost:8787 npm run dev`
  - **Build**: bake it at build time `VITE_LUCI_WS_URL=ws://192.168.1.22:8787 npm run build`

### Server port

- Default: **8787**
- Change via `PORT` env (if your server script supports it), e.g.:
  ```bash
  PORT=9001 npm run ws
  ```

---

## Protocol (what travels over WS)

The server simply forwards JSON payloads (no transformation). The tracker publishes **pose v1**:

```json
{
  "type": "pose",
  "v": 1,
  "ts": 1735948123456,
  "eyeMode": "center",
  "screen": { "x": 0.012, "y": -0.004 },
  "uv":     { "u": 0.53,  "v": 0.47 },
  "head":   { "z": 0.64 },
  "camera": { "width": 1280, "height": 720 },
  "perf":   { "infer_fps": 59.7, "video_fps": 60.0 }
}
```

Renderers should subscribe and consume the latest packets as they arrive (typ. ~60 Hz).

---

## Quick test (no renderer)

Use **wscat** or the built-in DevTools console to ensure the relay works.

### With wscat
```bash
npm i -g wscat
wscat -c ws://localhost:8787
# you should see incoming JSON frames once the tracker is running
```

### With DevTools
Open the browser console on any page and run:
```js
const s = new WebSocket('ws://localhost:8787');
s.onmessage = e => console.log('pose:', JSON.parse(e.data));
```

---

## Reference implementation (optional)

Your repo likely already includes a server script (e.g., `server/ws.js`). This minimal example shows the intended behavior:

```js
// server/ws.js (reference)
import { WebSocketServer } from 'ws';

const PORT = process.env.PORT || 8787;
const wss = new WebSocketServer({ port: PORT });
console.log(`[WS] listening on ws://0.0.0.0:${PORT}`);

wss.on('connection', (ws) => {
  ws.isAlive = true;
  ws.on('pong', () => ws.isAlive = true);
  ws.on('message', (data) => {
    // naive broadcast to all clients except the sender
    for (const client of wss.clients) {
      if (client !== ws && client.readyState === 1) {
        client.send(data);
      }
    }
  });
});

// simple heartbeat to drop dead peers
setInterval(() => {
  for (const ws of wss.clients) {
    if (!ws.isAlive) return ws.terminate();
    ws.isAlive = false; ws.ping();
  }
}, 10000);
```

Add an npm script:
```json
{
  "scripts": {
    "ws": "node server/ws.js"
  }
}
```

---

## Troubleshooting

- **Port already in use**  
  Something else is bound to 8787. Either stop it or run `PORT=9001 npm run ws` and update `VITE_LUCI_WS_URL`.

- **No incoming frames**  
  Double-check the tracker’s WS URL in the UI or build env. Ensure the tracker is actually running and permissions granted.

- **Other device can’t connect**  
  Use the host’s LAN IP instead of `localhost`. Confirm firewall rules allow inbound on the chosen port.

- **Renderer stutters**  
  Verify only one tracker is publishing. Consider lowering camera resolution or switching the delegate to `GPU`.

- **Need TLS (wss://)**  
  Terminate TLS at a reverse proxy (Caddy/NGINX) and forward to the local WS:
  `wss://yourdomain → http://127.0.0.1:8787`.

---

## Notes

- The relay is intentionally dumb: last-write-wins and broadcast to all. If you need rooms, auth, or history,
  extend it in your own server or proxy layer.
