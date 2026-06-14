"use client"

import { useMemo, type CSSProperties } from "react"
import { cn } from "@/lib/utils"
import {
  LifelineStickyLabels,
  LIFELINE_STICKY_SHIELD_WIDTH,
} from "./lifeline-labels"
import { LifelineMarkerColumn } from "./lifeline-marker"
import { LIFELINE_BIRTH_YEAR } from "@/lib/lifeline"
import type { LifelineMarker, LifelineProps } from "./types"
import { LifelineLegend } from "./lifeline-legend"
import { useLifelineIntro } from "./use-lifeline-intro"
import { useLifelineScroll } from "./use-lifeline-scroll"

function hasMarkerContent(marker: LifelineMarker) {
  return (
    marker.events.length > 0 ||
    (marker.companies?.length ?? 0) > 0 ||
    (marker.mentors?.length ?? 0) > 0 ||
    (marker.met?.length ?? 0) > 0
  )
}

function hasMarkerPeople(marker: LifelineMarker) {
  return (marker.mentors?.length ?? 0) > 0 || (marker.met?.length ?? 0) > 0
}

function getMarkerWidth(marker: LifelineMarker, nextYear?: number) {
  const hasContent = hasMarkerContent(marker)
  const hasPeople = hasMarkerPeople(marker)

  if (!nextYear) return hasContent ? 360 : 80
  if (!hasContent) return 80

  const peopleOnly =
    hasPeople &&
    marker.events.length === 0 &&
    (marker.companies?.length ?? 0) === 0

  if (peopleOnly) return 220

  const gap = Math.max(1, nextYear - marker.year)
  return Math.min(420, Math.max(290, gap * 36))
}

export function Lifeline({ markers, className, title = "Lifeline" }: LifelineProps) {
  const widths = useMemo(
    () =>
      markers.map((marker, index) =>
        getMarkerWidth(marker, markers[index + 1]?.year),
      ),
    [markers],
  )

  const intro = useLifelineIntro(widths)
  const isIntroAnimating = intro.shouldPlay && intro.isPlaying

  const { sectionRef, trackRef, labelsRef, setMarkerRef, isLayoutReady } =
    useLifelineScroll(markers.length, {
      introLocked: isIntroAnimating,
      introAnimating: isIntroAnimating,
      introSkipped: !intro.shouldPlay,
      introRailMs: intro.railDuration,
      introGetTrackProgress: intro.getTrackProgressAtTime,
      onIntroScrollStart: intro.startIntroTimer,
      onIntroSettleComplete: intro.completeIntro,
    })

  const showIntro = isIntroAnimating && isLayoutReady

  const trackWidth =
    LIFELINE_STICKY_SHIELD_WIDTH + widths.reduce((sum, width) => sum + width, 0)

  const introStyle = {
    "--lifeline-labels-ms": `${intro.labelsDuration}ms`,
    "--lifeline-rail-ms": `${intro.railDuration}ms`,
  } as CSSProperties

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative h-full min-h-0 select-none overflow-hidden [&_a]:cursor-pointer",
        !isLayoutReady && "invisible",
        className,
      )}
      aria-label={title}
      style={showIntro ? introStyle : undefined}
    >
      <div className="flex h-full items-center overflow-hidden">
        <div
          ref={trackRef}
          className="relative flex w-max items-start will-change-transform [--lifeline-people-top:calc(14.5rem+40px)] [--lifeline-rail:5rem]"
          style={{ width: trackWidth }}
        >
          <div
            ref={labelsRef}
            className="lifeline-labels shrink-0 will-change-transform"
            style={{ width: LIFELINE_STICKY_SHIELD_WIDTH }}
          >
            <div className={cn(showIntro && "lifeline-labels-intro")}>
              <LifelineStickyLabels />
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[var(--lifeline-rail)] h-px overflow-hidden"
            >
              <div
                className={cn(
                  "h-px w-full border-t border-dashed border-zinc-300 dark:border-zinc-800",
                  showIntro && "lifeline-rail-intro",
                )}
              />
            </div>

            <div className="relative flex items-start">
              {markers.map((marker, index) => (
                <LifelineMarkerColumn
                  key={marker.id}
                  ref={(node) => setMarkerRef(index, node)}
                  marker={marker}
                  birthYear={LIFELINE_BIRTH_YEAR}
                  minWidth={widths[index]}
                  animateIntro={showIntro}
                  introDelay={intro.getMarkerDelay(index)}
                  introDuration={intro.getMarkerFadeDuration(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <LifelineLegend />
    </section>
  )
}