import type { CompanyIconId } from "./company-icon"


export interface LifelineMentor {
  name: string
  role: string
  color: string
}

export interface LifelineMetPerson {
  name: string
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

export interface LifelineProps {
  markers: LifelineMarker[]
  className?: string
  title?: string
}