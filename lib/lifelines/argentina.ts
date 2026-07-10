import { defineLifeline, type LifelineMilestones } from "./build"

const milestones: LifelineMilestones = {
  1816: {
    id: "born",
    events: [
      {
        text: "Declared independence in San Miguel de Tucumán on July 9.",
        image: {
          src: "/images/moments/ar/tucuman.jpg",
          alt: "The plaza of San Miguel de Tucumán",
        },
      },
    ],
  },
  1817: {
    id: "andes",
    events: [
      {
        text: "San Martín crossed the Andes.",
        image: {
          src: "/images/moments/ar/andes.jpg",
          alt: "The crossing of the Andes",
        },
      },
      "Victory at Chacabuco.",
    ],
  },
  1818: {
    id: "maipu",
    events: [
      {
        text: "Maipú sealed Chile's freedom.",
        image: {
          src: "/images/moments/ar/maipu.jpg",
          alt: "The embrace of Maipú",
        },
      },
    ],
  },
  1820: {
    id: "anarchy",
    events: ["The Year of Anarchy — the provinces went their own ways."],
  },
  1821: {
    id: "uba",
    events: [
      {
        text: "The University of Buenos Aires was founded.",
        image: {
          src: "/images/moments/ar/uba-1821.jpg",
          alt: "The Manzana de las Luces",
        },
      },
    ],
  },
  1825: {
    id: "1825",
    events: [
      "Britain recognized the young republic.",
      "War with Brazil began over the Banda Oriental.",
    ],
  },
  1826: {
    mentors: [
      {
        name: "Bernardino Rivadavia",
        photo: "/images/people/bernardino-rivadavia.jpg",
      },
    ],
    id: "rivadavia",
    events: [
      {
        text: "Bernardino Rivadavia became the first President.",
        image: {
          src: "/images/people/bernardino-rivadavia.jpg",
          alt: "Bernardino Rivadavia",
        },
      },
    ],
  },
  1828: {
    id: "1828",
    events: ["Peace with Brazil — and Uruguay was born between the two."],
  },
  1829: {
    id: "rosas",
    events: [
      {
        text: "Juan Manuel de Rosas took Buenos Aires.",
        image: {
          src: "/images/moments/ar/rosas.jpg",
          alt: "Juan Manuel de Rosas",
        },
      },
    ],
  },
  1833: {
    id: "1833",
    events: [
      "Britain occupied the Malvinas.",
      {
        text: "Darwin rode the pampas with the Beagle offshore.",
        image: {
          src: "/images/moments/ar/beagle.jpg",
          alt: "FitzRoy's survey chart of Tierra del Fuego",
        },
      },
    ],
  },
  1835: {
    id: "suma",
    events: ["Rosas returned with the suma del poder público — absolute power."],
  },
  1838: {
    id: "blockade",
    events: ["France blockaded the port of Buenos Aires."],
  },
  1845: {
    id: "obligado",
    events: [
      {
        text: "The Vuelta de Obligado — chains across the Paraná against an empire.",
        image: {
          src: "/images/moments/ar/obligado.jpg",
          alt: "The Battle of the Vuelta de Obligado",
        },
      },
    ],
  },
  1850: {
    id: "san-martin",
    events: [
      "San Martín died in Boulogne-sur-Mer, an ocean away from the lands he freed.",
    ],
  },
  1852: {
    mentors: [
      {
        name: "Justo José de Urquiza",
        photo: "/images/people/justo-jose-de-urquiza.jpg",
      },
    ],
    id: "caseros",
    events: [
      {
        text: "Urquiza defeated Rosas at Caseros.",
        image: {
          src: "/images/moments/ar/caseros.jpg",
          alt: "The Battle of Caseros",
        },
      },
    ],
  },
  1853: {
    id: "constitution",
    events: ["The Constitution was written in Santa Fe."],
  },
  1857: {
    id: "railway",
    events: ["La Porteña pulled the first train out of Estación del Parque."],
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
  1861: {
    id: "pavon",
    events: ["Pavón — Buenos Aires prevailed, and the nation followed."],
  },
  1862: {
    mentors: [
      {
        name: "Bartolomé Mitre",
        photo: "/images/people/bartolome-mitre.jpg",
      },
    ],
    id: "mitre",
    events: [
      {
        text: "Bartolomé Mitre unified the republic.",
        image: {
          src: "/images/people/bartolome-mitre.jpg",
          alt: "Bartolomé Mitre",
        },
      },
    ],
  },
  1865: {
    id: "triple-alianza",
    events: [
      {
        text: "The War of the Triple Alliance began.",
        image: {
          src: "/images/moments/ar/curupayti.jpg",
          alt: "After the Battle of Curupaytí, by Cándido López",
        },
      },
    ],
  },
  1868: {
    mentors: [
      {
        name: "Domingo Faustino Sarmiento",
        photo: "/images/people/domingo-sarmiento.jpg",
      },
    ],
    id: "sarmiento",
    events: [
      {
        text: "Sarmiento became President and built the schools.",
        image: {
          src: "/images/people/domingo-sarmiento.jpg",
          alt: "Domingo Faustino Sarmiento",
        },
      },
    ],
  },
  1869: {
    id: "census",
    events: ["The first census counted 1.8 million people."],
  },
  1870: {
    id: "1870",
    events: [
      "The Paraguayan war ended after five brutal years.",
      "Mitre founded La Nación.",
    ],
  },
  1871: {
    id: "yellow-fever",
    events: [
      {
        text: "Yellow fever emptied Buenos Aires.",
        image: {
          src: "/images/moments/ar/fiebre-amarilla.jpg",
          alt: "An Episode of Yellow Fever, by Juan Manuel Blanes",
        },
      },
    ],
  },
  1874: {
    mentors: [
      {
        name: "Nicolás Avellaneda",
        photo: "/images/people/nicolas-avellaneda.jpg",
      },
    ],
    id: "avellaneda",
    events: [
      {
        text: "Nicolás Avellaneda became President.",
        image: {
          src: "/images/people/nicolas-avellaneda.jpg",
          alt: "Nicolás Avellaneda",
        },
      },
    ],
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
      {
        text: "Buenos Aires became the federal capital.",
        image: {
          src: "/images/moments/ar/buenos-aires-1880.jpg",
          alt: "Avenida de Mayo",
        },
      },
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
  1888: {
    id: "sarmiento-death",
    events: ["Sarmiento died in Asunción, still writing."],
  },
  1890: {
    mentors: [
      {
        name: "Carlos Pellegrini",
        photo: "/images/people/carlos-pellegrini.jpg",
      },
    ],
    id: "revolucion-parque",
    events: [
      {
        text: "The Revolución del Parque shook the regime.",
        image: {
          src: "/images/moments/ar/parque.jpg",
          alt: "The Revolución del Parque",
        },
      },
    ],
  },
  1891: {
    id: "ucr",
    events: [
      {
        text: "The Unión Cívica Radical was founded.",
        image: {
          src: "/images/moments/ar/alem.jpg",
          alt: "Leandro N. Alem",
        },
      },
    ],
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
  1896: {
    id: "alem",
    events: ["Leandro Alem died by his own hand."],
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
  1907: {
    id: "oil",
    events: ["Drilling for water at Comodoro Rivadavia, they struck oil."],
  },
  1908: {
    id: "colon",
    events: [
      {
        text: "The Teatro Colón opened.",
        image: {
          src: "/images/moments/ar/colon-1908.jpg",
          alt: "The Teatro Colón",
        },
      },
    ],
  },
  1910: {
    mentors: [
      {
        name: "Roque Sáenz Peña",
        photo: "/images/people/roque-saenz-pena.jpg",
      },
    ],
    id: "centennial",
    events: [
      {
        text: "Turned 100 — the Centennial, and Buenos Aires felt like the future.",
        image: {
          src: "/images/moments/ar/centenario.jpg",
          alt: "The Centennial at the Cabildo, 1910",
        },
      },
    ],
  },
  1912: {
    id: "saenz-pena",
    events: [
      {
        text: "The Sáenz Peña Law made the vote secret and universal.",
        image: {
          src: "/images/people/roque-saenz-pena.jpg",
          alt: "Roque Sáenz Peña",
        },
      },
    ],
  },
  1913: {
    id: "subte",
    events: [
      {
        text: "The Subte's Line A opened — the first subway in Latin America.",
        image: {
          src: "/images/moments/ar/subte-1913.jpg",
          alt: "Line A",
        },
      },
    ],
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
    events: [
      {
        text: "Hipólito Yrigoyen became the first President elected by secret ballot.",
        image: {
          src: "/images/people/hipolito-yrigoyen.jpg",
          alt: "Hipólito Yrigoyen",
        },
      },
    ],
  },
  1917: {
    id: "mi-noche-triste",
    events: ["Gardel recorded Mi Noche Triste — the tango learned to sing."],
  },
  1918: {
    id: "reforma",
    events: [
      {
        text: "The University Reform began in Córdoba and spread across a continent.",
        image: {
          src: "/images/moments/ar/reforma-1918.jpg",
          alt: "The University Reform, Córdoba, 1918",
        },
      },
    ],
  },
  1919: {
    id: "semana-tragica",
    events: ["The Semana Trágica — a week of blood in Buenos Aires."],
  },
  1921: {
    id: "patagonia",
    events: ["The Patagonia Rebelde — strikes and firing squads in the far south."],
  },
  1922: {
    mentors: [
      {
        name: "Marcelo T. de Alvear",
        photo: "/images/people/marcelo-t-de-alvear.jpg",
      },
    ],
    id: "ypf",
    events: [
      {
        text: "YPF was founded — the world's first state oil company.",
        image: {
          src: "/images/moments/ar/ypf-1922.jpg",
          alt: "The first well at Comodoro Rivadavia",
        },
      },
    ],
  },
  1923: {
    id: "firpo",
    events: ["Firpo knocked Dempsey out of the ring at the Polo Grounds."],
  },
  1928: {
    id: "yrigoyen-returns",
    events: ["Yrigoyen returned to the presidency, old and surrounded."],
  },
  1930: {
    mentors: [
      {
        name: "José Félix Uriburu",
        photo: "/images/people/jose-felix-uriburu.png",
      },
    ],
    id: "first-coup",
    events: [
      {
        text: "The first military coup broke the constitutional order.",
        image: {
          src: "/images/moments/ar/golpe-1930.jpg",
          alt: "The 1930 coup",
        },
      },
    ],
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
  1933: {
    id: "roca-runciman",
    events: ["The Roca–Runciman Pact tied the beef trade to Britain — the Infamous Decade at work."],
  },
  1935: {
    id: "gardel",
    events: [
      {
        text: "Carlos Gardel died in Medellín. Tango lost its voice.",
        image: {
          src: "/images/moments/ar/gardel.jpg",
          alt: "Carlos Gardel",
        },
      },
    ],
  },
  1936: {
    id: "obelisco",
    events: [
      {
        text: "The Obelisco rose on Avenida 9 de Julio.",
        image: {
          src: "/images/moments/ar/obelisco-1936.jpg",
          alt: "The Obelisco, 1936",
        },
      },
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
    events: [
      {
        text: "The San Juan earthquake. At the relief gala, Perón met Evita.",
        image: {
          src: "/images/moments/ar/san-juan-1944.jpg",
          alt: "San Juan after the earthquake",
        },
      },
    ],
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
    events: [
      {
        text: "Juan Domingo Perón became President.",
        image: {
          src: "/images/moments/ar/peron-evita-ayrinhac.jpg",
          alt: "Perón and Evita, by Numa Ayrinhac",
        },
      },
    ],
  },
  1947: {
    id: "1947",
    events: [
      {
        text: "Women won the vote — Evita's law.",
        image: {
          src: "/images/moments/ar/evita-1947.jpg",
          alt: "Evita receives Law 13,010 on the balcony of the Casa Rosada",
        },
      },
      "Bernardo Houssay won Latin America's first Nobel in science.",
    ],
  },
  1948: {
    id: "railways",
    events: ["The railways were nationalized — bought back from the British."],
  },
  1949: {
    id: "constitution-49",
    events: ["A new Constitution enshrined labor rights."],
  },
  1951: {
    id: "1951",
    events: [
      {
        text: "Fangio won his first Formula One title.",
        image: {
          src: "/images/moments/ar/fangio-1951.jpg",
          alt: "Fangio and Nuvolari, 1951",
        },
      },
      "Television arrived on October 17.",
      "Evita renounced the vice presidency before a million people.",
    ],
  },
  1952: {
    id: "evita",
    events: [
      {
        text: "Eva Perón died at 33. The country stopped.",
        image: {
          src: "/images/moments/ar/evita-1952.jpg",
          alt: "Eva Perón's official portrait",
        },
      },
    ],
  },
  1955: {
    id: "libertadora",
    events: [
      {
        text: "Navy planes bombed Plaza de Mayo.",
        image: {
          src: "/images/moments/ar/bombardeo-1955.jpg",
          alt: "The bombing of Plaza de Mayo",
        },
      },
      "The Revolución Libertadora sent Perón into exile.",
    ],
  },
  1957: {
    id: "fangio-five",
    events: [
      {
        text: "Fangio won his fifth title — a record that stood for half a century.",
        image: {
          src: "/images/moments/ar/fangio-1957.jpg",
          alt: "Fangio's Maserati 250F at the Nürburgring",
        },
      },
    ],
  },
  1958: {
    mentors: [
      {
        name: "Arturo Frondizi",
        photo: "/images/people/arturo-frondizi.jpg",
      },
    ],
    id: "frondizi",
    events: [
      {
        text: "Arturo Frondizi became President.",
        image: {
          src: "/images/people/arturo-frondizi.jpg",
          alt: "Arturo Frondizi",
        },
      },
    ],
  },
  1960: {
    id: "eichmann",
    events: ["Mossad agents seized Adolf Eichmann on a street in San Fernando."],
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
      {
        text: "Arturo Illia became President.",
        image: {
          src: "/images/people/arturo-illia.jpg",
          alt: "Arturo Illia",
        },
      },
      {
        text: "Cortázar published Rayuela.",
        image: {
          src: "/images/moments/ar/cortazar.jpg",
          alt: "Julio Cortázar",
        },
      },
    ],
  },
  1964: {
    id: "mafalda",
    events: [
      {
        text: "Quino drew Mafalda for the first time.",
        image: {
          src: "/images/moments/ar/mafalda.jpg",
          alt: "Mafalda in San Telmo",
        },
      },
    ],
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
      {
        text: "Onganía's coup. The Night of the Long Batons emptied the universities.",
        image: {
          src: "/images/moments/ar/bastones-largos.jpg",
          alt: "The Night of the Long Batons",
        },
      },
    ],
  },
  1967: {
    id: "che",
    events: [
      {
        text: "Che Guevara, born in Rosario, was killed in Bolivia.",
        image: {
          src: "/images/moments/ar/che.jpg",
          alt: "Guerrillero Heroico, by Alberto Korda",
        },
      },
      "René Favaloro pioneered the coronary bypass.",
    ],
  },
  1969: {
    id: "cordobazo",
    events: [
      {
        text: "The Cordobazo — workers and students took Córdoba.",
        image: {
          src: "/images/moments/ar/cordobazo.jpg",
          alt: "The Cordobazo",
        },
      },
    ],
  },
  1970: {
    id: "leloir",
    events: [
      {
        text: "Luis Federico Leloir won the Nobel Prize in Chemistry.",
        image: {
          src: "/images/moments/ar/leloir.jpg",
          alt: "Luis Federico Leloir",
        },
      },
    ],
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
    events: [
      {
        text: "Perón came home after eighteen years and won the presidency again.",
        image: {
          src: "/images/people/juan-domingo-peron.jpg",
          alt: "Juan Domingo Perón",
        },
      },
    ],
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
      {
        text: "Isabel Perón became the first woman president in the world.",
        image: {
          src: "/images/people/isabel-peron.jpg",
          alt: "Isabel Perón",
        },
      },
    ],
  },
  1975: {
    id: "rodrigazo",
    events: ["The Rodrigazo — prices doubled overnight."],
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
      {
        text: "The March 24 coup began the dictatorship. Thirty thousand disappeared.",
        image: {
          src: "/images/moments/ar/junta-1976.jpg",
          alt: "The junta",
        },
      },
    ],
  },
  1977: {
    id: "madres",
    events: [
      "The Madres de Plaza de Mayo began their rounds.",
      {
        text: "Guillermo Vilas won Roland Garros and the US Open.",
        image: {
          src: "/images/moments/ar/vilas.jpg",
          alt: "Guillermo Vilas",
        },
      },
    ],
  },
  1978: {
    id: "wc78",
    events: [
      {
        text: "Won the World Cup at home, in a country holding its breath.",
        image: {
          src: "/images/moments/ar/mundial-78.jpg",
          alt: "Passarella lifts the Cup — El Gráfico, 1978",
        },
      },
    ],
  },
  1979: {
    id: "japon79",
    events: [
      "The juniors won the World Youth Cup in Japan — a kid named Maradona announced himself.",
    ],
  },
  1980: {
    id: "perez-esquivel",
    events: [
      {
        text: "Adolfo Pérez Esquivel won the Nobel Peace Prize.",
        image: {
          src: "/images/moments/ar/esquivel.jpg",
          alt: "Adolfo Pérez Esquivel",
        },
      },
    ],
  },
  1982: {
    mentors: [
      {
        name: "Leopoldo Galtieri",
        photo: "/images/people/leopoldo-galtieri.jpg",
      },
    ],
    id: "malvinas",
    events: [
      {
        text: "The Malvinas war. Six hundred and forty-nine never came back.",
        image: {
          src: "/images/moments/ar/malvinas-82.jpg",
          alt: "Malvinas, 1982",
        },
      },
    ],
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
      {
        text: "Democracy returned. Raúl Alfonsín became President on December 10.",
        image: {
          src: "/images/moments/ar/alfonsin-1983.jpg",
          alt: "Raúl Alfonsín",
        },
      },
    ],
  },
  1984: {
    id: "1984",
    events: [
      {
        text: "The CONADEP delivered Nunca Más.",
        image: {
          src: "/images/moments/ar/nunca-mas.jpg",
          alt: "Ernesto Sabato",
        },
      },
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
      {
        text: "Maradona scored the Hand of God and the Goal of the Century in the same afternoon. Champions of the world.",
        image: {
          src: "/images/moments/ar/maradona-86.jpg",
          alt: "Maradona and the Cup — El Gráfico, 1986",
        },
      },
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
    events: [
      {
        text: "Hyperinflation. Carlos Menem took office early.",
        image: {
          src: "/images/people/carlos-menem.jpg",
          alt: "Carlos Menem",
        },
      },
    ],
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
      {
        text: "The AMIA bombing killed 85 people.",
        image: {
          src: "/images/moments/ar/amia-1994.jpg",
          alt: "The AMIA building",
        },
      },
      "The Constitution was reformed.",
    ],
  },
  1997: {
    id: "cerati",
    events: [
      {
        text: "Soda Stereo said gracias totales at River.",
        image: {
          src: "/images/moments/ar/soda-stereo.jpg",
          alt: "Cerati and Zeta, early days",
        },
      },
    ],
  },
  1999: {
    mentors: [
      {
        name: "Fernando de la Rúa",
        photo: "/images/people/fernando-de-la-rua.jpg",
      },
    ],
    id: "de-la-rua",
    events: [
      {
        text: "Fernando de la Rúa became President.",
        image: {
          src: "/images/people/fernando-de-la-rua.jpg",
          alt: "Fernando de la Rúa",
        },
      },
    ],
  },
  2001: {
    id: "crisis",
    events: [
      "December 2001 — the corralito, the cacerolazos, a helicopter over Plaza de Mayo.",
      "Five presidents in eleven days.",
    ],
    // The successors, in order — de la Rúa already appears in 1999.
    mentors: [
      {
        name: "Ramón Puerta",
        photo: "/images/people/ramon-puerta.jpg",
      },
      {
        name: "Adolfo Rodríguez Saá",
        photo: "/images/people/adolfo-rodriguez-saa.jpg",
      },
      {
        name: "Eduardo Camaño",
        photo: "/images/people/eduardo-camano.jpg",
      },
      {
        name: "Eduardo Duhalde",
        photo: "/images/people/eduardo-duhalde.jpg",
      },
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
    events: [
      {
        text: "Néstor Kirchner became President.",
        image: {
          src: "/images/people/nestor-kirchner.jpg",
          alt: "Néstor Kirchner",
        },
      },
    ],
  },
  2004: {
    id: "athens",
    events: [
      {
        text: "Olympic gold in football and in basketball — the Golden Generation's Athens.",
        image: {
          src: "/images/moments/ar/atenas-2004.jpg",
          alt: "The Golden Generation on the podium in Athens",
        },
      },
      "The Cromañón fire killed 194 — the year ended in mourning.",
    ],
  },
  2005: {
    id: "2005",
    events: ["The debt was restructured — the largest swap in history."],
  },
  2007: {
    mentors: [
      {
        name: "Cristina Fernández de Kirchner",
        photo: "/images/people/cristina-fernandez.jpg",
      },
    ],
    id: "cristina",
    events: [
      {
        text: "Cristina Fernández de Kirchner became the first elected woman president.",
        image: {
          src: "/images/people/cristina-fernandez.jpg",
          alt: "Cristina Fernández de Kirchner",
        },
      },
    ],
  },
  2010: {
    id: "bicentennial",
    events: [
      {
        text: "Turned 200 — millions on Avenida 9 de Julio.",
        image: {
          src: "/images/moments/ar/bicentenario-2010.jpg",
          alt: "The Bicentennial flyover",
        },
      },
      "Legalized same-sex marriage, first in Latin America.",
      "Néstor Kirchner died.",
    ],
  },
  2013: {
    id: "francis",
    events: [
      {
        text: "Jorge Bergoglio became Pope Francis — the first pope from the Americas.",
        image: {
          src: "/images/moments/ar/francisco.jpg",
          alt: "Pope Francis, newly elected",
        },
      },
    ],
  },
  2014: {
    id: "brasil2014",
    events: [
      {
        text: "Reached the World Cup final at the Maracanã.",
        image: {
          src: "/images/moments/ar/maracana-2014.jpg",
          alt: "The final at the Maracanã, 2014",
        },
      },
    ],
  },
  2015: {
    mentors: [
      {
        name: "Mauricio Macri",
        photo: "/images/people/mauricio-macri.jpg",
      },
    ],
    id: "macri",
    events: [
      {
        text: "Mauricio Macri became President.",
        image: {
          src: "/images/people/mauricio-macri.jpg",
          alt: "Mauricio Macri",
        },
      },
    ],
  },
  2016: {
    id: "bicentennial-independence",
    events: ["Two hundred years since the oath in Tucumán — the Bicentennial of Independence."],
  },
  2017: {
    id: "ara-san-juan",
    events: ["The ARA San Juan was lost with all 44 aboard."],
  },
  2019: {
    mentors: [
      {
        name: "Alberto Fernández",
        photo: "/images/people/alberto-fernandez.jpg",
      },
    ],
    id: "alberto",
    events: [
      {
        text: "Alberto Fernández became President.",
        image: {
          src: "/images/people/alberto-fernandez.jpg",
          alt: "Alberto Fernández",
        },
      },
    ],
  },
  2020: {
    id: "2020",
    events: [
      "The pandemic shut the country down.",
      {
        text: "Diego Maradona died. Three days of mourning.",
        image: {
          src: "/images/moments/ar/maradona-2020.jpg",
          alt: "Diego Maradona",
        },
      },
    ],
  },
  2021: {
    id: "maracana",
    events: [
      {
        text: "Won the Copa América at the Maracanã — the first title in 28 years.",
        image: {
          src: "/images/moments/ar/copa-2021.jpg",
          alt: "Messi lifts the Copa América at the Maracanã",
        },
      },
    ],
  },
  2022: {
    id: "qatar",
    events: [
      {
        text: "December 18 — champions of the world in Qatar. Messi lifted the Cup. The third star.",
        image: {
          src: "/images/moments/ar/qatar-2022.jpg",
          alt: "Messi and the Cup, Qatar 2022",
        },
      },
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
    events: [
      {
        text: "Elected Javier Milei.",
        image: {
          src: "/images/people/javier-milei.jpg",
          alt: "Javier Milei",
        },
      },
    ],
  },
  2024: {
    id: "copa2024",
    events: ["Won a second straight Copa América."],
  },
  2025: {
    id: "2025",
    events: [
      "Inflation fell to its lowest in seven years, poverty to its lowest since 2018.",
    ],
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
