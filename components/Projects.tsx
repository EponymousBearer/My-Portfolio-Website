'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
            My Work
          </span>
          <h2 className="mt-4 text-4xl font-bold font-heading text-slate-900 dark:text-white md:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Showcasing some of my best work in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-card-hover overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6 md:p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-cyan-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-slate-900 transition-colors duration-300 group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400 md:text-2xl">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Tech Stack
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </motion.a>
                  {project.repoUrl ? (
                    <motion.a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card p-2.5 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                      aria-label={`View ${project.name} source code`}
                    >
                      <Github size={18} />
                    </motion.a>
                  ) : null}
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.article>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card flex min-h-[300px] items-center justify-center border-2 border-dashed border-slate-300 dark:border-white/10"
          >
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">More Projects</h3>
              <p className="mt-2 text-slate-500 text-sm">Coming soon...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
