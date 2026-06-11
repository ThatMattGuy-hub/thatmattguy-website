'use client'

import { CheckCircle2 } from 'lucide-react'
import { stats } from '@/lib/data'
import TextReveal from '@/components/anim/TextReveal'
import Reveal from '@/components/anim/Reveal'
import Counter from '@/components/anim/Counter'

const points = [
  'Direct communication — you deal with the people doing the work',
  'Modern, proven technologies chosen to fit each project',
  'Performance-first builds that rank on Google',
  'Honest, transparent pricing with no hidden fees',
  'Based in the Ribble Valley, serving the North West',
  'Ongoing support long after launch',
]

export default function Approach() {
  return (
    <section className="border-t border-line bg-mist py-24 sm:py-32">
      <div className="container-site grid gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">Why work with us</p>
          <TextReveal as="h2" className="heading-lg text-char">
            Big-agency standards. Local accountability.
          </TextReveal>
          <Reveal>
            <p className="body-lg mt-8">
              ThatMattGuy combines years of professional experience building websites, web applications
              and automation tools with the responsiveness of a local studio. High-end work, clear
              communication, and none of the overheads or jargon that come with the big agencies.
            </p>
          </Reveal>
          <Reveal as="ul" stagger={0.08} className="mt-10 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-muted">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
                <span>{point}</span>
              </li>
            ))}
          </Reveal>
        </div>

        <div className="grid grid-cols-2 content-center gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-sm">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-8 sm:p-10">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="text-gradient font-display text-4xl font-bold tracking-tight sm:text-5xl"
              />
              <p className="mt-3 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
