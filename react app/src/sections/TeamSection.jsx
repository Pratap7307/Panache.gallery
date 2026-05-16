import { useRef } from 'react'
import { motion } from 'framer-motion'
import { AnimateWhenVisible, fadeUp } from '../components/animations'
import LazyImage from '../components/LazyImage'

const teamSlides = [
  { img: '/home.gallery/DSC05305.webp', alt: 'Director of Photography', title: 'Core' },
  { img: '/home.gallery/GTK09998.jpg.webp', alt: 'Creative Lead', title: 'Team behind the lens' },
  { img: '/home.gallery/DSC05282.webp', alt: 'Editorial Team', title: 'President' },
  { img: '/home.gallery/DOC-20260330-WA0007..jpg.webp', alt: 'Sound Curators', title: 'The Mans behind making peace' },
  { img: '/home.gallery/DOC-20260330-WA0013..jpg.webp', alt: 'Social Media', title: 'People That Make Events Successful' },
]

export default function TeamSection() {
  const sliderRef = useRef(null)

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({ left: dir * 400, behavior: 'smooth' })
  }

  return (
    <section className="py-[var(--spacing-section-gap)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto overflow-hidden">
      {/* Header */}
      <AnimateWhenVisible variants={fadeUp}>
        <div className="mb-12 flex justify-between items-end">
          <div>
            <span className="font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase text-[var(--color-secondary)] block mb-4">
              CORE TEAM
            </span>
            <h2 className="font-[var(--font-headline-lg)] text-[40px] md:text-[64px] font-[700] leading-tight text-[var(--color-on-surface)]">
              The Visionaries
            </h2>
          </div>
          <div className="hidden md:flex gap-4 mb-2">
            <button
              onClick={() => scroll(-1)}
              className="w-12 h-12 border border-[var(--color-secondary)]/30 flex items-center justify-center hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-all duration-300"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-12 h-12 border border-[var(--color-secondary)]/30 flex items-center justify-center hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-all duration-300"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </AnimateWhenVisible>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-[var(--spacing-gutter)] pb-8"
      >
        {teamSlides.map((slide, i) => (
          <div
            key={i}
            className="min-w-[70%] md:min-w-[45%] lg:min-w-[35%] snap-start group flex-shrink-0"
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="mb-4 relative overflow-hidden" style={{ height: '350px' }}>
                <LazyImage
                  alt={slide.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
                  src={slide.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent opacity-60" />
              </div>
              <p className="font-[var(--font-label-caps)] text-[10px] font-[700] text-[var(--color-secondary)] mb-1 uppercase">
                TEAM &nbsp; PANACHE &nbsp; S16
              </p>
              <h3 className="font-[var(--font-headline-md)] text-[20px] font-[600] text-[var(--color-on-surface)]">
                {slide.title}
              </h3>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Pagination dots (mobile) */}
      <div className="flex justify-center gap-2 mt-8 md:hidden">
        {teamSlides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[var(--color-secondary)]' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  )
}
