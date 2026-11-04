import { SITE_URL, EMAIL, LINKEDIN_URL, GITHUB_URL } from './site'

// Sitewide structured data: who I am (Person) and what I offer
// (ProfessionalService). Kept as a @graph so both share one script tag.
export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Muhammad Adnan',
      jobTitle: 'Full-stack engineer (Next.js, Node, AI)',
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      image: `${SITE_URL}/og.png`,
      sameAs: [LINKEDIN_URL, GITHUB_URL],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Mohammad Ali Jinnah University'
      },
      worksFor: { '@type': 'Organization', name: 'Future Frame', url: 'https://www.futureframesolution.com' },
      knowsAbout: [
        'AI speed-to-lead',
        'AI lead response automation',
        'AI visibility',
        'Answer engine optimization (AEO)',
        'Generative engine optimization (GEO)',
        'SaaS development',
        'E-commerce development',
        'AI integration',
        'Next.js',
        'React',
        'Node.js',
        'Core Web Vitals'
      ]
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: 'Muhammad Adnan — AI Speed-to-Lead & AI Visibility',
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      image: `${SITE_URL}/og.png`,
      provider: { '@id': `${SITE_URL}/#person` },
      founder: { '@id': `${SITE_URL}/#person` },
      serviceType: [
        'AI speed-to-lead and lead response automation',
        'AI visibility (AEO/GEO)',
        'Next.js speed fix (Core Web Vitals)',
        'Custom software development (SaaS, portals, marketplaces, e-commerce, AI integrations)'
      ],
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'United Arab Emirates' }
      ]
    }
  ]
}
