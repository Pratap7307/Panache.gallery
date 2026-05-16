import { AnimateWhenVisible, fadeLeft, fadeUp, scaleIn } from '../components/animations'
import LazyImage from '../components/LazyImage'

export default function AboutSection() {
  return (
    <section className="py-[var(--spacing-section-gap)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] items-center">

        {/* Left visuals */}
        <AnimateWhenVisible variants={fadeLeft} className="md:col-span-6 relative group">
          <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <LazyImage
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-transform duration-700 scale-110 group-hover:scale-100"
              src="/home.gallery/_DSC0138.webp"
              alt="Sophisticated editorial portrait of a performer"
            />
          </div>
          {/* Floating overlaid image */}
          <div className="absolute -bottom-12 -right-8 w-2/3 aspect-video hidden md:block border-[12px] border-[var(--color-background)] shadow-2xl">
            <LazyImage
              className="w-full h-full object-cover"
              src="/home.gallery/_DSC0043.webp"
              alt="Vibrant crowd at luxury festival"
            />
          </div>
        </AnimateWhenVisible>

        {/* Right copy */}
        <div className="md:col-span-5 md:col-start-8 mt-16 md:mt-0">
          <AnimateWhenVisible variants={fadeUp} delay={0.1}>
            <div className="mb-8">
              <span className="font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase text-[var(--color-secondary)] block mb-4">
                INTRODUCTION
              </span>
              <h2 className="font-[var(--font-headline-lg)] text-[40px] md:text-[64px] font-[700] leading-tight text-[var(--color-on-surface)]">
                The Narrative
              </h2>
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible variants={fadeUp} delay={0.2}>
            <div className="space-y-8">
              <p className="font-[var(--font-body-lg)] text-[20px] leading-relaxed text-[var(--color-on-surface)]/90">
                Panache S16 is more than a festival; it is a meticulously curated sensory journey. This year, we transcend the boundaries of traditional performance to explore the intersection of heritage and avant-garde expression.
              </p>
              <div className="h-px w-24 bg-[var(--color-secondary)]" />
              <p className="font-[var(--font-body-md)] text-[16px] leading-loose text-[var(--color-on-surface-variant)]">
                From the high-stakes drama of the runway to the rhythmic intensity of the main stage, our narrative is woven from the threads of creativity, culture, and pure technical mastery. We invite you to witness the evolution of style where every movement is a masterpiece and every moment is legendary.
              </p>

              <div className="pt-6 grid grid-cols-2 gap-[var(--spacing-gutter)]">
                <AnimateWhenVisible variants={scaleIn} delay={0.35}>
                  <p className="font-[var(--font-display-xl)] text-[64px] font-[700] text-[var(--color-secondary)]">100+</p>
                  <p className="font-[var(--font-label-caps)] text-[10px] font-[700] text-[var(--color-on-surface-variant)] uppercase tracking-tighter">
                    Artistic Showcases
                  </p>
                </AnimateWhenVisible>
                <AnimateWhenVisible variants={scaleIn} delay={0.45}>
                  <p className="font-[var(--font-display-xl)] text-[64px] font-[700] text-[var(--color-secondary)]">50+</p>
                  <p className="font-[var(--font-label-caps)] text-[10px] font-[700] text-[var(--color-on-surface-variant)] uppercase tracking-tighter">
                    EVENTS
                  </p>
                </AnimateWhenVisible>
              </div>
            </div>
          </AnimateWhenVisible>
        </div>

      </div>
    </section>
  )
}
