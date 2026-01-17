import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { EnrollmentForm } from '@/components/forms/enrollment-form'
import { getTranslations } from '@/lib/i18n'
export const dynamic = 'force-dynamic'


export const metadata: Metadata = {
  title: 'Enroll in a Course — Continuum X OÜ',
  description: 'Enroll in one of our professional training courses.',
}

export default function EnrollPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
          {t.forms.enrollment.title}
        </h1>
        <EnrollmentForm />
      </div>
    </Container>
  )
}
