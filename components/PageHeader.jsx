'use client'

import TextReveal from '@/components/anim/TextReveal'
import Reveal from '@/components/anim/Reveal'

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="bg-mesh border-b border-line pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="container-site">
        {eyebrow && (
          <Reveal y={20} delay={0.1}>
            <p className="eyebrow mb-6">{eyebrow}</p>
          </Reveal>
        )}
        <TextReveal as="h1" className="heading-xl text-char" start="top 95%">
          {title}
        </TextReveal>
        {intro && (
          <Reveal delay={0.3}>
            <p className="body-lg mt-8 max-w-2xl">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
