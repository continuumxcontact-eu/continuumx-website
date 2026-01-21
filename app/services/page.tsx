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
  title: 'Our Services — Continuum X OÜ',
  description:
    'AI & Data Consulting, BI & Dashboards, Custom AI Solutions, and Professional Training & Diplomas.',
}

export default function ServicesPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.services.title}
        </h1>
        <p className="text-lg text-black dark:text-white">
          Comprehensive solutions to transform your business with AI and data analytics.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {/* 1) AI & Data Consulting */}
        <Card
          className="
            flex h-full flex-col
            border-2 border-transparent
            hover:border-red-700
            transition-all duration-200
          "
        >
          <CardHeader>
            <CardTitle className="text-black dark:text-white">{t.services.ai.title}</CardTitle>
            <CardDescription className="text-black dark:text-white">
              {t.services.ai.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col">
            <ul className="mt-2 mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {t.services.ai.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-red-700">•</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link href="/consultation">
                <Button variant="outline" className="w-full group">
                  {t.services.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 2) BI & Dashboards */}
        <Card
          className="
            flex h-full flex-col
            border-2 border-transparent
            hover:border-red-700
            transition-all duration-200
          "
        >
          <CardHeader>
            <CardTitle className="text-black dark:text-white">{t.services.bi.title}</CardTitle>
            <CardDescription className="text-black dark:text-white">
              {t.services.bi.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col">
            <ul className="mt-2 mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {t.services.bi.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-red-700">•</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link href="/consultation">
                <Button variant="outline" className="w-full group">
                  {t.services.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 3) Custom AI Solutions */}
        <Card
          className="
            flex h-full flex-col
            border-2 border-transparent
            hover:border-red-700
            transition-all duration-200
          "
        >
          <CardHeader>
            <CardTitle className="text-black dark:text-white">
              {t.services.custom.title}
            </CardTitle>
            <CardDescription className="text-black dark:text-white">
              {t.services.custom.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col">
            <ul className="mt-2 mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {t.services.custom.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-red-700">•</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link href="/consultation">
                <Button variant="outline" className="w-full group">
                  {t.services.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 4) Training & Diplomas */}
       {/* 4) Training & Diplomas */}
<Card
  className="
    flex h-full flex-col
    border-2 border-transparent
    hover:border-red-700
    transition-all duration-200
  "
>
  <CardHeader>
    <CardTitle className="text-black dark:text-white">
      {t.services.training.title}
    </CardTitle>
    <CardDescription className="text-black dark:text-white">
      {t.services.training.description}
    </CardDescription>
  </CardHeader>

  <CardContent className="flex flex-1 flex-col">
    <ul className="mt-2 mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
      {t.services.training.bullets.map((bullet, i) => (
        <li key={i} className="flex items-start">
          <span className="mr-2 text-red-700">•</span>
          {bullet}
        </li>
      ))}
    </ul>

    <div className="mt-auto">
      <Link href="/courses">
        <Button variant="outline" className="w-full group">
          {t.courses.viewDetails}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  </CardContent>
</Card>

      </div>
    </Container>
  )
}
