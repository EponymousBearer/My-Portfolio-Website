'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'
import { contactData } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-heading text-white">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Email Button */}
          <motion.a
            href={`mailto:${contactData.email}`}
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto group"
          >
            <div className="glass-card-hover px-8 py-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <div className="flex-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  Email
                </span>
                <p className="text-white font-medium">{contactData.email}</p>
              </div>
              <ArrowUpRight
                className="text-slate-500 group-hover:text-cyan-400 transition-colors"
                size={20}
              />
            </div>
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a
            href={`https://${contactData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto group"
          >
            <div className="glass-card-hover px-8 py-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <Linkedin className="text-cyan-400" size={24} />
              </div>
              <div className="flex-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  LinkedIn
                </span>
                <p className="text-white font-medium">{contactData.linkedin}</p>
              </div>
              <ArrowUpRight
                className="text-slate-500 group-hover:text-cyan-400 transition-colors"
                size={20}
              />
            </div>
          </motion.a>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 glass-card text-slate-400">
            <MapPin size={18} className="text-cyan-400" />
            <span>{contactData.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
