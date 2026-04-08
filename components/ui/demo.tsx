import PortfolioHero from '@/components/ui/portfolio-hero'
import { heroData, navLinks, personalInfo } from '@/lib/data'

const menuItems = [
  { label: 'HOME', href: '#home', highlight: true },
  ...navLinks.map((item) => ({ label: item.label.toUpperCase(), href: item.href }))
]

export default function Demo() {
  return (
    <div className="w-full">
      <PortfolioHero
        greeting={heroData.greeting}
        fullName={personalInfo.name}
        subtitle={heroData.subtitle}
        primaryCtaLabel={heroData.ctaPrimary}
        primaryCtaHref="#projects"
        secondaryCtaLabel={heroData.ctaSecondary}
        secondaryCtaHref="#contact"
        profileImageSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
        profileImageAlt="Portrait"
        menuItems={menuItems}
      />
    </div>
  )
}
