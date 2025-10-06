// tools/ws-server.js (ESM)
import { WebSocketServer } from 'ws';

const PORT = process.env.LUCI_WS_PORT ? Number(process.env.LUCI_WS_PORT) : 8787;
const wss  = new WebSocketServer({ port: PORT });

let clients = new Set();
let lastPose = null;

function broadcast(obj, except=null) {
  const s = JSON.stringify(obj);
  for (const ws of clients) {
    if (ws.readyState === ws.OPEN && ws !== except) {
      try { ws.send(s); } catch {}
    }
  }
}

function safeParse(data) {
  try { return JSON.parse(data); } catch { return null; }
}

wss.on('connection', (ws, req) => {
  clients.add(ws);
  console.log(`[ws] connected ${req.socket.remoteAddress} | clients=${clients.size}`);

  // optional: send last known pose to new client
  if (lastPose) {
    try { ws.send(JSON.stringify(lastPose)); } catch {}
  }

  ws.on('message', (data) => {
    const msg = safeParse(data);
    if (!msg) return;

    // Forward pose v1 to all clients
    if (msg.type === 'pose' && msg.v === 1) {
      lastPose = msg;
      broadcast(msg, /*except*/ null);
    }
    // You can handle other message types here later (hello/ping/etc)
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log(`[ws] closed | clients=${clients.size}`);
  });
});

console.log(`[ws] listening on ws://localhost:${PORT}`);
