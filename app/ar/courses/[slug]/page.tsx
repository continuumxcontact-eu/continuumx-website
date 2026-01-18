import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'
import { getCourse, courses } from '@/lib/courses'

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
  if (!course) {
    return {}
  }

  return {
    title: `${course.title.ar} — Continuum X OÜ`,
    description: course.overview.ar,
  }
}

export default function ArabicCourseDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const course = getCourse(params.slug)
  const t = getTranslations('ar')

  if (!course) {
    notFound()
  }

  return (
    <Container className="py-20">
      {/* خليها أعرض زي الإنجليزي (شيلنا max-w-4xl) */}
      <div className="mx-auto w-full max-w-7xl">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/ar/courses"
            className="text-sm text-black hover:text-primary dark:text-white dark:hover:text-primary-soft"
            >
            ← العودة للدورات
          </Link>
        </div>

        {/* Title + Meta */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
            {course.title.ar}
          </h1>

          {/* Label bold + value normal | black in light / white in dark */}
          <div className="flex flex-wrap gap-4 text-sm text-black dark:text-white">
            <span>
              <span className="font-bold">{t.courses.level}:</span>{' '}
              {course.level.ar}
            </span>

            <span>
              <span className="font-bold">{t.courses.duration}:</span>{' '}
              {course.duration.ar}
            </span>

            <span>
              <span className="font-bold">{t.courses.format}:</span>{' '}
              {course.format.ar}
            </span>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-textPrimary dark:text-textOnDark">
            {t.courses.overview}
          </h2>

          {/* Overview text black/white (not muted) */}
          <p className="text-lg text-black dark:text-white">
            {course.overview.ar}
          </p>
        </div>

        {/* Main Content - stacked cards (one per row) */}
        <div className="grid gap-8">
          {/* Who it's for */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-black dark:text-white">
                {t.courses.whoFor}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-black dark:text-white">
                {course.whoFor.ar.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="ml-2 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What you'll learn */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-black dark:text-white">
                {t.courses.learn}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-black dark:text-white">
                {course.learn.ar.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="ml-2 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-black dark:text-white">
                {t.courses.tools}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {course.tools.ar.map((tool, i) => (
                  <span
                    key={i}
                    className="
                      rounded-full
                      border
                      border-primary/40
                      bg-primary/10
                      px-3 py-1
                      text-sm
                      font-medium
                      text-primary
                      dark:border-primary/60
                      dark:bg-primary/30
                      dark:text-white
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Outcomes */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-black dark:text-white">
                {t.courses.outcomes}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-black dark:text-white">
                {course.outcomes.ar.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="ml-2 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Certificate */}
        <Card className="mt-8 bg-primary/5 dark:bg-primary/10">
          <CardContent className="pt-6">
            <h3 className="mb-2 text-xl font-semibold text-textPrimary dark:text-textOnDark">
              {t.courses.certificate}
            </h3>
            <p className="text-textMuted dark:text-textMuted">
              {t.courses.certificateText}
            </p>
          </CardContent>
        </Card>

        {/* Enroll */}
        <div className="mt-8 text-center">
          <Link href={`/ar/enroll?course=${course.slug}`}>
            <Button size="lg">{t.courses.enroll}</Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
