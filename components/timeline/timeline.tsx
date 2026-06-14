"use client"

import { cn } from "@/lib/utils"
import { TimelineItem } from "./timeline-item"
import type { TimelineProps } from "./types"
import { useTimeline } from "./use-timeline"

export function Timeline({
  items,
  className,
  animateOnScroll = true,
  renderMeta,
  renderIndicator,
}: TimelineProps) {
  const { containerRef, setItemRef, visibleIds, activeIndex, progress } = useTimeline(items.length)

  return (
    <div className={cn("relative", className)}>
      <ol
        ref={containerRef}
        className="relative m-0 list-none p-0"
        aria-label="Timeline"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-3 top-3 w-px bg-zinc-800/90"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 w-px origin-top bg-gradient-to-b from-white via-white/70 to-white/10 transition-[height] duration-500 ease-out will-change-[height]"
          style={{ height: `calc((100% - 3rem) * ${progress})` }}
        />

        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isFirst={index === 0}
            isLast={index === items.length - 1}
            isActive={activeIndex === index}
            isVisible={visibleIds.has(item.id)}
            animateOnScroll={animateOnScroll}
            renderMeta={renderMeta}
            renderIndicator={renderIndicator}
            itemRef={setItemRef(index)}
          />
        ))}
      </ol>
    </div>
  )
}