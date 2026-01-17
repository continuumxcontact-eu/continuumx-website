import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'
import { courses } from '@/lib/courses'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Courses — Continuum X OÜ',
  description:
    'Professional training programs in Data Analytics, Power BI, Machine Learning, AI Tools, Supply Chain Analytics, and Deep Learning.',
}

export default function CoursesPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.courses.title}
        </h1>
        <p className="text-lg text-textMuted dark:text-textMuted">
          Professional certification programs to upskill your team and advance your career.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle>{course.title.en}</CardTitle>
              <CardDescription>
                {course.level.en} • {course.duration.en}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="mb-4 text-sm text-textMuted dark:text-textMuted">
                {course.overview.en}
              </p>
              <Link href={`/courses/${course.slug}`}>
                <Button variant="outline" className="w-full group">
                  {t.courses.viewDetails}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:ml-0 rtl:mr-2 rtl:group-hover:-translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
