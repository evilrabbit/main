"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const NAV_HEIGHT = 64
const FOOTER_HEIGHT = 96
const FADE_ZONE = 200
const WHEEL_SPEED = 1.4
const DRAG_SPEED = 1

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

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest("a, button"))
}

function isInStage(clientY: number) {
  return (
    clientY >= NAV_HEIGHT &&
    clientY <= window.innerHeight - FOOTER_HEIGHT
  )
}

export function useLifelineScroll(markerCount: number) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const markerRefs = useRef<(HTMLDivElement | null)[]>([])
  const maxTranslate = useRef(0)
  const translatePx = useRef(0)
  const initialized = useRef(false)
  const dragging = useRef(false)
  const dragOrigin = useRef({ x: 0, translate: 0 })
  const [progress, setProgress] = useState(1)

  const setMarkerRef = useCallback((index: number, node: HTMLDivElement | null) => {
    markerRefs.current[index] = node
  }, [])

  const updateFades = useCallback(() => {
    const width = window.innerWidth

    markerRefs.current.forEach((marker) => {
      if (!marker) return

      const rect = marker.getBoundingClientRect()
      const center = rect.left + rect.width / 2

      let opacity = 1

      if (center < FADE_ZONE) {
        opacity = center / FADE_ZONE
      } else if (center > width - FADE_ZONE) {
        opacity = (width - center) / FADE_ZONE
      }

      marker.style.opacity = String(clamp(opacity, 0, 1))
    })
  }, [])

  const applyTranslate = useCallback(
    (value: number) => {
      const max = maxTranslate.current
      const next = clamp(value, 0, max)
      translatePx.current = next

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${next}px, 0, 0)`
      }

      setProgress(max > 0 ? next / max : 1)
      updateFades()
    },
    [updateFades],
  )

  useEffect(() => {
    markerRefs.current = new Array(markerCount).fill(null)
  }, [markerCount])

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
      initialized.current = false
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let frameId = 0
    let resizeObserver: ResizeObserver | null = null

    const measure = () => {
      const track = trackRef.current
      if (!track) return

      const max = Math.max(0, track.scrollWidth - window.innerWidth + 96)
      maxTranslate.current = max

      if (!initialized.current) {
        translatePx.current = max
        initialized.current = true
      } else {
        translatePx.current = clamp(translatePx.current, 0, max)
      }

      applyTranslate(translatePx.current)
    }

    const scheduleMeasure = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(measure)
    }

    scheduleMeasure()
    frameId = requestAnimationFrame(() => {
      measure()
      requestAnimationFrame(measure)
    })

    resizeObserver = new ResizeObserver(scheduleMeasure)
    if (trackRef.current) resizeObserver.observe(trackRef.current)

    window.addEventListener("resize", scheduleMeasure)

    const onWheel = (event: WheelEvent) => {
      if (!isInStage(event.clientY)) return

      if (maxTranslate.current <= 0) {
        scheduleMeasure()
        return
      }

      event.preventDefault()

      const delta = normalizeWheelDelta(event)
      applyTranslate(translatePx.current - delta * WHEEL_SPEED)
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!isInStage(event.clientY)) return
      if (isInteractiveTarget(event.target)) return
      if (maxTranslate.current <= 0) return

      dragging.current = true
      dragOrigin.current = { x: event.clientX, translate: translatePx.current }
      section.setPointerCapture(event.pointerId)
      section.style.cursor = "grabbing"
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging.current) return

      const deltaX = event.clientX - dragOrigin.current.x
      applyTranslate(dragOrigin.current.translate - deltaX * DRAG_SPEED)
    }

    const endDrag = (event: PointerEvent) => {
      if (!dragging.current) return

      dragging.current = false

      if (section.hasPointerCapture(event.pointerId)) {
        section.releasePointerCapture(event.pointerId)
      }

      section.style.cursor = ""
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (maxTranslate.current <= 0) return

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault()
        applyTranslate(translatePx.current - maxTranslate.current * 0.05)
      }

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault()
        applyTranslate(translatePx.current + maxTranslate.current * 0.05)
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    section.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", endDrag)
    window.addEventListener("pointercancel", endDrag)
    window.addEventListener("keydown", onKeyDown)

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver?.disconnect()
      window.removeEventListener("resize", scheduleMeasure)
      window.removeEventListener("wheel", onWheel)
      section.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", endDrag)
      window.removeEventListener("pointercancel", endDrag)
      window.removeEventListener("keydown", onKeyDown)
      dragging.current = false
      section.style.cursor = ""
    }
  }, [applyTranslate, markerCount])

  return { sectionRef, trackRef, progress, setMarkerRef }
}