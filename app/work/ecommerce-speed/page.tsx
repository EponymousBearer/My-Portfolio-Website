import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import { SITE_URL } from '@/lib/site'

const TITLE = 'Fashion E-commerce Store: Mobile Speed Case Study'
const DESCRIPTION =
  'A Next.js + MongoDB fashion store went from mobile PageSpeed 77 to 99 and LCP 4.6 s to 2.1 s in two days, with image payload cut from 312 MB to 15 MB and no redesign. Delivered via Aitek Solutions.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/work/ecommerce-speed' },
  openGraph: {
    title: `${TITLE} | Muhammad Adnan`,
    description: DESCRIPTION,
    type: 'article',
    url: `${SITE_URL}/work/ecommerce-speed`,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Fashion e-commerce store mobile speed case study' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Muhammad Adnan`,
    description: DESCRIPTION,
    images: ['/og.png']
  }
}

const metrics = [
  { value: '77→99', label: 'Mobile PageSpeed' },
  { value: '4.6→2.1 s', label: 'LCP' },
  { value: '312→15 MB', label: 'Image payload' },
  { value: '85→100', label: 'Accessibility score' }
]

export default function Page() {
  return (
    <CaseStudyLayout
      kind="Next.js Speed Fix · Delivered via Aitek Solutions (US software house)"
      title="Fashion e-commerce store: mobile speed"
      deck="A Next.js + MongoDB fashion store, slow on mobile. Fixed in two days, with no redesign and no new theme."
      stack={['Next.js', 'MongoDB', 'PageSpeed Insights', 'Core Web Vitals', 'Image optimization']}
    >
      <div className="metric-grid">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`px-5 py-6 ${i < metrics.length - 1 ? 'border-b border-ink sm:border-b-0 sm:border-r' : ''} ${i % 2 === 0 ? 'border-r border-ink sm:border-r' : ''}`}
          >
            <div className="font-display text-4xl font-extrabold leading-none tracking-mega text-accent">
              {m.value}
            </div>
            <div className="eyebrow mt-2 leading-snug text-ink-soft">{m.label}</div>
          </div>
        ))}
      </div>

      <p>
        <em>Delivered via Aitek Solutions (US software house). The client is not named.</em>
      </p>

      <h2>The problem</h2>
      <p>
        A fashion e-commerce store built on Next.js and MongoDB was slow on mobile. Mobile PageSpeed
        sat at 77, the Largest Contentful Paint took 4.6 seconds, and the pages were shipping roughly
        312 MB of images. On phones, that is the difference between a shopper browsing and a shopper
        leaving.
      </p>

      <h2>What I did</h2>
      <p>The store kept its design and theme. The work was entirely under the hood:</p>
      <ul>
        <li>
          <strong>Diagnosed first</strong> with PageSpeed Insights and Core Web Vitals to find what
          was actually slowing the largest content.
        </li>
        <li>
          <strong>Images</strong> — compressed, converted to modern formats and resized to the sizes
          the pages actually display.
        </li>
        <li>
          <strong>Scripts and third-party apps</strong> — fixed render-blocking scripts and
          third-party apps that were delaying the first paint.
        </li>
        <li>
          <strong>Rendering</strong> — fixed rendering issues that held back the main content.
        </li>
        <li>
          <strong>Before/after report</strong> — delivered the measured results so the team could see
          exactly what changed.
        </li>
      </ul>

      <h2>The result</h2>
      <p>
        Done in <strong>two days</strong>: mobile PageSpeed went <strong>from 77 to 99</strong>, LCP
        from <strong>4.6 s to 2.1 s</strong>, and the image payload from <strong>312 MB to 15 MB</strong>.
        The accessibility score also rose from <strong>85 to 100</strong>. No redesign and no new
        theme were needed.
      </p>
      <p>
        This is the same work I offer as a fixed-price <strong>Next.js Speed Fix</strong>: a 5-day
        sprint for mobile Core Web Vitals, from $497.
      </p>
    </CaseStudyLayout>
  )
}
