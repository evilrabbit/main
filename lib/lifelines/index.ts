import type { LifelineRecord } from "./build"
import { elonMusk } from "./elon-musk"
import { evilrabbit } from "./evilrabbit"
import { guillermoRauch } from "./guillermo-rauch"
import { jonyIve } from "./jony-ive"
import { steveJobs } from "./steve-jobs"

export { LIFELINE_CURRENT_YEAR } from "./build"
export type { LifelineRecord } from "./build"

export const lifelines: LifelineRecord[] = [
  evilrabbit,
  guillermoRauch,
  steveJobs,
  jonyIve,
  elonMusk,
]

export function getLifeline(slug: string): LifelineRecord | undefined {
  return lifelines.find((lifeline) => lifeline.slug === slug)
}
