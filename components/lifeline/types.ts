import type { CompanyIconId } from "./company-icon"
import type { MarkerIconId } from "./marker-icon"

export interface LifelineMentor {
  name: string
  role: string
  color: string
}

export interface LifelineCompany {
  id: CompanyIconId
  name: string
}

export interface LifelineMarker {
  id: string
  year: number
  events: string[]
  icon?: MarkerIconId
  companies?: LifelineCompany[]
  mentors?: LifelineMentor[]
  active?: boolean
}

export interface LifelineProps {
  markers: LifelineMarker[]
  className?: string
  title?: string
}