import { AnimateWhenVisible, fadeUp } from './animations'

export default function Footer() {
  return (
    <AnimateWhenVisible variants={fadeUp}>
      <footer className="w-full py-[var(--spacing-section-gap)] bg-[var(--color-background)] border-t border-[var(--color-outline-variant)] mt-[var(--spacing-section-gap)]">
        <div className="flex flex-col md:flex-row justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] gap-[var(--spacing-gutter)] w-full max-w-[var(--spacing-container-max)] mx-auto">
          <div className="font-[var(--font-display-xl)] text-[32px] font-[600] text-[var(--color-on-surface)]">
            PANACHE S16
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase text-[var(--color-on-surface-variant)]">
              © 2026 PANACHE S16. THE PREMIERE OF STYLE.
            </p>
          </div>
        </div>
      </footer>
    </AnimateWhenVisible>
  )
}
