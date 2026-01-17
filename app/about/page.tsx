import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'About Us — Continuum X OÜ',
  description:
    'Continuum X OÜ is an EU-registered company based in Tallinn, Estonia, specializing in AI, data analytics, business intelligence, and professional training.',
}

export default function AboutPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.about.title}
        </h1>
        <div className="prose prose-lg max-w-none text-textMuted dark:prose-invert dark:text-textMuted">
          <p className="text-lg leading-relaxed">{t.about.content}</p>
        </div>
      </div>
    </Container>
  )
}
