import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { services, site } from '@/lib/data'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/anim/Reveal'
import TextReveal from '@/components/anim/TextReveal'
import Magnetic from '@/components/Magnetic'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.title} — Ribble Valley & North West`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

export default function ServicePage({ params }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== service.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${site.url}/services/${service.slug}`,
    provider: {
      '@type': 'ProfessionalService',
      name: site.name,
      url: site.url,
    },
    areaServed: ['Ribble Valley', 'Lancashire', 'North West England'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader eyebrow={`Service ${service.index}`} title={service.title} intro={service.long} />

      {/* Deliverables */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow mb-4">What you get</p>
            <TextReveal as="h2" className="heading-md text-char">
              Deliverables, not promises.
            </TextReveal>
            <Reveal>
              <p className="mt-6 leading-relaxed text-muted">{service.description}</p>
            </Reveal>
            <Magnetic className="mt-10 block">
              <Link href="/contact" className="btn-primary">
                Discuss your project <ArrowRight size={18} />
              </Link>
            </Magnetic>
          </div>

          <Reveal as="ul" stagger={0.07} className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-mist p-5">
                <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-line bg-mist py-20 sm:py-28">
        <div className="container-site">
          <p className="eyebrow mb-4">FAQs</p>
          <TextReveal as="h2" className="heading-md max-w-xl text-char">
            Questions, answered straight.
          </TextReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {service.faqs.map((faq) => (
              <Reveal key={faq.q}>
                <div className="card-soft h-full">
                  <h3 className="font-display text-lg font-bold text-char">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="mb-10 flex items-center justify-between">
            <p className="eyebrow">More services</p>
            <Link href="/services" className="link-underline text-sm text-muted">
              <ArrowLeft size={14} className="mr-1 inline" /> All services
            </Link>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex items-center justify-between py-6"
                >
                  <span className="font-display text-2xl font-bold tracking-tight text-muted transition-colors group-hover:text-accent">
                    <span className="mr-4 font-mono text-sm text-faint">{other.index}</span>
                    {other.title}
                  </span>
                  <ArrowRight size={20} className="text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

