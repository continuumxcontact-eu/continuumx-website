import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'
import { ArrowRight } from 'lucide-react'

// ✅ IMPORTANT: Relative import to avoid alias issues
import { courses, diplomas } from '../../lib/courses'

export default function CoursesPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.courses.title}
        </h1>
        <p className="text-lg text-black dark:text-white">
          Professional certification programs to upskill your team and advance your career.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* ✅ DIPLOMAS FIRST */}
        {diplomas.map((d) => (
          <Card key={d.slug} className="flex h-full flex-col border-2 border-red-700">
            <CardHeader>
              <CardTitle className="text-black dark:text-white">{d.title.en}</CardTitle>
              <CardDescription className="text-black dark:text-white">
                <span className="font-semibold">{d.level.en}</span>
                <span className="mx-6"></span>
                <span className="font-semibold">{d.duration.en}</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col">
              <p className="mt-3 mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {d.overview.en}
              </p>

              <p className="mb-6 text-xs font-medium text-red-700">{d.note.en}</p>

              <div className="mt-auto">
                <Link href={`/diplomas/${d.slug}`}>
                  <Button variant="outline" className="w-full group">
                    {t.courses.viewDetails}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* ✅ COURSES */}
        {courses.map((c) => (
          <Card key={c.slug} className="flex h-full flex-col">
            <CardHeader>
              <CardTitle className="text-black dark:text-white">{c.title.en}</CardTitle>
              <CardDescription className="text-black dark:text-white">
                <span className="font-semibold">{c.level.en}</span>
                <span className="mx-6"></span>
                <span className="font-semibold">{c.duration.en}</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col">
              <p className="mt-3 mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {c.overview.en}
              </p>

              <div className="mt-auto">
                <Link href={`/courses/${c.slug}`}>
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
