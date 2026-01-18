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
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Continuum X — AI, Data & Analytics for Real-World Impact',
  description:
    'We deliver professional training programs and AI-driven business solutions to help teams and organizations make smarter decisions.',
}

export default function HomePage() {
  const t = getTranslations('en')

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl md:text-6xl dark:text-textOnDark">
              {t.home.h1}
            </h1>
            <p className="mb-8 text-lg text-textMuted sm:text-xl dark:text-textMuted">
              {t.home.subtext}
            </p>
            <p className="mb-10 text-sm font-medium text-textMuted dark:text-textMuted">
              {t.home.trust}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/courses">
                <Button size="lg" className="group">
                  {t.home.ctaCourses}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/consultation">
                <Button size="lg" variant="outline">
                  {t.home.ctaConsultation}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold text-textPrimary dark:text-textOnDark">
            {t.services.title}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* AI & Data Consulting */}
            <Card className="flex h-full flex-col">
              <CardHeader>
                <CardTitle>{t.services.ai.title}</CardTitle>
                <CardDescription>{t.services.ai.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <ul className="space-y-2 text-sm text-textMuted dark:text-textMuted">
                  {t.services.ai.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Button fixed at bottom */}
                <div className="mt-auto pt-6">
                  <Link href="/consultation">
                    <Button variant="outline" size="sm" className="w-full">
                      {t.services.cta}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* BI & Dashboards */}
            <Card className="flex h-full flex-col">
              <CardHeader>
                <CardTitle>{t.services.bi.title}</CardTitle>
                <CardDescription>{t.services.bi.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <ul className="space-y-2 text-sm text-textMuted dark:text-textMuted">
                  {t.services.bi.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link href="/consultation">
                    <Button variant="outline" size="sm" className="w-full">
                      {t.services.cta}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Custom AI Solutions */}
            <Card className="flex h-full flex-col">
              <CardHeader>
                <CardTitle>{t.services.custom.title}</CardTitle>
                <CardDescription>{t.services.custom.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <ul className="space-y-2 text-sm text-textMuted dark:text-textMuted">
                  {t.services.custom.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link href="/consultation">
                    <Button variant="outline" size="sm" className="w-full">
                      {t.services.cta}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Training & Diplomas */}
            <Card className="flex h-full flex-col">
              <CardHeader>
                <CardTitle>{t.services.training.title}</CardTitle>
                <CardDescription>{t.services.training.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <ul className="space-y-2 text-sm text-textMuted dark:text-textMuted">
                  {t.services.training.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link href="/courses">
                    <Button variant="outline" size="sm" className="w-full">
                    View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}
