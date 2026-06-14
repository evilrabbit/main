import type { LifelineMarker } from "@/components/lifeline"

export const lifelineMarkers: LifelineMarker[] = [
  {
    id: "born",
    year: 1986,
    events: ["I was born in Buenos Aires."],
  },
  {
    id: "school",
    year: 1993,
    events: ["Started school.", "Joined a basketball team."],
    mentors: [
      { name: "Horacio Mansilla", role: "Basketball Coach", color: "#E5484D" },
      { name: "Fernando Prats", role: "Computer Teacher", color: "#3E63DD" },
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
    companies: [{ id: "aerolab", name: "Aerolab" }],
    events: [
      "Joined Aerolab as a product designer.",
      "Met Guillermo Rauch.",
    ],
    mentors: [{ name: "Guillermo Rauch", role: "Entrepreneur", color: "#8B5CF6" }],
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
    events: [
      [
        { type: "text", value: "Directed " },
        { type: "link", value: "Geist", href: "https://vercel.com/font" },
        {
          type: "text",
          value:
            ", Vercel's main Typeface, releasing it in October of 2023, with the versions Sans and Mono.",
        },
      ],
    ],
  },
  {
    id: "today",
    year: 2026,
    events: [
      [
        { type: "text", value: "Directed " },
        { type: "link", value: "Geist", href: "https://vercel.com/font" },
        { type: "text", value: " Pixel, launched in 2026." },
      ],
      "Designed Eve's brand, the framework for building agents.",
    ],
    active: true,
  },
]