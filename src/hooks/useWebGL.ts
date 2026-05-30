import { useEffect, useState } from 'react'
import { supportsWebGL, isLowEndDevice } from '@/utils/deviceDetect'

export interface WebGLCapabilities {
  supported: boolean
  lowEnd: boolean
  dpr: [number, number]
}

export function useWebGL(): WebGLCapabilities {
  const [capabilities, setCapabilities] = useState<WebGLCapabilities>({
    supported: false,
    lowEnd: false,
    dpr: [1, 1],
  })

  useEffect(() => {
    const supported = supportsWebGL()
    const lowEnd = isLowEndDevice()
    const dprValue = lowEnd ? 1 : Math.min(window.devicePixelRatio || 1, 1.5)
    const dpr: [number, number] = [1, dprValue]

    setCapabilities({
      supported,
      lowEnd,
      dpr,
    })
  }, [])

  return capabilities
}
