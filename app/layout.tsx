import type { Metadata } from 'next'
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import { siteJsonLd } from '@/lib/jsonld'
import Analytics from '@/components/Analytics'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap'
})

// Body serif swaps in after the display font (Georgia is a close fallback),
// so Bricolage — the LCP headline face — gets priority on the critical path.
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  preload: false
})

// Mono is only used for small eyebrow/label text, so it doesn't need to block
// the critical path — let it swap in after the display/body fonts.
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false
})

const TITLE = 'Muhammad Adnan | Full Stack + AI Engineer & Technical SEO'
const DESCRIPTION =
  'I build SaaS platforms, e-commerce stores and AI web apps for founders and agencies — shipped on deadline, fast, and findable on Google.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Muhammad Adnan'
  },
  description: DESCRIPTION,
  keywords: [
    'Full Stack Developer',
    'AI Engineer',
    'SaaS development',
    'Next.js developer',
    'E-commerce developer',
    'Technical SEO',
    'Core Web Vitals',
    'Karachi',
    'Pakistan'
  ],
  authors: [{ name: 'Muhammad Adnan', url: SITE_URL }],
  creator: 'Muhammad Adnan',
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: 'Muhammad Adnan',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Muhammad Adnan — Full Stack + AI Engineer for SaaS founders & agencies' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og.png']
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${newsreader.variable} ${jetbrains.variable}`}
    >
      <body className="font-serif antialiased">
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
