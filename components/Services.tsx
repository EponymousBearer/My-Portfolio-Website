import { ArrowUpRight } from 'lucide-react'
import { servicesData, pilotOffer, auditOffer, personalInfo, type EntryOffer } from '@/lib/data'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

function OfferCard({
  offer,
  analytics,
  calendly
}: {
  offer: EntryOffer
  analytics: string
  calendly: string
}) {
  return (
    <div className="border border-ink bg-ink p-6 text-paper md:p-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-10">
        <div className="md:col-span-8">
          <span className="eyebrow text-accent">{offer.tag}</span>
          <h3 className="mt-3 font-display text-3xl font-extrabold leading-[0.95] tracking-mega md:text-4xl">
            {offer.title}
          </h3>
          <p className="mt-3 font-display text-2xl font-bold text-accent">{offer.price}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/75">{offer.description}</p>
        </div>
        <div className="flex flex-col gap-4 md:col-span-4 md:items-end">
          <a
            href={calendly}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics={analytics}
            className="group inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3.5 font-display text-base font-bold text-paper transition-colors hover:bg-transparent hover:text-accent"
          >
            {offer.cta}
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="wrap scroll-mt-24 py-20 md:py-28">
      <SectionHeader
        index="01"
        label="Services"
        title="What I build for you"
        kicker="Four ways I help, and two founding-price ways to start."
      />

      <div className="grid grid-cols-1 gap-px border border-ink bg-ink sm:grid-cols-2">
        {servicesData.map((service, i) => (
          <Reveal
            as="article"
            key={service.title}
            delay={i * 0.06}
            className="flex flex-col bg-paper p-6 md:p-8"
          >
            <div className="flex items-baseline gap-3">
              <span className="eyebrow text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-2xl font-extrabold leading-tight tracking-mega md:text-3xl">
                {service.title}
              </h3>
            </div>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{service.description}</p>
          </Reveal>
        ))}
      </div>

      {/* Highlighted entry offers */}
      <Reveal delay={0.1}>
        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:gap-8">
          <OfferCard offer={pilotOffer} analytics="calendly-pilot" calendly={personalInfo.calendly} />
          <OfferCard offer={auditOffer} analytics="calendly-audit" calendly={personalInfo.calendly} />
        </div>
      </Reveal>
    </section>
  )
}
