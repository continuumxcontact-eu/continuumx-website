import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'
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

        {/* ✅ النص يبقى واضح: أسود في لايت / أبيض في دارك */}
        <p className="text-lg text-black dark:text-white">
          برامج شهادات احترافية لرفع مهارات فريقك وتطوير مسيرتك المهنية.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.slug} className="flex h-full flex-col">
            <CardHeader>
              {/* ✅ عنوان الكورس واضح */}
              <CardTitle className="text-black dark:text-white">
                {course.title.ar}
              </CardTitle>

              {/* ✅ Level/Duration واضحين */}
              <CardDescription className="text-black dark:text-white">
                {course.level.ar} • {course.duration.ar}
              </CardDescription>
              
            </CardHeader>

            {/* ✅ نخلي المحتوى flex-column عشان الزر يثبت تحت */}
            <CardContent className="flex flex-1 flex-col">
              {/* ✅ الوصف واضح */}
              <p className="mt-3 mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">

                {course.overview.ar}
              </p>

              {/* ✅ الزر ثابت تحت في كل كارت */}
              <div className="mt-auto">
                <Link href={`/ar/courses/${course.slug}`}>
                  <Button variant="outline" className="w-full group">
                    {t.courses.viewDetails}
                    <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
