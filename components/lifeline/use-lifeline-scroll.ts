"use client"

import { useEffect, useRef, useState } from "react"

export function useLifelineScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [maxTranslate, setMaxTranslate] = useState(0)

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      const section = sectionRef.current
      if (!track || !section) return

      const travel = Math.max(0, track.scrollWidth - window.innerWidth + 96)
      const height = window.innerHeight + travel * 1.35

      setMaxTranslate(travel)
      setScrollHeight(height)
    }

    measure()
    window.addEventListener("resize", measure)

    const resizeObserver = new ResizeObserver(measure)
    if (trackRef.current) resizeObserver.observe(trackRef.current)

    return () => {
      window.removeEventListener("resize", measure)
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section || scrollHeight <= window.innerHeight) return

      const rect = section.getBoundingClientRect()
      const travel = scrollHeight - window.innerHeight
      const scrolled = Math.min(travel, Math.max(0, -rect.top))
      const nextProgress = travel > 0 ? scrolled / travel : 0

      setProgress(nextProgress)

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${nextProgress * maxTranslate}px, 0, 0)`
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [scrollHeight, maxTranslate])

  return { sectionRef, trackRef, progress, scrollHeight }
}