export interface LifelineMentor {
  name: string
  role: string
}

export interface LifelineMarker {
  id: string
  year: number
  events: string[]
  mentors?: LifelineMentor[]
  active?: boolean
}

export interface LifelineProps {
  markers: LifelineMarker[]
  className?: string
  title?: string
}