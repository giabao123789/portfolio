/**
 * Linear interpolation between two values
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

/**
 * Smooth lerp with ease
 */
export function lerpSmooth(current: number, target: number, factor: number = 0.1): number {
  return lerp(current, target, factor)
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
