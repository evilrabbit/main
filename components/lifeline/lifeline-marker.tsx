import { forwardRef, type CSSProperties } from "react"
import { cn } from "@/lib/utils"
import { CompanyIcon } from "./company-icon"
import { getLifelineEventKey, LifelineEventText } from "./lifeline-event"
import { aggregateLifelinePeople, LifelinePeople } from "./lifeline-people"
import type { LifelineMarker } from "./types"

interface LifelineMarkerColumnProps {
  marker: LifelineMarker
  birthYear: number
  minWidth: number
  animateIntro?: boolean
  introDelay?: number
  introDuration?: number
}

export const LifelineMarkerColumn = forwardRef<
  HTMLDivElement,
  LifelineMarkerColumnProps
>(function LifelineMarkerColumn(
  {
    marker,
    birthYear,
    minWidth,
    animateIntro = false,
    introDelay = 0,
    introDuration = 420,
  },
  ref,
) {
  const age = marker.age ?? marker.year - birthYear
  const people = aggregateLifelinePeople(marker)

  return (
    <div
      ref={ref}
      className="group relative shrink-0 pr-8 transition-opacity duration-300 ease-out will-change-opacity"
      style={{ width: minWidth }}
      aria-label={`${marker.year}`}
    >
      <div
        className={cn("relative", animateIntro && "lifeline-marker-intro")}
        style={{
          animationDelay: animateIntro ? `${introDelay}ms` : undefined,
          ...(animateIntro
            ? ({
                "--lifeline-marker-fade-ms": `${introDuration}ms`,
              } as CSSProperties)
            : {}),
        }}
      >
        <span
          className="absolute left-0 top-[var(--lifeline-rail)] z-10 h-[10px] w-px -translate-y-1/2 bg-zinc-400 transition-colors duration-300 group-hover:bg-zinc-600 dark:bg-zinc-700 dark:group-hover:bg-zinc-400"
          aria-hidden="true"
        />

        <div className="flex w-full flex-col items-start text-left">
          <p className="mb-5 h-4 text-[11px] font-medium leading-4 tabular-nums text-zinc-500 transition-colors duration-300 group-hover:text-black dark:text-zinc-600 dark:group-hover:text-zinc-400">
            {age}
          </p>

          <p className="mb-6 h-5 text-[15px] font-medium leading-5 tabular-nums text-zinc-500 transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">
            {marker.year}
          </p>

          <div className="relative w-full pb-10 text-zinc-500 transition-colors duration-300 group-hover:text-black dark:group-hover:text-zinc-300">
            <div className="flex w-full flex-col items-start pt-6">
              {marker.companies && marker.companies.length > 0 && (
                <div className="mb-2 flex items-center justify-start gap-1.5">
                  {marker.companies.map((company) => (
                    <CompanyIcon
                      key={company.id}
                      id={company.id}
                      label={company.name}
                      className="opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  ))}
                </div>
              )}

              <div className="min-h-[3.25rem] space-y-4">
                {marker.events.map((event, index) => (
                  <p
                    key={getLifelineEventKey(event, index)}
                    className="max-w-[18rem] text-left text-[14px] leading-[1.55] tracking-[-0.01em]"
                  >
                    <LifelineEventText event={event} />
                  </p>
                ))}
              </div>
            </div>

            {people.length > 0 && (
              <div className="absolute left-0 top-[var(--lifeline-people-top)] w-full">
                <LifelinePeople people={people} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
})