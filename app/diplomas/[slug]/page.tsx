import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'
import { ArrowRight } from 'lucide-react'

// ✅ IMPORTANT: Relative import
import { diplomas, getDiploma, getDiplomaCourses } from '../../../lib/courses'

export async function generateStaticParams() {
  return diplomas.map((d) => ({ slug: d.slug }))
}

export default function DiplomaDetailPage({ params }: { params: { slug: string } }) {
  const t = getTranslations('en')
  const diploma = getDiploma(params.slug)

  if (!diploma) notFound()

  const includedCourses = getDiplomaCourses(diploma)

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/courses"
            className="
              inline-flex items-center gap-2
              text-sm text-black dark:text-white
              border-b-2 border-transparent
              hover:border-red-700
              transition-colors
            "
          >
            ← Back to Courses
          </Link>
        </div>

        <div className="mb-10">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
            {diploma.title.en}
          </h1>

          {/* ✅ Level + Duration + Format (Duration forced to new line) */}
          <div className="text-sm text-black dark:text-white space-y-1">
            <div>
              <span className="font-bold">{t.courses.level}:</span> {diploma.level.en}
            </div>

            <div>
              <span className="font-bold">{t.courses.duration}:</span> {diploma.duration.en}
            </div>

            <div>
              <span className="font-bold">{t.courses.format}:</span> {diploma.format.en}
            </div>
          </div>
        </div>

        <p className="mb-6 text-lg text-black dark:text-white">{diploma.overview.en}</p>

        {/* ✅ Diploma note (frame appears only on hover) */}
        <Card
          className="
            mt-10 mb-10
            border-2 border-transparent
            hover:border-red-700
            transition-all duration-200
          "
        >
          <CardHeader>
            <CardTitle className="text-black dark:text-white">Diploma Policy</CardTitle>
            <CardDescription className="text-gray-700 dark:text-gray-300">
              {diploma.note.en}
            </CardDescription>
          </CardHeader>
        </Card>

        <h2 className="mb-6 text-2xl font-semibold text-textPrimary dark:text-textOnDark">
          Included Courses
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {includedCourses.map((course) => (
            <Card
              key={course.slug}
              className="
                flex h-full flex-col
                border-2 border-transparent
                hover:border-red-700
                transition-all duration-200
              "
            >
              <CardHeader>
                <CardTitle className="text-black dark:text-white">{course.title.en}</CardTitle>

                {/* ✅ SAFE: CardDescription is <p>, so use spans (block) not divs */}
                <CardDescription className="text-black dark:text-white">
                  <span className="block font-semibold">{course.level.en}</span>
                  <span className="block font-semibold">{course.duration.en}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <p className="mt-3 mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {course.overview.en}
                </p>

                <div className="mt-auto">
                  <Link href={`/courses/${course.slug}`}>
                    <Button variant="outline" className="w-full group">
                      View Course Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  )
}
