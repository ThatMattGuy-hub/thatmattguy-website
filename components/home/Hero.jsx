'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { gsap, useGSAP } from '@/lib/gsap'
import HeroCanvas from '@/components/three/HeroCanvas'
import Magnetic from '@/components/Magnetic'

export default function Hero() {
  const ref = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.fromTo(
        '.hero-line',
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.12, delay: 0.3 }
      )
        .fromTo('.hero-sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, '-=0.4')
        .fromTo('.hero-meta', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.3')

      // Parallax the headline out on scroll
      gsap.to('.hero-content', {
        yPercent: -18,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: ref }
  )

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <HeroCanvas />

      <div className="container-site hero-content relative z-10 pt-24">
        <p className="hero-sub eyebrow mb-8">Web design &amp; development studio — Ribble Valley, UK</p>

        <h1 className="heading-xl text-char">
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <span className="hero-line block will-change-transform">Websites that</span>
          </span>
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <span className="hero-line block will-change-transform">
              move <em className="not-italic text-gradient">business</em>
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <span className="hero-line block text-stroke will-change-transform">forward.</span>
          </span>
        </h1>

        <p className="hero-sub body-lg mt-8 max-w-xl">
          ThatMattGuy is a web design &amp; development studio building high-performance websites,
          e-commerce and AI automation — trusted engineering for businesses across the North West.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic className="hero-cta">
            <Link href="/contact" className="btn-primary">
              Start a project <ArrowRight size={18} />
            </Link>
          </Magnetic>
          <Magnetic className="hero-cta">
            <Link href="/services" className="btn-ghost">
              Services &amp; pricing
            </Link>
          </Magnetic>
        </div>
      </div>

      <div className="hero-meta absolute bottom-8 left-0 right-0 z-10">
        <div className="container-site flex items-center justify-between text-xs text-faint">
          <span className="flex items-center gap-2">
            <ArrowDown size={14} className="animate-bounce" /> Scroll to explore
          </span>
          <span className="hidden sm:block">Design · Engineering · Motion · Automation</span>
        </div>
      </div>
    </section>
  )
}
