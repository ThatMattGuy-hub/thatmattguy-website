'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { processSteps } from '@/lib/data'
import TextReveal from '@/components/anim/TextReveal'

export default function Process() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.utils.toArray('.process-row').forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0.15, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 75%',
              once: true,
            },
          }
        )
      })

      gsap.fromTo(
        '.process-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 60%',
            end: 'bottom 70%',
            scrub: true,
          },
        }
      )
    },
    { scope: ref }
  )

  return (
    <section ref={ref} className="border-t border-line bg-mist py-24 sm:py-32">
      <div className="container-site">
        <p className="eyebrow mb-4">How it works</p>
        <TextReveal as="h2" className="heading-lg max-w-2xl text-char">
          A process with no surprises.
        </TextReveal>

        <div className="relative mt-16 lg:mt-20">
          <div className="process-line absolute left-[1.1rem] top-0 hidden h-full w-px origin-top bg-accent/40 lg:block" />
          <ol className="space-y-12 lg:space-y-16">
            {processSteps.map((item) => (
              <li key={item.step} className="process-row grid gap-4 lg:grid-cols-[auto_1fr] lg:gap-12">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent font-mono text-xs text-accent">
                  {item.step}
                </span>
                <div className="grid gap-3 lg:grid-cols-2 lg:gap-12">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-char sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
