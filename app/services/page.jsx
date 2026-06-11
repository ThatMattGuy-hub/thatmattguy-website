import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { services, pricing } from '@/lib/data'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/anim/Reveal'
import TextReveal from '@/components/anim/TextReveal'
import Magnetic from '@/components/Magnetic'

export const metadata = {
  title: 'Services & Pricing',
  description:
    'Web design, development, e-commerce, AI automation and web applications for businesses in the Ribble Valley & North West UK. Websites from £595 with transparent pricing.',
  alternates: { canonical: '/services' },
}

const included = [
  'Mobile-responsive design',
  'Fast loading speeds',
  'SEO-friendly structure',
  'Google Analytics setup',
  'Contact form integration',
  'Social media integration',
  'Browser compatibility',
  'Security best practices',
  'Training & documentation',
  'Post-launch support',
  'Free minor updates',
  'Honest communication',
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services & Pricing"
        title="Everything your business needs to win online."
        intro="From design to development, e-commerce to automation — transparent, honest pricing for businesses across the Ribble Valley and North West. No hidden fees, no surprises."
      />

      {/* Service list */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <ul className="divide-y divide-line border-y border-line">
            {services.map((service) => (
              <Reveal as="li" key={service.slug} y={32}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid items-center gap-4 py-10 transition-colors sm:grid-cols-[auto_1fr_auto] sm:gap-10"
                >
                  <span className="font-mono text-sm text-accent">{service.index}</span>
                  <div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-char transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-muted">{service.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.highlights.map((h) => (
                        <li key={h} className="rounded-full border border-line px-3 py-1 text-xs text-faint">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ArrowUpRight
                    size={28}
                    className="hidden text-faint transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:block"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-line bg-mist py-20 sm:py-28">
        <div className="container-site">
          <p className="eyebrow mb-4">Pricing</p>
          <TextReveal as="h2" className="heading-lg max-w-2xl text-char">
            Simple packages. Honest numbers.
          </TextReveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {pricing.map((tier) => (
              <Reveal key={tier.name} y={40}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                    tier.popular ? 'border-accent bg-snow' : 'border-line bg-snow'
                  }`}
                >
                  {tier.badge && (
                    <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-snow">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-char">{tier.name}</h3>
                  <p className="mt-4 font-display text-4xl font-bold tracking-tight text-accent">{tier.price}</p>
                  <p className="mt-3 text-sm text-muted">{tier.description}</p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Magnetic className="mt-10 block">
                    <Link
                      href="/contact"
                      className={`${tier.popular ? 'btn-primary' : 'btn-ghost'} w-full`}
                    >
                      {tier.cta}
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-faint">
            All prices exclude VAT. Payment plans available for Business and E-Commerce packages.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <p className="eyebrow mb-4">Standard, not extra</p>
          <TextReveal as="h2" className="heading-lg max-w-2xl text-char">
            Included with every project.
          </TextReveal>
          <Reveal stagger={0.04} className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-snow p-6">
                <Check size={18} className="shrink-0 text-accent" />
                <span className="text-sm text-muted">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
