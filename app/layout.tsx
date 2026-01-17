import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import { ThemeProvider, LanguageProvider } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Continuum X OÜ — AI, Data & Analytics Solutions',
  description:
    'Professional AI, data analytics, and business intelligence solutions. EU-registered company based in Tallinn, Estonia.',
  keywords: ['AI', 'Data Analytics', 'Business Intelligence', 'Training', 'Estonia'],
  authors: [{ name: 'Continuum X OÜ' }],
  creator: 'Continuum X OÜ',
  publisher: 'Continuum X OÜ',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: '/',
    siteName: 'Continuum X OÜ',
    title: 'Continuum X OÜ — AI, Data & Analytics Solutions',
    description:
      'Professional AI, data analytics, and business intelligence solutions. EU-registered company based in Tallinn, Estonia.',
    images: [
      {
        url: '/brand/logo.png',
        width: 1200,
        height: 630,
        alt: 'Continuum X OÜ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Continuum X OÜ — AI, Data & Analytics Solutions',
    description:
      'Professional AI, data analytics, and business intelligence solutions. EU-registered company based in Tallinn, Estonia.',
    images: ['/brand/logo.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      ar: '/ar',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cairo.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" href="/brand/logo.png" />
        <link rel="apple-touch-icon" href="/brand/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Continuum X OÜ',
              email: 'continuumx.contact@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tallinn',
                addressCountry: 'EE',
              },
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/brand/logo.png`,
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              sameAs: [],
            }),
          }}
        />
      </head>

      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col bg-backgroundLight dark:bg-backgroundDark">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
