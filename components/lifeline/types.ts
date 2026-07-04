import type { CompanyIconId } from "./company-icon"


export interface LifelineMentor {
  name: string
  role?: string
  color?: string
  photo?: string
}

export interface LifelineMetPerson {
  name: string
  photo?: string
}

export interface LifelineCompany {
  id: CompanyIconId
  name: string
}

export type LifelineEventSegment =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string }

export type LifelineEvent = string | LifelineEventSegment[]

export interface LifelineMarker {
  id: string
  year: number
  age?: number
  events: LifelineEvent[]
  companies?: LifelineCompany[]
  mentors?: LifelineMentor[]
  met?: LifelineMetPerson[]
}

/**
 * A legend entry maps one of the two people slots to a subject-appropriate
 * label — "Mentors" for a person, "Presidents" for a nation.
 */
export interface LifelineLegendItem {
  type: "mentor" | "met"
  label: string
}

export interface LifelineProps {
  markers: LifelineMarker[]
  birthYear: number
  legend?: LifelineLegendItem[]
  className?: string
  title?: string
}