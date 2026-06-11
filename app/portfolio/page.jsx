import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/anim/Reveal'
import TextReveal from '@/components/anim/TextReveal'
import Magnetic from '@/components/Magnetic'
import Work from '@/components/home/Work'

export const metadata = {
  title: 'Work & Portfolio',
  description:
    "View ThatMattGuy's web design and development work — high-performance websites, e-commerce and web applications for businesses in the Ribble Valley & North West UK.",
  alternates: { canonical: '/portfolio' },
}

const expectations = [
  'Full website screenshots and live demos',
  'Client testimonials and feedback',
  'Project challenges and solutions',
  'Results and business impact',
  'Technologies and tools used',
]

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Proof, not promises."
        intro="We're actively delivering for our first clients — full case studies land here soon. In the meantime, this very website is the demo: a live showcase of the standard we bring to every project."
      />

      <Work />

      {/* This site as a case study */}
      <section className="border-t border-line bg-mist py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Case study 00</p>
            <TextReveal as="h2" className="heading-md text-char">
              You&apos;re looking at one right now.
            </TextReveal>
            <Reveal>
              <p className="mt-6 leading-relaxed text-muted">
                This site is a working showcase of our standards: server-rendered for SEO,
                scroll-driven motion design, an interactive 3D scene, and a performance-first
                build — all while staying fully accessible and responsive.
              </p>
            </Reveal>
            <Reveal>
              <ul className="mt-6 flex flex-wrap gap-2">
                {['Server-side rendering', 'Motion design', 'Interactive 3D', 'Performance budgets', 'SEO architecture', 'Accessibility'].map(
                  (tech) => (
                    <li key={tech} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {tech}
                    </li>
                  )
                )}
              </ul>
            </Reveal>
          </div>
          <Reveal as="ul" stagger={0.08} className="space-y-px self-center overflow-hidden rounded-2xl border border-line bg-line">
            {expectations.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-snow p-5">
                <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm text-muted">Coming to every case study: {item.toLowerCase()}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="container-site text-center">
          <TextReveal as="h2" className="heading-lg mx-auto max-w-3xl text-char">
            Want to be a featured project?
          </TextReveal>
          <Reveal>
            <p className="body-lg mx-auto mt-6 max-w-xl">
              We&apos;re actively taking on new projects — with the personal attention and
              competitive pricing of a growing studio.
            </p>
          </Reveal>
          <Magnetic className="mt-10 inline-block">
            <Link href="/contact" className="btn-primary">
              Start your project <ArrowRight size={18} />
            </Link>
          </Magnetic>
        </div>
      </section>
    </>
  )
}
