import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Privacy Policy — Continuum X OÜ',
  description: 'Privacy Policy for Continuum X OÜ.',
}

export default function PrivacyPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.legal.privacy.title}
        </h1>
        <p className="mb-8 text-sm text-textMuted dark:text-textMuted">
          {t.legal.privacy.lastUpdated}
        </p>
        <div className="prose prose-lg max-w-none text-black dark:text-white leading-relaxed">
          {t.legal.privacy.content.map((paragraph, i) => (
            <p key={i} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Container>
  )
}
