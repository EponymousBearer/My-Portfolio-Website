import { testimonialsData } from '@/lib/data'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

// TODO(adnan): this section stays hidden until real, permissioned client quotes
// are added to `testimonialsData` in lib/data.ts. Nothing renders while it's empty.
export default function Testimonials() {
  if (testimonialsData.length === 0) return null

  return (
    <section id="testimonials" className="wrap scroll-mt-24 py-20 md:py-28">
      <SectionHeader index="08" label="Word of mouth" title="Testimonials" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {testimonialsData.map((t, i) => (
          <Reveal as="article" key={t.author} delay={i * 0.06} className="border-t-2 border-ink pt-6">
            <blockquote className="text-xl leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="mt-4">
              <span className="font-display text-lg font-bold tracking-mega">{t.author}</span>
              <span className="eyebrow mt-1 block text-ink-soft">{t.role}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
