import { useState, useEffect, useRef } from 'react'

export default function LazyImage({ src, alt, className = '', ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px' } // Preload when within 400px of viewport
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Invisible ref element to track intersection */}
      <div ref={imgRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Skeleton / Placeholder */}
      {!isLoaded && (
        <div className={`absolute inset-0 bg-white/5 animate-pulse ${className}`} />
      )}
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`transition-all duration-[1500ms] ${
            isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
          } ${className}`}
          {...props}
        />
      )}
    </>
  )
}
