"use client"

import { useEffect, useState } from "react"
import { ReactLenis } from "lenis/react"

/**
 * Global, progressively-enhanced smooth scrolling.
 *
 * Native scrolling remains the fallback during SSR and whenever the user asks
 * for reduced motion. Reader panels opt out with `data-lenis-prevent` so their
 * nested scrolling stays isolated and predictable.
 */
export function SmoothScroll() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")

    const update = () => setEnabled(!motionPreference.matches)
    update()
    motionPreference.addEventListener("change", update)

    return () => motionPreference.removeEventListener("change", update)
  }, [])

  if (!enabled) return null

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        autoResize: true,
        autoToggle: true,
        anchors: true,
        smoothWheel: true,
        // Keep wheel motion soft without making long pages feel sluggish.
        lerp: 0.075,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        syncTouch: true,
        syncTouchLerp: 0.075,
        stopInertiaOnNavigate: true,
      }}
    />
  )
}
