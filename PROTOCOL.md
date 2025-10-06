# PROTOCOL (pose v1)

All trackers and renderers interoperate via a stable JSON packet. Version **v1** is used here.

## Packet shape

```json
{
  "type": "pose",
  "v": 1,
  "ts": 1735948123456,
  "eyeMode": "center",
  "screen": { "x": 0.012, "y": -0.004 }, 
  "uv":     { "u": 0.53,  "v": 0.47   },
  "head":   { "z": 0.64 },
  "camera": { "width": 1280, "height": 720 },
  "perf":   { "infer_fps": 59.7, "video_fps": 60.0 }
}
```

### Semantics
- `screen.x`, `screen.y` — **meters** relative to screen **center** (right/up positive).  
- `head.z` — **meters** toward the user (**+z**). Rendered space is **−z** behind the screen.  
- `uv.u`, `uv.v` — normalized **0..1** with origin at **bottom‑left** (useful for overlays & sanity checks).  
- `ts` — Unix ms timestamp of the inference callback.  
- `eyeMode` — which eye center was used: `left`, `center`, or `right`.

### Versioning
- Minor, backward‑compatible additions (new fields) may appear in future `v1.x`.  
- Breaking changes will bump `v` to `2`.
