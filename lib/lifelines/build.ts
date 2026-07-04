import type { LifelineLegendItem, LifelineMarker } from "@/components/lifeline"

export const LIFELINE_CURRENT_YEAR = 2026

export type LifelineMilestone = Omit<LifelineMarker, "year">
export type LifelineMilestones = Record<number, LifelineMilestone>

export interface LifelineRecord {
  slug: string
  name: string
  birthYear: number
  /** Last year on the timeline. Omit for living people. */
  endYear?: number
  description: string
  /** People-legend labels; defaults to Mentors / Met in person. */
  legend?: LifelineLegendItem[]
  markers: LifelineMarker[]
}

interface DefineLifelineInput {
  slug: string
  name: string
  birthYear: number
  endYear?: number
  description: string
  legend?: LifelineLegendItem[]
  milestones: LifelineMilestones
}

export function defineLifeline(input: DefineLifelineInput): LifelineRecord {
  const { milestones, ...record } = input
  const lastYear = input.endYear ?? LIFELINE_CURRENT_YEAR
  const markers: LifelineMarker[] = []

  for (let year = input.birthYear; year <= lastYear; year++) {
    const milestone = milestones[year]

    markers.push(
      milestone
        ? { year, ...milestone }
        : { id: `year-${year}`, year, events: [] },
    )
  }

  return { ...record, markers }
}
