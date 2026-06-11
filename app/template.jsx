'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

export default function Template({ children }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'all',
          onComplete: () => ScrollTrigger.refresh(),
        }
      )
    },
    { scope: ref }
  )

  return <div ref={ref}>{children}</div>
}
