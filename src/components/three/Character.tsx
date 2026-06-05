import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import type { Group } from 'three'
import { Mesh } from 'three'

const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

export default function Character() {
  const group = useRef<Group>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const gltf = useGLTF('/models/character.glb') as any
  const { actions } = useAnimations(gltf.animations, group)
  const [isMobile, setIsMobile] = useState(false)

  const basePosition = useMemo<[number, number, number]>(
    () => [0, -1, 0],
    []
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const updateMobile = () => setIsMobile(mediaQuery.matches)

    updateMobile()
    mediaQuery.addEventListener?.('change', updateMobile)
    mediaQuery.addListener?.(updateMobile)

    return () => {
      mediaQuery.removeEventListener?.('change', updateMobile)
      mediaQuery.removeListener?.(updateMobile)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current.x = event.clientX
      mousePos.current.y = event.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!actions) {
      return
    }

    const animationClips = Object.values(actions).filter(Boolean) as any[]
    animationClips.forEach((action) => {
      action.reset()
      action.play()
    })

    return () => {
      animationClips.forEach((action) => action.stop())
    }
  }, [actions])

  useEffect(() => {
    if (!gltf.scene) return

    gltf.scene.traverse((node: any) => {
      if (node instanceof Mesh && node.material) {
        node.material.opacity = 1
        node.material.transparent = false
        if (node.material.emissiveIntensity !== undefined) {
          node.material.emissiveIntensity = 0.6
        }
      }
    })
  }, [gltf])

  useFrame(({ clock }) => {
    if (!group.current) return

    const targetRotationY = (mousePos.current.x / window.innerWidth - 0.5) * 1.5
    const targetRotationX = (mousePos.current.y / window.innerHeight - 0.5) * 0.6

    group.current.rotation.y = lerp(group.current.rotation.y, targetRotationY, 0.1)
    group.current.rotation.x = lerp(group.current.rotation.x, targetRotationX, 0.1)
    group.current.position.y = basePosition[1] + Math.sin(clock.elapsedTime * 0.8) * 0.08
  })

  return (
    <group ref={group} position={basePosition} scale={0.9}>
      <ambientLight intensity={0.8} />
      <pointLight
        position={[0.5, 1.2, 0.5]}
        intensity={3.0}
        color="#f79bc9"
        distance={5}
      />
      <primitive object={gltf.scene} />
    </group>
  )
}
