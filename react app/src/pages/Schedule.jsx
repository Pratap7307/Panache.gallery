import { AnimateWhenVisible, fadeUp } from '../components/animations'
import LazyImage from '../components/LazyImage'

const scheduleEvents = [
  {
    title: 'Concert Night',
    category: 'CONCERT',
    desc: 'Artist, Comedian and bands etc.',
    img: '/events_schedule/schedule.gallery/DSC03757.webp',
    alt: 'A dynamic high-fashion concert stage'
  },
  {
    title: 'Cultural Events',
    category: 'CULTURE SHOWCASE',
    desc: 'Showcase of variour culture , lifestyle , music and dance etc .',
    img: '/events_schedule/schedule.gallery/DSC00009 (1).webp',
    alt: 'A cinematic close-up of a rock musician'
  },
  {
    title: 'Random Frames',
    category: 'RANDOM FRAMES',
    desc: 'Random moments from the event , candid shots of the audience and behind the scenes etc .',
    img: '/events_schedule/schedule.gallery/_DSC0176.webp',
    alt: 'A contemporary dance troupe performing'
  }
]

export default function Schedule() {
  return (
    <main className="pt-32 min-h-screen">
      <section className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] mb-[var(--spacing-section-gap)] max-w-[var(--spacing-container-max)] mx-auto">
        <AnimateWhenVisible variants={fadeUp}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4 block">
                THE ART OF SHOWCASE
              </span>
              <h1 className="font-[var(--font-display-xl)] text-[56px] md:text-[96px] font-[800] leading-none text-[var(--color-on-surface)]">
                THE SPECTACLE
              </h1>
            </div>
          </div>
        </AnimateWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-gutter)] pb-10">
          {scheduleEvents.map((ev, i) => (
            <AnimateWhenVisible key={i} variants={fadeUp} delay={i * 0.1}>
              <div className="w-full group relative overflow-hidden transition-all duration-700 aspect-[3/4] bg-[var(--color-surface-container)] hover:shadow-[0_0_30px_rgba(233,195,73,0.2)]">
                <LazyImage
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700"
                  src={ev.img}
                  alt={ev.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-2 block">
                    {ev.category}
                  </span>
                  <h3 className="font-[var(--font-headline-md)] text-[32px] font-[600] text-[var(--color-on-surface)] mb-4">
                    {ev.title}
                  </h3>
                  <p className="font-[var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)] mb-6 line-clamp-2">
                    {ev.desc}
                  </p>
                </div>
              </div>
            </AnimateWhenVisible>
          ))}
        </div>
      </section>
    </main>
  )
}
