import { aboutData } from '@/lib/data'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

export default function About() {
  return (
    <section id="about" className="wrap scroll-mt-24 py-20 md:py-28">
      <SectionHeader index="01" label="Profile" title="About" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7">
          <p className="dropcap text-xl leading-relaxed md:text-2xl md:leading-relaxed">
            {aboutData.bio}
          </p>
        </Reveal>

        {/* By the numbers */}
        <Reveal delay={0.1} className="md:col-span-5">
          <div className="border border-ink">
            <div className="border-b border-ink bg-ink px-5 py-2">
              <span className="eyebrow text-paper">By the numbers</span>
            </div>
            <dl className="grid grid-cols-2">
              {aboutData.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-5 py-6 ${i % 2 === 0 ? 'border-r border-ink' : ''} ${
                    i < aboutData.stats.length - 2 ? 'border-b border-ink' : ''
                  }`}
                >
                  <dd className="font-display text-5xl font-extrabold leading-none tracking-mega text-accent">
                    {stat.value}
                    <span className="text-ink">{stat.suffix}</span>
                  </dd>
                  <dt className="eyebrow mt-2 text-ink-soft">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
