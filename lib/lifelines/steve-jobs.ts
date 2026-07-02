import { defineLifeline, type LifelineMilestones } from "./build"

const milestones: LifelineMilestones = {
  1955: {
    id: "born",
    events: [
      "Born in San Francisco, California. Adopted by Paul and Clara Jobs.",
    ],
  },
  1961: {
    id: "mountain-view",
    events: ["Family moved to Mountain View, in the heart of the Valley."],
    mentors: [
      {
        name: "Paul Jobs",
        role: "Father, Machinist",
        color: "#E5484D",
      },
    ],
  },
  1971: {
    id: "woz",
    events: ["A mutual friend introduced him to Steve Wozniak."],
    met: [
      {
        name: "Steve Wozniak",
        photo: "/images/people/steve-wozniak.jpg",
      },
    ],
  },
  1972: {
    id: "reed",
    events: [
      "Enrolled at Reed College. Dropped out after one semester, kept auditing calligraphy.",
    ],
  },
  1974: {
    id: "atari",
    events: ["Worked at Atari as a technician. Traveled to India."],
    mentors: [
      {
        name: "Kobun Chino Otogawa",
        role: "Zen Teacher",
        color: "#3E63DD",
        photo: "/images/people/kobun-chino.jpg",
      },
    ],
  },
  1976: {
    id: "apple",
    events: ["Founded Apple Computer with Steve Wozniak in the family garage."],
  },
  1977: {
    id: "apple-ii",
    events: ["Launched the Apple II, the computer that built the company."],
    mentors: [
      {
        name: "Mike Markkula",
        role: "Investor & Mentor",
        color: "#8B5CF6",
      },
    ],
  },
  1980: {
    id: "ipo",
    events: ["Apple went public."],
  },
  1984: {
    id: "macintosh",
    events: ["Introduced the Macintosh."],
  },
  1985: {
    id: "next",
    events: ["Pushed out of Apple. Founded NeXT."],
  },
  1986: {
    id: "pixar",
    events: ["Bought the Graphics Group from Lucasfilm and named it Pixar."],
  },
  1988: {
    id: "next-computer",
    events: ["Unveiled the NeXT Computer."],
  },
  1991: {
    id: "married",
    events: ["Married Laurene Powell."],
    met: [
      {
        name: "Laurene Powell Jobs",
        photo: "/images/people/laurene-powell-jobs.jpg",
      },
    ],
  },
  1995: {
    id: "toy-story",
    events: ["Pixar released Toy Story, the first fully computer-animated feature film."],
  },
  1996: {
    id: "return",
    events: ["Apple acquired NeXT, bringing him back after eleven years."],
  },
  1997: {
    id: "iceo",
    events: ["Became interim CEO of Apple. “Think different.”"],
    met: [
      {
        name: "Jony Ive",
        photo: "/images/people/jony-ive.png",
      },
    ],
  },
  1998: {
    id: "imac",
    events: ["Launched the iMac, designed with Jony Ive."],
  },
  2001: {
    id: "ipod",
    events: [
      "Introduced the iPod: a thousand songs in your pocket.",
      "Opened the first Apple Stores. Shipped Mac OS X.",
    ],
  },
  2003: {
    id: "itunes",
    events: ["Opened the iTunes Music Store."],
  },
  2005: {
    id: "stanford",
    events: [
      "Gave the Stanford commencement address: “Stay hungry, stay foolish.”",
    ],
  },
  2007: {
    id: "iphone",
    events: ["Introduced the iPhone."],
  },
  2010: {
    id: "ipad",
    events: ["Introduced the iPad."],
  },
  2011: {
    id: "goodbye",
    events: [
      "Resigned as CEO in August.",
      "Died on October 5 in Palo Alto, California.",
    ],
  },
}

export const steveJobs = defineLifeline({
  slug: "steve-jobs",
  name: "Steve Jobs",
  birthYear: 1955,
  endYear: 2011,
  description:
    "Co-founder of Apple and Pixar — from a Mountain View garage to the iPhone.",
  milestones,
})
