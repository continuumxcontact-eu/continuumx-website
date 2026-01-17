import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'
import { courses } from '@/lib/courses'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'دوراتنا — Continuum X OÜ',
  description:
    'برامج تدريب احترافية في تحليلات البيانات، Power BI، التعلم الآلي، أدوات الذكاء الاصطناعي، تحليلات سلسلة التوريد، والتعلم العميق.',
}

export default function ArabicCoursesPage() {
  const t = getTranslations('ar')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.courses.title}
        </h1>
        <p className="text-lg text-textMuted dark:text-textMuted">
          برامج شهادات احترافية لرفع مهارات فريقك وتطوير مسيرتك المهنية.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle>{course.title.ar}</CardTitle>
              <CardDescription>
                {course.level.ar} • {course.duration.ar}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="mb-4 text-sm text-textMuted dark:text-textMuted">
                {course.overview.ar}
              </p>
              <Link href={`/ar/courses/${course.slug}`}>
                <Button variant="outline" className="w-full group">
                  {t.courses.viewDetails}
                  <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
