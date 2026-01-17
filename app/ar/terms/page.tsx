import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'شروط الخدمة — Continuum X OÜ',
  description: 'شروط الخدمة لـ Continuum X OÜ.',
}

export default function ArabicTermsPage() {
  const t = getTranslations('ar')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.legal.terms.title}
        </h1>
        <p className="mb-8 text-sm text-textMuted dark:text-textMuted">
          {t.legal.terms.lastUpdated}
        </p>
        <div className="prose prose-lg max-w-none text-textMuted dark:prose-invert dark:text-textMuted">
          {t.legal.terms.content.map((paragraph, i) => (
            <p key={i} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Container>
  )
}
