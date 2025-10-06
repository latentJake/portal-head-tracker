// src/net/ws-client.js
export class LuciWS {
  /**
   * @param {string} url
   * @param {{
   *   debug?: boolean,
   *   heartbeatSec?: number,
   *   onOpen?: () => void,
   *   onClose?: () => void,
   *   onError?: (e: unknown) => void,
   *   onMessage?: (msg: any) => void
   * }} opts
   */
  constructor(
    url,
    {
      debug = false,
      heartbeatSec = 15,
      onOpen = null,
      onClose = null,
      onError = null,
      onMessage = null,
    } = {}
  ) {
    this.url = url;
    this.debug = debug;
    this.heartbeatSec = heartbeatSec;

    // external callbacks
    this.onOpenCb = onOpen;
    this.onCloseCb = onClose;
    this.onErrorCb = onError;
    this.onMessageCb = onMessage;

    // internal
    this.ws = null;
    this.connected = false;

    this.heartbeatTimer = null;
    this.reconnectTimer = null;
    this.backoff = 1000;   // start 1s
    this.maxBackoff = 8000; // cap 8s

    // optional TX pulse hook: set from the app (e.g., main.js)
    this.onTx = null;
  }

  // ---------- utils ----------
  log(...a) { if (this.debug) console.log('[luci-ws]', ...a); }
  isOpen() { return this.ws?.readyState === WebSocket.OPEN; }

  updateUrl(nextUrl) {
    if (this.url === nextUrl) return;
    this.url = nextUrl;
    // if connected, reconnect to the new URL
    if (this.ws) {
      this.close();
      this.connect();
    }
  }

  // ---------- lifecycle ----------
  connect() {
    this.clearReconnect();

    try {
      this.ws = new WebSocket(this.url);
    } catch (e) {
      this.log('WebSocket ctor failed:', e);
      this.scheduleReconnect();
      return;
    }

    // bind once so we can remove cleanly later if needed
    this._boundOpen = this._boundOpen || (ev => this.onOpen(ev));
    this._boundClose = this._boundClose || (ev => this.onClose(ev));
    this._boundError = this._boundError || (ev => this.onError(ev));
    this._boundMessage = this._boundMessage || (ev => this.onMessage(ev));

    this.ws.addEventListener('open', this._boundOpen);
    this.ws.addEventListener('close', this._boundClose);
    this.ws.addEventListener('error', this._boundError);
    this.ws.addEventListener('message', this._boundMessage);
  }

  onOpen = () => {
    this.connected = true;
    this.log('connected');
    this.backoff = 1000; // reset backoff
    this.startHeartbeat();

    // one hello
    this.send({ type: 'hello', v: 1, ts: Date.now(), agent: 'luci-tracker' });

    if (this.onOpenCb) try { this.onOpenCb(); } catch {}
  };

  onClose = () => {
    this.log('closed');
    this.connected = false;
    this.stopHeartbeat();
    if (this.onCloseCb) try { this.onCloseCb(); } catch {}
    this.scheduleReconnect();
  };

  onError = (e) => {
    this.log('error', e?.message || e);
    if (this.onErrorCb) try { this.onErrorCb(e); } catch {}
    // let onClose handle the reconnect
  };

  onMessage = (evt) => {
    // If the server sends JSON, try to parse; otherwise pass raw text
    const raw = evt?.data;
    let msg = raw;
    if (typeof raw === 'string') {
      try { msg = JSON.parse(raw); } catch { /* non-JSON; pass as-is */ }
    }
    if (this.onMessageCb) try { this.onMessageCb(msg); } catch {}
    else this.log('rx', msg);
  };

  // ---------- reconnect / heartbeat ----------
  scheduleReconnect() {
    this.clearReconnect();
    const delay = this.backoff + Math.floor(Math.random() * 200); // tiny jitter
    this.reconnectTimer = setTimeout(() => this.connect(), delay);
    this.backoff = Math.min(this.maxBackoff, Math.round(this.backoff * 1.7));
  }

  clearReconnect() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  startHeartbeat() {
    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      if (this.isOpen()) {
        try {
          this.ws.send(JSON.stringify({ type: 'ping', ts: Date.now() }));
        } catch (e) {
          this.log('heartbeat send failed:', e);
        }
      }
    }, this.heartbeatSec * 1000);
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  // ---------- API ----------
  send(obj) {
    const str = JSON.stringify(obj);
    if (this.isOpen()) {
      try {
        this.ws.send(str);
        if (this.onTx) this.onTx();
        return true;
      } catch (e) {
        this.log('send failed:', e);
      }
    }
    return false;
  }

  close() {
    this.stopHeartbeat();
    this.clearReconnect();
    try { this.ws?.close(); } catch {}
    this.ws = null;
    this.connected = false;
  }
}
