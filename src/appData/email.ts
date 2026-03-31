export const emailConfig = {
  gmail: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  toEmail: 'dineshsutharr427@gmail.com',
  resendApiKey: process.env.RESEND_API_KEY || 're_YOUR_API_KEY_HERE',
  resendFrom: 'Contact Form <onboarding@resend.dev>',
}
