import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { EnrollmentForm } from '@/components/forms/enrollment-form'
import { getTranslations } from '@/lib/i18n'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'التسجيل في دورة — Continuum X OÜ',
  description: 'سجل في إحدى برامجنا التدريبية الاحترافية.',
}

export default function ArabicEnrollPage() {
  const t = getTranslations('ar')

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
