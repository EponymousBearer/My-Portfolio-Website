import { Briefcase, Users, BookOpen, MessageCircle } from 'lucide-react'
import { currentlyData } from '@/lib/data'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Users,
  BookOpen,
  MessageCircle
}

export default function CurrentlySection() {
  return (
    <section id="currently" className="wrap scroll-mt-24 py-20 md:py-28">
      <SectionHeader index="05" label="Stop Press" title="Currently" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {currentlyData.activities.map((activity, i) => {
          const Icon = iconMap[activity.icon]
          return (
            <Reveal
              key={activity.title}
              delay={i * 0.08}
              className={`border-t-2 border-ink p-6 ${
                i < currentlyData.activities.length - 1 ? 'md:border-r md:border-r-ink' : ''
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center border border-ink">
                {Icon && <Icon size={20} strokeWidth={2} className="text-accent" />}
              </div>
              <p className="eyebrow mt-4 text-ink-soft">{activity.title}</p>
              <p className="mt-2 font-display text-xl font-bold leading-snug tracking-mega">
                {activity.description}
              </p>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.15}>
        <p className="mt-10 max-w-2xl border-l-2 border-accent pl-5 text-xl italic leading-relaxed text-ink-soft">
          {currentlyData.footerText}
        </p>
      </Reveal>
    </section>
  )
}
