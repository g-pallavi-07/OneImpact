import { useEffect, useRef, useState } from 'react'

/**
 * Adds a `.is-visible` class once the element scrolls into view.
 * Pair with the `.reveal` CSS utility for a gentle opacity/transform fade-in.
 */
export default function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
