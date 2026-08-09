import Reveal from './Reveal'

interface SectionHeaderProps {
  index: string
  label: string
  title: string
  kicker?: string
}

export default function SectionHeader({ index, label, title, kicker }: SectionHeaderProps) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-4">
        <span className="eyebrow text-accent">§ {index}</span>
        <span className="h-px flex-1 bg-ink" />
        <span className="eyebrow text-ink-soft">{label}</span>
      </div>
      <h2 className="mt-5 font-display text-5xl font-extrabold leading-[0.9] tracking-mega sm:text-6xl md:text-7xl">
        {title}
      </h2>
      {kicker && <p className="mt-4 max-w-2xl text-lg italic text-ink-soft">{kicker}</p>}
    </Reveal>
  )
}
