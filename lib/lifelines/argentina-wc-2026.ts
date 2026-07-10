import { defineLifeline, type LifelineMilestones } from "./build"

/**
 * Argentina at the 2026 World Cup, day by day — June 11 (day 1) through
 * the quarterfinal at Kansas City on July 11 (day 31).
 *
 * Drop match photos/videos into /public/images/moments/wc2026/ and
 * attach them per event:
 *
 *   {
 *     text: "Messi opened with a hat-trick.",
 *     image: {
 *       src: "/images/moments/wc2026/algeria-messi.jpg",   // photo, or poster for a video
 *       alt: "Messi's third against Algeria",
 *       video: "/images/moments/wc2026/algeria-messi.mp4", // optional — hover plays it muted, looping
 *     },
 *   }
 */

const TOURNAMENT_START_UTC = Date.UTC(2026, 5, 11)
const FIRST_DAY = 1
const LAST_DAY = 31 // July 11 — the quarterfinal at Arrowhead

function dayLabel(day: number) {
  const date = new Date(TOURNAMENT_START_UTC + (day - 1) * 86_400_000)
  const month = date.getUTCMonth() === 5 ? "Jun" : "Jul"
  const dayOfMonth = date.getUTCDate()
  // Spell the month out on day one, at the month turn, and on matchdays.
  if (day === FIRST_DAY || dayOfMonth === 1) return `${month} ${dayOfMonth}`
  return `${dayOfMonth}`
}

function matchLabel(day: number) {
  const date = new Date(TOURNAMENT_START_UTC + (day - 1) * 86_400_000)
  return `${date.getUTCMonth() === 5 ? "Jun" : "Jul"} ${date.getUTCDate()}`
}

const milestones: LifelineMilestones = {
  1: {
    id: "kickoff",
    age: "",
    events: ["The World Cup began across three countries."],
  },
  6: {
    id: "algeria",
    age: "G1",
    events: [
      "Argentina 3–0 Algeria, Kansas City.",
      "Messi opened the defense of the crown with a hat-trick.",
    ],
  },
  12: {
    id: "austria",
    age: "G2",
    events: [
      "Argentina 2–0 Austria, Dallas.",
      "Messi scored both — 18 World Cup goals, past Klose, the most ever.",
    ],
  },
  17: {
    id: "jordan",
    age: "G3",
    events: [
      "Argentina 3–1 Jordan, Dallas.",
      "A low free kick — a seventh straight World Cup game with a Messi goal.",
      "Group J won with nine points from nine.",
    ],
  },
  23: {
    id: "cabo-verde",
    age: "R32",
    events: [
      "Argentina 3–2 Cabo Verde after extra time, Miami.",
      "Two Blue Shark equalizers, eight Vozinha saves, an own goal in the 111th — survival.",
      "Messi's 20th World Cup goal, in his record 30th World Cup game.",
    ],
  },
  27: {
    id: "egypt",
    age: "R16",
    events: [
      "Argentina 3–2 Egypt, Atlanta.",
      "Down two with eleven minutes left — Romero, then Messi, then Enzo in stoppage time.",
      "“This is the World Cup for you.”",
    ],
  },
  31: {
    id: "switzerland",
    age: "QF",
    events: [
      "Quarterfinal — Switzerland at Arrowhead, Kansas City.",
      "The road to the bicampeonato runs through Kansas.",
    ],
  },
}

const record = defineLifeline({
  slug: "argentina-wc-2026",
  name: "Argentina — World Cup 2026",
  birthYear: FIRST_DAY,
  endYear: LAST_DAY,
  description:
    "Argentina at the 2026 World Cup, game by game — from the Kansas City hat-trick back to Arrowhead.",
  milestones,
})

export const argentinaWorldCup2026 = {
  ...record,
  markers: record.markers.map((marker) => ({
    ...marker,
    label: marker.events.length > 0 ? matchLabel(marker.year) : dayLabel(marker.year),
    age: marker.age ?? "",
  })),
}
