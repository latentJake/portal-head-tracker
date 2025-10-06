// src/core/pose-store.js
const state = { ts: 0, pe: null, raw: null }; // pe: normalized eye center, or your computed head pose
const subs = new Set();

export function getPose(){ return state; }
export function subscribe(fn){ subs.add(fn); return ()=>subs.delete(fn); }
export function publish(next){
  Object.assign(state, next);
  for (const fn of subs) fn(state);
}
