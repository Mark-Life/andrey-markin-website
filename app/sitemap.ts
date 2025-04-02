import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { projects } from '@/data/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://andrey-markin.com'

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Generate dynamic routes for projects
  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter(project => project.slug)
    .map(project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  // Generate dynamic routes for services
  const serviceRoutes: MetadataRoute.Sitemap = services
    .filter(service => service.slug)
    .map(service => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  // Combine all routes
  return [...staticRoutes, ...projectRoutes, ...serviceRoutes]
}
