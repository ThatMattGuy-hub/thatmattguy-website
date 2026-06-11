'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useGSAP(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 })

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power2.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power2.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

    let visible = false
    const onMove = (e) => {
      if (!visible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 })
        visible = true
      }
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, [role="button"], input, textarea, select, label')
      gsap.to(ring, { scale: interactive ? 2.2 : 1, duration: 0.35, ease: 'power3.out' })
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  })

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-1.5 w-1.5 rounded-full bg-accent md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-8 w-8 rounded-full border border-accent/50 md:block"
      />
    </>
  )
}
