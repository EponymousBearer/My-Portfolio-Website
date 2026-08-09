import { experienceData } from '@/lib/data'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

export default function Experience() {
  return (
    <section id="experience" className="wrap scroll-mt-24 py-20 md:py-28">
      <SectionHeader
        index="03"
        label="Dispatches"
        title="Experience"
        kicker="A record of roles, teams, and things shipped."
      />

      <div className="border-t-2 border-ink">
        {experienceData.map((exp, i) => (
          <Reveal
            as="article"
            key={exp.company}
            delay={i * 0.05}
            className="grid grid-cols-1 gap-6 border-b border-ink py-8 md:grid-cols-12 md:gap-8 md:py-10"
          >
            {/* Dateline column */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold leading-none tracking-mega text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="chip border-ink">{exp.type}</span>
              </div>
              <p className="eyebrow mt-4 text-ink-soft">{exp.period}</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight tracking-mega md:text-3xl">
                {exp.company}
              </h3>
              <p className="mt-1 text-lg italic text-ink-soft">{exp.role}</p>
            </div>

            {/* Highlights column — set in two editorial columns on desktop */}
            <div className="md:col-span-8">
              <ul className="space-y-3 md:columns-2 md:gap-8 md:space-y-0">
                {exp.highlights.map((h, hi) => (
                  <li
                    key={hi}
                    className="mb-3 flex gap-3 break-inside-avoid text-[1.05rem] leading-relaxed"
                  >
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
