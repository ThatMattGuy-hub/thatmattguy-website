'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap, useGSAP } from '@/lib/gsap'
import Magnetic from '@/components/Magnetic'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)
  const overlayRef = useRef(null)
  const tlRef = useRef(null)

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      })

      tlRef.current = gsap
        .timeline({ paused: true })
        .set(overlayRef.current, { display: 'flex' })
        .fromTo(
          overlayRef.current,
          { clipPath: 'inset(0% 0% 100% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7, ease: 'power4.inOut' }
        )
        .fromTo(
          overlayRef.current.querySelectorAll('.menu-link'),
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power3.out' },
          '-=0.25'
        )
    },
    { scope: headerRef }
  )

  useEffect(() => {
    if (!tlRef.current) return
    if (open) {
      document.documentElement.classList.add('overflow-hidden')
      tlRef.current.play()
    } else {
      document.documentElement.classList.remove('overflow-hidden')
      tlRef.current.reverse()
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-snow/70 backdrop-blur-md">
      <div className="container-site flex items-center justify-between py-4">
        <Link
          href="/"
          className="relative z-[60] font-display text-lg font-bold tracking-tight text-char"
          aria-label="ThatMattGuy — home"
        >
          That<span className="text-accent">Matt</span>Guy
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline font-display text-sm font-medium transition-colors ${
                pathname.startsWith(link.href) ? 'text-accent' : 'text-muted hover:text-char'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Magnetic>
            <Link href="/contact" className="btn-primary !px-5 !py-2.5 text-sm">
              Start a project
            </Link>
          </Magnetic>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-0.5 w-6 bg-char transition-transform duration-300 ${
              open ? 'translate-y-1 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-char transition-transform duration-300 ${
              open ? '-translate-y-1 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 hidden flex-col justify-center bg-snow px-8 md:!hidden"
        style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {links.map((link, i) => (
            <div key={link.href} className="overflow-hidden">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="menu-link block font-display text-5xl font-bold tracking-tightest text-char transition-colors hover:text-accent"
              >
                <span className="mr-4 font-mono text-sm text-accent">0{i + 1}</span>
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
        <p className="menu-link mt-12 text-sm text-faint">
          matt@thatmattguy.co.uk — Ribble Valley, UK
        </p>
      </div>
    </header>
  )
}
