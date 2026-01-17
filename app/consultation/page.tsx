import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { ConsultationForm } from '@/components/forms/consultation-form'
import { getTranslations } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Request a Consultation — Continuum X OÜ',
  description: 'Request a consultation for AI, data analytics, or training services.',
}

export default function ConsultationPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.forms.consultation.title}
        </h1>
        <ConsultationForm />
      </div>
    </Container>
  )
}
