'use client'

import { ArrowUp } from 'lucide-react'
import { personalInfo, footerData } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="wrap">
        <div className="flex flex-col gap-6 border-t border-paper/25 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-extrabold tracking-mega">{personalInfo.name}</p>
            <p className="eyebrow mt-1 text-paper/50">{footerData.tagline}</p>
          </div>

          <p className="eyebrow max-w-xs text-paper/50">
            Set in Bricolage Grotesque, Newsreader &amp; JetBrains Mono. Built with Next.js &amp; Tailwind.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 self-start border border-paper/40 px-4 py-2 transition-colors hover:border-accent hover:text-accent sm:self-auto"
            aria-label="Back to top"
          >
            <span className="eyebrow">Back to top</span>
            <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

        <div className="flex flex-col gap-2 border-t border-paper/25 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="eyebrow text-paper/40">{footerData.copyright}</p>
          <p className="eyebrow text-paper/40">Karachi, Pakistan · Available worldwide</p>
        </div>
      </div>
    </footer>
  )
}
