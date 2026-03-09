import { useEffect, useRef } from 'react'

export default function CursorEffect() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const trailRefs = useRef([])

  const mouse = useRef({ x: -200, y: -200 })
  const ring  = useRef({ x: -200, y: -200 })
  const trail = useRef(Array.from({ length: 8 }, () => ({ x: -200, y: -200 })))
  const hue   = useRef(0)
  const rafId = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    // Hide default cursor on root
    document.documentElement.style.cursor = 'none'

    const animate = () => {
      hue.current = (hue.current + 2) % 360
      const color  = `hsl(${hue.current}, 100%, 65%)`
      const color2 = `hsl(${(hue.current + 60) % 360}, 100%, 65%)`

      // Snap dot to cursor
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x - 5}px, ${mouse.current.y - 5}px)`
        dotRef.current.style.background = color
        dotRef.current.style.boxShadow  = `0 0 12px 4px ${color}99`
      }

      // Ring follows with easing
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14
      if (ringRef.current) {
        ringRef.current.style.transform   = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`
        ringRef.current.style.borderColor = color
        ringRef.current.style.boxShadow   = `0 0 16px 3px ${color}55`
      }

      // Trail — each point chases the one before it
      trail.current[0].x += (mouse.current.x - trail.current[0].x) * 0.35
      trail.current[0].y += (mouse.current.y - trail.current[0].y) * 0.35
      for (let i = 1; i < trail.current.length; i++) {
        trail.current[i].x += (trail.current[i - 1].x - trail.current[i].x) * 0.35
        trail.current[i].y += (trail.current[i - 1].y - trail.current[i].y) * 0.35
      }
      trailRefs.current.forEach((el, i) => {
        if (!el) return
        const t = trail.current[i]
        const trailHue = (hue.current + i * 18) % 360
        const trailColor = `hsl(${trailHue}, 100%, 65%)`
        const size = 8 - i * 0.8
        const opacity = 1 - i / trail.current.length
        el.style.transform  = `translate(${t.x - size / 2}px, ${t.y - size / 2}px)`
        el.style.width      = `${size}px`
        el.style.height     = `${size}px`
        el.style.opacity    = opacity
        el.style.background = trailColor
        el.style.boxShadow  = `0 0 6px 2px ${trailColor}88`
      })

      rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
      document.documentElement.style.cursor = ''
    }
  }, [])

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed top-0 left-0 rounded-full pointer-events-none"
          style={{ zIndex: 9996, willChange: 'transform', position: 'fixed' }}
        />
      ))}

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 pointer-events-none"
        style={{ zIndex: 9998, willChange: 'transform', transition: 'border-color 0.05s' }}
      />

      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none"
        style={{ zIndex: 9999, willChange: 'transform' }}
      />
    </>
  )
}
