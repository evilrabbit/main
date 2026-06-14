"use client"

import { useEffect, useRef, useState } from "react"

const NAV_HEIGHT = 64
const FOOTER_HEIGHT = 96
const LERP = 0.14

export function useLifelineScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const targetProgress = useRef(0)
  const currentProgress = useRef(0)
  const maxTranslate = useRef(0)
  const frame = useRef<number>()
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

      const travel = Math.max(0, track.scrollWidth - window.innerWidth + 120)
      const stage = window.innerHeight - NAV_HEIGHT - FOOTER_HEIGHT

      maxTranslate.current = travel
      setScrollHeight(stage + travel * 1.15)
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
    const applyTransform = (value: number) => {
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${value * maxTranslate.current}px, 0, 0)`
      }
      setProgress(value)
    }

    const updateTarget = () => {
      const section = sectionRef.current
      if (!section || scrollHeight <= 0) return

      const rect = section.getBoundingClientRect()
      const stage = window.innerHeight - NAV_HEIGHT - FOOTER_HEIGHT
      const travel = Math.max(1, scrollHeight - stage)
      const scrolled = Math.min(travel, Math.max(0, -rect.top))
      targetProgress.current = scrolled / travel
    }

    const tick = () => {
      const delta = targetProgress.current - currentProgress.current
      if (Math.abs(delta) > 0.0005) {
        currentProgress.current += delta * LERP
      } else {
        currentProgress.current = targetProgress.current
      }
      applyTransform(currentProgress.current)
      frame.current = requestAnimationFrame(tick)
    }

    const onScroll = () => updateTarget()

    const onWheel = (event: WheelEvent) => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const inSection = rect.top <= NAV_HEIGHT && rect.bottom >= window.innerHeight - FOOTER_HEIGHT
      if (!inSection) return

      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault()
        const stage = window.innerHeight - NAV_HEIGHT - FOOTER_HEIGHT
        const travel = Math.max(1, scrollHeight - stage)
        const delta = event.deltaX / travel
        targetProgress.current = Math.min(1, Math.max(0, targetProgress.current + delta * 0.85))

        const nextScroll = targetProgress.current * travel
        window.scrollTo({ top: section.offsetTop + nextScroll, behavior: "auto" })
      }
    }

    updateTarget()
    frame.current = requestAnimationFrame(tick)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    window.addEventListener("wheel", onWheel, { passive: false })

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      window.removeEventListener("wheel", onWheel)
    }
  }, [scrollHeight])

  return { sectionRef, trackRef, progress, scrollHeight }
}