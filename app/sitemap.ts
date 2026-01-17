import { MetadataRoute } from 'next'
import { courses } from '@/lib/courses'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const routes = [
    '',
    '/services',
    '/courses',
    '/enroll',
    '/consultation',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/thank-you',
  ]

  const arabicRoutes = routes.map((route) => `/ar${route === '' ? '' : route}`)

  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const arabicCourseRoutes = courses.map((course) => ({
    url: `${baseUrl}/ar/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticRoutes = [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
      priority: route === '' ? 1.0 : 0.8,
    })),
    ...arabicRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/ar' ? ('daily' as const) : ('weekly' as const),
      priority: route === '/ar' ? 1.0 : 0.8,
    })),
  ]

  return [...staticRoutes, ...courseRoutes, ...arabicCourseRoutes]
}
