import { defineLifeline, type LifelineMilestones } from "./build"

const milestones: LifelineMilestones = {
  1990: {
    id: "born",
    events: ["Born in Lanús, Buenos Aires, Argentina."],
  },
  1997: {
    id: "first-computer",
    events: [
      "His father, an industrial engineer, brought home the family's first computer. He was seven.",
    ],
  },
  2001: {
    id: "freelance",
    events: ["Started freelancing online for clients abroad, at 11."],
  },
  2006: {
    id: "mootools",
    events: [
      "Became a core developer of MooTools at 16, collaborating with engineers around the world.",
    ],
  },
  2007: {
    id: "switzerland",
    events: ["Moved to Switzerland at 17 for his first consulting role."],
  },
  2009: {
    id: "san-francisco",
    events: [
      "Moved to San Francisco at 18.",
      "Founded LearnBoost as CTO.",
    ],
  },
  2010: {
    id: "socketio",
    events: ["Created Socket.IO, real-time for the web."],
  },
  2013: {
    id: "cloudup",
    events: ["Built Cloudup, acquired by Automattic."],
  },
  2014: {
    id: "evilrabbit",
    events: [],
    met: [{ name: "Evil Rabbit" }],
  },
  2015: {
    id: "zeit",
    events: ["Founded ZEIT to make deployment effortless."],
  },
  2016: {
    id: "nextjs",
    events: [
      [
        { type: "text", value: "Released " },
        { type: "link", value: "Next.js", href: "https://nextjs.org" },
        { type: "text", value: " and the now CLI." },
      ],
    ],
  },
  2020: {
    id: "vercel",
    events: [
      [
        { type: "text", value: "ZEIT became " },
        { type: "link", value: "Vercel", href: "https://vercel.com" },
        { type: "text", value: "." },
      ],
    ],
  },
  2021: {
    id: "growth",
    events: ["Next.js passed a million developers. Vercel reached unicorn status."],
  },
  2023: {
    id: "v0",
    events: [
      [
        { type: "text", value: "Launched " },
        { type: "link", value: "v0", href: "https://v0.app" },
        { type: "text", value: " and the AI SDK." },
      ],
    ],
  },
  2025: {
    id: "nine-billion",
    events: ["Vercel valued at $9.3B."],
  },
  2026: {
    id: "eve",
    events: ["Launched Eve, the framework for building agents."],
  },
}

export const guillermoRauch = defineLifeline({
  slug: "guillermo-rauch",
  name: "Guillermo Rauch",
  birthYear: 1990,
  description:
    "CEO of Vercel, creator of Next.js and Socket.IO — from Lanús, Buenos Aires to San Francisco.",
  milestones,
})
