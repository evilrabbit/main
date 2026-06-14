import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { CompanyIcon } from "./company-icon"

import type { LifelineMarker } from "./types"

interface LifelineMarkerColumnProps {
  marker: LifelineMarker
  isActive: boolean
  minWidth: number
}

export const LifelineMarkerColumn = forwardRef<
  HTMLDivElement,
  LifelineMarkerColumnProps
>(function LifelineMarkerColumn({ marker, isActive, minWidth }, ref) {
  return (
    <div
      ref={ref}
      className="relative shrink-0 pr-8 transition-opacity duration-300 ease-out will-change-[opacity]"
      style={{ width: minWidth }}
      aria-label={`${marker.year}`}
    >
      <div className="flex w-fit max-w-full flex-col items-start text-left">
        <p
          className={cn(
            "mb-3 h-5 text-[15px] font-medium leading-5 tabular-nums transition-colors duration-300",
            marker.active || isActive ? "text-white" : "text-zinc-500",
          )}
        >
          {marker.year}
        </p>

        <div className="relative h-0 w-full">
          <span
            className={cn(
              "absolute left-0 top-0 z-10 h-[10px] w-px -translate-y-1/2 transition-colors duration-300",
              marker.active || isActive ? "bg-zinc-400" : "bg-zinc-700",
            )}
          />
        </div>

        <div
          className={cn(
            "flex w-full flex-col items-start pt-6 transition-colors duration-300",
            marker.active || isActive ? "text-zinc-300" : "text-zinc-500",
          )}
        >
          {marker.companies && marker.companies.length > 0 && (
            <div className="mb-2 flex items-center justify-start gap-1.5">
              {marker.companies.map((company) => (
                <CompanyIcon
                  key={company.id}
                  id={company.id}
                  label={company.name}
                  className={cn(
                    "transition-opacity duration-300",
                    marker.active || isActive ? "opacity-100" : "opacity-70",
                  )}
                />
              ))}
            </div>
          )}

          <div className="space-y-1.5">
            {marker.events.map((event) => (
              <p
                key={event}
                className="max-w-[14rem] text-left text-[14px] leading-[1.55] tracking-[-0.01em]"
              >
                {event}
              </p>
            ))}
          </div>

          {marker.mentors && marker.mentors.length > 0 && (
            <div className="w-full space-y-3" style={{ marginTop: 80 }}>
              {marker.mentors.map((mentor) => (
                <div key={mentor.name} className="flex items-center gap-2.5">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                    aria-hidden="true"
                  />
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-medium text-white"
                    style={{ backgroundColor: mentor.color }}
                  >
                    {mentor.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <p className="text-left text-[13px] text-zinc-400">
                    {mentor.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
})