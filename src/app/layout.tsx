import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Dinesh Suthar | Full-Stack Web Developer in Ahemdabad Gujrat India'

const description =
  "Skilled full-stack web developer in Chicago. I build responsive, user-friendly websites with React, NextJS, and NodeJS. Let's bring your vision to life. Hire me today!"

// NEXT_PUBLIC_SITE_URL is required for generating absolute URLs (metadata, open graph, etc).
// In development, fallback to localhost so the app still runs when the env var is missing or invalid.
const safeSiteUrl = (() => {
  const env = process.env.NEXT_PUBLIC_SITE_URL
  if (!env) return 'http://localhost:3000'

  try {
    return new URL(env).toString()
  } catch {
    return 'http://localhost:3000'
  }
})()

const url = safeSiteUrl

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(safeSiteUrl),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Dinesh Suthar Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: 'Dinesh Suthar',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}
