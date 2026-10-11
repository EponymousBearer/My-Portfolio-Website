import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Lock } from 'lucide-react'
import { caseStudies, moreWork, type CaseStudy } from '@/lib/data'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import MoreWork from './MoreWork'

function Story({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Reveal as="article" delay={index * 0.06} className="grid grid-cols-1 gap-6 border-t-2 border-ink py-10 md:grid-cols-12 md:gap-10 md:py-14">
      {/* Meta column */}
      <div className="md:col-span-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl font-extrabold leading-none tracking-mega text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="chip border-ink">{study.type}</span>
        </div>
        <h3 className="mt-4 font-display text-4xl font-extrabold leading-[0.92] tracking-mega md:text-5xl">
          {study.title}
        </h3>
        {study.researchPrototype && (
          <p className="eyebrow mt-3 text-ink-soft">Research prototype — not a clinical product</p>
        )}

        {study.image && (
          <div className="mt-5 overflow-hidden border border-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={study.image} alt={`${study.title} screenshot`} className="h-auto w-full" />
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <span key={tech} className="chip border-rule">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {study.slug && (
            <Link
              href={`/work/${study.slug}`}
              className="group inline-flex items-center gap-1.5 font-display text-base font-bold"
            >
              <span className="link-anim">Read case study</span>
              <ArrowRight size={16} className="text-accent transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
          {study.link ? (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${study.title}`}
              className="group inline-flex items-center gap-1.5 font-display text-base font-bold"
            >
              <span className="link-anim">{study.linkLabel ?? 'View live'}</span>
              <ArrowUpRight size={16} className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            study.private && (
              <span className="inline-flex items-center gap-1.5 font-display text-base font-bold text-ink-soft">
                <Lock size={15} className="text-accent" />
                Private project
              </span>
            )
          )}
        </div>
      </div>

      {/* Narrative column */}
      <div className="space-y-5 md:col-span-8">
        <div>
          <p className="eyebrow text-accent">Problem</p>
          <p className="mt-2 text-[1.05rem] leading-relaxed text-ink-soft">{study.problem}</p>
        </div>
        <div>
          <p className="eyebrow text-accent">What I built</p>
          <p className="mt-2 text-[1.05rem] leading-relaxed text-ink-soft">{study.whatIBuilt}</p>
        </div>
        <div>
          <p className="eyebrow text-accent">Results</p>
          <ul className="mt-2 space-y-2">
            {study.results.map((r) => (
              <li key={r} className="flex gap-3 text-[1.05rem] leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )
}

export default function CaseStudies() {
  const hasStudies = caseStudies.length > 0
  // The whole section hides when there's no work to show.
  if (!hasStudies && moreWork.length === 0) return null

  return (
    <section id="work" className="scroll-mt-24 border-y border-ink bg-paper-2 py-20 md:py-28">
      <div className="wrap">
        {hasStudies && (
          <>
            <SectionHeader
              index="02"
              label="Selected Work"
              title="Case Studies"
              kicker="Shipped products, framed as problem, build and result. The SEO case study comes first."
            />
            <div>
              {caseStudies.map((study, i) => (
                <Story key={study.title} study={study} index={i} />
              ))}
            </div>
          </>
        )}

        <MoreWork />
      </div>
    </section>
  )
}
