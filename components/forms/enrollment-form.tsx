'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLanguage } from '@/components/providers'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'
import { courses } from '@/lib/courses'
import { submitEnrollment } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function EnrollmentForm() {
  const { locale } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()
  const t = getTranslations(locale)
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [selectedCourse, setSelectedCourse] = useState(
    searchParams.get('course') || ''
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await submitEnrollment(formData)

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
        <CardTitle>{t.forms.enrollment.title}</CardTitle>
        <CardDescription>
          {locale === 'ar'
            ? 'املأ النموذج أدناه للتسجيل في إحدى دوراتنا.'
            : 'Fill out the form below to enroll in one of our courses.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.enrollment.name} *
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
              {t.forms.enrollment.email} *
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
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.enrollment.phone} *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="country" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.enrollment.country} *
            </label>
            <Input
              id="country"
              name="country"
              required
              className={errors.country ? 'border-red-500' : ''}
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-500">{errors.country[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="background" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.enrollment.background} *
            </label>
            <Select
              id="background"
              name="background"
              required
              className={errors.background ? 'border-red-500' : ''}
            >
              <option value="">{locale === 'ar' ? 'اختر...' : 'Select...'}</option>
              <option value={locale === 'ar' ? 'طالب' : 'Student'}>
                {t.forms.enrollment.backgroundOptions.student}
              </option>
              <option value={locale === 'ar' ? 'محترف' : 'Professional'}>
                {t.forms.enrollment.backgroundOptions.professional}
              </option>
              <option value={locale === 'ar' ? 'مهندس' : 'Engineer'}>
                {t.forms.enrollment.backgroundOptions.engineer}
              </option>
              <option value={locale === 'ar' ? 'صاحب عمل' : 'Business Owner'}>
                {t.forms.enrollment.backgroundOptions.businessOwner}
              </option>
              <option value={locale === 'ar' ? 'آخر' : 'Other'}>
                {t.forms.enrollment.backgroundOptions.other}
              </option>
            </Select>
            {errors.background && (
              <p className="mt-1 text-sm text-red-500">{errors.background[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="course" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.enrollment.course} *
            </label>
            <Select
              id="course"
              name="course"
              required
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className={errors.course ? 'border-red-500' : ''}
            >
              <option value="">{locale === 'ar' ? 'اختر...' : 'Select...'}</option>
              {courses.map((course) => (
                <option key={course.slug} value={course.slug}>
                  {course.title[locale]}
                </option>
              ))}
            </Select>
            {errors.course && (
              <p className="mt-1 text-sm text-red-500">{errors.course[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="schedule" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.enrollment.schedule}
            </label>
            <Select id="schedule" name="schedule">
              <option value="">{locale === 'ar' ? 'اختر...' : 'Select...'}</option>
              <option value={locale === 'ar' ? 'أمسيات أيام الأسبوع' : 'Weekdays evenings'}>
                {t.forms.enrollment.scheduleOptions.weekdays}
              </option>
              <option value={locale === 'ar' ? 'عطلات نهاية الأسبوع' : 'Weekends'}>
                {t.forms.enrollment.scheduleOptions.weekends}
              </option>
              <option value={locale === 'ar' ? 'مرن' : 'Flexible'}>
                {t.forms.enrollment.scheduleOptions.flexible}
              </option>
            </Select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-textPrimary dark:text-textOnDark">
              {t.forms.enrollment.message}
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
            />
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
              : t.forms.enrollment.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
