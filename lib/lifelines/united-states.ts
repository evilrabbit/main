import { defineLifeline, type LifelineMilestones } from "./build"

const milestones: LifelineMilestones = {
  1776: {
    id: "born",
    events: ["Declared independence in Philadelphia on July 4."],
  },
  1783: {
    id: "revolution-won",
    events: ["Won the Revolutionary War. Britain recognized independence."],
  },
  1787: {
    id: "constitution",
    events: ["The Constitution was written in Philadelphia."],
  },
  1789: {
    id: "washington",
    events: ["George Washington became the first President."],
  },
  1791: {
    id: "bill-of-rights",
    events: ["The Bill of Rights was ratified."],
  },
  1803: {
    id: "louisiana",
    events: ["The Louisiana Purchase doubled the country overnight."],
  },
  1812: {
    id: "war-of-1812",
    events: ["Went to war with Britain again."],
  },
  1838: {
    id: "trail-of-tears",
    events: ["The Trail of Tears — the forced removal of the Cherokee Nation."],
  },
  1848: {
    id: "gold-rush",
    events: ["Gold was discovered at Sutter's Mill. The rush began."],
  },
  1861: {
    id: "civil-war",
    events: ["The Civil War began."],
  },
  1863: {
    id: "emancipation",
    events: ["Lincoln signed the Emancipation Proclamation."],
  },
  1865: {
    id: "civil-war-ends",
    events: [
      "The Civil War ended. Slavery was abolished with the 13th Amendment.",
      "Lincoln was assassinated.",
    ],
  },
  1869: {
    id: "railroad",
    events: ["The transcontinental railroad met at Promontory Summit."],
  },
  1876: {
    id: "centennial",
    events: ["Turned 100. Bell patented the telephone."],
  },
  1879: {
    id: "light-bulb",
    events: ["Edison lit the first practical light bulb."],
  },
  1886: {
    id: "liberty",
    events: ["The Statue of Liberty was dedicated in New York Harbor."],
  },
  1903: {
    id: "kitty-hawk",
    events: ["The Wright brothers flew at Kitty Hawk. Twelve seconds."],
  },
  1908: {
    id: "model-t",
    events: ["Ford's Model T put the country on wheels."],
  },
  1917: {
    id: "wwi",
    events: ["Entered World War I."],
  },
  1920: {
    id: "suffrage",
    events: ["Women won the vote with the 19th Amendment."],
  },
  1929: {
    id: "crash",
    events: ["The stock market crashed. The Great Depression began."],
  },
  1933: {
    id: "new-deal",
    events: ["Roosevelt launched the New Deal."],
  },
  1941: {
    id: "pearl-harbor",
    events: ["Pearl Harbor. Entered World War II."],
  },
  1945: {
    id: "wwii-ends",
    events: ["World War II ended. The atomic age began."],
  },
  1947: {
    id: "transistor",
    events: ["The transistor was invented at Bell Labs."],
  },
  1958: {
    id: "nasa",
    events: ["Founded NASA."],
  },
  1963: {
    id: "1963",
    events: [
      "Martin Luther King Jr. dreamed aloud at the Lincoln Memorial.",
      "President Kennedy was assassinated in Dallas.",
    ],
  },
  1964: {
    id: "civil-rights",
    events: ["The Civil Rights Act became law."],
  },
  1969: {
    id: "moon",
    events: [
      "Apollo 11. Armstrong and Aldrin walked on the Moon.",
      "ARPANET sent its first message — the internet was born.",
    ],
  },
  1976: {
    id: "bicentennial",
    events: ["Turned 200. Apple Computer was founded in a garage."],
  },
  1991: {
    id: "cold-war",
    events: ["The Cold War ended."],
  },
  2001: {
    id: "september-11",
    events: ["September 11."],
  },
  2007: {
    id: "iphone",
    events: ["The iPhone was introduced in San Francisco."],
  },
  2008: {
    id: "obama",
    events: [
      "Elected Barack Obama, the first Black president.",
      "The financial crisis hit.",
    ],
  },
  2020: {
    id: "pandemic",
    events: [
      "The COVID-19 pandemic.",
      "SpaceX returned human spaceflight to American soil.",
    ],
  },
  2026: {
    id: "semiquincentennial",
    events: ["Turned 250."],
  },
}

export const unitedStates = defineLifeline({
  slug: "united-states",
  name: "United States",
  birthYear: 1776,
  description:
    "Two hundred and fifty years of the American experiment — from Philadelphia to the Moon.",
  milestones,
})
