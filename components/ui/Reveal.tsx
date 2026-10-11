'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

// Lightweight scroll reveal using IntersectionObserver + CSS (no animation
// library). The `.js` gate in globals.css keeps content fully visible when
// JavaScript is unavailable, so the statically-rendered HTML stays readable.
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -70px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Tag = as as React.ElementType

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
