'use server'

import { z } from 'zod'
import { promises as fs } from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

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

type EnrollmentFormData = z.infer<typeof enrollmentSchema> & { submittedAt?: string }
type ConsultationFormData = z.infer<typeof consultationSchema> & { submittedAt?: string }

async function sendEmail(subject: string, html: string, text: string) {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const toEmail = process.env.TO_EMAIL || 'continuumx.contact@gmail.com'

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.warn('SMTP configuration not set. Email notification skipped.')
    return { success: false, error: 'SMTP not configured' }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: smtpUser,
      to: toEmail,
      subject,
      text,
      html,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: String(error) }
  }
}

async function saveEnrollment(data: EnrollmentFormData) {
  const dataDir = path.join(process.cwd(), 'data')
  const filePath = path.join(dataDir, 'enrollments.json')

  try {
    await fs.mkdir(dataDir, { recursive: true })
    let enrollments: EnrollmentFormData[] = []

    try {
      const fileContent = await fs.readFile(filePath, 'utf-8')
      enrollments = JSON.parse(fileContent)
    } catch {
      // File doesn't exist yet, start with empty array
    }

    enrollments.push({
      ...data,
      submittedAt: new Date().toISOString(),
    })

    await fs.writeFile(filePath, JSON.stringify(enrollments, null, 2))
    return { success: true }
  } catch (error) {
    console.error('Error saving enrollment:', error)
    return { success: false, error: String(error) }
  }
}

async function saveConsultation(data: ConsultationFormData) {
  const dataDir = path.join(process.cwd(), 'data')
  const filePath = path.join(dataDir, 'consultations.json')

  try {
    await fs.mkdir(dataDir, { recursive: true })
    let consultations: ConsultationFormData[] = []

    try {
      const fileContent = await fs.readFile(filePath, 'utf-8')
      consultations = JSON.parse(fileContent)
    } catch {
      // File doesn't exist yet, start with empty array
    }

    consultations.push({
      ...data,
      submittedAt: new Date().toISOString(),
    })

    await fs.writeFile(filePath, JSON.stringify(consultations, null, 2))
    return { success: true }
  } catch (error) {
    console.error('Error saving consultation:', error)
    return { success: false, error: String(error) }
  }
}

export async function submitEnrollment(formData: FormData) {
  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    country: formData.get('country') as string,
    background: formData.get('background') as string,
    course: formData.get('course') as string,
    schedule: formData.get('schedule') as string,
    message: formData.get('message') as string,
    consent: formData.get('consent') === 'on',
  }

  const validation = enrollmentSchema.safeParse(rawData)

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
    }
  }

  const data = validation.data

  // Save to JSON
  const saveResult = await saveEnrollment(data)
  if (!saveResult.success) {
    return {
      success: false,
      errors: { _form: ['Failed to save enrollment. Please try again.'] },
    }
  }

  // Send email
  const emailSubject = `New Course Enrollment: ${data.course}`
  const emailText = `
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

  const emailHtml = `
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

  await sendEmail(emailSubject, emailHtml, emailText)

  return { success: true }
}

export async function submitConsultation(formData: FormData) {
  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    company: formData.get('company') as string,
    serviceType: formData.get('serviceType') as string,
    budget: formData.get('budget') as string,
    message: formData.get('message') as string,
    consent: formData.get('consent') === 'on',
  }

  const validation = consultationSchema.safeParse(rawData)

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
    }
  }

  const data = validation.data

  // Save to JSON
  const saveResult = await saveConsultation(data)
  if (!saveResult.success) {
    return {
      success: false,
      errors: { _form: ['Failed to save consultation. Please try again.'] },
    }
  }

  // Send email
  const emailSubject = `New Consultation Request: ${data.serviceType}`
  const emailText = `
New Consultation Request

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not specified'}
Service Type: ${data.serviceType}
Budget: ${data.budget || 'Not specified'}
Message: ${data.message}
  `.trim()

  const emailHtml = `
    <h2>New Consultation Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Company:</strong> ${data.company || 'Not specified'}</p>
    <p><strong>Service Type:</strong> ${data.serviceType}</p>
    <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
    <p><strong>Message:</strong> ${data.message}</p>
  `

  await sendEmail(emailSubject, emailHtml, emailText)

  return { success: true }
}
