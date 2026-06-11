import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import { site, services } from '@/lib/data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'ThatMattGuy — Web Design & Development Studio, Ribble Valley',
    template: '%s — ThatMattGuy',
  },
  description: site.description,
  keywords: [
    'Web Design Ribble Valley',
    'Web Development North West',
    'Web Design Studio Lancashire',
    'E-Commerce North West',
    'AI Automation Lancashire',
    'Small Business Web Design',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.url,
    siteName: site.name,
    title: 'ThatMattGuy — Web Design & Development Studio',
    description: site.description,
    images: [{ url: '/Logo.png', width: 512, height: 512, alt: 'ThatMattGuy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThatMattGuy — Web Design & Development Studio',
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  areaServed: ['Ribble Valley', 'Lancashire', 'North West England'],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Lancashire',
    addressCountry: 'GB',
  },
  priceRange: '££',
  makesOffer: services.map((s) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: s.title,
      description: s.description,
      url: `${site.url}/services/${s.slug}`,
    },
  })),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="noise">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Cursor />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
