import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You — Continuum X OÜ',
  description: 'Thank you for your submission.',
}

export default function ThankYouPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <CheckCircle className="mx-auto mb-6 h-16 w-16 text-primary" />
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.thankYou.title}
        </h1>
        <p className="mb-8 text-lg text-textMuted dark:text-textMuted">
          {t.thankYou.message}
        </p>
        <Link href={getLocalizedPath('/', 'en')}>
          <Button size="lg">{t.thankYou.home}</Button>
        </Link>
      </div>
    </Container>
  )
}
