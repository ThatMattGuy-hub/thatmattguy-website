import Hero from '@/components/home/Hero'
import Marquee from '@/components/anim/Marquee'
import ServicesStrip from '@/components/home/ServicesStrip'
import Approach from '@/components/home/Approach'
import Work from '@/components/home/Work'
import Process from '@/components/home/Process'

export const metadata = {
  title: 'ThatMattGuy — Web Design & Development Studio, Ribble Valley',
  description:
    'Creative web design & development studio in the Ribble Valley. High-performance websites, e-commerce, web apps and AI automation for businesses across the North West.',
  alternates: { canonical: '/' },
}

const marqueeItems = [
  'Web Design',
  'Development',
  'E-Commerce',
  'AI & Automation',
  'Web Applications',
  'Motion & 3D',
  'SEO',
  'Performance',
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} className="border-t border-line py-8" />
      <ServicesStrip />
      <Approach />
      <Work />
      <Process />
    </>
  )
}
