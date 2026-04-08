'use client'

import { motion } from 'framer-motion'
import { techStackData } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
}

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

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
            My Skills
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-heading text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Technologies I work with to build scalable and performant applications
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {techStackData.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="text-xl font-bold font-heading text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 text-sm">
                  {category.name.charAt(0)}
                </span>
                {category.name}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(34, 211, 238, 0.15)',
                      borderColor: 'rgba(34, 211, 238, 0.4)'
                    }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm font-medium transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
