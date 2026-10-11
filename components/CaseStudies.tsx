import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Lock } from 'lucide-react'
import { caseStudies, type CaseStudy } from '@/lib/data'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import MoreWork from './MoreWork'

const featured = caseStudies.filter((p) => p.featured)

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-accent">{label}</p>
      <p className="mt-2 text-[1.05rem] leading-relaxed text-ink-soft">{children}</p>
    </div>
  )
}

function Story({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Reveal as="article" delay={index * 0.06} className="grid grid-cols-1 gap-6 border-t-2 border-ink py-10 md:grid-cols-12 md:gap-10 md:py-14">
      {/* Meta column */}
      <div className="md:col-span-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl font-extrabold leading-none tracking-mega text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="chip border-ink">{study.kind}</span>
        </div>
        <h3 className="mt-4 font-display text-4xl font-extrabold leading-[0.92] tracking-mega md:text-5xl">
          {study.name}
        </h3>
        {study.researchPrototype && (
          <p className="eyebrow mt-3 text-ink-soft">Research prototype — not a clinical product</p>
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
          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${study.name}`}
              className="group inline-flex items-center gap-1.5 font-display text-base font-bold"
            >
              <span className="link-anim">{study.liveLabel ?? 'View live'}</span>
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
        <Block label="Problem">{study.problem}</Block>
        <Block label="What I built">{study.built}</Block>
        <Block label="Result">{study.result}</Block>
      </div>
    </Reveal>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" className="scroll-mt-24 border-y border-ink bg-paper-2 py-20 md:py-28">
      <div className="wrap">
        <SectionHeader
          index="02"
          label="Selected Work"
          title="Case Studies"
          kicker="Shipped products, framed as problem, build and result. The SEO case study comes first."
        />

        <div>
          {featured.map((study, i) => (
            <Story key={study.name} study={study} index={i} />
          ))}
        </div>

        <MoreWork />
      </div>
    </section>
  )
}
