import { defineLifeline, type LifelineMilestones } from "./build"

const milestones: LifelineMilestones = {
  1971: {
    id: "born",
    events: ["Born in Pretoria, South Africa."],
  },
  1983: {
    id: "blastar",
    events: ["Sold his first video game, Blastar, at age 12."],
  },
  1989: {
    id: "canada",
    events: ["Left South Africa for Canada at 17."],
  },
  1992: {
    id: "upenn",
    events: ["Transferred to the University of Pennsylvania. Physics and economics."],
  },
  1995: {
    id: "zip2",
    events: ["Dropped out of Stanford after two days. Founded Zip2 with his brother Kimbal."],
  },
  1999: {
    id: "x-com",
    events: [
      "Sold Zip2 to Compaq for $307M.",
      "Founded X.com, an online bank.",
    ],
  },
  2000: {
    id: "paypal",
    events: ["X.com merged with Confinity and became PayPal."],
  },
  2002: {
    id: "spacex",
    events: [
      "eBay bought PayPal for $1.5B.",
      "Founded SpaceX to make life multiplanetary.",
    ],
  },
  2004: {
    id: "tesla",
    events: ["Led Tesla's Series A and joined as chairman."],
  },
  2008: {
    id: "hardest-year",
    events: [
      "Falcon 1 reached orbit on the fourth try.",
      "Became CEO of Tesla in its darkest hour.",
    ],
  },
  2010: {
    id: "tesla-ipo",
    events: ["Took Tesla public."],
  },
  2012: {
    id: "dragon",
    events: ["Dragon became the first commercial spacecraft to reach the ISS."],
  },
  2015: {
    id: "openai",
    events: ["Co-founded OpenAI."],
  },
  2016: {
    id: "neuralink-boring",
    events: ["Founded Neuralink and The Boring Company."],
  },
  2018: {
    id: "falcon-heavy",
    events: ["Launched Falcon Heavy, with a Roadster on top."],
  },
  2020: {
    id: "crew-dragon",
    events: ["SpaceX flew NASA astronauts to the ISS — the first crewed commercial flight."],
  },
  2022: {
    id: "twitter",
    events: ["Bought Twitter for $44B."],
  },
  2023: {
    id: "xai",
    events: ["Twitter became X. Founded xAI."],
  },
  2024: {
    id: "starship",
    events: ["Starship's booster was caught by the launch tower's arms."],
  },
}

export const elonMusk = defineLifeline({
  slug: "elon-musk",
  name: "Elon Musk",
  birthYear: 1971,
  description:
    "Founder of SpaceX and xAI, CEO of Tesla — from Pretoria to PayPal to rockets that land themselves.",
  milestones,
})
