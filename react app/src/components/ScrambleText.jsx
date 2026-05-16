import { useState, useEffect } from 'react'

const CHARS = 'ABCDEFGHIJKLMN9!@#*'

export default function ScrambleText({ text, duration = 1500, delay = 0, className = '' }) {
  const [displayText, setDisplayText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    // Initial invisible state
    setDisplayText(text.replace(/./g, ' '))
    
    const startTimer = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay, text])

  useEffect(() => {
    if (!started) return

    let startTime = null
    let animationFrame = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress >= duration) {
        setDisplayText(text)
        return
      }

      const newText = text.split('').map((char, index) => {
        if (char === ' ') return ' '
        
        // Stagger the reveal from left to right
        const charRevealTime = (duration / text.length) * index
        
        // If we've passed this character's reveal time, show the real character
        if (progress > charRevealTime + (duration * 0.3)) {
           return char
        }
        
        // Otherwise, show a random character
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      })

      setDisplayText(newText.join(''))
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [text, duration, started])

  return (
    <span className={className}>
      {displayText}
    </span>
  )
}
