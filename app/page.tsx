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
  title: 'Continuum X',
  description:
    'Where Intelligence Shapes Reality. AI-powered solutions and training that build intelligent systems and confident decision-makers.',
}

export default function HomePage() {
  const t = getTranslations('en')

  // ✅ Services cards: ثابت tint + hover border فقط (بدون حركة)
  const homeCardClass =
    'flex h-full flex-col ' +
    'border-2 border-transparent ' +
    'bg-red-50/40 dark:bg-red-950/20 ' +
    'hover:border-red-700 ' +
    'transition-colors duration-200'

  // ✅ Text styling inside cards (consistent alignment & spacing)
  const cardTitleClass = 'text-left text-xl font-semibold text-black dark:text-white'
  const cardDescClass =
    'mt-2 text-left text-sm leading-relaxed text-black/80 dark:text-white/80'
  const listClass =
    'mt-4 space-y-2 text-left text-sm leading-relaxed text-gray-700 dark:text-gray-300'
  const bulletDotClass = 'mt-[2px] mr-3 text-red-700'

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            {/* Brand Title */}
            <h1 className="mb-4 text-5xl font-semibold tracking-tight text-textPrimary sm:text-6xl md:text-7xl dark:text-textOnDark">
              Continuum{' '}
              <span className="font-black tracking-wide text-primary">X</span>
            </h1>

            {/* Tagline */}
            <p className="mb-6 text-lg font-semibold text-neutral-800 sm:text-xl dark:text-neutral-200">
              Where Intelligence Shapes Reality
            </p>

            {/* Main Description */}
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl dark:text-neutral-400">
              AI-powered solutions and training that build intelligent systems and
              confident decision-makers.
            </p>

            {/* Trust line */}
            <p className="mb-10 text-sm font-medium text-textMuted dark:text-textMuted">
              {t.home.trust}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/courses">
                <Button size="lg" className="group">
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/consultation">
                <Button size="lg" variant="outline">
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="bg-surfaceLight py-20 dark:bg-surfaceDark">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold text-textPrimary dark:text-textOnDark">
            {t.services.title}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* 1) AI & Data Consulting */}
            <Card className={homeCardClass}>
              <CardHeader>
                <CardTitle className={cardTitleClass}>{t.services.ai.title}</CardTitle>
                <CardDescription className={cardDescClass}>
                  {t.services.ai.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <ul className={listClass}>
                  {t.services.ai.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className={bulletDotClass}>•</span>
                      <span className="flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link href="/consultation">
                    <Button variant="outline" size="sm" className="w-full group">
                      {t.services.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 2) BI & Dashboards */}
            <Card className={homeCardClass}>
              <CardHeader>
                <CardTitle className={cardTitleClass}>{t.services.bi.title}</CardTitle>
                <CardDescription className={cardDescClass}>
                  {t.services.bi.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <ul className={listClass}>
                  {t.services.bi.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className={bulletDotClass}>•</span>
                      <span className="flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link href="/consultation">
                    <Button variant="outline" size="sm" className="w-full group">
                      {t.services.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 3) Custom AI Solutions */}
            <Card className={homeCardClass}>
              <CardHeader>
                <CardTitle className={cardTitleClass}>
                  {t.services.custom.title}
                </CardTitle>
                <CardDescription className={cardDescClass}>
                  {t.services.custom.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <ul className={listClass}>
                  {t.services.custom.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className={bulletDotClass}>•</span>
                      <span className="flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link href="/consultation">
                    <Button variant="outline" size="sm" className="w-full group">
                      {t.services.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 4) Training & Diplomas */}
            <Card className={homeCardClass}>
              <CardHeader>
                <CardTitle className={cardTitleClass}>
                  {t.services.training.title}
                </CardTitle>
                <CardDescription className={cardDescClass}>
                  {t.services.training.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <ul className={listClass}>
                  {t.services.training.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className={bulletDotClass}>•</span>
                      <span className="flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link href="/courses">
                    <Button variant="outline" size="sm" className="w-full group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
