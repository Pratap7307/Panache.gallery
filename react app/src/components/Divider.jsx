export default function Divider() {
  return (
    <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto overflow-hidden">
      <div className="w-full h-px bg-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
      </div>
    </div>
  )
}
