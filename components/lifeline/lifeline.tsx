"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { LifelineMarkerColumn } from "./lifeline-marker"
import type { LifelineProps } from "./types"
import { useLifelineScroll } from "./use-lifeline-scroll"

function getMarkerWidth(year: number, nextYear?: number) {
  if (!nextYear) return 300
  const gap = Math.max(1, nextYear - year)
  return Math.min(380, Math.max(240, gap * 36))
}

export function Lifeline({ markers, className, title = "Lifeline" }: LifelineProps) {
  const { sectionRef, trackRef, progress, scrollHeight } = useLifelineScroll()

  const widths = useMemo(
    () =>
      markers.map((marker, index) =>
        getMarkerWidth(marker.year, markers[index + 1]?.year),
      ),
    [markers],
  )

  const trackWidth = widths.reduce((sum, width) => sum + width, 0) + 160
  const activeIndex = Math.min(
    markers.length - 1,
    Math.floor(progress * markers.length),
  )

  const railTop = "3.25rem"

  return (
    <section
      ref={sectionRef}
      className={cn("relative", className)}
      style={{ height: scrollHeight || "100vh" }}
      aria-label={title}
    >
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col overflow-hidden">
        <div className="flex items-end justify-between gap-6 px-6 pb-10 pt-8">
          <h2 className="text-2xl font-medium tracking-[-0.03em] text-white">{title}</h2>
          <p className="hidden text-sm text-zinc-500 sm:block">Scroll to travel through time</p>
        </div>

        <div className="relative min-h-0 flex-1">
          <div
            ref={trackRef}
            className="absolute left-6 top-0 will-change-transform"
            style={{ width: trackWidth }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 border-t border-dashed border-zinc-800"
              style={{ top: `calc(${railTop} - 1.5rem)` }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 h-px bg-zinc-800"
              style={{ top: railTop }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 h-px origin-left bg-gradient-to-r from-white via-white/70 to-transparent"
              style={{
                top: railTop,
                width: `${Math.max(12, progress * 100)}%`,
              }}
            />

            <div className="flex items-start pl-4">
              {markers.map((marker, index) => (
                <LifelineMarkerColumn
                  key={marker.id}
                  marker={marker}
                  isActive={index === activeIndex}
                  minWidth={widths[index]}
                />
              ))}
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 border-t border-dashed border-zinc-800"
              style={{ top: `calc(${railTop} + 12rem)` }}
            />
          </div>
        </div>

        <div className="px-6 pb-10 pt-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-800">
              <div
                className="h-px bg-white transition-[width] duration-300"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <span className="shrink-0 text-xs tabular-nums text-zinc-500">
              {markers[0]?.year} — {markers[markers.length - 1]?.year}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}