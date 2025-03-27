import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://andrey-markin.com'
  
  // Add your static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    // {
    //   url: `${baseUrl}/projects`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.8,
    // },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  return routes
} 