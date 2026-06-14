import type { LifelineMarker } from "@/components/lifeline"

export const lifelineMarkers: LifelineMarker[] = [
  {
    id: "born",
    year: 1986,
    events: ["I was born in Buenos Aires, Argentina."],
  },
  {
    id: "school",
    year: 1993,
    events: ["Started school.", "Joined a basketball team."],
    mentors: [
      { name: "Horacio Mansilla", role: "Mentor", color: "#E5484D" },
      { name: "Fernando Prats", role: "Mentor", color: "#3E63DD" },
    ],
  },
  {
    id: "basketball",
    year: 1996,
    events: ["Started playing basketball."],
  },
  {
    id: "freelance",
    year: 1998,
    events: ["Started working as a freelance designer."],
  },
  {
    id: "university",
    year: 2004,
    events: ["Started university."],
  },
  {
    id: "tsya-identidad",
    year: 2006,
    events: ["Joined TSYA as a designer.", "Joined Identidad as a designer."],
  },
  {
    id: "viacom",
    year: 2010,
    events: ["Joined Viacom as Head of Design for Latin America."],
  },
  {
    id: "aerolab",
    year: 2014,
    events: ["Joined Aerolab as a product designer."],
  },
  {
    id: "auth0",
    year: 2015,
    companies: [{ id: "auth0", name: "Auth0" }],
    events: ["Joined Auth0 as a product designer."],
  },
  {
    id: "zeit",
    year: 2016,
    companies: [{ id: "vercel", name: "ZEIT" }],
    events: ["Joined ZEIT as founding designer."],
  },
  {
    id: "vercel",
    year: 2019,
    companies: [{ id: "vercel", name: "Vercel" }],
    events: ["ZEIT became Vercel."],
  },
  {
    id: "geist",
    year: 2023,
    events: ["Directed Geist, Vercel's type family."],
  },
  {
    id: "today",
    year: 2026,
    events: [
      "Founding designer at Vercel.",
      "Based in San Francisco.",
      "Still shipping.",
    ],
    active: true,
  },
]