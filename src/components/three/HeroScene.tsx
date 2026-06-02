import React, { Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Timer } from 'three'
import { useWebGL, type WebGLCapabilities } from '@/hooks/useWebGL'
import FloatingObjects from './FloatingObjects'
import ParticleField from './ParticleField'
import PostFX from './PostFX'
import Character from './Character'

interface HeroSceneProps {
  className?: string
}

function HeroSceneContent({ capabilities }: { capabilities: WebGLCapabilities }) {
  if (!capabilities.supported) {
    return null
  }

  const timer = useMemo(() => new Timer(), [])

  React.useEffect(() => {
    timer.connect(document)
    return () => {
      timer.dispose()
    }
  }, [timer])

  useFrame(() => {
    timer.update()
  })

  return (
    <>
      <color attach="background" args={['#0b0b0f']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.3} color="#fdcce6" />
      
      <pointLight
        position={[5, 5, 5]}
        intensity={2.0}
        color="#ff9ed2"
        distance={100}
      />
      
      <pointLight
        position={[10, 0, 0]}
        intensity={0.8}
        color="#ffffff"
        distance={100}
      />

      {/* Scene Objects */}
      <FloatingObjects />
      <Character />
      <ParticleField capabilities={capabilities} />

      {/* Postprocessing - skip on mobile */}
      {!capabilities.lowEnd && <PostFX />}
    </>
  )
}

export default function HeroScene({ className = '' }: HeroSceneProps): React.ReactNode {
  const capabilities = useWebGL()

  if (!capabilities.supported) {
    return null
  }

  return (
    <Canvas
      className={className}
      dpr={capabilities.dpr}
      frameloop="demand"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100dvh',
        pointerEvents: 'none',
      }}
    >
      <Suspense fallback={null}>
        <HeroSceneContent capabilities={capabilities} />
      </Suspense>
    </Canvas>
  )
}
