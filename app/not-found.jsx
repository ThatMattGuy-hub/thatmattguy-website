import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="heading-xl text-stroke">Lost in space.</h1>
      <p className="body-lg mt-6 max-w-md">
        This page doesn&apos;t exist — but plenty of good ones do.
      </p>
      <Link href="/" className="btn-primary mt-10">
        <ArrowLeft size={18} /> Back home
      </Link>
    </section>
  )
}
