import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'
import { ConsultationForm } from '@/components/forms/consultation-form'

export const metadata: Metadata = {
  title: 'Contact Us — Continuum X OÜ',
  description: 'Get in touch with Continuum X OÜ for AI, data analytics, and training inquiries.',
}

export default function ContactPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.contact.title}
        </h1>
        <div className="mb-8 space-y-4">
          <div>
            <h3 className="mb-2 font-semibold text-textPrimary dark:text-textOnDark">
              {t.contact.email}
            </h3>
            <a
              href="mailto:contact@continuumx-ai.com"
              className="text-textMuted hover:text-primary dark:text-textMuted dark:hover:text-primary-soft"
            >
              contact@continuumx-ai.com
            </a>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-textPrimary dark:text-textOnDark">
              {t.contact.address}
            </h3>
            <p className="text-textMuted dark:text-textMuted">{t.contact.addressValue}</p>
          </div>
        </div>
        <ConsultationForm />
      </div>
    </Container>
  )
}
