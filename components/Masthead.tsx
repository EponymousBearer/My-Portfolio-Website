'use client'

import { useEffect, useState } from 'react'
import { personalInfo, navLinks } from '@/lib/data'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export default function Masthead() {
  const [compact, setCompact] = useState(false)
  const [active, setActive] = useState<string>('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink bg-paper/90 backdrop-blur transition-[padding] duration-300 ${
        compact ? 'py-2' : 'py-3'
      }`}
    >
      <div className="wrap flex items-center justify-between gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-baseline gap-2 text-left"
          aria-label="Back to top"
        >
          <span className="font-display text-lg font-extrabold leading-none tracking-mega">
            {personalInfo.name}
          </span>
          <span className="eyebrow hidden text-ink-soft sm:inline">/ FULL-STACK</span>
        </button>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                aria-current={isActive ? 'true' : undefined}
                className={`eyebrow py-1 transition-colors ${
                  isActive ? 'text-accent' : 'text-ink hover:text-accent'
                }`}
              >
                {link.label}
              </button>
            )
          })}
          <a
            href="/Muhammad-Adnan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow py-1 text-ink transition-colors hover:text-accent"
          >
            Résumé
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              go('#contact')
            }}
            className="eyebrow border border-ink bg-ink px-3 py-1.5 text-paper transition-colors hover:bg-accent hover:border-accent"
          >
            Hire me
          </a>
        </nav>

        <button
          className="eyebrow border border-ink px-3 py-1.5 lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? 'Close' : 'Index'}
        </button>
      </div>

      {menuOpen && (
        <nav className="wrap mt-2 grid gap-1 border-t border-rule pt-3 lg:hidden" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="leader py-2 text-left"
            >
              <span className="eyebrow text-ink-soft">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-display text-xl font-bold">{link.label}</span>
            </button>
          ))}
          <a
            href="/Muhammad-Adnan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="leader py-2 text-left"
          >
            <span className="eyebrow text-ink-soft">↓</span>
            <span className="font-display text-xl font-bold">Résumé</span>
          </a>
          <button
            onClick={() => go('#contact')}
            className="mt-2 border border-ink bg-ink px-4 py-3 text-center font-display text-lg font-bold text-paper"
          >
            Hire me →
          </button>
        </nav>
      )}
    </header>
  )
}
