import { forwardRef } from "react"
import { cn } from "@/lib/utils"
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
      <p
        className={cn(
          "mb-5 text-[15px] font-medium tabular-nums transition-colors duration-300",
          marker.active || isActive ? "text-white" : "text-zinc-500",
        )}
      >
        {marker.year}
      </p>

      <div className="relative h-px">
        <span
          className={cn(
            "absolute left-0 top-1/2 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
            marker.active
              ? "bg-white shadow-[0_0_16px_rgba(255,255,255,0.5)]"
              : isActive
                ? "bg-white"
                : "bg-zinc-700 ring-2 ring-black",
          )}
        />
      </div>

      <div
        className={cn(
          "space-y-1.5 pt-7 transition-colors duration-300",
          marker.active || isActive ? "text-zinc-300" : "text-zinc-500",
        )}
      >
        {marker.events.map((event) => (
          <p
            key={event}
            className="max-w-[14rem] text-[14px] leading-[1.55] tracking-[-0.01em]"
          >
            {event}
          </p>
        ))}

        {marker.mentors && marker.mentors.length > 0 && (
          <div className="mt-5 space-y-2.5">
            {marker.mentors.map((mentor) => (
              <div key={mentor.name} className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[10px] text-zinc-500 ring-1 ring-zinc-800">
                  {mentor.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <p className="text-[13px] text-zinc-500">
                  <span className="text-zinc-400">{mentor.name}</span>
                  <span className="text-zinc-700"> · </span>
                  {mentor.role}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
})