'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, FileText, MapPin } from 'lucide-react'
import { heroData, personalInfo, techStackData } from '@/lib/data'
import myselfImage from '@/app/myself.png'

const EASE = [0.22, 1, 0.36, 1] as const
const [firstName, ...restName] = personalInfo.name.split(' ')
const lastName = restName.join(' ')

// Flatten the stack into a repeating wire ticker
const ticker = techStackData.flatMap((c) => c.skills)

export default function Hero() {
  const reduce = useReducedMotion()

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 30 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE }
  })

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="wrap pt-10 md:pt-16">
        {/* Dateline row */}
        <motion.div
          {...rise(0)}
          className="flex flex-wrap items-center justify-between gap-y-2 border-b border-ink pb-3"
        >
          <span className="eyebrow flex items-center gap-1.5 text-ink-soft">
            <MapPin size={12} strokeWidth={2.5} className="text-accent" />
            {personalInfo.location}
          </span>
          <span className="eyebrow hidden text-ink-soft sm:inline">{heroData.edition}</span>
          <span className="eyebrow flex items-center gap-1.5 text-ink-soft">
            {heroData.available && (
              <span className="inline-block h-2 w-2 animate-blink rounded-full bg-accent" />
            )}
            {heroData.available ? 'Available for hire' : heroData.volume}
          </span>
        </motion.div>

        {/* Masthead nameplate */}
        <div className="relative pt-6 md:pt-10">
          <motion.p {...rise(0.08)} className="eyebrow mb-3 text-accent md:mb-5">
            {personalInfo.role} — Portfolio
          </motion.p>

          <h1 className="font-display font-extrabold leading-[0.82] tracking-mega">
            <motion.span
              {...rise(0.14)}
              className="block text-[16vw] sm:text-[15vw] md:text-[13vw] lg:text-[12rem]"
            >
              {firstName}
            </motion.span>
            <motion.span
              {...rise(0.22)}
              className="block text-[16vw] text-accent sm:text-[15vw] md:text-[13vw] lg:text-[12rem]"
              style={{
                WebkitTextStroke: '2px var(--ink)',
                color: 'transparent'
              }}
            >
              {lastName}
            </motion.span>
          </h1>

          {/* Deck / standfirst + portrait, asymmetric */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-12 md:gap-10">
            <motion.div {...rise(0.3)} className="md:col-span-7">
              <p className="max-w-xl border-l-2 border-accent pl-5 text-lg leading-relaxed text-ink md:text-xl">
                {heroData.deck}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 font-display text-base font-bold text-paper transition-colors hover:bg-accent hover:border-accent"
                >
                  {heroData.ctaPrimary}
                  <ArrowDownRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="font-display text-base font-bold link-anim"
                >
                  {heroData.ctaSecondary}
                </a>
                <a
                  href="/Muhammad-Adnan-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-base font-bold link-anim"
                >
                  <FileText size={17} className="text-accent" />
                  Résumé
                </a>
              </div>
            </motion.div>

            <motion.div {...rise(0.38)} className="md:col-span-5">
              <figure className="relative">
                <div className="relative aspect-[4/5] max-w-[280px] overflow-hidden border border-ink bg-paper-2 md:ml-auto">
                  <img
                    src={myselfImage.src}
                    alt={`Portrait of ${personalInfo.name}`}
                    className="halftone h-full w-full object-cover"
                  />
                </div>
                <figcaption className="eyebrow mt-2 max-w-[280px] text-ink-soft md:ml-auto md:text-right">
                  Fig. 1 — {personalInfo.name}, {personalInfo.location}
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wire ticker */}
      <div className="mt-12 overflow-hidden border-y border-ink bg-ink py-3 md:mt-16">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap will-change-transform">
          {[...ticker, ...ticker].map((t, i) => (
            <span
              key={i}
              className="eyebrow flex items-center gap-8 text-paper"
              aria-hidden={i >= ticker.length}
            >
              {t}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
