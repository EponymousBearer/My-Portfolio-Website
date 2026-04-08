'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'
import { experienceData } from '@/lib/data'

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%'])

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
            My Journey
          </span>
          <h2 className="mt-4 text-4xl font-bold font-heading text-slate-900 dark:text-white md:text-5xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Professional experience building scalable applications and leading development teams
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-slate-300 dark:bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-cyan-400 to-blue-500"
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-4 z-10 h-4 w-4 rounded-full border-4 bg-cyan-400 shadow-lg shadow-cyan-400/50 md:left-1/2 md:-translate-x-1/2"
                  style={{ borderColor: 'var(--bg-color)' }}
                />

                {/* Content */}
                <div className="pl-12 md:pl-0 md:w-1/2 md:px-12">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card-hover p-6 md:p-8"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-semibold">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white md:text-2xl">
                      {exp.role}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={14} className="text-cyan-400" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-cyan-400" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="mt-6 space-y-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + hIndex * 0.1 }}
                          className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
