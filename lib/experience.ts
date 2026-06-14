import type { TimelineItemData } from "@/components/timeline"
import { expertise } from "@/lib/data"

export const experienceTimeline: TimelineItemData[] = expertise.map((item) => ({
  id: item.company.toLowerCase().replace(/\s+/g, "-"),
  title: item.company,
  description: item.role,
  meta: item.period,
  active: item.current,
}))