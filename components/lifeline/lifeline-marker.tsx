import { cn } from "@/lib/utils"
import type { LifelineMarker } from "./types"

interface LifelineMarkerColumnProps {
  marker: LifelineMarker
  isActive: boolean
  minWidth: number
}

export function LifelineMarkerColumn({
  marker,
  isActive,
  minWidth,
}: LifelineMarkerColumnProps) {
  return (
    <div
      className="relative shrink-0 pr-10"
      style={{ width: minWidth }}
      aria-label={`${marker.year}`}
    >
      <p
        className={cn(
          "mb-4 text-sm font-medium tabular-nums transition-colors duration-500",
          marker.active || isActive ? "text-white" : "text-zinc-500",
        )}
      >
        {marker.year}
      </p>

      <div className="relative h-px">
        <span
          className={cn(
            "absolute left-0 top-1/2 z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-500",
            marker.active
              ? "scale-110 border-white bg-white shadow-[0_0_20px_rgba(255,255,255,0.55)]"
              : isActive
                ? "border-white bg-white"
                : "border-zinc-600 bg-black",
          )}
        />
      </div>

      <div
        className={cn(
          "space-y-2 pt-8 transition-colors duration-500",
          marker.active || isActive ? "text-zinc-300" : "text-zinc-500",
        )}
      >
        {marker.events.map((event) => (
          <p
            key={event}
            className="max-w-[16rem] text-[15px] leading-relaxed tracking-[-0.01em]"
          >
            {event}
          </p>
        ))}

        {marker.mentors && marker.mentors.length > 0 && (
          <div className="mt-6 space-y-3">
            {marker.mentors.map((mentor) => (
              <div key={mentor.name} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-[10px] font-medium text-zinc-400">
                  {mentor.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <p className="text-sm text-zinc-400">
                  <span className="text-zinc-300">{mentor.name}</span>
                  <span className="text-zinc-600"> · </span>
                  <span>{mentor.role}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}