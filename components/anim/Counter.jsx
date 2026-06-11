'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export default function Counter({ value, suffix = '', className = '' }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const obj = { n: 0 }
      gsap.to(obj, {
        n: value,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${Math.round(obj.n)}${suffix}`
          }
        },
      })
    },
    { scope: ref }
  )

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
