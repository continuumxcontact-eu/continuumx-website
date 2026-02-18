import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { headers } from 'next/headers'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'
import { getCourse, courses } from '@/lib/courses'

/* ==============================
   USD → EGP RATE (Daily update)
   Works on Localhost + Vercel
============================== */
function getBaseUrlFromHeaders() {
  const h = headers()
  const host =
    h.get('x-forwarded-host') ||
    h.get('host') ||
    'localhost:3000'

  const proto =
    h.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https')

  return `${proto}://${host}`
}

async function getUsdToEgpRate(): Promise<number | null> {
  try {
    const baseUrl = getBaseUrlFromHeaders()
    const res = await fetch(`${baseUrl}/api/fx`, {
      next: { revalidate: 60 * 60 * 24 }, // 24 hours
    })
    if (!res.ok) return null
    const data = await res.json()
    return typeof data?.rate === 'number' ? data.rate : null
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const course = getCourse(params.slug)
  if (!course) return {}

  return {
    title: `${course.title.en} — Continuum X OÜ`,
    description: course.overview.en,
  }
}

export default async function CourseDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const course = getCourse(params.slug)
  const t = getTranslations('en')

  if (!course) notFound()

  const rate = await getUsdToEgpRate()
  const egp =
    course.priceUSD && rate ? Math.round(course.priceUSD * rate) : null

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-6xl">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/courses"
            className="text-sm text-black hover:text-primary dark:text-white dark:hover:text-primary-soft"
          >
            ← Back to Courses
          </Link>
        </div>

        {/* Title + Meta */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
            {course.title.en}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-black dark:text-white">
            <span>
              <span className="font-bold">{t.courses.level}:</span>{' '}
              {course.level.en}
            </span>

            <span>
              <span className="font-bold">{t.courses.duration}:</span>{' '}
              {course.duration.en}
            </span>

            <span>
              <span className="font-bold">{t.courses.format}:</span>{' '}
              {course.format.en}
            </span>
          </div>

          {/* PRICE */}
          {(course.priceUSD || course.priceNote?.en) && (
            <div className="mt-5">
              <div className="flex flex-wrap items-center gap-3">
                {course.oldPriceUSD && (
                  <span className="text-red-700 line-through font-semibold text-lg">
                    ${course.oldPriceUSD}
                  </span>
                )}

                {course.priceUSD && (
                  <span className="text-black dark:text-white font-bold text-3xl">
                    ${course.priceUSD}
                  </span>
                )}

                {course.priceNote?.en && (
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {course.priceNote.en}
                  </span>
                )}
              </div>

              {/* EGP Equivalent */}
              {egp && (
                <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  ≈ <span className="font-semibold">{egp.toLocaleString()} EGP</span>
                  <span className="ml-2 text-xs text-gray-500">(auto-updated daily)</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-textPrimary dark:text-textOnDark">
            {t.courses.overview}
          </h2>
          <p className="text-lg text-black dark:text-white">
            {course.overview.en}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-black dark:text-white">
                {t.courses.whoFor}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-black dark:text-white">
                {course.whoFor.en.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-black dark:text-white">
                {t.courses.learn}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-black dark:text-white">
                {course.learn.en.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-black dark:text-white">
                {t.courses.tools}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {course.tools.en.map((tool, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:border-primary/60 dark:bg-primary/30 dark:text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-black dark:text-white">
                {t.courses.outcomes}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-black dark:text-white">
                {course.outcomes.en.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Enroll */}
        <div className="mt-8 text-center">
          <Link href={`/enroll?course=${course.slug}`}>
            <Button size="lg">{t.courses.enroll}</Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
