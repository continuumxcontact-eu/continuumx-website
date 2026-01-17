import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Our Services — Continuum X OÜ',
  description:
    'AI & Data Consulting, BI & Dashboards, Custom AI Solutions, and Professional Training & Diplomas.',
}

export default function ServicesPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.services.title}
        </h1>
        <p className="text-lg text-textMuted dark:text-textMuted">
          Comprehensive solutions to transform your business with AI and data analytics.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t.services.ai.title}</CardTitle>
            <CardDescription>{t.services.ai.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="mb-6 space-y-2 text-sm text-textMuted dark:text-textMuted">
              {t.services.ai.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <Link href="/consultation">
              <Button>{t.services.cta}</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.services.bi.title}</CardTitle>
            <CardDescription>{t.services.bi.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="mb-6 space-y-2 text-sm text-textMuted dark:text-textMuted">
              {t.services.bi.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <Link href="/consultation">
              <Button>{t.services.cta}</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.services.custom.title}</CardTitle>
            <CardDescription>{t.services.custom.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="mb-6 space-y-2 text-sm text-textMuted dark:text-textMuted">
              {t.services.custom.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <Link href="/consultation">
              <Button>{t.services.cta}</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.services.training.title}</CardTitle>
            <CardDescription>{t.services.training.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="mb-6 space-y-2 text-sm text-textMuted dark:text-textMuted">
              {t.services.training.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <Link href="/courses">
              <Button>{t.services.cta}</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}
