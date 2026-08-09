import type { Metadata } from 'next'
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap'
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
  display: 'swap'
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-orpin-nu-27.vercel.app'),
  title: 'Muhammad Adnan — Full-Stack Developer',
  description:
    'The portfolio of Muhammad Adnan, a full-stack developer in Karachi building scalable web applications with the MERN stack, Next.js, and modern cloud technologies.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'Next.js', 'React', 'Node.js', 'Karachi', 'Pakistan'],
  authors: [{ name: 'Muhammad Adnan' }],
  openGraph: {
    title: 'Muhammad Adnan — Full-Stack Developer',
    description: 'Full-stack developer in Karachi building scalable web applications.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Muhammad Adnan — Full-Stack Developer' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Adnan — Full-Stack Developer',
    description: 'Full-stack developer in Karachi building scalable web applications.',
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
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}
