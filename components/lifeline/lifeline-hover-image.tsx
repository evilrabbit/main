"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react"
import { clamp } from "./lifeline-utils"
import type { LifelineEventImage } from "./types"

/** Tweak these */
const FOLLOW_EASE = 0.16
const TILT_FACTOR = 0.14
const TILT_MAX_DEG = 7
const TILT_EASE = 0.1
const CURSOR_OFFSET_X = 24
const CURSOR_OFFSET_Y = 96

interface LifelineHoverImageApi {
  show: (image: LifelineEventImage) => void
  hide: () => void
}

const LifelineHoverImageContext = createContext<LifelineHoverImageApi | null>(
  null,
)

export function useLifelineHoverImage() {
  return useContext(LifelineHoverImageContext)
}

/**
 * A cursor-following image reveal. The floating element lives at the
 * provider level — it must stay outside the transformed track, since
 * position: fixed resolves against the nearest transformed ancestor.
 */
export function LifelineHoverImageProvider({
  children,
}: {
  children: ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const state = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    tilt: 0,
    visible: false,
    hoverCapable: false,
    frame: 0,
  })

  useEffect(() => {
    state.current.hoverCapable = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches

    const onMouseMove = (event: MouseEvent) => {
      state.current.targetX = event.clientX
      state.current.targetY = event.clientY
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(state.current.frame)
    }
  }, [])

  const step = useCallback(() => {
    const s = state.current
    const container = containerRef.current
    if (!container) return

    const dx = s.targetX - s.x
    s.x += dx * FOLLOW_EASE
    s.y += (s.targetY - s.y) * FOLLOW_EASE

    const targetTilt = clamp(dx * TILT_FACTOR, -TILT_MAX_DEG, TILT_MAX_DEG)
    s.tilt += (targetTilt - s.tilt) * TILT_EASE

    container.style.transform = `translate3d(${s.x + CURSOR_OFFSET_X}px, ${
      s.y - CURSOR_OFFSET_Y
    }px, 0) rotate(${s.tilt}deg)`

    if (s.visible) {
      s.frame = requestAnimationFrame(step)
    }
  }, [])

  const api = useMemo<LifelineHoverImageApi>(
    () => ({
      show(image) {
        const s = state.current
        const container = containerRef.current
        const img = imageRef.current
        if (!s.hoverCapable || !container || !img) return

        img.src = image.src
        img.alt = image.alt

        if (!s.visible) {
          // Materialize at the cursor instead of flying in from the
          // last resting point.
          s.x = s.targetX
          s.y = s.targetY
          s.tilt = 0
        }

        s.visible = true
        container.style.opacity = "1"
        img.style.transform = "scale(1)"

        cancelAnimationFrame(s.frame)
        s.frame = requestAnimationFrame(step)
      },
      hide() {
        const s = state.current
        const container = containerRef.current
        const img = imageRef.current
        if (!container || !img) return

        s.visible = false
        container.style.opacity = "0"
        img.style.transform = "scale(0.94)"
      },
    }),
    [step],
  )

  return (
    <LifelineHoverImageContext.Provider value={api}>
      {children}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] opacity-0 transition-opacity duration-200 ease-out will-change-transform"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imageRef}
          alt=""
          className="w-[280px] scale-95 rounded-xl shadow-2xl ring-1 ring-black/10 transition-transform duration-200 ease-out dark:ring-white/15"
          decoding="async"
        />
      </div>
    </LifelineHoverImageContext.Provider>
  )
}
