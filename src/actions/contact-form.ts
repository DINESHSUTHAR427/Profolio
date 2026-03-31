'use server'

import { Resend } from 'resend'
import { emailConfig } from '@/appData/email'

const resend = new Resend(emailConfig.resendApiKey)

const action = async (_: { success: boolean; message: string } | null, formData: FormData) => {
  try {
    const name = formData.get('name')
    if (!name)
      return {
        success: false,
        message: 'Please provide your name.',
      }

    const email = formData.get('email')
    if (!email)
      return {
        success: false,
        message: 'Please provide your email address.',
      }

    const subject = formData.get('subject')
    if (!subject)
      return {
        success: false,
        message: 'Please provide a subject.',
      }

    const message = formData.get('message')
    if (!message)
      return {
        success: false,
        message: 'Please provide a message.',
      }

    const { data, error } = await resend.emails.send({
      from: emailConfig.resendFrom,
      to: emailConfig.toEmail,
      replyTo: email as string,
      subject: `Contact Form: ${subject} - from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return {
        success: false,
        message: 'Oops! There was a problem submitting your form',
      }
    }

    console.log('Email sent:', data)
    return { success: true, message: 'Thanks for your submission!' }
  } catch (error) {
    console.error('Contact form submission error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return {
      success: false,
      message: `Oops! There was a problem: ${errorMessage}`,
    }
  }
}

export default action
