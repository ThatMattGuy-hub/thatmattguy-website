'use client'

import { useRef, useMemo } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

/**
 * Splits text into words and reveals them with a masked stagger on scroll.
 */
export default function TextReveal({
  children,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  start = 'top 85%',
}) {
  const ref = useRef(null)
  const text = typeof children === 'string' ? children : ''

  const words = useMemo(() => text.split(' '), [text])

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current.querySelectorAll('.tr-word'),
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          delay,
          stagger: 0.04,
          ease: 'power4.out',
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
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
        >
          <span className="tr-word inline-block will-change-transform">
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </Tag>
  )
}
