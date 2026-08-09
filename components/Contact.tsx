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
            <span className="eyebrow text-accent">§ 06</span>
            <span className="h-px flex-1 bg-paper/40" />
            <span className="eyebrow text-paper/60">Correspondence</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-[14vw] font-extrabold leading-[0.86] tracking-mega sm:text-7xl md:text-8xl">
            Let&apos;s build
            <br />
            <span
              style={{ WebkitTextStroke: '2px var(--paper)', color: 'transparent' }}
            >
              something.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-paper/70">
            Have a role, a project, or an idea worth shipping? I&apos;m{' '}
            <span className="text-accent">available for hire</span> and reply fast.
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
                Based in {contactData.location} — working remotely, worldwide.
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
