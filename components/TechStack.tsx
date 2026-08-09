import { techStackData } from '@/lib/data'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

export default function TechStack() {
  return (
    <section id="techstack" className="scroll-mt-24 border-y border-ink bg-paper-2 py-20 md:py-28">
      <div className="wrap">
        <SectionHeader
          index="02"
          label="Capabilities"
          title="Tech Stack"
          kicker="The tools used to ship scalable, performant products end to end."
        />

        {/* Classified index with dotted leaders */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {techStackData.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.06} className="border-t-2 border-ink pt-4">
              <div className="mb-4 flex items-baseline gap-3">
                <span className="eyebrow text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-2xl font-bold tracking-mega">{category.name}</h3>
              </div>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-baseline gap-3 py-2 text-lg">
                    <span>{skill}</span>
                    <span
                      aria-hidden
                      className="-translate-y-[0.28em] flex-1 border-b border-dotted"
                      style={{ borderColor: 'var(--rule-strong)' }}
                    />
                    <span className="eyebrow text-accent">✓</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
