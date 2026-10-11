import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import { SITE_URL } from '@/lib/site'

const TITLE = 'texttoolsai.app — Technical SEO Case Study'
const DESCRIPTION =
  'How I took a brand-new product from average Google position 52 to 17 in five months — topic hubs, internal linking, content for real queries, and Core Web Vitals work.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/work/texttoolsai-seo' },
  openGraph: {
    title: `${TITLE} | Muhammad Adnan`,
    description: DESCRIPTION,
    type: 'article',
    url: `${SITE_URL}/work/texttoolsai-seo`,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'texttoolsai.app technical SEO case study' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Muhammad Adnan`,
    description: DESCRIPTION,
    images: ['/og.png']
  }
}

const metrics = [
  { value: '52→17', label: 'Avg. Google position' },
  { value: '84', label: 'Pages in the top 10' },
  { value: '1,836', label: 'AI-search impressions' },
  { value: '100', label: 'PageSpeed (desktop)' }
]

export default function Page() {
  return (
    <CaseStudyLayout
      kind="Technical SEO · My own product"
      title="texttoolsai.app"
      deck="A brand-new product with no backlinks and no budget. I built it and ran its SEO solo — here is what moved the numbers."
      stack={['Next.js', 'Technical SEO', 'Core Web Vitals', 'Schema', 'Internal linking']}
      liveUrl="https://texttoolsai.app"
      liveLabel="Visit texttoolsai.app"
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

      <h2>The problem</h2>
      <p>
        texttoolsai.app launched in May 2026 as a new product in a crowded category. It had no
        backlinks, no ad budget, and no existing search footprint. The job was to earn organic
        traffic the hard way — by being genuinely more useful and more findable than everything
        already ranking.
      </p>

      <h2>What I built</h2>
      <p>
        I built and SEO&apos;d the product end to end, treating structure and speed as first-class
        features rather than afterthoughts:
      </p>
      <ul>
        <li>
          <strong>Topic-hub architecture</strong> — related tools and guides organized into hubs so
          both readers and crawlers can see how everything connects.
        </li>
        <li>
          <strong>Deep internal linking</strong> — every page passes authority to the pages it is
          most related to, concentrating relevance where it counts.
        </li>
        <li>
          <strong>Content written for real queries</strong> — pages answer the questions people
          actually type, not keywords stuffed for their own sake.
        </li>
        <li>
          <strong>Core Web Vitals work</strong> — server rendering, tuned assets and layout
          stability to keep the site fast on mobile and desktop.
        </li>
      </ul>

      <h2>The result</h2>
      <p>
        Between May and October 2026, Search Console shows the average Google position moving from
        <strong> 52 to 17</strong>, with <strong>84 pages averaging a top-10 position</strong> and{' '}
        <strong>1,836 impressions in Google&apos;s AI search features</strong>. The content is now
        cited in AI answers by ChatGPT, Gemini, Perplexity and Google AI Mode (confirmed via Ahrefs).
        PageSpeed scores <strong>100 on desktop and 93 on mobile</strong>, with an SEO score of 100.
      </p>
      <p>
        This is the same playbook I bring to client work: fast, well-structured sites that search
        engines and AI assistants can read, trust and recommend.
      </p>
    </CaseStudyLayout>
  )
}
