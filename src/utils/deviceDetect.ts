/**
 * Detect if the device is mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

/**
 * Detect if the device is tablet
 */
export function isTablet(): boolean {
  if (typeof window === 'undefined') return false
  const ua = navigator.userAgent
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)
}

/**
 * Detect if the device has low hardware capability
 */
export function isLowEndDevice(): boolean {
  if (typeof navigator === 'undefined') return false
  const cores = navigator.hardwareConcurrency || 1
  return cores < 4
}

/**
 * Detect WebGL support
 */
export function supportsWebGL(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return !!gl
  } catch {
    return false
  }
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get device pixel ratio capped for performance
 */
export function getOptimalDPR(): [number, number] {
  if (typeof window === 'undefined') return [1, 1]
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  return isLowEndDevice() ? [1, 1] : [1, dpr]
}
