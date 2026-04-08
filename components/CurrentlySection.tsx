'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, BookOpen, MessageCircle } from 'lucide-react'
import { currentlyData } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Users,
  BookOpen,
  MessageCircle
}

export default function CurrentlySection() {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

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
            What I&apos;m Up To
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-heading text-white">
            Currently <span className="gradient-text">Working On</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentlyData.activities.map((activity, index) => {
            const Icon = iconMap[activity.icon]

            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="gradient-border p-6 group"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <Icon className="text-cyan-400" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-slate-400 max-w-2xl mx-auto"
        >
          {currentlyData.footerText}
        </motion.p>
      </div>
    </section>
  )
}
