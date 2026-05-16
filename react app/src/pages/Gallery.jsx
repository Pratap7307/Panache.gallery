import { useState } from 'react'
import { AnimateWhenVisible, fadeUp } from '../components/animations'
import LazyImage from '../components/LazyImage'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  { id: 'all', label: 'ALL' },
  { id: 'artist', label: 'ARTIST' },
  { id: 'mafil', label: 'MAFIL-E-PANACHE' },
  { id: 'classic', label: 'CLASSIC' },
  { id: 'random', label: 'RANDOM FRAMES' }
]

// Helper for image paths
const imgPath = (src) => `/signature_exhibition_expanded_gallery/${src}`

const artistData = [
  { src: imgPath('ARTIST S16/DSC03536.webp'), col: 'col-span-12 md:col-span-8', aspect: 'aspect-video' },
  { src: imgPath('ARTIST S16/DSC04075.webp'), col: 'col-span-6 md:col-span-4', aspect: 'aspect-square' },
  { src: imgPath('ARTIST S16/_DSC0347.webp'), col: 'col-span-6 md:col-span-4', aspect: 'aspect-square' },
  { src: imgPath('ARTIST S16/DSC04548.webp'), col: 'col-span-12 md:col-span-4', aspect: 'aspect-[4/3]' },
  { src: imgPath('ARTIST S16/DSC03801.webp'), col: 'col-span-6 md:col-span-4', aspect: 'aspect-square' },
  { src: imgPath('ARTIST S16/DSC03958.webp'), col: 'col-span-6 md:col-span-3', aspect: 'aspect-[3/4]' },
  { src: imgPath('ARTIST S16/_DSC0396.webp'), col: 'col-span-6 md:col-span-3', aspect: 'aspect-[3/4]' },
  { src: imgPath('ARTIST S16/DSC04673.webp'), col: 'col-span-6 md:col-span-3', aspect: 'aspect-[3/4]' },
  { src: imgPath('ARTIST S16/DSC03743.webp'), col: 'col-span-6 md:col-span-3', aspect: 'aspect-[3/4]' },
  { src: imgPath('ARTIST S16/DSC03777.webp'), col: 'col-span-12', aspect: 'aspect-[21/9]' },
]

const mafilData = [
  { src: imgPath('mafil-e-panche/_DSC2430 (1).webp'), aspect: 'aspect-video' },
  { src: imgPath('mafil-e-panche/_DSC2355 (1).webp'), aspect: 'aspect-[3/4]' },
  { src: imgPath('mafil-e-panche/_DSC2436.webp'), aspect: 'aspect-square' },
  { src: imgPath('mafil-e-panche/_DSC2273 (1).webp'), aspect: 'aspect-[4/5]' },
  { src: imgPath('mafil-e-panche/_DSC2265.webp'), aspect: 'aspect-video' },
  { src: imgPath('mafil-e-panche/_DSC2215.webp'), aspect: 'aspect-[9/16]' },
  { src: imgPath('mafil-e-panche/_DSC2187.webp'), aspect: 'aspect-square' },
  { src: imgPath('mafil-e-panche/_DSC2434.webp'), aspect: 'aspect-video' },
  { src: imgPath('mafil-e-panche/_DSC2344.webp'), aspect: 'aspect-[3/4]' },
  { src: imgPath('mafil-e-panche/_DSC2244.webp'), aspect: 'aspect-square' },
]

const classicData = [
  { src: imgPath('classical/DSC01849.webp'), col: 'col-span-12 md:col-span-6', aspect: 'aspect-square' },
  { src: imgPath('culture/DSC00017.webp'), col: 'col-span-12 md:col-span-6', aspect: 'aspect-square' },
  { src: imgPath('classical/1773583468976.webp'), col: 'col-span-4', aspect: 'aspect-square' },
  { src: imgPath('classical/1773580863108.webp'), col: 'col-span-4', aspect: 'aspect-square' },
  { src: imgPath('classical/IMG_3993.webp'), col: 'col-span-4', aspect: 'aspect-square' },
  { src: imgPath('culture/_DSC0056.webp'), col: 'col-span-3', aspect: 'aspect-video' },
  { src: imgPath('culture/DSC00450 (1).webp'), col: 'col-span-3', aspect: 'aspect-video' },
  { src: imgPath('culture/DSC00009.webp'), col: 'col-span-3', aspect: 'aspect-video' },
  { src: imgPath('classical/_DSC0264 (1).webp'), col: 'col-span-3', aspect: 'aspect-video' },
  { src: imgPath('random frames/_DSC0110.webp'), col: 'col-span-12', aspect: 'h-64' },
]

const randomData = [
  { src: imgPath('random frames/_DSC0100.webp'), col: 'col-span-12 md:col-span-4', aspect: 'aspect-[3/4]' },
  { src: imgPath('random frames/_DSC0044 (1).jpg.webp'), col: 'col-span-12 md:col-span-8', aspect: 'aspect-video' },
  { src: imgPath('random frames/1773581067074.webp'), col: 'col-span-6 md:col-span-3', aspect: 'aspect-square' },
  { src: imgPath('random frames/DSC00009 (1).jpg.webp'), col: 'col-span-6 md:col-span-3', aspect: 'aspect-square' },
  { src: imgPath('DSC00102.webp'), col: 'col-span-6 md:col-span-3', aspect: 'aspect-square' },
  { src: imgPath('DSC09524 (2).webp'), col: 'col-span-6 md:col-span-3', aspect: 'aspect-square' },
  { src: imgPath('random frames/1773580318900.webp'), col: 'col-span-12', aspect: 'aspect-[21/9]' },
  { src: imgPath('random frames/DSC00005 (1).jpg.webp'), col: 'col-span-6', aspect: 'aspect-square' },
  { src: imgPath('random frames/DSC00295.webp'), col: 'col-span-6', aspect: 'aspect-square' },
  { src: imgPath('random frames/1773581067074.webp'), col: 'col-span-12', aspect: 'h-80' },
]

const allData = [...artistData, ...mafilData, ...classicData, ...randomData]

const galleryData = {
  all: allData,
  artist: artistData,
  mafil: mafilData,
  classic: classicData,
  random: randomData,
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all')

  const renderMasonry = (items) => (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-[var(--spacing-gutter)]">
      {items.map((img, i) => (
        <div key={i} className={`break-inside-avoid mb-[var(--spacing-gutter)] group relative overflow-hidden bg-[var(--color-surface-container)] ${img.aspect || ''}`}>
          <LazyImage
            alt={img.alt || 'Gallery image'}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={img.src}
          />
        </div>
      ))}
    </div>
  )

  const renderEditorial = (items) => (
    <div className="grid grid-cols-12 gap-[var(--spacing-gutter)]">
      {items.map((img, i) => (
        <div key={i} className={`${img.col} ${img.aspect} bg-[var(--color-surface-container)] overflow-hidden group relative`}>
          <LazyImage
            alt={img.alt || 'Gallery image'}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={img.src}
          />
        </div>
      ))}
    </div>
  )

  return (
    <main className="pt-32 min-h-screen">
      <header className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] mb-16 max-w-[var(--spacing-container-max)] mx-auto">
        <AnimateWhenVisible variants={fadeUp}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4 block">
                SIGNATURE EXHIBITION
              </span>
              <h2 className="font-[var(--font-display-xl)] text-[40px] md:text-[96px] text-[var(--color-on-surface)] leading-none italic">
                Capturing the <br />Moments that Define Style
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6 border-b border-[var(--color-outline-variant)] pb-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase pb-2 transition-all ${
                    activeTab === tab.id
                      ? 'text-[var(--color-secondary)] border-b border-[var(--color-secondary)]'
                      : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </AnimateWhenVisible>
      </header>

      <section className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] mb-[var(--spacing-section-gap)] max-w-[var(--spacing-container-max)] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'all' && renderMasonry(galleryData.all)}
            {activeTab === 'artist' && renderEditorial(galleryData.artist)}
            {activeTab === 'mafil' && renderMasonry(galleryData.mafil)}
            {activeTab === 'classic' && renderEditorial(galleryData.classic)}
            {activeTab === 'random' && renderEditorial(galleryData.random)}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Media Team Section */}
      <section className="bg-[var(--color-surface-container-lowest)] py-[var(--spacing-section-gap)]">
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
          <AnimateWhenVisible variants={fadeUp}>
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <span className="font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-4 block">
                  MEDIA TEAM
                </span>
                <h2 className="font-[var(--font-display-xl)] text-[40px] md:text-[64px] font-[700] text-[var(--color-on-surface)] leading-tight">
                  The Visionaries <br />behind the lens.
                </h2>
              </div>
              <p className="font-[var(--font-body-lg)] text-[20px] text-[var(--color-on-surface-variant)] max-w-md md:mb-2 italic">
                "Documenting the fusion of fashion and culture with cinematic precision."
              </p>
            </div>
            
            <div className="group flex flex-col max-w-2xl">
              <div className="relative overflow-hidden aspect-[16/9] mb-6 hover:shadow-[0_0_25px_rgba(233,195,73,0.4)] transition-all duration-500">
                <LazyImage
                  alt="Julian Vane"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-105"
                  src="/signature_exhibition_expanded_gallery/GTK01818.jpg.webp"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-[var(--font-label-caps)] text-[10px] font-[700] tracking-[0.3em] text-[var(--color-secondary)] mb-2 uppercase">
                  MEDIA HEAD
                </span>
                <h4 className="font-[var(--font-headline-md)] text-[32px] font-[600] text-[var(--color-on-surface)]">
                  UJJWAL KANT
                </h4>
                <div className="h-px w-full bg-[var(--color-outline-variant)] mt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </div>
            </div>
          </AnimateWhenVisible>
        </div>
      </section>
    </main>
  )
}
