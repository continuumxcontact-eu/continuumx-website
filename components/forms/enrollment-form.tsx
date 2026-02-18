'use client'

import { useEffect, useMemo, useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLanguage } from '@/components/providers'
import { getTranslations, getLocalizedPath } from '@/lib/i18n'
import { courses } from '@/lib/courses'
import { submitEnrollment } from '@/lib/actions'
import { sessions } from '@/app/data/courseSessions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function EnrollmentForm() {
  // ✅ If you want to DISABLE coming-soon courses in the dropdown, set this to true
  const DISABLE_COMING_SOON_COURSES = true

  const { locale } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()
  const t = getTranslations(locale)

  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const [selectedCourse, setSelectedCourse] = useState(
    searchParams.get('course') || ''
  )

  // Dynamic sessions
  const [selectedSession, setSelectedSession] = useState('')

  // Build a set of course slugs that have at least 1 ACTIVE session
  const activeCourseSlugs = useMemo(() => {
    const set = new Set<string>()
    sessions.forEach((s) => {
      if (s.isActive) set.add(s.courseSlug)
    })
    return set
  }, [])

  // ✅ NEW: If URL preselects a Coming-Soon course, clear it
  // (so it behaves like before and doesn't "stick")
  useEffect(() => {
    if (selectedCourse && !activeCourseSlugs.has(selectedCourse)) {
      setSelectedCourse('')
    }
  }, [selectedCourse, activeCourseSlugs])

  // Sort courses so AVAILABLE are on top (then keep original order within each group)
  const sortedCourses = useMemo(() => {
    return [...courses].sort((a, b) => {
      const aAvailable = activeCourseSlugs.has(a.slug)
      const bAvailable = activeCourseSlugs.has(b.slug)

      if (aAvailable === bAvailable) return 0
      return aAvailable ? -1 : 1
    })
  }, [activeCourseSlugs])

  // Only show ACTIVE sessions for the selected course
  const sessionOptions = useMemo(() => {
    if (!selectedCourse) return []
    return sessions.filter((s) => s.courseSlug === selectedCourse && s.isActive)
  }, [selectedCourse])

  // Reset session when course changes
  useEffect(() => {
    setSelectedSession('')
  }, [selectedCourse])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const formData = new FormData(e.currentTarget)

    // If no active sessions exist for the course, we still allow submitting interest.
    // We'll store schedule as TBD.
    const picked = sessions.find((s) => s.id === selectedSession)

    if (picked) {
      formData.set('schedule', picked.id)
      formData.set('scheduleLabel', picked.label)
    } else {
      formData.set('schedule', 'TBD')
      formData.set('scheduleLabel', 'To be announced')
    }

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
        { /* <CardTitle>{t.forms.enrollment.title}</CardTitle> */ }
        <CardDescription className="text-black leading-relaxed">
          Thank you for your interest in Continuum X professional training programs.
          <br />
          Please fill in the form below to reserve your seat.
          <br />
          You will receive a confirmation email with payment details once the course is confirmed.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t.forms.enrollment.name} *
            </label>
            <Input
              name="name"
              required
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name[0]}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t.forms.enrollment.email} *
            </label>
            <Input
              name="email"
              type="email"
              required
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email[0]}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t.forms.enrollment.phone} *
            </label>
            <Input
              name="phone"
              type="tel"
              required
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone[0]}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t.forms.enrollment.country} *
            </label>
            <Input
              name="country"
              required
              className={errors.country ? 'border-red-500' : ''}
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-500">{errors.country[0]}</p>
            )}
          </div>

          {/* Background */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t.forms.enrollment.background} *
            </label>
            <Select
              name="background"
              required
              className={errors.background ? 'border-red-500' : ''}
            >
              <option value="">Select...</option>
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
              <option value="Engineer">Engineer</option>
              <option value="Business Owner">Business Owner</option>
              <option value="Other">Other</option>
            </Select>
            {errors.background && (
              <p className="mt-1 text-sm text-red-500">{errors.background[0]}</p>
            )}
          </div>

          {/* Course */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t.forms.enrollment.course} *
            </label>

            <Select
              name="course"
              required
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className={errors.course ? 'border-red-500' : ''}
            >
              <option value="">Select...</option>

              {sortedCourses.map((course) => {
                const available = activeCourseSlugs.has(course.slug)
                const comingSoon = !available
                const label = `${course.title.en}${comingSoon ? ' — Coming Soon' : ''}`

                return (
                  <option
                    key={course.slug}
                    value={course.slug}
                    disabled={DISABLE_COMING_SOON_COURSES ? comingSoon : false}
                    className={comingSoon ? 'italic text-gray-500' : ''}
                  >
                    {label}
                  </option>
                )
              })}
            </Select>

            {errors.course && (
              <p className="mt-1 text-sm text-red-500">{errors.course[0]}</p>
            )}

            <p className="mt-2 text-xs text-gray-500">
              Courses marked as <span className="italic">Coming Soon</span> will open
              for scheduling once dates are announced.
            </p>
          </div>

          {/* Dynamic Schedule */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Course Date / Schedule {sessionOptions.length > 0 ? '*' : ''}
            </label>

            <Select
              name="schedule"
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
              disabled={!selectedCourse || sessionOptions.length === 0}
              required={!!selectedCourse && sessionOptions.length > 0}
              className={errors.schedule ? 'border-red-500' : ''}
            >
              <option value="">
                {!selectedCourse
                  ? 'Select a course first'
                  : sessionOptions.length === 0
                    ? 'No dates available yet'
                    : 'Select...'}
              </option>

              {sessionOptions.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </Select>

            {selectedCourse && sessionOptions.length === 0 && (
              <p className="mt-2 text-sm text-gray-500">
                No dates available for this course yet. Submit your interest and we
                will contact you once the schedule is confirmed.
              </p>
            )}

            {errors.schedule && (
              <p className="mt-1 text-sm text-red-500">{errors.schedule[0]}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {t.forms.enrollment.message}
            </label>
            <Textarea name="message" rows={4} />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-2">
            <Checkbox
              name="consent"
              required
              className={errors.consent ? 'border-red-500' : ''}
            />
            <label className="text-sm">{t.forms.enrollment.consent}</label>
          </div>

          {errors.consent && (
            <p className="text-sm text-red-500">{errors.consent[0]}</p>
          )}

          {errors._form && <p className="text-sm text-red-500">{errors._form[0]}</p>}

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? 'Submitting...' : t.forms.enrollment.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
