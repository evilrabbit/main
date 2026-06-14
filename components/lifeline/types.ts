import type { CompanyIconId } from "./company-icon"


export interface LifelineMentor {
  name: string
  role: string
  color: string
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
  ageNotes?: string[]
  events: LifelineEvent[]
  companies?: LifelineCompany[]
  mentors?: LifelineMentor[]
  active?: boolean
}

export interface LifelineProps {
  markers: LifelineMarker[]
  className?: string
  title?: string
}