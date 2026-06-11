import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/lib/data'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/anim/Reveal'
import TextReveal from '@/components/anim/TextReveal'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with ThatMattGuy for web design, development and automation in the Ribble Valley & North West UK. Free consultation, response within 1 business day.',
  alternates: { canonical: '/contact' },
}

const contactInfo = [
  { icon: Mail, title: 'Email', value: site.email, link: `mailto:${site.email}` },
  { icon: Phone, title: 'Phone', value: site.phone, link: site.phoneHref },
  { icon: MapPin, title: 'Location', value: site.location, link: null },
  { icon: Clock, title: 'Response time', value: 'Within 1 business day', link: null },
]

const faqs = [
  {
    q: 'How quickly will you respond?',
    a: 'We aim to respond to all enquiries within 1 business day, usually much sooner. If you need urgent help, call us directly.',
  },
  {
    q: 'Do you work with businesses outside the Ribble Valley?',
    a: "Absolutely. While we're based in the Ribble Valley, we work with businesses across the entire North West and can work remotely with anyone in the UK.",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        intro="Whether you're ready to start or just exploring options, we'd love to hear from you. No pressure — just a straightforward conversation about how we can help your business grow."
      />

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          {/* Info */}
          <div>
            <Reveal stagger={0.1} className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <item.icon size={22} className="mt-1 shrink-0 text-accent" />
                  <div>
                    <h2 className="font-mono text-xs uppercase tracking-widest text-faint">{item.title}</h2>
                    {item.link ? (
                      <a href={item.link} className="link-underline mt-1 inline-block text-char transition-colors hover:text-accent">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-char">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal>
              <div className="card-soft mt-12 border-l-2 border-l-accent">
                <h3 className="font-display text-base font-bold text-char">Free consultation</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  15–30 minutes to talk through your goals, see if we&apos;re a good fit, and get an
                  honest steer on cost — no commitment required.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal y={32}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-line bg-mist py-20 sm:py-28">
        <div className="container-site">
          <p className="eyebrow mb-4">Coverage</p>
          <TextReveal as="h2" className="heading-md max-w-2xl text-char">
            Based in the Ribble Valley. Serving the North West.
          </TextReveal>
          <Reveal>
            <p className="mt-6 max-w-2xl text-muted">
              We work with businesses across the Ribble Valley, Lancaster, Blackpool, and the wider North
              West region — in person or remotely.
            </p>
          </Reveal>
          <Reveal y={40}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-line grayscale invert-[0.9]" style={{ height: 420 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37726.05842890625!2d-2.7177!3d53.7632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b73b0f32e178b%3A0x947d2c9b786c8f8!2sRibble Valley%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ribble Valley, North West UK location"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <p className="eyebrow mb-4">FAQ</p>
          <TextReveal as="h2" className="heading-md max-w-xl text-char">
            Common questions.
          </TextReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {faqs.map((faq) => (
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
    </>
  )
}
