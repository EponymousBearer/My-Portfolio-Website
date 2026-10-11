import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { caseStudies } from '@/lib/data'

// Fixed date keeps the statically-exported sitemap deterministic across builds.
const LAST_MODIFIED = '2026-10-11'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const workPages = caseStudies
    .filter((s) => s.slug)
    .map((s) => ({
      url: `${SITE_URL}/work/${s.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))

  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1
    },
    ...workPages
  ]
}
