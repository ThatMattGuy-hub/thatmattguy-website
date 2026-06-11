import Link from 'next/link'
import { site, services } from '@/lib/data'
import Magnetic from '@/components/Magnetic'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-snow">
      {/* Big CTA */}
      <div className="container-site py-20 sm:py-28">
        <p className="eyebrow mb-6">Got a project in mind?</p>
        <Magnetic strength={0.1}>
          <Link
            href="/contact"
            className="group block font-display text-5xl font-bold tracking-tightest leading-none text-char transition-colors hover:text-accent sm:text-7xl lg:text-8xl"
          >
            Let&apos;s build it
            <span className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-4 group-hover:-translate-y-2">
              {' '}&rarr;
            </span>
          </Link>
        </Magnetic>
      </div>

      <div className="container-site grid grid-cols-1 gap-10 border-t border-line py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-char">
            That<span className="text-accent">Matt</span>Guy
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Web design &amp; development studio in the Ribble Valley — building high-performance
            websites, e-commerce and automation for businesses across the North West.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-faint">Sitemap</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/portfolio', label: 'Work' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-faint">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-faint">Contact</h3>
          <ul className="space-y-2.5 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="container-site flex flex-col items-start justify-between gap-4 border-t border-line py-6 text-xs text-faint sm:flex-row sm:items-center">
        <p>&copy; {year} ThatMattGuy. All rights reserved.</p>
        <p className="text-faint">Web Design Ribble Valley &middot; North West England</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="transition-colors hover:text-accent">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-accent">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
