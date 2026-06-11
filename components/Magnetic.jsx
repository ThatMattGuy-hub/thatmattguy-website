'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export default function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const el = ref.current
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })

      const onMove = (e) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)
        xTo(x * strength)
        yTo(y * strength)
      }
      const onLeave = () => {
        xTo(0)
        yTo(0)
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      }
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </div>
  )
}
