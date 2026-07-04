import type {
  LifelineEvent,
  LifelineEventImage,
  LifelineEventSegment,
} from "./types"

function getEventContent(
  event: LifelineEvent,
): string | LifelineEventSegment[] {
  if (typeof event === "object" && !Array.isArray(event) && "text" in event) {
    return event.text
  }

  return event
}

export function getLifelineEventImage(
  event: LifelineEvent,
): LifelineEventImage | undefined {
  if (typeof event === "object" && !Array.isArray(event) && "image" in event) {
    return event.image
  }

  return undefined
}

export function LifelineEventText({
  event,
  className,
}: {
  event: LifelineEvent
  className?: string
}) {
  const content = getEventContent(event)

  if (typeof content === "string") {
    return <span className={className}>{content}</span>
  }

  return (
    <span className={className}>
      {content.map((segment, index) =>
        segment.type === "link" ? (
          <a
            key={index}
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-400 underline-offset-2 transition-colors duration-300 group-hover:text-black group-hover:decoration-zinc-600 dark:decoration-zinc-700 dark:group-hover:text-white dark:group-hover:decoration-zinc-400"
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
  const content = getEventContent(event)

  if (typeof content === "string") return `${index}-${content}`

  return `${index}-${content.map((segment) => segment.value).join("")}`
}
