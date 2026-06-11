'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => null,
})

/**
 * Lazy-loads the Three.js scene client-side only.
 * Falls back to a static gradient for reduced-motion users.
 */
export default function HeroCanvas() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced) setEnabled(true)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Animated gradient blobs — always present beneath the canvas */}
      <div className="absolute -left-[10%] -top-[15%] h-[55vh] w-[55vw] rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="absolute -right-[10%] top-[5%] h-[45vh] w-[45vw] rounded-full bg-pop-cyan/20 blur-3xl animate-blob [animation-delay:-5s]" />
      <div className="absolute bottom-[-20%] left-[25%] h-[50vh] w-[50vw] rounded-full bg-pop-pink/15 blur-3xl animate-blob [animation-delay:-9s]" />
      {enabled && <HeroScene />}
    </div>
  )
}
