import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function TopNav() {
  const location = useLocation()

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'GALLERY', path: '/gallery' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[var(--color-background)]/60 backdrop-blur-xl">
      <div className="flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-6 w-full max-w-[var(--spacing-container-max)] mx-auto">
        <Link to="/" className="font-[var(--font-display-xl)] text-[32px] font-[600] tracking-tighter text-[var(--color-on-surface)]">
          PANACHE S16
        </Link>
        <div className="hidden md:flex items-center gap-[var(--spacing-gutter)]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-[var(--font-label-caps)] text-[12px] font-[700] tracking-[0.2em] uppercase transition-colors duration-500 pb-1 ${
                  isActive ? 'text-[var(--color-secondary)]' : 'text-[var(--color-on-surface)]/70 hover:text-[var(--color-on-surface)]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-[1px] bg-[var(--color-secondary)]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
