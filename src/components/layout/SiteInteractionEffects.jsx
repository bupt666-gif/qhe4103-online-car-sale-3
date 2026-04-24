'use client'

import { useEffect, useRef, useState } from 'react'

export default function SiteInteractionEffects() {
  const [enabled, setEnabled] = useState(false)
  const [sparks, setSparks] = useState([])
  const cursorRef = useRef(null)
  const sparkId = useRef(0)

  useEffect(() => {
    const canAnimate =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setEnabled(canAnimate)

    if (!canAnimate) {
      return undefined
    }

    let frame = 0
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const moveCursor = (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY

      if (frame) return

      frame = requestAnimationFrame(() => {
        frame = 0
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`
        }
      })
    }

    const createSpark = (event) => {
      const id = sparkId.current + 1
      sparkId.current = id

      setSparks((current) => [
        ...current.slice(-10),
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ])

      window.setTimeout(() => {
        setSparks((current) => current.filter((spark) => spark.id !== id))
      }, 720)
    }

    window.addEventListener('pointermove', moveCursor, { passive: true })
    window.addEventListener('pointerdown', createSpark, { passive: true })

    return () => {
      window.removeEventListener('pointermove', moveCursor)
      window.removeEventListener('pointerdown', createSpark)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      <div ref={cursorRef} className="site-cursor-orb" />
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="site-click-spark"
          style={{
            left: spark.x,
            top: spark.y,
          }}
        />
      ))}
    </div>
  )
}
