import { ArrowUpRight } from 'lucide-react'
import { contactData, personalInfo } from '@/lib/data'
import Reveal from './ui/Reveal'
import ContactForm from './ContactForm'

const channels = [
  { label: 'Email', value: contactData.email, href: `mailto:${contactData.email}` },
  { label: 'LinkedIn', value: contactData.linkedin, href: `https://${contactData.linkedin}` },
  { label: 'GitHub', value: personalInfo.github, href: `https://${personalInfo.github}` }
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t-2 border-ink bg-ink py-20 text-paper md:py-28">
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow text-accent">§ 09</span>
            <span className="h-px flex-1 bg-paper/40" />
            <span className="eyebrow text-paper/60">Correspondence</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl font-display text-[11vw] font-extrabold leading-[0.9] tracking-mega sm:text-5xl md:text-6xl">
            {contactData.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-paper/70">
            Book a free 30-minute call and tell me what you&apos;re building. If a call is too soon,
            email works too.
          </p>
        </Reveal>

        {/* Primary actions */}
        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={contactData.calendly}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="calendly-contact"
              className="group inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3.5 font-display text-base font-bold text-paper transition-colors hover:bg-transparent hover:text-accent"
            >
              Book a free 30-min call
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${contactData.email}`}
              className="font-display text-base font-bold text-paper link-anim"
            >
              Or email me
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="eyebrow mt-6 text-paper/55">
            {contactData.availability} · {contactData.availabilityNote}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Direct channels */}
          <div className="border-t border-paper/25">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={0.1 + i * 0.06}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 border-b border-paper/25 py-5 transition-colors hover:text-accent"
                >
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span className="eyebrow text-paper/50 group-hover:text-accent">{c.label}</span>
                    <span className="break-all font-display text-lg font-bold tracking-mega sm:text-2xl">
                      {c.value}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={24}
                    className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="eyebrow mt-8 text-paper/50">
                Based in {contactData.location} — working remotely with {personalInfo.regions} teams.
              </p>
            </Reveal>
          </div>

          {/* Contact form */}
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
