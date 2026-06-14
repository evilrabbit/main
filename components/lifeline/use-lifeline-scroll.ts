"use client"

import { useEffect, useRef, useState } from "react"

const NAV_HEIGHT = 64
const FOOTER_HEIGHT = 96

export function useLifelineScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const maxTranslate = useRef(0)
  const [progress, setProgress] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    document.documentElement.classList.add("lifeline-scroll")
    return () => document.documentElement.classList.remove("lifeline-scroll")
  }, [])

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return

      const travel = Math.max(0, track.scrollWidth - window.innerWidth + 96)
      const stage = window.innerHeight - NAV_HEIGHT - FOOTER_HEIGHT

      maxTranslate.current = travel
      setScrollHeight(stage + travel)
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
    const update = () => {
      const section = sectionRef.current
      const track = trackRef.current
      if (!section || !track || scrollHeight <= 0) return

      const stage = window.innerHeight - NAV_HEIGHT - FOOTER_HEIGHT
      const travel = Math.max(1, scrollHeight - stage)
      const scrolled = Math.min(travel, Math.max(0, -section.getBoundingClientRect().top))
      const value = scrolled / travel

      track.style.transform = `translate3d(-${value * maxTranslate.current}px, 0, 0)`
      setProgress(value)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)

    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [scrollHeight])

  return { sectionRef, trackRef, progress, scrollHeight }
}