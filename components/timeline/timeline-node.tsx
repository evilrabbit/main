"use client"

import { cn } from "@/lib/utils"

interface TimelineNodeProps {
  active?: boolean
  visible?: boolean
  isFirst?: boolean
  isLast?: boolean
  indicator?: React.ReactNode
}

export function TimelineNode({
  active = false,
  visible = true,
  indicator,
}: TimelineNodeProps) {
  return (
    <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center">
      {active && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 rounded-full bg-white/10",
            "animate-timeline-pulse",
          )}
        />
      )}

      <span
        className={cn(
          "relative flex h-3 w-3 items-center justify-center rounded-full border transition-all duration-500",
          active
            ? "scale-100 border-white bg-white shadow-[0_0_24px_rgba(255,255,255,0.45)]"
            : "scale-90 border-zinc-600 bg-black",
          visible ? "opacity-100" : "opacity-40",
        )}
      >
        {indicator}
      </span>
    </div>
  )
}