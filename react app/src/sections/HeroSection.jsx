import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'
import SplitReveal from '../components/SplitReveal'

// Preloader is 2s, so we offset all animations after it fades
const AFTER_PRELOADER = 2.1

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          className="w-full h-full object-cover"
          src="/home.gallery/_DSC0229.webp"
          alt="Cinematic runway stage with dramatic golden spotlights"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-[var(--spacing-margin-mobile)]">

        {/* Label: Chetan Sharma — fades up first */}
        <div className="overflow-hidden mb-4">
          <motion.p
            className="font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.5em] uppercase text-[var(--color-secondary)]"
            initial={{ y: '120%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ delay: AFTER_PRELOADER, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Chetan Sharma
          </motion.p>
        </div>

        {/* Main Title — luxury staggered clip reveal */}
        <h1 className="font-[var(--font-display-xl)] text-[56px] md:text-[96px] font-[800] leading-none text-[var(--color-secondary)]">
          <SplitReveal text="PANACHE S16" delay={AFTER_PRELOADER + 0.1} charDelay={0.05} />
        </h1>

        {/* Thin golden rule that draws in under the title */}
        <div className="overflow-hidden mt-6 mb-10 flex justify-center">
          <motion.div
            className="h-[1px] bg-[var(--color-secondary)]/50"
            initial={{ width: 0 }}
            animate={{ width: '260px' }}
            transition={{ delay: AFTER_PRELOADER + 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Date / Venue info */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-[var(--spacing-gutter)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: AFTER_PRELOADER + 1.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-left border-l border-[var(--color-secondary)]/30 pl-6">
            <p className="font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase text-[var(--color-on-surface-variant)]">
              DATE
            </p>
            <p className="font-[var(--font-headline-md)] text-[32px] font-[600] text-[var(--color-on-surface)]">
              MARCH 14-21
            </p>
          </div>
          <div className="text-left border-l border-[var(--color-secondary)]/30 pl-6">
            <p className="font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase text-[var(--color-on-surface-variant)]">
              VENUE
            </p>
            <p className="font-[var(--font-headline-md)] text-[32px] font-[600] text-[var(--color-on-surface)]">
              VIVEKANANDA GLOBAL UNIVERSITY
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: AFTER_PRELOADER + 1.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/schedule">
            <button className="bg-[var(--color-secondary)] text-[var(--color-on-secondary-container)] px-10 py-5 font-[var(--font-label-caps)] text-[14px] font-[700] tracking-[0.2em] uppercase hover:scale-105 transition-transform duration-300">
              EXPLORE EVENTS
            </button>
          </Link>
          <Link to="/gallery">
            <button className="border border-[var(--color-on-surface)] text-[var(--color-on-surface)] px-10 py-5 font-[var(--font-label-caps)] text-[14px] font-[700] tracking-[0.2em] uppercase hover:bg-[var(--color-on-surface)] hover:text-[var(--color-background)] transition-all duration-300">
              VIEW GALLERY
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: AFTER_PRELOADER + 1.5, duration: 0.8 },
          y: { delay: AFTER_PRELOADER + 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <span className="material-symbols-outlined text-[var(--color-on-surface)] text-3xl">
          keyboard_double_arrow_down
        </span>
      </motion.div>
    </section>
  )
}
