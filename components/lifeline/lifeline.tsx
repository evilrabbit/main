"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { LifelineMarkerColumn } from "./lifeline-marker"
import type { LifelineProps } from "./types"
import { useLifelineScroll } from "./use-lifeline-scroll"

function getMarkerWidth(year: number, nextYear?: number) {
  if (!nextYear) return 280
  const gap = Math.max(1, nextYear - year)
  return Math.min(340, Math.max(220, gap * 32))
}

export function Lifeline({ markers, className, title = "Lifeline" }: LifelineProps) {
  const { sectionRef, trackRef, progress, setMarkerRef } = useLifelineScroll(
    markers.length,
  )

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

  return (
    <section
      ref={sectionRef}
      className={cn(
        "h-[calc(100vh-4rem-6rem)] touch-none select-none overflow-hidden",
        className,
      )}
      aria-label={title}
    >
      <div className="flex h-full items-center overflow-hidden">
        <div
          ref={trackRef}
          className="relative w-max will-change-transform pl-12 pr-24 [--lifeline-rail:2rem]"
          style={{ width: trackWidth }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[var(--lifeline-rail)] border-t border-dashed border-zinc-800"
          />

          <div className="relative flex items-start">
            {markers.map((marker, index) => (
              <LifelineMarkerColumn
                key={marker.id}
                ref={(node) => setMarkerRef(index, node)}
                marker={marker}
                isActive={index === activeIndex}
                minWidth={widths[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}