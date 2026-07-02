import { defineLifeline, type LifelineMilestones } from "./build"

const milestones: LifelineMilestones = {
  1988: {
    id: "born",
    events: ["Born in Lanús, Buenos Aires, Argentina."],
  },
  1998: {
    id: "first-computer",
    events: ["Got his first computer. Taught himself to code on Linux."],
  },
  2004: {
    id: "open-source",
    events: [
      "Became a core developer of MooTools as a teenager, collaborating with engineers around the world.",
    ],
  },
  2007: {
    id: "usa",
    events: ["Left Argentina for San Francisco at 18."],
  },
  2010: {
    id: "socketio",
    events: [
      "Created Socket.IO, real-time for the web.",
      "Co-founded LearnBoost as CTO.",
    ],
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
  2026: {
    id: "eve",
    events: ["Launched Eve, the framework for building agents."],
  },
}

export const guillermoRauch = defineLifeline({
  slug: "guillermo-rauch",
  name: "Guillermo Rauch",
  birthYear: 1988,
  description:
    "CEO of Vercel, creator of Next.js and Socket.IO — from Lanús, Buenos Aires to San Francisco.",
  milestones,
})
