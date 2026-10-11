import { processData } from '@/lib/data'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

export default function Process() {
  return (
    <section id="process" className="wrap scroll-mt-24 py-20 md:py-28">
      <SectionHeader
        index="03"
        label="How it works"
        title="Process"
        kicker="A simple, predictable path from first call to launch — no surprises on scope or price."
      />

      <ol className="grid grid-cols-1 md:grid-cols-4">
        {processData.map((step, i) => (
          <Reveal
            as="li"
            key={step.title}
            delay={i * 0.08}
            className={`border-t-2 border-ink p-6 ${
              i < processData.length - 1 ? 'md:border-r md:border-r-ink' : ''
            }`}
          >
            <span className="font-display text-5xl font-extrabold leading-none tracking-mega text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-mega">
              {step.title}
            </h3>
            <p className="mt-2 text-[1.02rem] leading-relaxed text-ink-soft">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
