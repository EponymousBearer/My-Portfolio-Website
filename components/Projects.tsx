import { ArrowUpRight, Lock } from 'lucide-react'
import { projectsData, type Project } from '@/lib/data'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

const featured = projectsData.filter((p) => p.featured)
const rest = projectsData.filter((p) => !p.featured)

function LeadStory({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 0.08}
      className="group relative flex flex-col border border-ink bg-paper p-6 transition-colors hover:bg-ink md:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow text-accent">Lead Story — {String(index + 1).padStart(2, '0')}</span>
        <span className="eyebrow text-ink-soft transition-colors group-hover:text-paper">
          {project.tags[0]}
        </span>
      </div>

      <h3 className="mt-4 font-display text-4xl font-extrabold leading-[0.92] tracking-mega transition-colors group-hover:text-paper md:text-5xl">
        {project.name}
      </h3>

      <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-ink-soft transition-colors group-hover:text-paper/80">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="chip border-rule transition-colors group-hover:border-paper/40 group-hover:text-paper"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live site`}
          className="mt-8 inline-flex items-center gap-2 font-display text-lg font-bold transition-colors group-hover:text-accent"
        >
          <span className="link-anim">Read live</span>
          <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      ) : (
        <span className="mt-8 inline-flex items-center gap-2 font-display text-lg font-bold text-ink-soft transition-colors group-hover:text-paper/70">
          <Lock size={18} />
          Private client project
        </span>
      )}
    </Reveal>
  )
}

function Clipping({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 0.05}
      className="group flex flex-col border-t border-ink pt-5"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-display text-3xl font-extrabold tracking-mega text-ink-soft transition-colors group-hover:text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex flex-wrap justify-end gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="eyebrow text-ink-soft">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-mega">
        {project.name}
      </h3>

      <p className="mt-2 flex-1 text-[0.98rem] leading-relaxed text-ink-soft">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
        {project.stack.map((tech) => (
          <span key={tech} className="eyebrow text-ink-soft">
            {tech}
          </span>
        ))}
      </div>

      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live site`}
          className="mt-5 inline-flex items-center gap-1.5 self-start font-display text-base font-bold"
        >
          <span className="link-anim">View live</span>
          <ArrowUpRight size={16} className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : (
        <span className="mt-5 inline-flex items-center gap-1.5 self-start font-display text-base font-bold text-ink-soft">
          <Lock size={15} className="text-accent" />
          Private project
        </span>
      )}
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-y border-ink bg-paper-2 py-20 md:py-28">
      <div className="wrap">
        <SectionHeader
          index="04"
          label="Selected Work"
          title="Field Notes"
          kicker="Shipped products — live and in the wild. A selection from the archive."
        />

        {featured.length > 0 && (
          <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {featured.map((project, i) => (
              <LeadStory key={project.name} project={project} index={i} />
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Clipping key={project.name} project={project} index={i + featured.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
