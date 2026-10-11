import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '@/lib/data'

interface CaseStudyLayoutProps {
  kind: string
  title: string
  deck: string
  stack: string[]
  liveUrl?: string
  liveLabel?: string
  children: React.ReactNode
}

export default function CaseStudyLayout({
  kind,
  title,
  deck,
  stack,
  liveUrl,
  liveLabel,
  children
}: CaseStudyLayoutProps) {
  return (
    <>
      {/* Minimal header */}
      <header className="sticky top-0 z-50 border-b border-ink bg-paper/90 py-3 backdrop-blur">
        <div className="wrap flex items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-2">
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-display text-lg font-extrabold leading-none tracking-mega">
              {personalInfo.name}
            </span>
          </Link>
          <a
            href={personalInfo.calendly}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="calendly-casestudy-nav"
            className="eyebrow border border-ink bg-ink px-3 py-1.5 text-paper transition-colors hover:bg-accent hover:border-accent"
          >
            Book a call
          </a>
        </div>
      </header>

      <main className="wrap py-16 md:py-24">
        <p className="eyebrow text-accent">{kind}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-mega sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl border-l-2 border-accent pl-5 text-xl leading-relaxed text-ink md:text-2xl">
          {deck}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span key={tech} className="chip border-rule">
                {tech}
              </span>
            ))}
          </div>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-display text-base font-bold"
            >
              <span className="link-anim">{liveLabel ?? 'View live'}</span>
              <ArrowUpRight size={16} className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>

        <div className="prose-editorial mt-14 max-w-3xl">{children}</div>

        {/* CTA band */}
        <div className="mt-16 border-t-2 border-ink pt-10">
          <p className="font-display text-3xl font-extrabold leading-[0.95] tracking-mega md:text-4xl">
            Want results like this?
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={personalInfo.calendly}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="calendly-casestudy-footer"
              className="group inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3.5 font-display text-base font-bold text-paper transition-colors hover:bg-accent hover:border-accent"
            >
              Book a free 30-min call
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link href="/#work" className="font-display text-base font-bold link-anim">
              See more case studies
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
