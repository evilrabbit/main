import { defineLifeline, type LifelineMilestones } from "./build"

const milestones: LifelineMilestones = {
  1967: {
    id: "born",
    events: ["Born in Chingford, London, England."],
    mentors: [
      {
        name: "Michael Ive",
        role: "Father, Silversmith & Design Teacher",
        color: "#E5484D",
      },
    ],
  },
  1985: {
    id: "newcastle",
    events: ["Started studying industrial design at Newcastle Polytechnic."],
  },
  1989: {
    id: "roberts-weaver",
    events: ["Graduated. Joined Roberts Weaver Group, the agency that sponsored his studies."],
  },
  1990: {
    id: "tangerine",
    events: ["Co-founded Tangerine, a design consultancy in London."],
  },
  1992: {
    id: "apple",
    events: ["Left for California to join Apple full time."],
  },
  1996: {
    id: "design-lead",
    events: ["Became head of Apple's industrial design group."],
  },
  1997: {
    id: "steve",
    events: ["Steve Jobs returned to Apple. Everything changed."],
    met: [{ name: "Steve Jobs" }],
  },
  1998: {
    id: "imac",
    events: ["Designed the iMac — translucent, Bondi blue, unmistakable."],
  },
  2001: {
    id: "ipod",
    events: ["Designed the iPod."],
  },
  2007: {
    id: "iphone",
    events: ["Designed the iPhone."],
  },
  2012: {
    id: "knighted",
    events: [
      "Knighted for services to design and enterprise.",
      "Took over Apple's human interface design as well as hardware.",
    ],
  },
  2015: {
    id: "watch-cdo",
    events: [
      "Shipped the Apple Watch.",
      "Became Apple's first Chief Design Officer.",
    ],
  },
  2019: {
    id: "lovefrom",
    events: ["Left Apple after 27 years. Founded LoveFrom with Marc Newson."],
    met: [
      {
        name: "Marc Newson",
      },
    ],
  },
  2022: {
    id: "independent",
    events: ["LoveFrom and Apple parted ways. Fully independent."],
  },
  2024: {
    id: "io",
    events: ["Founded io, a company building a new family of AI devices."],
  },
  2025: {
    id: "openai",
    events: ["OpenAI acquired io. Design partnership with Sam Altman."],
  },
}

export const jonyIve = defineLifeline({
  slug: "jony-ive",
  name: "Jony Ive",
  birthYear: 1967,
  description:
    "Designer of the iMac, iPod, and iPhone — from Chingford to Chief Design Officer of Apple to LoveFrom.",
  milestones,
})
