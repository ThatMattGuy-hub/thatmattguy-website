'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { gsap, useGSAP } from '@/lib/gsap'
import { services } from '@/lib/data'
import TextReveal from '@/components/anim/TextReveal'

export default function ServicesStrip() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const track = trackRef.current
        const getDistance = () => track.scrollWidth - window.innerWidth

        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        })
      })

      return () => mm.revert()
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="overflow-hidden border-t border-line bg-snow py-24 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-0">
      <div className="container-site mb-12 lg:mb-16">
        <p className="eyebrow mb-4">What we do</p>
        <TextReveal as="h2" className="heading-lg max-w-3xl text-char">
          Five disciplines. One standard: exceptional.
        </TextReveal>
      </div>

      <div
        ref={trackRef}
        className="flex flex-col gap-6 px-5 will-change-transform sm:px-8 lg:w-max lg:flex-row lg:gap-8 lg:pl-12 lg:pr-[20vw]"
      >
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="card-soft group flex flex-col justify-between lg:h-[26rem] lg:w-[24rem] lg:shrink-0"
          >
            <div>
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-accent">{service.index}</span>
                <ArrowUpRight
                  size={22}
                  className="text-faint transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </div>
              <h3 className="mt-8 font-display text-3xl font-bold tracking-tight text-char transition-colors group-hover:text-accent">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {service.highlights.slice(0, 3).map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-line px-3 py-1 text-xs text-faint"
                >
                  {h}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  )
}
