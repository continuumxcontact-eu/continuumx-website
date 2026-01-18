import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'
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
    title: `${course.title.en} — Continuum X OÜ`,
    description: course.overview.en,
  }
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug)
  const t = getTranslations('en')

  if (!course) {
    notFound()
  }

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/courses"
            className="text-sm text-textMuted hover:text-primary dark:text-textMuted dark:hover:text-primary-soft"
          >
            ← Back to Courses
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
            {course.title.en}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-textMuted dark:text-textMuted">
            <span>
              <strong>{t.courses.level}:</strong> {course.level.en}
            </span>
            <span>
              <strong>{t.courses.duration}:</strong> {course.duration.en}
            </span>
            <span>
              <strong>{t.courses.format}:</strong> {course.format.en}
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-textPrimary dark:text-textOnDark">
            {t.courses.overview}
          </h2>
          <p className="text-lg text-textMuted dark:text-textMuted">{course.overview.en}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t.courses.whoFor}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-textMuted dark:text-textMuted">
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
            <CardHeader>
              <CardTitle>{t.courses.learn}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-textMuted dark:text-textMuted">
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
            <CardHeader>
              <CardTitle>{t.courses.tools}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {course.tools.en.map((tool, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary dark:bg-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.courses.outcomes}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-textMuted dark:text-textMuted">
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

        <Card className="mt-8 bg-primary/5 dark:bg-primary/10">
          <CardContent className="pt-6">
            <h3 className="mb-2 text-xl font-semibold text-textPrimary dark:text-textOnDark">
              {t.courses.certificate}
            </h3>
            <p className="text-textMuted dark:text-textMuted">{t.courses.certificateText}</p>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href={`/enroll?course=${course.slug}`}>
            <Button size="lg">
              {t.courses.enroll}
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
