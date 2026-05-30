import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, BufferGeometry, BufferAttribute, PointsMaterial, Color } from 'three'
import { type WebGLCapabilities } from '@/hooks/useWebGL'

interface ParticleFieldProps {
  capabilities: WebGLCapabilities
}

export default function ParticleField({ capabilities }: ParticleFieldProps): React.ReactNode {
  const ref = useRef<Points>(null)
  
  // Determine particle count based on device capability
  const particleCount = capabilities.lowEnd ? 800 : 3000
  const size = capabilities.lowEnd ? 0.02 : 0.015

  const geometry = useMemo(() => {
    const geom = new BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    
    // Create sphere distribution
    for (let i = 0; i < particleCount * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 8
      
      positions[i] = r * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = r * Math.cos(phi)
    }
    
    geom.setAttribute('position', new BufferAttribute(positions, 3))
    return geom
  }, [particleCount])

  const material = useMemo(
    () =>
      new PointsMaterial({
        color: new Color('#ffb7dc'),
        size,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.8,
      }),
    [size]
  )

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0001
    }
  })

  return <points ref={ref} geometry={geometry} material={material} />
}
