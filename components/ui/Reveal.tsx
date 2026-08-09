'use client'

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'

interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

const EASE = [0.22, 1, 0.36, 1] as const

export default function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  as = 'div',
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion()
  // motion[as] returns the correct element at runtime; cast keeps the div prop types.
  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
