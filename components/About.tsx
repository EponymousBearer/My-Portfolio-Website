'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { aboutData } from '@/lib/data'

function useCountUp(end: number, duration: number = 2) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return { count, ref }
}

function StatCard({
  value,
  suffix,
  label,
  index
}: {
  value: number
  suffix: string
  label: string
  index: number
}) {
  const { count, ref } = useCountUp(value)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.4)' }}
      className="glass-card-hover p-6 text-center"
    >
      <div className="text-4xl md:text-5xl font-bold font-heading gradient-text">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{label}</div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-400 text-sm font-semibold tracking-wider uppercase"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl font-bold font-heading text-slate-900 dark:text-white md:text-5xl"
            >
              Crafting Digital
              <br />
              <span className="gradient-text">Experiences</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {aboutData.bio}
            </motion.p>
          </motion.div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {aboutData.stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
