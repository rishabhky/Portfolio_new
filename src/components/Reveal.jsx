import { useEffect, useRef, useState } from 'react'

/* Fades content up once as it enters the viewport. Motion is disabled
   entirely under prefers-reduced-motion (see index.css). */
export default function Reveal({ children }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${shown ? 'reveal-shown' : ''}`}>
      {children}
    </div>
  )
}
