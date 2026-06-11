'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export default function Reveal({
  children,
  as: Tag = 'div',
  y = 48,
  delay = 0,
  duration = 1,
  stagger = 0,
  start = 'top 85%',
  className = '',
  ...rest
}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const targets = stagger > 0 ? ref.current.children : ref.current
      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      )
    },
    { scope: ref }
  )

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
