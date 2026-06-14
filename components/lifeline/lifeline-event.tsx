import { cn } from "@/lib/utils"
import type { LifelineEvent } from "./types"

export function LifelineEventText({
  event,
  className,
}: {
  event: LifelineEvent
  className?: string
}) {
  if (typeof event === "string") {
    return <span className={className}>{event}</span>
  }

  return (
    <span className={className}>
      {event.map((segment, index) =>
        segment.type === "link" ? (
          <a
            key={index}
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
            className="relative z-20 underline decoration-zinc-700 underline-offset-2 transition-colors hover:text-white hover:decoration-zinc-400"
          >
            {segment.value}
          </a>
        ) : (
          <span key={index}>{segment.value}</span>
        ),
      )}
    </span>
  )
}

export function getLifelineEventKey(event: LifelineEvent, index: number) {
  if (typeof event === "string") return `${index}-${event}`

  return `${index}-${event.map((segment) => segment.value).join("")}`
}