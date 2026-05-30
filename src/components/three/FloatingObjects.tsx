import React, { useRef, useMemo, useState } from 'react'
import { useFrame as useR3FFrame } from '@react-three/fiber'
import {
  IcosahedronGeometry,
  OctahedronGeometry,
  TorusKnotGeometry,
  MeshStandardMaterial,
  Color,
} from 'three'
import { Physics, RigidBody } from '@react-three/rapier'

interface FloatingObject {
  geometry: any
  position: [number, number, number]
  scale: number
  rotationSpeed: [number, number, number]
  color: string
}

const FLOATING_OBJECTS: FloatingObject[] = [
  {
    geometry: new IcosahedronGeometry(0.8, 3),
    position: [-3, 2, -2],
    scale: 1,
    rotationSpeed: [0.005, 0.003, 0.002],
    color: '#ffb7dc',
  },
  {
    geometry: new OctahedronGeometry(0.6, 0),
    position: [3, -1, -1],
    scale: 0.8,
    rotationSpeed: [-0.003, 0.005, 0.004],
    color: '#ff9ed2',
  },
  {
    geometry: new TorusKnotGeometry(0.5, 0.2, 100, 8),
    position: [0, 3, -3],
    scale: 0.7,
    rotationSpeed: [0.002, -0.004, 0.003],
    color: '#ffc8e5',
  },
  {
    geometry: new IcosahedronGeometry(0.5, 2),
    position: [2, -2, -2],
    scale: 0.6,
    rotationSpeed: [0.004, 0.002, -0.003],
    color: '#ffb7dc',
  },
  {
    geometry: new OctahedronGeometry(0.7, 0),
    position: [-2, 1, -1],
    scale: 0.9,
    rotationSpeed: [-0.002, 0.004, 0.002],
    color: '#ff9ed2',
  },
  {
    geometry: new TorusKnotGeometry(0.4, 0.15, 80, 6),
    position: [1, -3, 0],
    scale: 0.5,
    rotationSpeed: [0.003, -0.002, 0.004],
    color: '#ffc8e5',
  },
]

function FloatingObject({ object, mousePos }: { object: FloatingObject; mousePos: { x: number; y: number } }) {
  const meshRef = useRef<any>(null)
  const rigidBodyRef = useRef<any>(null)
  const originalPosRef = useRef(object.position)

  useR3FFrame(() => {
    if (!meshRef.current) return

    // Idle rotation
    meshRef.current.rotation.x += object.rotationSpeed[0]
    meshRef.current.rotation.y += object.rotationSpeed[1]
    meshRef.current.rotation.z += object.rotationSpeed[2]

    // Mouse repulsion (gentle)
    const mouseInfluence = {
      x: (mousePos.x - 0.5) * 2,
      y: -(mousePos.y - 0.5) * 2,
    }

    const repelForce = 0.05
    meshRef.current.position.x += mouseInfluence.x * repelForce
    meshRef.current.position.y += mouseInfluence.y * repelForce

    // Drift back to original position
    meshRef.current.position.x += (originalPosRef.current[0] - meshRef.current.position.x) * 0.02
    meshRef.current.position.y += (originalPosRef.current[1] - meshRef.current.position.y) * 0.02
    meshRef.current.position.z += (originalPosRef.current[2] - meshRef.current.position.z) * 0.02
  })

  return (
    <RigidBody
      ref={rigidBodyRef}
      type="dynamic"
      gravityScale={0}
      colliders="ball"
      linearDamping={0.5}
      angularDamping={0.5}
      position={object.position}
    >
      <mesh
        ref={meshRef}
        geometry={object.geometry}
        scale={object.scale}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={new Color(object.color)}
          emissive={new Color(object.color)}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </RigidBody>
  )
}

export default function FloatingObjects() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Physics>
      <group>
        {FLOATING_OBJECTS.map((object, index) => (
          <FloatingObject key={index} object={object} mousePos={mousePos} />
        ))}
      </group>
    </Physics>
  )
}
