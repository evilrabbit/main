"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  getTransitionMarkerFadeDuration,
  LIFELINE_FAST_MARKER_FADE_MS,
  timeAtTrackProgress,
  trackProgressAtTime,
} from "./lifeline-intro-timing"

/** Tweak these */
export const LIFELINE_LABELS_MS = 600
export const LIFELINE_RAIL_MS = 3200

export function useLifelineIntro(markerWidths: number[]) {
  // Skip straight to the settled end state for users who prefer reduced motion.
  const [shouldPlay] = useState(
    () =>
      typeof window === "undefined" ||
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  const [isPlaying, setIsPlaying] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const introTimeoutRef = useRef(0)

  const totalMarkersWidth = useMemo(
    () => markerWidths.reduce((sum, width) => sum + width, 0),
    [markerWidths],
  )

  const introDuration = LIFELINE_RAIL_MS + LIFELINE_FAST_MARKER_FADE_MS

  const getTrackProgressAtTime = useCallback(
    (elapsedMs: number) => {
      if (!shouldPlay || totalMarkersWidth <= 0) {
        return Math.min(elapsedMs / LIFELINE_RAIL_MS, 1)
      }

      return trackProgressAtTime(elapsedMs, markerWidths, LIFELINE_RAIL_MS)
    },
    [markerWidths, shouldPlay, totalMarkersWidth],
  )

  const getMarkerDelay = useCallback(
    (index: number) => {
      if (!shouldPlay || totalMarkersWidth <= 0) return 0

      const offset = markerWidths
        .slice(0, index)
        .reduce((sum, width) => sum + width, 0)

      return timeAtTrackProgress(
        offset / totalMarkersWidth,
        markerWidths,
        LIFELINE_RAIL_MS,
      )
    },
    [markerWidths, shouldPlay, totalMarkersWidth],
  )

  const getMarkerFadeDuration = useCallback((index: number) => {
    return getTransitionMarkerFadeDuration(index)
  }, [])

  const completeIntro = useCallback(() => {
    setIsComplete(true)
  }, [])

  const startIntroTimer = useCallback(() => {
    window.clearTimeout(introTimeoutRef.current)
    setIsPlaying(true)
    setIsComplete(false)

    introTimeoutRef.current = window.setTimeout(() => {
      setIsPlaying(false)
    }, introDuration)
  }, [introDuration])

  useEffect(() => {
    return () => window.clearTimeout(introTimeoutRef.current)
  }, [])

  return {
    shouldPlay,
    isPlaying,
    isComplete,
    labelsDuration: LIFELINE_LABELS_MS,
    railDuration: LIFELINE_RAIL_MS,
    getTrackProgressAtTime,
    getMarkerDelay,
    getMarkerFadeDuration,
    startIntroTimer,
    completeIntro,
  }
}