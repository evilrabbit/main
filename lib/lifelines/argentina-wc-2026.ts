import { defineLifeline, type LifelineMilestones } from "./build"

/**
 * Argentina at the 2026 World Cup, day by day — June 11 (day 1) through
 * the semifinal against England in Atlanta on July 15 (day 35).
 *
 * Drop match photos/videos into /public/images/moments/wc2026/ and
 * attach them two ways:
 *
 * On-hover, tied to an event's text:
 *
 *   {
 *     text: "Messi opened with a hat-trick.",
 *     image: {
 *       src: "/images/moments/wc2026/algeria-messi.jpg",   // photo, or poster for a video
 *       alt: "Messi's third against Algeria",
 *       video: "/images/moments/wc2026/algeria-messi.mp4", // optional — hover plays it muted, looping
 *     },
 *   }
 *
 * Always-visible, floating over the timeline (scattered/tilted like a
 * notebook — drag them around; x 0..1 across the day's slot, y px below
 * the rail, rotate in degrees, all optional):
 *
 *   photos: [
 *     { src: "...jpg", alt: "...", video: "...mp4", x: 0.6, y: 180, rotate: -6 },
 *   ]
 */

const TOURNAMENT_START_UTC = Date.UTC(2026, 5, 11)
const FIRST_DAY = 1
const LAST_DAY = 35 // July 15 — the semifinal in Atlanta

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

/** Circular flat flags (circle-flags, ISO codes), above each match's events. */
const flag = (code: string, name: string) => ({
  src: `/images/moments/wc2026/flags/${code}.svg`,
  alt: name,
})
const ARG = flag("ar", "Argentina")
const versus = (code: string, name: string) => [ARG, flag(code, name)]

const milestones: LifelineMilestones = {
  1: {
    id: "kickoff",
    age: "",
    events: [
      {
        text: "The World Cup 2026 began across three countries: Canada, Mexico and the United States.",
        image: {
          src: "/images/moments/wc2026/kickoff.jpg",
          alt: "The official FIFA World Cup 2026 poster",
        },
      },
    ],
  },
  6: {
    id: "algeria",
    badges: versus("dz", "Algeria"),
    age: "G1",
    events: [
      "Argentina 3–0 Algeria, Kansas City.",
      "Messi opened the defense of the crown with a hat-trick.",
    ],
  },
  8: {
    // Anchor for the pre-game photo — floats in the empty run
    // between the Algeria and Austria columns.
    id: "dallas-arrival",
    age: "",
    events: [],
    photos: [
      {
        src: "/images/moments/wc2026/austria-friends.jpg",
        alt: "The crew in Dallas, Argentina vs Austria",
        width: 260,
      },
    ],
  },
  12: {
    id: "austria",
    badges: versus("at", "Austria"),
    age: "G2",
    events: [
      "Argentina 2–0 Austria, Dallas.",
      "Messi scored both — 18 World Cup goals, past Klose, the most ever.",
      [
        { type: "text", value: "Recorded the new “Anda pa'llá de Messi”, and it " },
        {
          type: "link",
          value: "went viral",
          href: "https://x.com/evilrabbit_/status/2069161401319342485",
        },
        { type: "text", value: "." },
      ],
    ],
    photos: [
      {
        src: "/images/moments/wc2026/austria-anda-palla.jpg",
        alt: "The new “Anda pa'llá de Messi”, Dallas",
        video: "/images/moments/wc2026/austria-anda-palla.mp4",
      },
    ],
  },
  17: {
    id: "jordan",
    badges: versus("jo", "Jordan"),
    age: "G3",
    events: [
      "Argentina 3–1 Jordan, Dallas.",
      "A low free kick — a seventh straight World Cup game with a Messi goal.",
      "Group J won with nine points from nine.",
    ],
    photos: [
      {
        src: "/images/moments/wc2026/jordan-family.jpg",
        alt: "The whole family at the Jordan game",
        width: 260,
      },
    ],
  },
  23: {
    id: "cabo-verde",
    badges: versus("cv", "Cabo Verde"),
    age: "R32",
    events: [
      "Argentina 3–2 Cabo Verde after extra time, Miami.",
      "Two Blue Shark equalizers, eight Vozinha saves, an own goal in the 111th — survival.",
      "Messi's 20th World Cup goal, in his record 30th World Cup game.",
    ],
  },
  27: {
    id: "egypt",
    badges: versus("eg", "Egypt"),
    age: "R16",
    events: [
      "Argentina 3–2 Egypt, Atlanta.",
      {
        text: "Down two with eleven minutes left — Romero, then Messi, then Enzo in stoppage time.",
        image: {
          src: "/images/moments/wc2026/egypt.jpg",
          alt: "The comeback against Egypt in Atlanta",
          video: "/images/moments/wc2026/egypt.mp4",
        },
      },
      {
        text: "The Battle of Atlanta.",
        image: {
          src: "/images/moments/wc2026/egypt-atlanta.jpg",
          alt: "La Batalla de Atlanta — Argentina vs Egypt",
          video: "/images/moments/wc2026/egypt-atlanta.mp4",
        },
      },
    ],
    photos: [
      {
        src: "/images/moments/wc2026/egypt-atlanta-sign.jpg",
        alt: "The FIFA 26 countdown sign in Atlanta",
        x: 0.89,
      },
    ],
  },
  31: {
    id: "switzerland",
    badges: versus("ch", "Switzerland"),
    age: "QF",
    events: [
      "Argentina 3–1 Switzerland after extra time, Kansas City.",
      "Mac Allister rose to a Messi corner at ten; Ndoye leveled — then Álvarez hammered the 112th-minute winner into the top corner and Lautaro sealed it at 120.",
      "Messi's scoring streak ends at nine straight World Cup games. A third semifinal in four World Cups.",
    ],
  },
  35: {
    id: "england",
    badges: versus("gb-eng", "England"),
    age: "SF",
    events: [
      "Semifinal — England at Mercedes-Benz Stadium, Atlanta.",
      "Win two more and Argentina become the first team to retain the World Cup since Brazil in 1962.",
    ],
  },
}

const record = defineLifeline({
  slug: "argentina-wc-2026",
  name: "Argentina — World Cup 2026",
  birthYear: FIRST_DAY,
  endYear: LAST_DAY,
  description:
    "Argentina at the 2026 World Cup, game by game — from the Kansas City hat-trick to the semifinal in Atlanta.",
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
