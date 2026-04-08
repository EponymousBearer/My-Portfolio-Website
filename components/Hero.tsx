'use client'

import PortfolioHero from '@/components/ui/portfolio-hero'
import { heroData, navLinks, personalInfo } from '@/lib/data'
import myselfImage from '@/app/myself.png'

const menuItems = [
  { label: 'HOME', href: '#home', highlight: true },
  ...navLinks.map((item) => ({ label: item.label.toUpperCase(), href: item.href }))
]

export default function Hero() {
  return (
    <PortfolioHero
      greeting={heroData.greeting}
      fullName={personalInfo.name}
      subtitle={heroData.subtitle}
      primaryCtaLabel={heroData.ctaPrimary}
      primaryCtaHref="#projects"
      secondaryCtaLabel={heroData.ctaSecondary}
      secondaryCtaHref="#contact"
      profileImageSrc={myselfImage.src}
      profileImageAlt={personalInfo.name}
      menuItems={menuItems}
    />
  )
}
