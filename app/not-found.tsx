import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
}

export default function NotFound() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-6xl font-bold text-textPrimary dark:text-textOnDark">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-textPrimary dark:text-textOnDark">
          {t.notFound.title}
        </h2>
        <p className="mb-8 text-lg text-textMuted dark:text-textMuted">
          {t.notFound.message}
        </p>
        <Link href={getLocalizedPath('/', 'en')}>
          <Button size="lg">{t.notFound.home}</Button>
        </Link>
      </div>
    </Container>
  )
}
