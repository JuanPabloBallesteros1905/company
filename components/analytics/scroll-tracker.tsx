"use client"

import { useEffect } from "react"
import { track } from "@/lib/analytics"

/**
 * Envía un evento de profundidad de scroll (25/50/75/100) una sola vez por visita.
 * Sirve para saber si la gente realmente lee la página o rebota en el hero.
 */
export function ScrollTracker() {
  useEffect(() => {
    const milestones = [25, 50, 75, 100]
    const reached = new Set<number>()
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const percent = scrollable > 0 ? Math.round((window.scrollY / scrollable) * 100) : 100
        for (const milestone of milestones) {
          if (percent >= milestone && !reached.has(milestone)) {
            reached.add(milestone)
            track("scroll_depth", { percent: milestone })
          }
        }
        ticking = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return null
}
