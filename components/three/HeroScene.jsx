'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleLayer({ count, color, size, radius, speed, opacity }) {
  const points = useRef(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = radius * (0.5 + Math.random() * 0.5)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count, radius])

  useFrame((state, delta) => {
    if (!points.current) return
    points.current.rotation.y += delta * speed
    // Gentle breathing
    const t = state.clock.elapsedTime
    points.current.position.y = Math.sin(t * 0.15) * 0.2
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function Drift({ children }) {
  const group = useRef(null)
  const target = useRef(new THREE.Vector2(0, 0))

  useFrame((state) => {
    if (!group.current) return
    // Very gentle mouse parallax
    target.current.lerp(state.pointer, 0.02)
    group.current.rotation.y = target.current.x * 0.12
    group.current.rotation.x = -target.current.y * 0.08
  })

  return <group ref={group}>{children}</group>
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
      eventSource={typeof document !== 'undefined' ? document.body : undefined}
    >
      <Drift>
        <ParticleLayer count={500} color="#7c3aed" size={0.045} radius={9} speed={0.012} opacity={0.35} />
        <ParticleLayer count={350} color="#ec4899" size={0.04} radius={11} speed={-0.008} opacity={0.25} />
        <ParticleLayer count={250} color="#22d3ee" size={0.035} radius={13} speed={0.005} opacity={0.2} />
      </Drift>
      <fog attach="fog" args={['#fcfbf8', 9, 18]} />
    </Canvas>
  )
}
