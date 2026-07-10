"use client"

import { forwardRef, useEffect, useMemo, type CSSProperties } from "react"
import { cn } from "@/lib/utils"
import { CompanyIcon } from "./company-icon"
import {
  getLifelineEventEffect,
  getLifelineEventKey,
  LifelineEventText,
} from "./lifeline-event"
import { useLifelineFireworks } from "./lifeline-fireworks"
import { aggregateLifelinePeople, LifelinePeople } from "./lifeline-people"
import type { LifelineMarker, LifelineProps } from "./types"
import { getMarkerHeight, hasMarkerContent } from "./lifeline-utils"
import { useLifelineIntro } from "./use-lifeline-intro"
import { useLifelineVerticalScroll } from "./use-lifeline-vertical-scroll"

const GRID_CLASS = "grid grid-cols-[2.5rem_1rem_1fr] gap-x-3"
const RAIL_LEFT = "calc(2.5rem + 0.75rem + 0.5rem)"

/**
 * Above this many entries the delay-armed intro fades would promote
 * every entry to a compositor layer at once and crash mobile Safari's
 * compositor. Long timelines fade entries in as they enter the
 * viewport during the auto-scroll instead — same look, but only a
 * handful of live animations at any moment.
 */
const MAX_ARMED_ENTRIES = 80

function RailTick() {
  return (
    <span
      aria-hidden="true"
      className="block h-px w-[10px] bg-zinc-400 transition-colors duration-300 dark:bg-zinc-700"
    />
  )
}

const LifelineVerticalEntry = forwardRef<
  HTMLLIElement,
  {
    marker: LifelineMarker
    birthYear: number
    animateIntro?: boolean
    introDelay?: number
    introDuration?: number
    revealPending?: boolean
  }
>(function LifelineVerticalEntry(
  {
    marker,
    birthYear,
    animateIntro = false,
    introDelay = 0,
    introDuration = 420,
    revealPending = false,
  },
  ref,
) {
  const age = marker.age ?? marker.year - birthYear
  const people = aggregateLifelinePeople(marker)
  const hasContent = hasMarkerContent(marker)
  const fireworks = useLifelineFireworks()

  return (
    <li
      ref={ref}
      className={hasContent ? "pb-10" : "pb-3"}
      aria-label={`${marker.year}`}
    >
      <div
        className={cn(
          animateIntro && "lifeline-marker-intro",
          revealPending && "opacity-0",
        )}
        style={{
          animationDelay: animateIntro ? `${introDelay}ms` : undefined,
          ...(animateIntro
            ? ({
                "--lifeline-marker-fade-ms": `${introDuration}ms`,
              } as CSSProperties)
            : {}),
        }}
      >
        <div className={`${GRID_CLASS} items-center`}>
          <p className="text-right text-[11px] font-medium leading-4 tabular-nums text-zinc-500 transition-colors duration-300 dark:text-zinc-600">
            {age}
          </p>

          <div className="flex items-center justify-center">
            <RailTick />
          </div>

          <p className="text-[15px] font-medium leading-5 tabular-nums text-zinc-500 transition-colors duration-300 dark:text-zinc-400">
            {marker.year}
          </p>
        </div>

        {hasContent && (
          <div className={`${GRID_CLASS} mt-6`}>
            <div aria-hidden="true" />
            <div aria-hidden="true" />
            <div className="min-w-0 text-zinc-500 transition-colors duration-300 dark:text-zinc-400">
              {marker.companies && marker.companies.length > 0 && (
                <div className="mb-2 flex items-center justify-start gap-1.5">
                  {marker.companies.map((company) => (
                    <CompanyIcon
                      key={company.id}
                      id={company.id}
                      label={company.name}
                      className="opacity-70"
                    />
                  ))}
                </div>
              )}

              {marker.events.length > 0 && (
                <div className="space-y-4">
                  {marker.events.map((event, index) => {
                    const effect = getLifelineEventEffect(event)

                    return (
                      <p
                        key={getLifelineEventKey(event, index)}
                        className="max-w-[18rem] text-left text-[14px] leading-[1.55] tracking-[-0.01em]"
                        onClick={
                          effect && fireworks
                            ? () => fireworks.launch(effect)
                            : undefined
                        }
                      >
                        <LifelineEventText event={event} />
                      </p>
                    )
                  })}
                </div>
              )}

              {people.length > 0 && (
                <div className="mt-6 border-t border-zinc-200/70 pt-5 transition-colors duration-300 dark:border-zinc-800/70">
                  <LifelinePeople people={people} allowWrap />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </li>
  )
})

export function LifelineVertical({
  markers,
  birthYear,
  title = "Lifeline",
}: LifelineProps) {
  const heights = useMemo(
    () =>
      markers.map((marker, index) =>
        getMarkerHeight(marker, markers[index + 1]?.year),
      ),
    [markers],
  )

  const intro = useLifelineIntro(heights)
  const isIntroAnimating = intro.shouldPlay && intro.isPlaying

  const { sectionRef, setEntryRef, isLayoutReady } = useLifelineVerticalScroll(
    markers.length,
    {
      introLocked: isIntroAnimating,
      introAnimating: isIntroAnimating,
      introSkipped: !intro.shouldPlay,
      introRailMs: intro.railDuration,
      introGetTrackProgress: intro.getTrackProgressAtTime,
      onIntroScrollStart: intro.startIntroTimer,
      onIntroSettleComplete: intro.completeIntro,
    },
  )

  const showIntro = isIntroAnimating && isLayoutReady
  const revealOnScroll = markers.length > MAX_ARMED_ENTRIES
  const animateEntries = showIntro && !revealOnScroll

  // Rail-synced fades for long timelines: entries render hidden and
  // each one fades in the moment the rail tip (--lifeline-intro-progress,
  // written every frame by the intro scroll) crosses its position —
  // desktop's choreography, but each entry drops its animation (and
  // compositor layer) as soon as its fade finishes.
  useEffect(() => {
    if (!showIntro || !revealOnScroll) return
    const section = sectionRef.current
    const ol = section?.querySelector("ol")
    if (!section || !ol) return

    const entries = Array.from(ol.children) as HTMLElement[]
    const targets = entries.map(
      (li) => li.firstElementChild as HTMLElement | null,
    )

    const onAnimationEnd = (event: AnimationEvent) => {
      if (event.animationName !== "lifeline-marker-in") return
      ;(event.target as HTMLElement).classList.remove("lifeline-marker-intro")
    }
    section.addEventListener("animationend", onAnimationEnd)

    let next = 0
    let frame = 0
    const tick = () => {
      const progress = parseFloat(
        section.style.getPropertyValue("--lifeline-intro-progress") || "0",
      )
      const tip = progress * ol.offsetHeight

      while (next < entries.length && entries[next].offsetTop <= tip) {
        const el = targets[next]
        if (el) {
          el.classList.remove("opacity-0")
          el.classList.add("lifeline-marker-intro")
        }
        next++
      }

      if (next < entries.length) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      section.removeEventListener("animationend", onAnimationEnd)
      targets.forEach((el) => {
        el?.classList.remove("opacity-0", "lifeline-marker-intro")
      })
    }
  }, [showIntro, revealOnScroll, sectionRef])

  const introStyle = {
    "--lifeline-labels-ms": `${intro.labelsDuration}ms`,
    "--lifeline-rail-ms": `${intro.railDuration}ms`,
  } as CSSProperties

  return (
    <article
      ref={sectionRef}
      aria-label={title}
      className={cn(
        "relative select-none px-6 pb-10 pt-4 [&_a]:cursor-pointer",
        !isLayoutReady && "invisible",
      )}
      style={showIntro ? introStyle : undefined}
    >
      <div className={cn(`${GRID_CLASS} mb-6 items-end`, showIntro && "lifeline-labels-intro")}>
        <p className="text-right text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-zinc-500 transition-colors duration-300 dark:text-zinc-600">
          Age
        </p>
        <div aria-hidden="true" />
        <p className="text-[11px] font-medium uppercase leading-5 tracking-[0.08em] text-zinc-500 transition-colors duration-300 dark:text-zinc-600">
          Years
        </p>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 top-0 overflow-hidden -translate-x-1/2"
          style={{ left: RAIL_LEFT, width: 1 }}
        >
          <div
            className={cn(
              "h-full w-px border-l border-dashed border-zinc-300 transition-colors duration-300 dark:border-zinc-800",
              showIntro && "lifeline-rail-intro-vertical",
            )}
          />
        </div>

        <ol className="relative">
          {markers.map((marker, index) => (
            <LifelineVerticalEntry
              key={marker.id}
              ref={(node) => setEntryRef(index, node)}
              marker={marker}
              birthYear={birthYear}
              animateIntro={animateEntries}
              revealPending={showIntro && revealOnScroll}
              introDelay={intro.getMarkerDelay(index)}
              introDuration={intro.getMarkerFadeDuration(index)}
            />
          ))}
        </ol>
      </div>
    </article>
  )
}