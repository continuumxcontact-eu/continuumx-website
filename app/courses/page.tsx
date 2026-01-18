import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'
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

        {/* ✅ Text black/white (not muted) */}
        <p className="text-lg text-black dark:text-white">
          Professional certification programs to upskill your team and advance your career.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.slug} className="flex h-full flex-col">
            <CardHeader>
              {/* ✅ Title black/white */}
              <CardTitle className="text-black dark:text-white">
                {course.title.en}
              </CardTitle>

              {/* ✅ Meta black/white */}
              <CardDescription className="text-black dark:text-white">
  <span className="font-semibold">{course.level.en}</span>
  <span className="mx-6"></span>
  <span className="font-semibold">{course.duration.en}</span>
</CardDescription>

            </CardHeader>

            {/* ✅ Flex column so button sticks to bottom */}
            <CardContent className="flex flex-1 flex-col">
              {/* ✅ Description black/white */}
              <p className="mt-3 mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">

                {course.overview.en}
              </p>

              {/* ✅ Button always at the bottom */}
              <div className="mt-auto">
                <Link href={`/courses/${course.slug}`}>
                  <Button variant="outline" className="w-full group">
                    {t.courses.viewDetails}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
