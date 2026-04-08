'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import myselfImage from '@/app/myself.png'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

interface BlurTextProps {
  text: string
  delay?: number
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  className?: string
  style?: React.CSSProperties
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = 'words',
  direction = 'top',
  className = '',
  style
}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const current = ref.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [])

  const segments = useMemo(() => {
    return animateBy === 'words' ? text.split(' ') : text.split('')
  }, [text, animateBy])

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={`${segment}-${i}`}
          style={{
            display: 'inline-block',
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : `translateY(${direction === 'top' ? '-20px' : '20px'})`,
            transition: `all 0.5s ease-out ${i * delay}ms`
          }}
        >
          {segment}
          {animateBy === 'words' && i < segments.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </p>
  )
}

interface MenuItem {
  label: string
  href: string
  highlight?: boolean
}

interface PortfolioHeroProps {
  greeting: string
  fullName: string
  subtitle: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  profileImageSrc?: string
  profileImageAlt: string
  menuItems: MenuItem[]
}

const splitName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length === 1) {
    return [parts[0], parts[0]]
  }
  if (parts.length === 2) {
    return [parts[0], parts[1]]
  }
  return [parts[0], parts.slice(1).join(' ')]
}

export default function PortfolioHero({
  greeting,
  fullName,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  profileImageSrc,
  profileImageAlt,
  menuItems
}: PortfolioHeroProps) {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [firstName, lastName] = splitName(fullName)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark

    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    window.localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      event.preventDefault()
      const section = document.querySelector(href)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen text-foreground transition-colors"
      style={{
        backgroundColor: isDark ? '#080d1a' : 'hsl(210 20% 98%)',
        color: isDark ? 'hsl(0 0% 100%)' : 'hsl(0 0% 10%)'
      }}
    >
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="mx-auto flex max-w-screen-2xl items-center justify-between">
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="z-50 p-2 text-slate-900 transition-colors duration-300 hover:text-black dark:text-neutral-500 dark:hover:text-white"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 transition-colors duration-300" strokeWidth={2} />
              ) : (
                <Menu className="h-8 w-8 transition-colors duration-300" strokeWidth={2} />
              )}
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute left-0 top-full z-[100] ml-4 mt-2 w-[200px] rounded-lg border-none p-4 shadow-2xl md:w-[240px]"
                style={{
                  backgroundColor: isDark ? '#0e1425' : 'hsl(210 20% 98%)'
                }}
              >
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block cursor-pointer px-2 py-1.5 text-lg font-bold tracking-tight transition-colors duration-300 md:text-xl"
                    style={{
                      color: item.highlight ? '#22d3ee' : isDark ? 'hsl(0 0% 100%)' : 'hsl(0 0% 10%)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#22d3ee'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = item.highlight
                        ? '#22d3ee'
                        : isDark
                          ? 'hsl(0 0% 100%)'
                          : 'hsl(0 0% 10%)'
                    }}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div
            className="text-4xl"
            style={{
              color: isDark ? 'hsl(0 0% 100%)' : 'hsl(0 0% 10%)',
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive"
            }}
          >
            A
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="relative h-8 w-16 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: isDark ? 'hsl(0 0% 15%)' : 'hsl(0 0% 90%)' }}
            aria-label="Toggle theme"
          >
            <div
              className="absolute left-1 top-1 h-6 w-6 rounded-full transition-transform duration-300"
              style={{
                backgroundColor: isDark ? 'hsl(0 0% 100%)' : 'hsl(0 0% 10%)',
                transform: isDark ? 'translateX(2rem)' : 'translateX(0)'
              }}
            />
          </button>
        </nav>
      </header>

      <main className="relative flex min-h-screen flex-col">
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
          <div className="relative text-center">
            <BlurText
              text={greeting}
              delay={100}
              animateBy="words"
              direction="top"
              className="mb-3 justify-center text-sm uppercase tracking-[0.35em] text-black dark:text-neutral-400 sm:text-base"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />

            <div>
              <BlurText
                text={firstName}
                delay={100}
                animateBy="letters"
                direction="top"
                className="justify-center whitespace-nowrap font-bold uppercase leading-[0.75] tracking-tighter text-[66px] sm:text-[110px] md:text-[150px] lg:text-[190px]"
                style={{ color: '#22d3ee', fontFamily: "'Fira Code', monospace" }}
              />
            </div>
            <div>
              <BlurText
                text={lastName}
                delay={100}
                animateBy="letters"
                direction="top"
                className="justify-center whitespace-nowrap font-bold uppercase leading-[0.75] tracking-tighter text-[66px] sm:text-[110px] md:text-[150px] lg:text-[190px]"
                style={{ color: '#22d3ee', fontFamily: "'Fira Code', monospace" }}
              />
            </div>

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[110px] w-[65px] cursor-pointer overflow-hidden rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-[152px] sm:w-[90px] md:h-[185px] md:w-[110px] lg:h-[218px] lg:w-[129px]">
                <img src={profileImageSrc ?? myselfImage.src} alt={profileImageAlt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 w-full -translate-x-1/2 px-6">
          <div className="flex justify-center">
            <BlurText
              text={subtitle}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-center text-[15px] text-black transition-colors duration-300 hover:text-black dark:text-neutral-500 dark:hover:text-white sm:text-[18px] md:text-[20px] lg:text-[22px]"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button
              onClick={() => {
                const section = document.querySelector(primaryCtaHref)
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="border border-[#22d3ee] bg-[#22d3ee] px-5 py-2 text-[#03111b] hover:bg-transparent hover:text-[#22d3ee]"
            >
              {primaryCtaLabel}
            </Button>
            <Button
              onClick={() => {
                const section = document.querySelector(secondaryCtaHref)
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="border border-neutral-500 px-5 py-2 text-slate-900 hover:border-[#22d3ee] hover:text-[#22d3ee] dark:border-neutral-600 dark:text-white"
            >
              {secondaryCtaLabel}
            </Button>
          </div>
        </div>

        <button
          type="button"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-colors duration-300 md:bottom-10"
          aria-label="Scroll down"
          onClick={() => {
            const section = document.querySelector('#about')
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <ChevronDown className="h-5 w-5 text-slate-900 transition-colors duration-300 hover:text-black dark:text-neutral-500 dark:hover:text-white md:h-8 md:w-8" />
        </button>
      </main>
    </section>
  )
}
