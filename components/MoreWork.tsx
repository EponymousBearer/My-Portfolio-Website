import { ArrowUpRight } from 'lucide-react'
import { moreWork } from '@/lib/data'
import Reveal from './ui/Reveal'

export default function MoreWork() {
  if (moreWork.length === 0) return null

  return (
    <div className="mt-20 md:mt-24">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="eyebrow text-ink-soft">More work</span>
          <span className="h-px flex-1 bg-ink" />
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {moreWork.map((project, i) => (
          <Reveal as="article" key={project.name} delay={i * 0.05} className="group flex flex-col border-t border-ink pt-5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-display text-3xl font-extrabold tracking-mega text-ink-soft transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-wrap justify-end gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="eyebrow text-ink-soft">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h4 className="mt-3 font-display text-2xl font-bold leading-tight tracking-mega">
              {project.name}
            </h4>

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

            {project.liveUrl && (
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
            )}
          </Reveal>
        ))}
      </div>
    </div>
  )
}
