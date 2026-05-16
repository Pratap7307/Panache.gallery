import { motion } from 'framer-motion'

export default function SplitReveal({ text, delay = 0, className = '', charDelay = 0.06 }) {
  const chars = text.split('')

  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              delay: delay + i * charDelay,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
