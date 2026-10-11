'use client'

import { useEffect } from 'react'
import { Analytics as VercelAnalytics, track } from '@vercel/analytics/react'

// Vercel Web Analytics + lightweight CTA tracking. Any element with a
// data-analytics attribute (e.g. the Calendly buttons) fires a 'cta_click'
// event via click delegation, so we don't wrap every link in a client component.
export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const el = target?.closest<HTMLElement>('[data-analytics]')
      if (el) track('cta_click', { id: el.dataset.analytics ?? 'unknown' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return <VercelAnalytics />
}
