'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Globe, ShoppingCart } from 'lucide-react'
import { gsap, useGSAP } from '@/lib/gsap'
import { projects } from '@/lib/data'
import TextReveal from '@/components/anim/TextReveal'
import Reveal from '@/components/anim/Reveal'
import Magnetic from '@/components/Magnetic'

const icons = {
  'Web Design': Globe,
  'E-Commerce': ShoppingCart,
  'Web Application': Calendar,
}

function TiltCard({ project }) {
  const ref = useRef(null)
  const Icon = icons[project.category] || Globe

  useGSAP(
    () => {
      const el = ref.current
      if (window.matchMedia('(pointer: coarse)').matches) return

      const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3.out' })
      const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3.out' })

      const onMove = (e) => {
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        ry(px * 10)
        rx(-py * 10)
      }
      const onLeave = () => {
        rx(0)
        ry(0)
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
    <div style={{ perspective: '1000px' }}>
      <div ref={ref} className="card-soft group will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
        <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 via-pop-pink/10 to-pop-orange/10" style={{ transform: 'translateZ(30px)' }}>
          <Icon size={48} className="text-accent transition-transform duration-500 ease-bounce group-hover:scale-125 group-hover:-rotate-6" strokeWidth={1.2} />
        </div>
        <div className="mt-6" style={{ transform: 'translateZ(20px)' }}>
          <span className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</span>
          <h3 className="mt-2 font-display text-xl font-bold text-char">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.features.map((f) => (
              <li key={f} className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-faint">
                {f}
              </li>
            ))}
          </ul>
          {project.isDemo && (
            <p className="mt-4 border-t border-line pt-3 text-[11px] italic text-faint">
              Example project — real client work coming soon
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section className="border-t border-line bg-snow bg-mesh py-24 sm:py-32">
      <div className="container-site">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Selected work</p>
            <TextReveal as="h2" className="heading-lg text-char">
              Built to perform.
            </TextReveal>
          </div>
          <Magnetic>
            <Link href="/portfolio" className="btn-ghost text-sm">
              View all work <ArrowRight size={16} />
            </Link>
          </Magnetic>
        </div>

        <Reveal stagger={0.12} className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <TiltCard key={project.title} project={project} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
