import { defineLifeline, type LifelineMilestones } from "./build"

const milestones: LifelineMilestones = {
  1816: {
    id: "born",
    events: [
      "Declared independence in San Miguel de Tucumán on July 9.",
    ],
  },
  1817: {
    id: "andes",
    events: [
      "San Martín crossed the Andes.",
      "Victory at Chacabuco.",
    ],
  },
  1818: {
    id: "maipu",
    events: ["Maipú sealed Chile's freedom."],
  },
  1820: {
    id: "anarchy",
    events: ["The Year of Anarchy — the provinces went their own ways."],
  },
  1821: {
    id: "uba",
    events: ["The University of Buenos Aires was founded."],
  },
  1826: {
    mentors: [
      {
        name: "Bernardino Rivadavia",
        photo: "/images/people/bernardino-rivadavia.jpg",
      },
    ],
    id: "rivadavia",
    events: ["Bernardino Rivadavia became the first President."],
  },
  1829: {
    id: "rosas",
    events: ["Juan Manuel de Rosas took Buenos Aires."],
  },
  1833: {
    id: "1833",
    events: [
      "Britain occupied the Malvinas.",
      "Darwin rode the pampas with the Beagle offshore.",
    ],
  },
  1845: {
    id: "obligado",
    events: ["The Vuelta de Obligado — chains across the Paraná against an empire."],
  },
  1852: {
    mentors: [
      {
        name: "Justo José de Urquiza",
        photo: "/images/people/justo-jose-de-urquiza.jpg",
      },
    ],
    id: "caseros",
    events: ["Urquiza defeated Rosas at Caseros."],
  },
  1853: {
    id: "constitution",
    events: ["The Constitution was written in Santa Fe."],
  },
  1860: {
    id: "derqui",
    events: [],
    mentors: [
      {
        name: "Santiago Derqui",
        photo: "/images/people/santiago-derqui.jpg",
      },
    ],
  },
  1862: {
    mentors: [
      {
        name: "Bartolomé Mitre",
        photo: "/images/people/bartolome-mitre.jpg",
      },
    ],
    id: "mitre",
    events: ["Bartolomé Mitre unified the republic."],
  },
  1865: {
    id: "triple-alianza",
    events: ["The War of the Triple Alliance began."],
  },
  1868: {
    mentors: [
      {
        name: "Domingo Faustino Sarmiento",
        photo: "/images/people/domingo-sarmiento.jpg",
      },
    ],
    id: "sarmiento",
    events: ["Sarmiento became President and built the schools."],
  },
  1869: {
    id: "census",
    events: ["The first census counted 1.8 million people."],
  },
  1871: {
    id: "yellow-fever",
    events: ["Yellow fever emptied Buenos Aires."],
  },
  1874: {
    mentors: [
      {
        name: "Nicolás Avellaneda",
        photo: "/images/people/nicolas-avellaneda.jpg",
      },
    ],
    id: "avellaneda",
    events: ["Nicolás Avellaneda became President."],
  },
  1877: {
    id: "frigorifico",
    events: ["Frozen beef crossed the Atlantic for the first time."],
  },
  1879: {
    id: "desierto",
    events: ["The Conquest of the Desert — the frontier taken by force."],
  },
  1880: {
    mentors: [
      {
        name: "Julio Argentino Roca",
        photo: "/images/people/julio-argentino-roca.jpg",
      },
    ],
    id: "federalization",
    events: [
      "Buenos Aires became the federal capital.",
      "The immigration wave began — millions came from Italy and Spain.",
    ],
  },
  1882: {
    id: "la-plata",
    events: ["La Plata was founded on a drawing board."],
  },
  1884: {
    id: "ley-1420",
    events: ["Law 1420 made education free, secular, and mandatory."],
  },
  1886: {
    id: "juarez-celman",
    events: [],
    mentors: [
      {
        name: "Miguel Juárez Celman",
        photo: "/images/people/miguel-juarez-celman.jpg",
      },
    ],
  },
  1890: {
    mentors: [
      {
        name: "Carlos Pellegrini",
        photo: "/images/people/carlos-pellegrini.jpg",
      },
    ],
    id: "revolucion-parque",
    events: ["The Revolución del Parque shook the regime."],
  },
  1891: {
    id: "ucr",
    events: ["The Unión Cívica Radical was founded."],
  },
  1892: {
    id: "l-saenz-pena",
    events: [],
    mentors: [
      {
        name: "Luis Sáenz Peña",
        photo: "/images/people/luis-saenz-pena.jpg",
      },
    ],
  },
  1895: {
    id: "je-uriburu",
    events: [],
    mentors: [
      {
        name: "José Evaristo Uriburu",
        photo: "/images/people/jose-evaristo-uriburu.jpg",
      },
    ],
  },
  1901: {
    id: "river",
    events: ["River Plate was founded in La Boca."],
  },
  1904: {
    id: "quintana",
    events: [],
    mentors: [
      {
        name: "Manuel Quintana",
        photo: "/images/people/manuel-quintana.png",
      },
    ],
  },
  1905: {
    id: "boca",
    events: ["Boca Juniors was founded five blocks away."],
  },
  1906: {
    id: "figueroa-alcorta",
    events: [],
    mentors: [
      {
        name: "José Figueroa Alcorta",
        photo: "/images/people/jose-figueroa-alcorta.jpg",
      },
    ],
  },
  1908: {
    id: "colon",
    events: ["The Teatro Colón opened."],
  },
  1910: {
    mentors: [
      {
        name: "Roque Sáenz Peña",
        photo: "/images/people/roque-saenz-pena.jpg",
      },
    ],
    id: "centennial",
    events: ["Turned 100 — the Centennial, and Buenos Aires felt like the future."],
  },
  1912: {
    id: "saenz-pena",
    events: ["The Sáenz Peña Law made the vote secret and universal."],
  },
  1913: {
    id: "subte",
    events: ["The Subte's Line A opened — the first subway in Latin America."],
  },
  1914: {
    id: "de-la-plaza",
    events: [],
    mentors: [
      {
        name: "Victorino de la Plaza",
        photo: "/images/people/victorino-de-la-plaza.jpg",
      },
    ],
  },
  1916: {
    mentors: [
      {
        name: "Hipólito Yrigoyen",
        photo: "/images/people/hipolito-yrigoyen.jpg",
      },
    ],
    id: "yrigoyen",
    events: ["Hipólito Yrigoyen became the first President elected by secret ballot."],
  },
  1918: {
    id: "reforma",
    events: ["The University Reform began in Córdoba and spread across a continent."],
  },
  1922: {
    mentors: [
      {
        name: "Marcelo T. de Alvear",
        photo: "/images/people/marcelo-t-de-alvear.jpg",
      },
    ],
    id: "ypf",
    events: ["YPF was founded — the world's first state oil company."],
  },
  1930: {
    mentors: [
      {
        name: "José Félix Uriburu",
        photo: "/images/people/jose-felix-uriburu.png",
      },
    ],
    id: "first-coup",
    events: ["The first military coup broke the constitutional order."],
  },
  1932: {
    id: "justo",
    events: [],
    mentors: [
      {
        name: "Agustín Pedro Justo",
        photo: "/images/people/agustin-pedro-justo.png",
      },
    ],
  },
  1935: {
    id: "gardel",
    events: ["Carlos Gardel died in Medellín. Tango lost its voice."],
  },
  1936: {
    id: "obelisco",
    events: [
      "The Obelisco rose on Avenida 9 de Julio.",
      "Saavedra Lamas won Latin America's first Nobel Prize.",
    ],
  },
  1938: {
    id: "ortiz",
    events: [],
    mentors: [
      {
        name: "Roberto María Ortiz",
        photo: "/images/people/roberto-maria-ortiz.jpg",
      },
    ],
  },
  1942: {
    id: "castillo",
    events: [],
    mentors: [
      {
        name: "Ramón Castillo",
        photo: "/images/people/ramon-castillo.png",
      },
    ],
  },
  1943: {
    id: "gou",
    events: ["Another coup. A colonel named Perón took the labor office."],
  },
  1944: {
    id: "san-juan",
    events: ["The San Juan earthquake. At the relief gala, Perón met Evita."],
  },
  1945: {
    id: "loyalty-day",
    events: ["October 17 — the workers filled Plaza de Mayo and Peronism was born."],
  },
  1946: {
    mentors: [
      {
        name: "Juan Domingo Perón",
        photo: "/images/people/juan-domingo-peron.jpg",
      },
    ],
    id: "peron",
    events: ["Juan Domingo Perón became President."],
  },
  1947: {
    id: "1947",
    events: [
      "Women won the vote — Evita's law.",
      "Bernardo Houssay won Latin America's first Nobel in science.",
    ],
  },
  1949: {
    id: "constitution-49",
    events: ["A new Constitution enshrined labor rights."],
  },
  1951: {
    id: "1951",
    events: [
      "Fangio won his first Formula One title.",
      "Television arrived on October 17.",
      "Evita renounced the vice presidency before a million people.",
    ],
  },
  1952: {
    id: "evita",
    events: ["Eva Perón died at 33. The country stopped."],
  },
  1955: {
    id: "libertadora",
    events: [
      "Navy planes bombed Plaza de Mayo.",
      "The Revolución Libertadora sent Perón into exile.",
    ],
  },
  1957: {
    id: "fangio-five",
    events: ["Fangio won his fifth title — a record that stood for half a century."],
  },
  1958: {
    mentors: [
      {
        name: "Arturo Frondizi",
        photo: "/images/people/arturo-frondizi.jpg",
      },
    ],
    id: "frondizi",
    events: ["Arturo Frondizi became President."],
  },
  1962: {
    id: "guido",
    events: [],
    mentors: [
      {
        name: "José María Guido",
        photo: "/images/people/jose-maria-guido.jpg",
      },
    ],
  },
  1963: {
    mentors: [
      {
        name: "Arturo Illia",
        photo: "/images/people/arturo-illia.jpg",
      },
    ],
    id: "1963",
    events: [
      "Arturo Illia became President.",
      "Cortázar published Rayuela.",
    ],
  },
  1964: {
    id: "mafalda",
    events: ["Quino drew Mafalda for the first time."],
  },
  1966: {
    mentors: [
      {
        name: "Juan Carlos Onganía",
        photo: "/images/people/juan-carlos-ongania.jpg",
      },
    ],
    id: "ongania",
    events: [
      "Onganía's coup. The Night of the Long Batons emptied the universities.",
    ],
  },
  1967: {
    id: "che",
    events: ["Che Guevara, born in Rosario, was killed in Bolivia."],
  },
  1969: {
    id: "cordobazo",
    events: ["The Cordobazo — workers and students took Córdoba."],
  },
  1970: {
    id: "leloir",
    events: ["Luis Federico Leloir won the Nobel Prize in Chemistry."],
  },
  1973: {
    mentors: [
      {
        name: "Héctor Cámpora",
        photo: "/images/people/hector-campora.jpg",
      },
      {
        name: "Juan Domingo Perón",
        photo: "/images/people/juan-domingo-peron.jpg",
      },
    ],
    id: "peron-returns",
    events: ["Perón came home after eighteen years and won the presidency again."],
  },
  1974: {
    mentors: [
      {
        name: "Isabel Perón",
        photo: "/images/people/isabel-peron.jpg",
      },
    ],
    id: "isabel",
    events: [
      "Perón died on July 1.",
      "Isabel Perón became the first woman president in the world.",
    ],
  },
  1976: {
    mentors: [
      {
        name: "Jorge Rafael Videla",
        photo: "/images/people/jorge-rafael-videla.jpg",
      },
    ],
    id: "dictadura",
    events: [
      "The March 24 coup began the dictatorship. Thirty thousand disappeared.",
    ],
  },
  1977: {
    id: "madres",
    events: [
      "The Madres de Plaza de Mayo began their rounds.",
      "Guillermo Vilas won Roland Garros and the US Open.",
    ],
  },
  1978: {
    id: "wc78",
    events: ["Won the World Cup at home, in a country holding its breath."],
  },
  1980: {
    id: "perez-esquivel",
    events: ["Adolfo Pérez Esquivel won the Nobel Peace Prize."],
  },
  1982: {
    mentors: [
      {
        name: "Leopoldo Galtieri",
        photo: "/images/people/leopoldo-galtieri.jpg",
      },
    ],
    id: "malvinas",
    events: ["The Malvinas war. Six hundred and forty-nine never came back."],
  },
  1983: {
    mentors: [
      {
        name: "Raúl Alfonsín",
        photo: "/images/people/raul-alfonsin.jpg",
      },
    ],
    id: "democracy",
    events: [
      "Democracy returned. Raúl Alfonsín became President on December 10.",
    ],
  },
  1984: {
    id: "1984",
    events: [
      "The CONADEP delivered Nunca Más.",
      "César Milstein won the Nobel Prize in Medicine.",
    ],
  },
  1985: {
    id: "juicio",
    events: ["The Juicio a las Juntas — the generals faced their judges."],
  },
  1986: {
    id: "mexico86",
    events: [
      "Maradona scored the Hand of God and the Goal of the Century in the same afternoon. Champions of the world.",
      "The Official Story won Argentina's first Oscar.",
    ],
  },
  1989: {
    mentors: [
      {
        name: "Carlos Menem",
        photo: "/images/people/carlos-menem.jpg",
      },
    ],
    id: "hyperinflation",
    events: ["Hyperinflation. Carlos Menem took office early."],
  },
  1991: {
    id: "convertibilidad",
    events: ["One peso, one dollar — the Convertibilidad began."],
  },
  1992: {
    id: "embassy",
    events: ["The Israeli embassy was bombed in Buenos Aires."],
  },
  1994: {
    id: "1994",
    events: [
      "The AMIA bombing killed 85 people.",
      "The Constitution was reformed.",
    ],
  },
  1997: {
    id: "cerati",
    events: ["Soda Stereo said gracias totales at River."],
  },
  1999: {
    mentors: [
      {
        name: "Fernando de la Rúa",
        photo: "/images/people/fernando-de-la-rua.jpg",
      },
    ],
    id: "de-la-rua",
    events: ["Fernando de la Rúa became President."],
  },
  2001: {
    id: "crisis",
    events: [
      "December 2001 — the corralito, the cacerolazos, a helicopter over Plaza de Mayo.",
      "Five presidents in eleven days.",
    ],
  },
  2002: {
    mentors: [
      {
        name: "Eduardo Duhalde",
        photo: "/images/people/eduardo-duhalde.jpg",
      },
    ],
    id: "devaluation",
    events: ["The peso broke from the dollar and the country hit bottom."],
  },
  2003: {
    mentors: [
      {
        name: "Néstor Kirchner",
        photo: "/images/people/nestor-kirchner.jpg",
      },
    ],
    id: "kirchner",
    events: ["Néstor Kirchner became President."],
  },
  2004: {
    id: "athens",
    events: [
      "Olympic gold in football and in basketball — the Golden Generation's Athens.",
    ],
  },
  2007: {
    mentors: [
      {
        name: "Cristina Fernández de Kirchner",
        photo: "/images/people/cristina-fernandez.jpg",
      },
    ],
    id: "cristina",
    events: ["Cristina Fernández de Kirchner became the first elected woman president."],
  },
  2010: {
    id: "bicentennial",
    events: [
      "Turned 200 — millions on Avenida 9 de Julio.",
      "Legalized same-sex marriage, first in Latin America.",
      "Néstor Kirchner died.",
    ],
  },
  2013: {
    id: "francis",
    events: ["Jorge Bergoglio became Pope Francis — the first pope from the Americas."],
  },
  2014: {
    id: "brasil2014",
    events: ["Reached the World Cup final at the Maracanã."],
  },
  2015: {
    mentors: [
      {
        name: "Mauricio Macri",
        photo: "/images/people/mauricio-macri.jpg",
      },
    ],
    id: "macri",
    events: ["Mauricio Macri became President."],
  },
  2019: {
    mentors: [
      {
        name: "Alberto Fernández",
        photo: "/images/people/alberto-fernandez.jpg",
      },
    ],
    id: "alberto",
    events: ["Alberto Fernández became President."],
  },
  2020: {
    id: "2020",
    events: [
      "The pandemic shut the country down.",
      "Diego Maradona died. Three days of mourning.",
    ],
  },
  2021: {
    id: "maracana",
    events: ["Won the Copa América at the Maracanã — the first title in 28 years."],
  },
  2022: {
    id: "qatar",
    events: [
      "December 18 — champions of the world in Qatar. Messi lifted the Cup. The third star.",
    ],
  },
  2023: {
    mentors: [
      {
        name: "Javier Milei",
        photo: "/images/people/javier-milei.jpg",
      },
    ],
    id: "milei",
    events: ["Elected Javier Milei."],
  },
  2024: {
    id: "copa2024",
    events: ["Won a second straight Copa América."],
  },
  2026: {
    id: "210",
    events: [
      {
        text: "Turned 210.",
        effect: "fireworks-argentina",
      },
    ],
  },
}

export const argentina = defineLifeline({
  slug: "argentina",
  name: "Argentina",
  birthYear: 1816,
  description:
    "Two hundred and ten years of Argentina — from the house in Tucumán to the third star.",
  legend: [{ type: "mentor", label: "Presidents" }],
  milestones,
})
