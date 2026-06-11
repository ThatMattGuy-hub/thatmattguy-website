'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export default function Marquee({ items = [], className = '' }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const track = ref.current.querySelector('.marquee-track')
      gsap.to(track, {
        xPercent: -50,
        duration: 24,
        ease: 'none',
        repeat: -1,
      })
    },
    { scope: ref }
  )

  const row = [...items, ...items]

  return (
    <div ref={ref} className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">
      <div className="marquee-track inline-flex items-center gap-10 will-change-transform">
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            <span className="font-display text-xl font-semibold text-faint">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}
