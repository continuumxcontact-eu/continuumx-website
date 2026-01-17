import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'شكراً لك — Continuum X OÜ',
  description: 'شكراً لك على إرسال طلبك.',
}

export default function ArabicThankYouPage() {
  const t = getTranslations('ar')

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
        <Link href={getLocalizedPath('/', 'ar')}>
          <Button size="lg">{t.thankYou.home}</Button>
        </Link>
      </div>
    </Container>
  )
}
