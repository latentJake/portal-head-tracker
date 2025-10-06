import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Default to root for local dev; use BASE_URL when building for GitHub Pages.
const base = process.env.BASE_URL || '/';

export default defineConfig({
  base,
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@mediapipe/tasks-vision/wasm/*',
          dest: 'mediapipe/wasm'
        }
      ]
    })
  ]
});
