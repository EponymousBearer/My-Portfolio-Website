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
      jobTitle: 'Full Stack + AI Engineer',
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      image: `${SITE_URL}/og.png`,
      sameAs: [LINKEDIN_URL, GITHUB_URL],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Mohammad Ali Jinnah University'
      },
      knowsAbout: [
        'SaaS development',
        'E-commerce development',
        'AI integration',
        'Technical SEO',
        'Next.js',
        'React',
        'Node.js',
        'Core Web Vitals'
      ]
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: 'Muhammad Adnan — Full Stack + AI Engineering',
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      image: `${SITE_URL}/og.png`,
      provider: { '@id': `${SITE_URL}/#person` },
      founder: { '@id': `${SITE_URL}/#person` },
      serviceType: [
        'SaaS platform development',
        'E-commerce development',
        'AI integration',
        'Technical SEO & performance'
      ],
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United Arab Emirates' }
      ]
    }
  ]
}
