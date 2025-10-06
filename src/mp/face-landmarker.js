// src/mp/face-landmarker.js
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

const MODEL_URL = '/models/face_landmarker.task';
const WASM_BASE = '/mediapipe/wasm';

let lm = null;

export async function initLandmarker(delegate = 'GPU') {
  const fileset = await FilesetResolver.forVisionTasks(WASM_BASE);
  lm = await FaceLandmarker.createFromOptions(fileset, {
    baseOptions: { modelAssetPath: MODEL_URL, delegate },
    runningMode: 'VIDEO',
    numFaces: 1,
    outputFaceBlendshapes: false,
    outputFacialTransformationMatrixes: false
  });
  return lm;
}
export async function closeLandmarker() { if (lm) { await lm.close(); lm = null; } }
export function detect(video, tsMs) { return lm?.detectForVideo(video, tsMs) ?? null; }
