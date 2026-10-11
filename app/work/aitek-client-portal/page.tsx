import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import { SITE_URL } from '@/lib/site'

const TITLE = 'Aitek Client Portal — Multi-tenant SaaS Case Study'
const DESCRIPTION =
  'A multi-tenant client-delivery platform (Next.js 14 + NestJS, Turborepo) with role-based access, KYC onboarding, milestones and e-signatures — used daily by a US software house.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/work/aitek-client-portal' },
  openGraph: {
    title: `${TITLE} | Muhammad Adnan`,
    description: DESCRIPTION,
    type: 'article',
    url: `${SITE_URL}/work/aitek-client-portal`,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Aitek client portal multi-tenant SaaS case study' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Muhammad Adnan`,
    description: DESCRIPTION,
    images: ['/og.png']
  }
}

export default function Page() {
  return (
    <CaseStudyLayout
      kind="SaaS · Multi-tenant platform"
      title="Aitek Client Portal"
      deck="A single platform for a US software house to onboard clients and run delivery end to end — now in daily use."
      stack={['Next.js 14', 'NestJS', 'Turborepo', 'PostgreSQL', 'Prisma', 'Docker', 'CI/CD']}
    >
      <h2>The problem</h2>
      <p>
        A US software house was running client delivery across scattered documents, spreadsheets and
        email threads. Onboarding was manual, status was hard to track, and every client saw a
        different, ad-hoc process. They needed one platform — with strict separation between
        companies — to run the whole lifecycle.
      </p>

      <h2>What I built</h2>
      <p>
        A multi-tenant delivery platform in a Turborepo monorepo, with a Next.js 14 App Router
        front end and a NestJS REST API, built around strict per-company tenant isolation:
      </p>
      <ul>
        <li>
          <strong>Role-based access</strong> across Admin, PM, Developer and Client, so each person
          sees exactly what they should.
        </li>
        <li>
          <strong>Multi-step KYC onboarding</strong> and a <strong>dynamic questionnaire engine</strong>{' '}
          that adapts to each client&apos;s needs.
        </li>
        <li>
          <strong>Milestones, deliverables and e-signatures</strong> that move a project from kickoff
          to sign-off in one place.
        </li>
        <li>
          <strong>Dev/prod CI/CD to a VPS</strong>, so releases are repeatable and safe.
        </li>
      </ul>

      <h2>The result</h2>
      <p>
        The portal is <strong>used daily by the software house&apos;s clients</strong>, replacing the
        patchwork of tools with a single, auditable workflow. Because it is a private client project,
        there is no public link — but it is representative of the multi-tenant SaaS work I do:
        reusable foundations, clean roles and boundaries, and production CI/CD from day one.
      </p>
    </CaseStudyLayout>
  )
}
