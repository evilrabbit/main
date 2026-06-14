"use client"

import type { CSSProperties } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { TimelineNode } from "./timeline-node"
import type { TimelineItemProps } from "./types"

export function TimelineItem({
  item,
  index,
  isActive,
  isVisible,
  animateOnScroll,
  renderMeta,
  renderIndicator,
  itemRef,
}: TimelineItemProps) {
  const content = (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "text-lg font-medium tracking-[-0.02em] transition-colors duration-300",
              isActive ? "text-white" : "text-zinc-200 group-hover:text-white",
            )}
          >
            {item.title}
          </h3>
          {item.description && (
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
              {item.description}
            </p>
          )}
        </div>

        {(item.meta || renderMeta) && (
          <div className="shrink-0 text-sm tabular-nums text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
            {renderMeta ? renderMeta(item) : item.meta}
          </div>
        )}
      </div>
    </>
  )

  return (
    <li
      ref={itemRef}
      data-timeline-id={item.id}
      data-timeline-index={index}
      className={cn(
        "group relative grid grid-cols-[24px_1fr] gap-x-5 sm:gap-x-8",
        animateOnScroll && "timeline-item",
        animateOnScroll && isVisible && "timeline-item-visible",
        !animateOnScroll && "timeline-item-visible",
      )}
      style={
        animateOnScroll
          ? ({ "--timeline-delay": `${index * 70}ms` } as CSSProperties)
          : undefined
      }
    >
      <div className="flex justify-center pt-1.5">
        <TimelineNode
          active={item.active || isActive}
          visible={isVisible}
          indicator={renderIndicator?.(item)}
        />
      </div>

      <div
        className={cn(
          "-mx-4 rounded-xl border px-4 py-3 pb-12 transition-all duration-500 ease-out will-change-transform",
          "border-transparent group-hover:translate-x-1 group-hover:border-white/5 group-hover:bg-white/[0.02]",
          isActive && "translate-x-0.5 border-white/10 bg-white/[0.03] shadow-[inset_3px_0_0_0_rgba(255,255,255,0.85)]",
        )}
      >
        {item.href ? (
          <Link href={item.href} className="block rounded-xl outline-none ring-white/0 transition-shadow focus-visible:ring-2 focus-visible:ring-white/30">
            {content}
          </Link>
        ) : (
          content
        )}
      </div>
    </li>
  )
}