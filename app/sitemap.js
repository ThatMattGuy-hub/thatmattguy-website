import { site, services } from '@/lib/data'

export default function sitemap() {
  const staticRoutes = ['', '/services', '/about', '/portfolio', '/contact', '/privacy', '/terms'].map(
    (route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    })
  )

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
