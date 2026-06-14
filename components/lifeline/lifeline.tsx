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
  const { sectionRef, trackRef, progress, scrollHeight } = useLifelineScroll()

  const widths = useMemo(
    () =>
      markers.map((marker, index) =>
        getMarkerWidth(marker.year, markers[index + 1]?.year),
      ),
    [markers],
  )

  const trackWidth = widths.reduce((sum, width) => sum + width, 0) + 200
  const activeIndex = Math.min(
    markers.length - 1,
    Math.floor(progress * markers.length),
  )

  const stageHeight = "calc(100vh - 4rem - 6rem)"

  return (
    <section
      ref={sectionRef}
      className={cn("relative", className)}
      style={{ height: scrollHeight || stageHeight }}
      aria-label={title}
    >
      <div
        className="sticky top-16 flex flex-col overflow-hidden px-6"
        style={{ height: stageHeight }}
      >
        <div className="flex shrink-0 items-baseline justify-between pb-8 pt-10">
          <h2 className="text-2xl font-medium tracking-[-0.03em] text-white">{title}</h2>
          <span className="text-sm tabular-nums text-zinc-600">
            {markers[0]?.year} — {markers[markers.length - 1]?.year}
          </span>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-black to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-black to-transparent"
          />

          <div className="relative h-[min(420px,55vh)] w-full">
            <div
              ref={trackRef}
              className="absolute left-0 top-1/2 w-max -translate-y-1/2 will-change-transform"
              style={{ width: trackWidth }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-[2.35rem] border-t border-dashed border-zinc-800/80"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-10 h-px bg-zinc-800"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-10 h-px bg-white/80"
                style={{ width: `${Math.max(0, progress) * 100}%` }}
              />

              <div className="flex items-start pl-10">
                {markers.map((marker, index) => (
                  <LifelineMarkerColumn
                    key={marker.id}
                    marker={marker}
                    isActive={index === activeIndex}
                    minWidth={widths[index]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}