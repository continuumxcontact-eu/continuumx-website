'use server'

import { z } from 'zod'
import { supabaseServer } from './supabase-server'
import { Resend } from 'resend'

/** =========================
 *  Schemas
 *  ========================= */

const enrollmentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  country: z.string().min(1, 'Country is required'),
  background: z.string().min(1, 'Background is required'),
  course: z.string().min(1, 'Course is required'),
  schedule: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, 'Consent is required'),
})

const consultationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  serviceType: z.string().min(1, 'Service type is required'),
  budget: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  consent: z.boolean().refine((val) => val === true, 'Consent is required'),
})

/** =========================
 *  Email (Resend)
 *  ========================= */

async function sendResendEmail(subject: string, text: string, html: string) {
  const resendKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'continuumx.contact@gmail.com'

  if (!resendKey) {
    console.warn('RESEND_API_KEY not set. Email notification skipped.')
    return
  }

  const resend = new Resend(resendKey)

  await resend.emails.send({
    from: 'Continuum X <no-reply@resend.dev>',
    to: [toEmail],
    subject,
    text,
    html,
  })
}

/** =========================
 *  Enrollment
 *  ========================= */

export async function submitEnrollment(formData: FormData) {
  const rawData = {
    name: (formData.get('name') as string) || '',
    email: (formData.get('email') as string) || '',
    phone: (formData.get('phone') as string) || '',
    country: (formData.get('country') as string) || '',
    background: (formData.get('background') as string) || '',
    course: (formData.get('course') as string) || '',
    schedule: ((formData.get('schedule') as string) || '').trim(),
    message: ((formData.get('message') as string) || '').trim(),
    consent: formData.get('consent') === 'on',
  }

  const validation = enrollmentSchema.safeParse(rawData)
  if (!validation.success) {
    return { success: false, errors: validation.error.flatten().fieldErrors }
  }

  const data = validation.data

  // ✅ Save to Supabase (matches your table columns)
  const { error } = await supabaseServer.from('enrollments').insert({
    full_name: data.name, // ✅ your column is full_name
    email: data.email,
    phone: data.phone || null,
    country: data.country || null,
    background: data.background || null,
    course: data.course || null,
    schedule: data.schedule ? data.schedule : null,
    message: data.message ? data.message : null,
    // ❌ do NOT send consent (column not in your table)
    // ❌ do NOT send created_at (you already have default now())
  })

  if (error) {
    console.error('Enrollment insert error:', error)
    return { success: false, errors: { _form: [error.message] } }
  }

  // Email notification (does not block success)
  try {
    const subject = `New Course Enrollment: ${data.course}`
    const text = `
New Course Enrollment

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Country: ${data.country}
Background: ${data.background}
Course: ${data.course}
Schedule: ${data.schedule || 'Not specified'}
Message: ${data.message || 'None'}
`.trim()

    const html = `
      <h2>New Course Enrollment</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Country:</strong> ${data.country}</p>
      <p><strong>Background:</strong> ${data.background}</p>
      <p><strong>Course:</strong> ${data.course}</p>
      <p><strong>Schedule:</strong> ${data.schedule || 'Not specified'}</p>
      <p><strong>Message:</strong> ${data.message || 'None'}</p>
    `

    await sendResendEmail(subject, text, html)
  } catch (e) {
    console.warn('Enrollment email failed (ignored):', e)
  }

  return { success: true }
}

/** =========================
 *  Consultation
 *  ========================= */

export async function submitConsultation(formData: FormData) {
  const rawData = {
    name: (formData.get('name') as string) || '',
    email: (formData.get('email') as string) || '',
    company: ((formData.get('company') as string) || '').trim(),
    serviceType: (formData.get('serviceType') as string) || '',
    budget: ((formData.get('budget') as string) || '').trim(),
    message: (formData.get('message') as string) || '',
    consent: formData.get('consent') === 'on',
  }

  const validation = consultationSchema.safeParse(rawData)
  if (!validation.success) {
    return { success: false, errors: validation.error.flatten().fieldErrors }
  }

  const data = validation.data

  // ⚠️ Keep as-is since it works for you
  const { error } = await supabaseServer.from('consultations').insert({
    name: data.name,
    email: data.email,
    company: data.company ? data.company : null,
    service_type: data.serviceType,
    budget: data.budget ? data.budget : null,
    message: data.message,
    // لو جدول consultations عندك مفيهوش consent امسحي السطر ده
    // consent: data.consent,
  })

  if (error) {
    console.error('Consultation insert error:', error)
    return { success: false, errors: { _form: [error.message] } }
  }

  // Email notification (does not block success)
  try {
    const subject = `New Consultation Request: ${data.serviceType}`
    const text = `
New Consultation Request

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not specified'}
Service Type: ${data.serviceType}
Budget: ${data.budget || 'Not specified'}
Message: ${data.message}
`.trim()

    const html = `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || 'Not specified'}</p>
      <p><strong>Service Type:</strong> ${data.serviceType}</p>
      <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `

    await sendResendEmail(subject, text, html)
  } catch (e) {
    console.warn('Consultation email failed (ignored):', e)
  }

  return { success: true }
}
