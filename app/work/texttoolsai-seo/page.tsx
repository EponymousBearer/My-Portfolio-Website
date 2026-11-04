import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import { SITE_URL } from '@/lib/site'

const TITLE = 'texttoolsai.app — AI Visibility Case Study'
const DESCRIPTION =
  'How I built a brand-new product for AI visibility: llms.txt, answer-first content, clean schema and entity signals. Average Google position ~68 to ~12 in 3 months, with citations in ChatGPT, Gemini and Perplexity.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/work/texttoolsai-seo' },
  openGraph: {
    title: `${TITLE} | Muhammad Adnan`,
    description: DESCRIPTION,
    type: 'article',
    url: `${SITE_URL}/work/texttoolsai-seo`,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'texttoolsai.app AI visibility case study' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Muhammad Adnan`,
    description: DESCRIPTION,
    images: ['/og.png']
  }
}

const metrics = [
  { value: '68→12', label: 'Avg. Google position, Aug→Nov 2026' },
  { value: '97/172', label: 'Pages averaging a top-10 position' },
  { value: '3,502', label: 'Impressions in Google’s AI features (3 mo.)' },
  { value: '100 / 93', label: 'PageSpeed (desktop / mobile)' }
]

export default function Page() {
  return (
    <CaseStudyLayout
      kind="AI Visibility · My own product"
      title="Text Tools AI"
      deck="Average Google position ~68 to ~12 in 3 months (Aug–Nov 2026). A brand-new product with no backlinks and no budget, built to be found by Google and cited by AI assistants."
      stack={['Next.js', 'llms.txt', 'Schema', 'GEO / AEO', 'Internal linking', 'Core Web Vitals']}
      liveUrl="https://www.texttoolsai.app"
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
        backlinks, no ad budget, and no existing search footprint. The job was to become visible to
        Google and to AI assistants the hard way: by being more useful, clearer and easier to read
        than everything already ranking.
      </p>

      <h2>What I built</h2>
      <p>
        I built the product and its AI-visibility layer end to end, treating machine readability as
        a first-class feature:
      </p>
      <ul>
        <li>
          <strong>llms.txt</strong> — a clear map of the site for AI crawlers and assistants.
        </li>
        <li>
          <strong>Answer-first (GEO) blocks</strong> — each page leads with a direct, citable
          answer, then the detail.
        </li>
        <li>
          <strong>Schema clean-up</strong> — Article markup with author, and deduplicated
          breadcrumb and FAQ markup so structured data is consistent.
        </li>
        <li>
          <strong>Entity signals</strong> — consistent naming and profile information so search
          engines and AI systems know what the product is.
        </li>
        <li>
          <strong>Topic hubs and internal linking</strong> — related tools and guides organized into
          hubs, so relevance concentrates where it counts.
        </li>
        <li>
          <strong>Core Web Vitals</strong> — server rendering, tuned assets and layout stability to
          keep the site fast on mobile and desktop.
        </li>
      </ul>

      <h2>The result</h2>
      <p>
        From Google Search Console (export of 4 Nov 2026), the average Google position moved from
        about <strong>68 in August 2026</strong> to <strong>16.5 in September</strong>,{' '}
        <strong>16.3 in October</strong> and about <strong>12 in early November</strong>. Monthly
        impressions grew from 545 in August to 24,402 in October, and the site earned{' '}
        <strong>33,086 impressions over the last three months</strong>.
      </p>
      <p>
        <strong>97 of 172 pages average a top-10 position</strong> (last 28 days), and Google&apos;s
        AI features showed the site <strong>3,502 times over three months</strong>. The content is
        also cited in AI answers by ChatGPT, Gemini and Perplexity. PageSpeed scores{' '}
        <strong>100 on desktop and 93 on mobile</strong>.
      </p>
      <p>
        This is the playbook behind my AI Visibility service for real estate and mortgage teams:
        make the site readable to crawlers and assistants, then keep the facts consistent
        everywhere.
      </p>
    </CaseStudyLayout>
  )
}
