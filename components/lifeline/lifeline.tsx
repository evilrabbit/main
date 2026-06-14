"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { LifelineMarkerColumn } from "./lifeline-marker"
import { LIFELINE_BIRTH_YEAR } from "@/lib/lifeline"
import type { LifelineProps } from "./types"
import { useLifelineScroll } from "./use-lifeline-scroll"

function getMarkerWidth(year: number, nextYear?: number) {
  if (!nextYear) return 280
  const gap = Math.max(1, nextYear - year)
  return Math.min(340, Math.max(220, gap * 32))
}

export function Lifeline({ markers, className, title = "Lifeline" }: LifelineProps) {
  const { sectionRef, trackRef, setMarkerRef } = useLifelineScroll(
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

  return (
    <section
      ref={sectionRef}
      className={cn(
        "h-full min-h-0 select-none overflow-hidden [&_a]:cursor-pointer",
        className,
      )}
      aria-label={title}
    >
      <div className="flex h-full items-center overflow-hidden">
        <div
          ref={trackRef}
          className="relative w-max will-change-transform pl-12 pr-24 [--lifeline-rail:5.25rem]"
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
                birthYear={LIFELINE_BIRTH_YEAR}
                minWidth={widths[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}