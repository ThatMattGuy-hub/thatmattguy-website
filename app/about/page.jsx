import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/anim/Reveal'
import TextReveal from '@/components/anim/TextReveal'
import Magnetic from '@/components/Magnetic'
import { processSteps } from '@/lib/data'

export const metadata = {
  title: 'About',
  description:
    'ThatMattGuy is a web design & development studio in the Ribble Valley with 7+ years of professional experience, delivering websites, web applications and automation for businesses across the North West.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    title: 'Partnership',
    description: 'Your success is our success. We invest in understanding your business so every decision supports your goals.',
  },
  {
    title: 'Clear Communication',
    description: 'No jargon, no confusion. Everything is explained in plain English, with regular updates at every stage.',
  },
  {
    title: 'Reliability',
    description: 'When we commit to a deadline, we keep it. You can count on quality work, delivered on time.',
  },
  {
    title: 'Results-Focused',
    description: 'Attractive websites are a given. What matters most is measurable impact on your business.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A local studio, built on professional experience."
        intro="ThatMattGuy is a web design & development studio in the Ribble Valley, building websites and digital tools that help North West businesses look sharp and work smarter."
      />

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <Reveal>
              <p className="body-lg">
                ThatMattGuy exists because businesses shouldn&apos;t have to choose between big-agency
                prices and DIY website builders. There is a better way: properly engineered digital
                products, delivered by a local studio that&apos;s accountable for the results.
              </p>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed text-muted">
                The studio is built on 7+ years of professional experience designing and developing
                websites, web applications and automation tools — work that has streamlined operations,
                improved performance and driven growth for established businesses. That same engineering
                discipline now goes into every client project, whatever the size.
              </p>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed text-muted">
                Based in the Ribble Valley and serving the North West, we offer something the big
                agencies can&apos;t: direct access to the people doing the work, honest advice with no
                upselling, and a genuine stake in the success of the local business community.
              </p>
            </Reveal>
            <Reveal>
              <div className="card-soft border-l-2 border-l-accent">
                <h2 className="font-display text-lg font-bold text-char">How we work</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We&apos;re always upfront about costs and timeframes, and we won&apos;t sell you
                  things you don&apos;t need. Everything we build is designed to keep working for you
                  long after launch — not just to look good on day one. Whether you need ongoing
                  support or a one-off build, the standard is the same.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="card-soft h-full border-l-2 border-l-accent">
                <h2 className="font-display text-lg font-bold text-char">At a glance</h2>
                <ul className="mt-6 space-y-5 text-sm text-muted">
                  <li>
                    <span className="block font-mono text-xs uppercase tracking-widest text-faint">Experience</span>
                    <span className="mt-1 block text-char">7+ years of professional web design, development &amp; automation</span>
                  </li>
                  <li>
                    <span className="block font-mono text-xs uppercase tracking-widest text-faint">Based in</span>
                    <span className="mt-1 block text-char">Ribble Valley, North West UK</span>
                  </li>
                  <li>
                    <span className="block font-mono text-xs uppercase tracking-widest text-faint">Serving</span>
                    <span className="mt-1 block text-char">The North West — in person or remotely across the UK</span>
                  </li>
                  <li>
                    <span className="block font-mono text-xs uppercase tracking-widest text-faint">Specialisms</span>
                    <span className="mt-1 block text-char">Websites, e-commerce, web applications &amp; AI automation</span>
                  </li>
                  <li>
                    <span className="block font-mono text-xs uppercase tracking-widest text-faint">Standard</span>
                    <span className="mt-1 block text-char">Custom-built, performance-first — no templates</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-mist py-20 sm:py-28">
        <div className="container-site">
          <p className="eyebrow mb-4">Values</p>
          <TextReveal as="h2" className="heading-lg max-w-2xl text-char">
            What you can expect from us.
          </TextReveal>
          <Reveal stagger={0.1} className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {values.map((value, i) => (
              <div key={value.title} className="bg-snow p-8 sm:p-10">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-char">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <p className="eyebrow mb-4">Process</p>
          <TextReveal as="h2" className="heading-lg max-w-2xl text-char">
            From first chat to launch day.
          </TextReveal>
          <Reveal stagger={0.1} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.step} className="card-soft !p-6">
                <span className="font-mono text-sm text-accent">{step.step}</span>
                <h3 className="mt-4 font-display text-base font-bold text-char">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Local */}
      <section className="border-t border-line bg-mist py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-4">Local first</p>
            <TextReveal as="h2" className="heading-md text-char">
              Why being local matters.
            </TextReveal>
          </div>
          <div className="space-y-5 text-muted">
            <Reveal>
              <p className="leading-relaxed">
                Working with a local studio means you&apos;re never a ticket number in a queue. You can
                meet us in person, speak directly to the people building your project, and know
                we&apos;re invested in the success of the local business community.
              </p>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed">
                We understand the North West market — the local competition, and what customers in the
                Ribble Valley, Lancaster, Blackpool and surrounding areas are looking for. That local
                knowledge goes into every project we deliver.
              </p>
            </Reveal>
            <Reveal>
              <p className="font-semibold leading-relaxed text-char">
                Local accountability, professional standards. You get the capability of a larger agency
                with the responsiveness and care of a studio on your doorstep.
              </p>
            </Reveal>
            <Magnetic className="mt-4 block">
              <Link href="/contact" className="btn-primary">
                Let&apos;s work together <ArrowRight size={18} />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  )
}
