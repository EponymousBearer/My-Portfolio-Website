import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import { SITE_URL } from '@/lib/site'

const TITLE = 'Aitek Client Portal — Multi-tenant SaaS Case Study'
const DESCRIPTION =
  'A multi-tenant client onboarding and team-management platform I led end to end at Aitek Solutions: tenant isolation, four roles, KYC onboarding, questionnaires, milestones, e-signatures and real-time messaging. Next.js 14, NestJS, Prisma, PostgreSQL.'

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

const facts = [
  { value: '4', label: 'Roles: Admin, PM, Developer, Client' },
  { value: '100%', label: 'Per-company tenant isolation' },
  { value: '3', label: 'Environments: dev, UAT, production' },
  { value: 'Daily', label: 'Used by active clients' }
]

export default function Page() {
  return (
    <CaseStudyLayout
      kind="SaaS · Multi-tenant platform · Aitek Solutions"
      title="Aitek Client Portal"
      deck="One platform for a US software house to onboard clients and manage its internal team. I led the frontend and backend end to end as Full-Stack Developer (Nov 2025 – Oct 2026)."
      stack={['Next.js 14', 'NestJS', 'Prisma', 'PostgreSQL', 'Clerk', 'Socket.IO', 'Turborepo', 'Docker', 'GitHub Actions']}
    >
      <div className="metric-grid">
        {facts.map((m, i) => (
          <div
            key={m.label}
            className={`px-5 py-6 ${i < facts.length - 1 ? 'border-b border-ink sm:border-b-0 sm:border-r' : ''} ${i % 2 === 0 ? 'border-r border-ink sm:border-r' : ''}`}
          >
            <div className="font-display text-4xl font-extrabold leading-none tracking-mega text-accent">
              {m.value}
            </div>
            <div className="eyebrow mt-2 leading-snug text-ink-soft">{m.label}</div>
          </div>
        ))}
      </div>

      <h2>The context</h2>
      <p>
        Aitek Solutions is a US-based software house in Chicago. I worked there as a Full-Stack
        Developer from November 2025 to October 2026 and led the end-to-end frontend and backend
        development of its client portal.
      </p>

      <h2>The problem</h2>
      <p>
        The company ran client onboarding and delivery over scattered documents and email. It needed
        one platform for client onboarding and for managing its internal team.
      </p>

      <h2>What I built</h2>
      <p>
        A complete client onboarding and internal team-management platform. It is multi-tenant, with
        strict per-company tenant isolation:
      </p>
      <ul>
        <li>
          <strong>Roles</strong> — Admin, PM, Developer and Client, so each person sees exactly what
          they should.
        </li>
        <li>
          <strong>KYC onboarding</strong> and a <strong>per-service questionnaire engine</strong>.
        </li>
        <li>
          <strong>Milestones and deliverable approvals</strong>, plus <strong>agreements with
          e-signatures</strong> and document management.
        </li>
        <li>
          <strong>Real-time messaging and notifications</strong> over Socket.IO, with email through
          Resend.
        </li>
        <li>
          <strong>AI-assisted features</strong> inside the delivery workflow.
        </li>
        <li>
          <strong>Reusable modules</strong> for tenant isolation, authentication and billing on
          Next.js and PostgreSQL, which sped up later SaaS builds.
        </li>
      </ul>

      <h2>The stack</h2>
      <p>
        A Turborepo monorepo with Next.js 14 and NestJS, Prisma on PostgreSQL, Clerk for
        authentication and Socket.IO for real-time. It ships with Docker and nginx on a VPS, and
        GitHub Actions CI/CD across dev, UAT and production environments.
      </p>

      <h2>The result</h2>
      <ul>
        <li>Used daily by the company&apos;s active client base.</li>
        <li>Strict tenant isolation across every role.</li>
        <li>Production-deployed with dev, UAT and production pipelines.</li>
      </ul>
      <p>
        This is a private project, so there is no public link. It is representative of the SaaS work
        I do for clients: clean roles and boundaries, reusable foundations and production CI/CD from
        day one.
      </p>
    </CaseStudyLayout>
  )
}
