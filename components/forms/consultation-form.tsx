'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/providers'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'
import { submitConsultation } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ConsultationForm() {
  const { locale } = useLanguage()
  const router = useRouter()
  const t = getTranslations(locale)
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await submitConsultation(formData)

      if (result.success) {
        router.push(getLocalizedPath('/thank-you', locale))
      } else {
        setErrors(result.errors || {})
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.forms.consultation.title}</CardTitle>
        <CardDescription>
          {locale === 'ar'
            ? 'املأ النموذج أدناه لطلب استشارة.'
            : 'Fill out the form below to request a consultation.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.consultation.name} *
            </label>
            <Input
              id="name"
              name="name"
              required
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.consultation.email} *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.consultation.company}
            </label>
            <Input
              id="company"
              name="company"
            />
          </div>

          <div>
            <label htmlFor="serviceType" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.consultation.serviceType} *
            </label>
            <Select
              id="serviceType"
              name="serviceType"
              required
              className={errors.serviceType ? 'border-red-500' : ''}
            >
              <option value="">{locale === 'ar' ? 'اختر...' : 'Select...'}</option>
              <option value={locale === 'ar' ? 'لوحات المعلومات' : 'Dashboards'}>
                {t.forms.consultation.serviceOptions.dashboards}
              </option>
              <option value={locale === 'ar' ? 'استشارات الذكاء الاصطناعي' : 'AI Consulting'}>
                {t.forms.consultation.serviceOptions.aiConsulting}
              </option>
              <option value={locale === 'ar' ? 'التدريب' : 'Training'}>
                {t.forms.consultation.serviceOptions.training}
              </option>
              <option value={locale === 'ar' ? 'آخر' : 'Other'}>
                {t.forms.consultation.serviceOptions.other}
              </option>
            </Select>
            {errors.serviceType && (
              <p className="mt-1 text-sm text-red-500">{errors.serviceType[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.consultation.budget}
            </label>
            <Select id="budget" name="budget">
              <option value="">{locale === 'ar' ? 'اختر...' : 'Select...'}</option>
              <option value={locale === 'ar' ? '......' : '.....'}>
              </option> 
                {/* {t.forms.consultation.budgetOptions.under1k} */}
             {/*   <option value={locale === 'ar' ? '1,000 – 5,000 يورو' : '€1,000 – €5,000'}>
                {t.forms.consultation.budgetOptions['1k-5k']}
              </option>
              <option value={locale === 'ar' ? '5,000 – 15,000 يورو' : '€5,000 – €15,000'}>
                {t.forms.consultation.budgetOptions['5k-15k']}
              </option>
              <option value={locale === 'ar' ? '15,000+ يورو' : '€15,000+'}>
                {t.forms.consultation.budgetOptions.over15k}
              
             </option>*/}
          
            </Select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.consultation.message} *
            </label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              required
              className={errors.message ? 'border-red-500' : ''}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message[0]}</p>
            )}
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="consent"
              name="consent"
              required
              className={errors.consent ? 'border-red-500' : ''}
            />
            <label
              htmlFor="consent"
              className="text-sm text-textMuted dark:text-textMuted"
            >
              {t.forms.enrollment.consent}
            </label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-500">{errors.consent[0]}</p>
          )}

          {errors._form && (
            <p className="text-sm text-red-500">{errors._form[0]}</p>
          )}

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending
              ? locale === 'ar'
                ? 'جاري الإرسال...'
                : 'Submitting...'
              : t.forms.consultation.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
