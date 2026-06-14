"use client"

import { useCallback, useEffect, useRef, useState } from "react"

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function normalizeWheelDelta(event: WheelEvent) {
  let delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
    ? event.deltaX
    : event.deltaY

  if (event.deltaMode === 1) delta *= 16
  if (event.deltaMode === 2) delta *= window.innerHeight

  return delta
}

export function useLifelineScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const maxTranslate = useRef(0)
  const progress = useRef(0)
  const [progressState, setProgressState] = useState(0)

  const applyProgress = useCallback((value: number) => {
    const next = clamp(value, 0, 1)
    progress.current = next

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(-${next * maxTranslate.current}px, 0, 0)`
    }

    setProgressState(next)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    html.classList.add("lifeline-scroll")
    const previousHtmlOverflow = html.style.overflow
    const previousBodyOverflow = body.style.overflow
    html.style.overflow = "hidden"
    body.style.overflow = "hidden"

    window.scrollTo(0, 0)

    return () => {
      html.classList.remove("lifeline-scroll")
      html.style.overflow = previousHtmlOverflow
      body.style.overflow = previousBodyOverflow
    }
  }, [])

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return

      maxTranslate.current = Math.max(0, track.scrollWidth - window.innerWidth + 96)
      applyProgress(progress.current)
    }

    measure()
    window.addEventListener("resize", measure)

    const resizeObserver = new ResizeObserver(measure)
    if (trackRef.current) resizeObserver.observe(trackRef.current)

    return () => {
      window.removeEventListener("resize", measure)
      resizeObserver.disconnect()
    }
  }, [applyProgress])

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (maxTranslate.current <= 0) return

      event.preventDefault()

      const delta = normalizeWheelDelta(event)
      const next = progress.current + delta / maxTranslate.current
      applyProgress(next)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (maxTranslate.current <= 0) return

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault()
        applyProgress(progress.current + 0.04)
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault()
        applyProgress(progress.current - 0.04)
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [applyProgress])

  return { sectionRef, trackRef, progress: progressState }
}