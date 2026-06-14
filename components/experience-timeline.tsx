"use client"

import { InfinityMark } from "@/components/infinity-mark"
import { Timeline } from "@/components/timeline"
import { experienceTimeline } from "@/lib/experience"

export function ExperienceTimeline() {
  return (
    <Timeline
      items={experienceTimeline}
      renderMeta={(item) => (
        <span className="inline-flex items-center">
          {item.meta}
          {item.active && <InfinityMark />}
        </span>
      )}
    />
  )
}