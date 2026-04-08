import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Muhammad Adnan | Full Stack Developer',
  description: 'Full Stack Developer based in Karachi, Pakistan. Specializing in MERN stack, Next.js, and modern cloud technologies.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'Next.js', 'React', 'Node.js', 'Karachi', 'Pakistan'],
  authors: [{ name: 'Muhammad Adnan' }],
  openGraph: {
    title: 'Muhammad Adnan | Full Stack Developer',
    description: 'Full Stack Developer based in Karachi, Pakistan',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
