import { defineLifeline, type LifelineMilestones } from "./build"

const milestones: LifelineMilestones = {
  1776: {
    id: "born",
    events: [
      {
        text: "Declared independence in Philadelphia on July 4.",
        image: {
          src: "/images/moments/us/declaration.jpg",
          alt: "The Declaration of Independence, by John Trumbull",
        },
      },
      "Washington crossed the Delaware on Christmas night.",
    ],
  },
  1777: {
    id: "saratoga",
    events: [
      "Congress adopted the Stars and Stripes.",
      {
        text: "Victory at Saratoga turned the war.",
        image: {
          src: "/images/moments/us/saratoga.jpg",
          alt: "The Surrender of General Burgoyne, by John Trumbull",
        },
      },
      "Winter at Valley Forge.",
      {
        text: "Morocco became the first nation to recognize American independence. Sultan Mohammed III opened his ports to American ships.",
        image: {
          src: "/images/moments/us/morocco-recognition.jpg",
          alt: "Coins of Sultan Mohammed III of Morocco",
        },
      },
    ],
  },
  1778: {
    id: "french-alliance",
    events: [
      {
        text: "France joined the war as an ally.",
        image: {
          src: "/images/moments/us/french-alliance.jpg",
          alt: "The alliance with France, 1778",
        },
      },
    ],
  },
  1781: {
    id: "yorktown",
    events: [
      {
        text: "Cornwallis surrendered at Yorktown.",
        image: {
          src: "/images/moments/us/yorktown.jpg",
          alt: "The Surrender of Lord Cornwallis, by John Trumbull",
        },
      },
      "The Articles of Confederation took effect.",
    ],
  },
  1783: {
    id: "treaty-of-paris",
    events: [
      {
        text: "The Treaty of Paris ended the war. Britain recognized independence.",
        image: {
          src: "/images/moments/us/treaty-paris.jpg",
          alt: "American Commissioners of the Treaty of Paris, by Benjamin West",
        },
      },
    ],
  },
  1786: {
    id: "shays",
    events: [
      {
        text: "Shays' Rebellion exposed the weakness of the Confederation.",
        image: {
          src: "/images/moments/us/shays.jpg",
          alt: "Shays' Rebellion",
        },
      },
    ],
  },
  1787: {
    id: "constitution",
    events: [
      {
        text: "The Constitution was written in Philadelphia.",
        image: {
          src: "/images/moments/us/constitution.jpg",
          alt: "Scene at the Signing of the Constitution, by Howard Chandler Christy",
        },
      },
      "The Northwest Ordinance charted the frontier.",
      "The Federalist Papers began appearing in New York.",
    ],
  },
  1788: {
    id: "ratified",
    events: [
      {
        text: "The Constitution was ratified.",
        image: {
          src: "/images/moments/us/federalist.jpg",
          alt: "The Federalist, 1788",
        },
      },
    ],
  },
  1789: {
    mentors: [
      {
        name: "George Washington",
        photo: "/images/people/george-washington.jpg",
      },
    ],
    id: "washington",
    events: [
      {
        text: "George Washington became the first President.",
        image: {
          src: "/images/moments/us/washington-inauguration.jpg",
          alt: "Washington's inauguration at Federal Hall",
        },
      },
      "The Supreme Court was established.",
    ],
  },
  1790: {
    id: "census",
    events: ["The first census counted 3.9 million people."],
  },
  1791: {
    id: "bill-of-rights",
    events: [
      {
        text: "The Bill of Rights was ratified.",
        image: {
          src: "/images/moments/us/bill-of-rights.jpg",
          alt: "The Bill of Rights",
        },
      },
      "Hamilton's Bank of the United States opened.",
    ],
  },
  1792: {
    id: "buttonwood",
    events: [
      {
        text: "Traders signed the Buttonwood Agreement — the New York Stock Exchange.",
        image: {
          src: "/images/moments/us/tontine.jpg",
          alt: "The Tontine Coffee House, Wall Street",
        },
      },
      "The White House cornerstone was laid.",
    ],
  },
  1793: {
    id: "cotton-gin",
    events: [
      {
        text: "Eli Whitney invented the cotton gin.",
        image: {
          src: "/images/moments/us/cotton-gin.jpg",
          alt: "Whitney's cotton gin patent drawing",
        },
      },
    ],
  },
  1794: {
    id: "whiskey",
    events: [
      {
        text: "The Whiskey Rebellion tested federal power.",
        image: {
          src: "/images/moments/us/whiskey-rebellion.jpg",
          alt: "The Whiskey Rebellion",
        },
      },
    ],
  },
  1796: {
    id: "farewell",
    events: ["Washington's Farewell Address warned against faction and entanglement."],
  },
  1797: {
    mentors: [
      {
        name: "John Adams",
        photo: "/images/people/john-adams.jpg",
      },
    ],
    id: "adams",
    events: ["John Adams became the second President."],
  },
  1800: {
    id: "dc",
    events: [
      {
        text: "The capital moved to Washington, D.C.",
        image: {
          src: "/images/moments/us/washington-dc-1800.jpg",
          alt: "The unfinished Capitol, around 1800",
        },
      },
    ],
  },
  1801: {
    mentors: [
      {
        name: "Thomas Jefferson",
        photo: "/images/people/thomas-jefferson.jpg",
      },
    ],
    id: "jefferson",
    events: ["Thomas Jefferson became President after a tie thrown to the House."],
  },
  1803: {
    id: "louisiana",
    events: [
      {
        text: "The Louisiana Purchase doubled the country overnight.",
        image: {
          src: "/images/moments/us/louisiana-treaty.jpg",
          alt: "The Louisiana Purchase Treaty",
        },
      },
      "Marbury v. Madison established judicial review.",
    ],
  },
  1804: {
    id: "lewis-clark",
    events: [
      {
        text: "Lewis and Clark set out for the Pacific.",
        image: {
          src: "/images/moments/us/lewis-clark.jpg",
          alt: "Lewis and Clark on the Lower Columbia, by C. M. Russell",
        },
      },
      "Aaron Burr killed Alexander Hamilton in a duel.",
    ],
  },
  1805: {
    id: "pacific",
    events: ["Lewis and Clark reached the Pacific Ocean."],
  },
  1807: {
    id: "steamboat",
    events: [
      {
        text: "Fulton's steamboat ran the Hudson.",
        image: {
          src: "/images/moments/us/clermont.jpg",
          alt: "Fulton's Clermont",
        },
      },
    ],
  },
  1808: {
    id: "slave-trade",
    events: [
      {
        text: "The importation of enslaved people was banned.",
        image: {
          src: "/images/moments/us/brookes.jpg",
          alt: "The Brookes slave ship diagram",
        },
      },
    ],
  },
  1809: {
    id: "madison",
    events: [],
    mentors: [
      {
        name: "James Madison",
        photo: "/images/people/james-madison.jpg",
      },
    ],
  },
  1812: {
    id: "war-of-1812",
    events: [
      {
        text: "Went to war with Britain again.",
        image: {
          src: "/images/moments/us/constitution-guerriere.jpg",
          alt: "USS Constitution defeats HMS Guerriere",
        },
      },
    ],
  },
  1814: {
    id: "fort-mchenry",
    events: [
      "The British burned Washington.",
      "Francis Scott Key wrote The Star-Spangled Banner at Fort McHenry.",
    ],
  },
  1815: {
    id: "new-orleans",
    events: [
      {
        text: "Jackson won the Battle of New Orleans.",
        image: {
          src: "/images/moments/us/new-orleans-1815.jpg",
          alt: "The Battle of New Orleans",
        },
      },
    ],
  },
  1817: {
    mentors: [
      {
        name: "James Monroe",
        photo: "/images/people/james-monroe.jpg",
      },
    ],
    id: "erie-begun",
    events: ["Construction began on the Erie Canal."],
  },
  1819: {
    id: "florida",
    events: ["Spain ceded Florida."],
  },
  1820: {
    id: "missouri",
    events: [
      {
        text: "The Missouri Compromise drew a line through the country.",
        image: {
          src: "/images/moments/us/missouri-compromise.jpg",
          alt: "The Missouri Compromise line",
        },
      },
    ],
  },
  1823: {
    id: "monroe",
    events: [
      {
        text: "The Monroe Doctrine warned Europe off the hemisphere.",
        image: {
          src: "/images/moments/us/monroe-doctrine.jpg",
          alt: "Monroe and his cabinet",
        },
      },
    ],
  },
  1825: {
    mentors: [
      {
        name: "John Quincy Adams",
        photo: "/images/people/john-quincy-adams.jpg",
      },
    ],
    id: "erie-opened",
    events: [
      {
        text: "The Erie Canal opened the West.",
        image: {
          src: "/images/moments/us/erie-canal.jpg",
          alt: "The Erie Canal at Lockport",
        },
      },
    ],
  },
  1828: {
    mentors: [
      {
        name: "Andrew Jackson",
        photo: "/images/people/andrew-jackson.jpg",
      },
    ],
    id: "jackson",
    events: [
      "Andrew Jackson was elected.",
      {
        text: "Work began on the Baltimore & Ohio, the first American railroad.",
        image: {
          src: "/images/moments/us/tom-thumb.jpg",
          alt: "The B&O's Tom Thumb",
        },
      },
    ],
  },
  1830: {
    id: "indian-removal",
    events: ["The Indian Removal Act became law."],
  },
  1831: {
    id: "1831",
    events: [
      "Nat Turner led an uprising of the enslaved.",
      {
        text: "Garrison founded The Liberator.",
        image: {
          src: "/images/moments/us/liberator.jpg",
          alt: "The Liberator",
        },
      },
    ],
  },
  1836: {
    id: "alamo",
    events: [
      {
        text: "The Alamo fell.",
        image: {
          src: "/images/moments/us/alamo.jpg",
          alt: "The Fall of the Alamo, by Robert Onderdonk",
        },
      },
      "Texas won independence at San Jacinto.",
    ],
  },
  1837: {
    mentors: [
      {
        name: "Martin Van Buren",
        photo: "/images/people/martin-van-buren.jpg",
      },
    ],
    id: "panic-1837",
    events: [
      {
        text: "The Panic of 1837 brought depression.",
        image: {
          src: "/images/moments/us/panic-1837.jpg",
          alt: "A Panic of 1837 caricature",
        },
      },
    ],
  },
  1838: {
    id: "trail-of-tears",
    events: [
      {
        text: "The Trail of Tears — the forced removal of the Cherokee Nation.",
        image: {
          src: "/images/moments/us/trail-of-tears-map.jpg",
          alt: "The routes of the Trail of Tears",
        },
      },
    ],
  },
  1841: {
    mentors: [
      {
        name: "William Henry Harrison",
        photo: "/images/people/william-henry-harrison.jpg",
      },
      {
        name: "John Tyler",
        photo: "/images/people/john-tyler.jpg",
      },
    ],
    id: "oregon-trail",
    events: [
      {
        text: "Wagon trains rolled west on the Oregon Trail.",
        image: {
          src: "/images/moments/us/oregon-trail.jpg",
          alt: "The Oregon Trail, by Albert Bierstadt",
        },
      },
    ],
  },
  1844: {
    id: "telegraph",
    events: [
      {
        text: "Morse tapped “What hath God wrought” from Washington to Baltimore.",
        image: {
          src: "/images/moments/us/telegraph-1844.jpg",
          alt: "Morse's first message",
        },
      },
    ],
  },
  1845: {
    mentors: [
      {
        name: "James K. Polk",
        photo: "/images/people/james-k-polk.jpg",
      },
    ],
    id: "texas",
    events: [
      "Texas joined the Union.",
      "“Manifest Destiny” entered the language.",
    ],
  },
  1846: {
    id: "mexican-war",
    events: [
      {
        text: "War with Mexico began.",
        image: {
          src: "/images/moments/us/mexican-war.jpg",
          alt: "The Battle of Chapultepec",
        },
      },
      "The Oregon Treaty set the border at the 49th parallel.",
      "The Smithsonian was founded.",
    ],
  },
  1848: {
    id: "1848",
    events: [
      "The Treaty of Guadalupe Hidalgo delivered the Southwest.",
      "Gold was discovered at Sutter's Mill.",
      {
        text: "Seneca Falls demanded the vote for women.",
        image: {
          src: "/images/moments/us/seneca-falls.jpg",
          alt: "Elizabeth Cady Stanton",
        },
      },
    ],
  },
  1849: {
    mentors: [
      {
        name: "Zachary Taylor",
        photo: "/images/people/zachary-taylor.jpg",
      },
    ],
    id: "gold-rush",
    events: ["The Forty-Niners rushed for California."],
  },
  1850: {
    mentors: [
      {
        name: "Millard Fillmore",
        photo: "/images/people/millard-fillmore.jpg",
      },
    ],
    id: "1850",
    events: [
      {
        text: "The Compromise of 1850 delayed the reckoning.",
        image: {
          src: "/images/moments/us/clay-1850.jpg",
          alt: "Henry Clay introduces the Compromise of 1850",
        },
      },
      "California became a state.",
    ],
  },
  1851: {
    id: "moby-dick",
    events: [
      {
        text: "Melville published Moby-Dick.",
        image: {
          src: "/images/moments/us/moby-dick.jpg",
          alt: "Moby-Dick, first edition",
        },
      },
    ],
  },
  1852: {
    id: "uncle-tom",
    events: [
      {
        text: "Uncle Tom's Cabin set the country arguing.",
        image: {
          src: "/images/moments/us/uncle-tom.jpg",
          alt: "Uncle Tom's Cabin, first edition",
        },
      },
    ],
  },
  1853: {
    id: "pierce",
    events: [],
    mentors: [
      {
        name: "Franklin Pierce",
        photo: "/images/people/franklin-pierce.jpg",
      },
    ],
  },
  1854: {
    id: "kansas-nebraska",
    events: [
      {
        text: "The Kansas-Nebraska Act reopened the wound.",
        image: {
          src: "/images/moments/us/kansas-nebraska.jpg",
          alt: "Reynolds's political map, 1856",
        },
      },
      "The Republican Party was founded.",
    ],
  },
  1857: {
    mentors: [
      {
        name: "James Buchanan",
        photo: "/images/people/james-buchanan.jpg",
      },
    ],
    id: "dred-scott",
    events: [
      {
        text: "Dred Scott — the Supreme Court's worst decision.",
        image: {
          src: "/images/moments/us/dred-scott.jpg",
          alt: "Dred Scott",
        },
      },
    ],
  },
  1858: {
    id: "lincoln-douglas",
    events: [
      {
        text: "Lincoln debated Douglas across Illinois.",
        image: {
          src: "/images/moments/us/lincoln-douglas.jpg",
          alt: "The Lincoln–Douglas debates",
        },
      },
    ],
  },
  1859: {
    id: "1859",
    events: [
      {
        text: "John Brown raided Harpers Ferry.",
        image: {
          src: "/images/moments/us/john-brown.jpg",
          alt: "John Brown",
        },
      },
      "The first oil well was drilled in Titusville, Pennsylvania.",
    ],
  },
  1860: {
    mentors: [
      {
        name: "Abraham Lincoln",
        photo: "/images/people/abraham-lincoln.jpg",
      },
    ],
    id: "lincoln-elected",
    events: [
      {
        text: "Abraham Lincoln was elected. South Carolina seceded.",
        image: {
          src: "/images/people/abraham-lincoln.jpg",
          alt: "Abraham Lincoln",
        },
      },
      "The Pony Express began its run.",
    ],
  },
  1861: {
    id: "civil-war",
    events: [
      {
        text: "Fort Sumter. The Civil War began.",
        image: {
          src: "/images/moments/us/fort-sumter.jpg",
          alt: "The bombardment of Fort Sumter",
        },
      },
      "The transcontinental telegraph killed the Pony Express.",
    ],
  },
  1862: {
    id: "1862",
    events: [
      {
        text: "Antietam — the bloodiest day in American history.",
        image: {
          src: "/images/moments/us/antietam.jpg",
          alt: "Antietam, photographed by Alexander Gardner",
        },
      },
      "The Homestead Act gave the frontier away.",
    ],
  },
  1863: {
    id: "gettysburg",
    events: [
      "The Emancipation Proclamation took effect.",
      {
        text: "Gettysburg. Four months later, the Gettysburg Address.",
        image: {
          src: "/images/moments/us/gettysburg.jpg",
          alt: "Lincoln at Gettysburg, 1863",
        },
      },
    ],
  },
  1864: {
    id: "sherman",
    events: [
      {
        text: "Sherman marched to the sea.",
        image: {
          src: "/images/moments/us/sherman-march.jpg",
          alt: "Sherman's men destroying a railroad",
        },
      },
    ],
  },
  1865: {
    mentors: [
      {
        name: "Andrew Johnson",
        photo: "/images/people/andrew-johnson.jpg",
      },
    ],
    id: "civil-war-ends",
    events: [
      {
        text: "Lee surrendered at Appomattox.",
        image: {
          src: "/images/moments/us/appomattox.jpg",
          alt: "The surrender at Appomattox Court House",
        },
      },
      "Lincoln was assassinated at Ford's Theatre.",
      "The 13th Amendment abolished slavery.",
    ],
  },
  1866: {
    id: "atlantic-cable",
    events: [
      {
        text: "The transatlantic cable connected America to Europe.",
        image: {
          src: "/images/moments/us/atlantic-cable.jpg",
          alt: "The Great Eastern laying the Atlantic cable",
        },
      },
    ],
  },
  1867: {
    id: "alaska",
    events: ["Bought Alaska from Russia — “Seward's Folly.”"],
  },
  1868: {
    id: "fourteenth",
    events: [
      "The 14th Amendment promised equal protection.",
      {
        text: "President Johnson was impeached and acquitted.",
        image: {
          src: "/images/moments/us/impeachment-1868.jpg",
          alt: "A ticket to the impeachment trial",
        },
      },
    ],
  },
  1869: {
    mentors: [
      {
        name: "Ulysses S. Grant",
        photo: "/images/people/ulysses-s-grant.jpg",
      },
    ],
    id: "railroad",
    events: [
      {
        text: "The transcontinental railroad met at Promontory Summit.",
        image: {
          src: "/images/moments/us/golden-spike.jpg",
          alt: "The golden spike ceremony at Promontory Summit, 1869",
        },
      },
      "Wyoming gave women the vote.",
    ],
  },
  1870: {
    id: "fifteenth",
    events: [
      {
        text: "The 15th Amendment barred racial tests at the ballot.",
        image: {
          src: "/images/moments/us/first-vote.jpg",
          alt: "The First Vote, Harper's Weekly",
        },
      },
      "Rockefeller founded Standard Oil.",
    ],
  },
  1871: {
    id: "chicago-fire",
    events: [
      {
        text: "The Great Chicago Fire.",
        image: {
          src: "/images/moments/us/chicago-fire.jpg",
          alt: "Chicago in Flames, by Currier & Ives",
        },
      },
    ],
  },
  1872: {
    id: "yellowstone",
    events: [
      {
        text: "Yellowstone became the world's first national park.",
        image: {
          src: "/images/moments/us/yellowstone-moran.jpg",
          alt: "The Grand Canyon of the Yellowstone, by Thomas Moran",
        },
      },
    ],
  },
  1873: {
    id: "panic-1873",
    events: [
      {
        text: "The Panic of 1873.",
        image: {
          src: "/images/moments/us/panic-1873.jpg",
          alt: "The Panic of 1873",
        },
      },
    ],
  },
  1876: {
    id: "centennial",
    events: [
      "Turned 100.",
      {
        text: "Bell patented the telephone.",
        image: {
          src: "/images/moments/us/bell-telephone.jpg",
          alt: "Bell's telephone",
        },
      },
      "Custer fell at Little Bighorn.",
      "Baseball's National League was founded.",
    ],
  },
  1877: {
    mentors: [
      {
        name: "Rutherford B. Hayes",
        photo: "/images/people/rutherford-b-hayes.jpg",
      },
    ],
    id: "1877",
    events: [
      "Reconstruction ended in a deal.",
      {
        text: "Edison invented the phonograph.",
        image: {
          src: "/images/moments/us/phonograph.jpg",
          alt: "Edison and his phonograph",
        },
      },
    ],
  },
  1879: {
    id: "light-bulb",
    events: [
      {
        text: "Edison lit the first practical light bulb.",
        image: {
          src: "/images/moments/us/edison-bulb.jpg",
          alt: "Edison's carbon-filament lamp",
        },
      },
    ],
  },
  1881: {
    mentors: [
      {
        name: "James A. Garfield",
        photo: "/images/people/james-a-garfield.jpg",
      },
      {
        name: "Chester A. Arthur",
        photo: "/images/people/chester-a-arthur.jpg",
      },
    ],
    id: "1881",
    events: [
      {
        text: "President Garfield was assassinated.",
        image: {
          src: "/images/moments/us/garfield.jpg",
          alt: "The assassination of President Garfield",
        },
      },
      "Clara Barton founded the Red Cross.",
      "Booker T. Washington opened Tuskegee.",
    ],
  },
  1882: {
    id: "1882",
    events: [
      {
        text: "The Chinese Exclusion Act closed the door.",
        image: {
          src: "/images/moments/us/exclusion-cartoon.jpg",
          alt: "A Chinese Exclusion Act cartoon",
        },
      },
      "Edison's Pearl Street station powered Manhattan.",
    ],
  },
  1883: {
    id: "1883",
    events: [
      {
        text: "The Brooklyn Bridge opened.",
        image: {
          src: "/images/moments/us/brooklyn-bridge.jpg",
          alt: "The opening of the Brooklyn Bridge",
        },
      },
      "The railroads invented standard time.",
    ],
  },
  1885: {
    id: "cleveland",
    events: [],
    mentors: [
      {
        name: "Grover Cleveland",
        photo: "/images/people/grover-cleveland.jpg",
      },
    ],
  },
  1886: {
    id: "liberty",
    events: [
      {
        text: "The Statue of Liberty was dedicated in New York Harbor.",
        image: {
          src: "/images/moments/us/statue-liberty.jpg",
          alt: "The Unveiling of the Statue of Liberty, by Edward Moran",
        },
      },
      "Haymarket. The AFL was founded.",
      "A pharmacist in Atlanta invented Coca-Cola.",
    ],
  },
  1888: {
    id: "kodak",
    events: [
      {
        text: "The Kodak camera: “You press the button, we do the rest.”",
        image: {
          src: "/images/moments/us/kodak.jpg",
          alt: "The original Kodak camera",
        },
      },
    ],
  },
  1889: {
    mentors: [
      {
        name: "Benjamin Harrison",
        photo: "/images/people/benjamin-harrison.jpg",
      },
    ],
    id: "1889",
    events: [
      {
        text: "The Oklahoma Land Rush.",
        image: {
          src: "/images/moments/us/land-rush.jpg",
          alt: "The Oklahoma Land Rush",
        },
      },
      "The Johnstown Flood killed more than two thousand.",
    ],
  },
  1890: {
    id: "1890",
    events: [
      "Wounded Knee.",
      {
        text: "The Sherman Antitrust Act took aim at the trusts.",
        image: {
          src: "/images/moments/us/standard-oil.jpg",
          alt: "The Standard Oil octopus, from Puck",
        },
      },
    ],
  },
  1891: {
    id: "basketball",
    events: [
      {
        text: "James Naismith nailed up two peach baskets — basketball.",
        image: {
          src: "/images/moments/us/naismith.jpg",
          alt: "James Naismith",
        },
      },
    ],
  },
  1892: {
    id: "ellis-island",
    events: [
      {
        text: "Ellis Island opened its doors.",
        image: {
          src: "/images/moments/us/ellis-island.jpg",
          alt: "Arriving at Ellis Island",
        },
      },
    ],
  },
  1893: {
    mentors: [
      {
        name: "Grover Cleveland",
        photo: "/images/people/grover-cleveland.jpg",
      },
    ],
    id: "1893",
    events: [
      {
        text: "The World's Columbian Exposition dazzled Chicago.",
        image: {
          src: "/images/moments/us/columbian-expo.jpg",
          alt: "The Court of Honor, World's Columbian Exposition",
        },
      },
      "The Panic of 1893.",
    ],
  },
  1896: {
    id: "plessy",
    events: ["Plessy v. Ferguson blessed “separate but equal.”"],
  },
  1897: {
    id: "mckinley",
    events: [],
    mentors: [
      {
        name: "William McKinley",
        photo: "/images/people/william-mckinley.jpg",
      },
    ],
  },
  1898: {
    id: "1898",
    events: [
      {
        text: "The Spanish-American War. “Remember the Maine.”",
        image: {
          src: "/images/moments/us/uss-maine.jpg",
          alt: "The wreck of the USS Maine",
        },
      },
      "Hawaii was annexed.",
    ],
  },
  1901: {
    mentors: [
      {
        name: "Theodore Roosevelt",
        photo: "/images/people/theodore-roosevelt.jpg",
      },
    ],
    id: "1901",
    events: [
      {
        text: "McKinley was assassinated. Theodore Roosevelt took over at 42.",
        image: {
          src: "/images/people/theodore-roosevelt.jpg",
          alt: "Theodore Roosevelt",
        },
      },
      "U.S. Steel became the first billion-dollar company.",
    ],
  },
  1903: {
    id: "kitty-hawk",
    events: [
      {
        text: "The Wright brothers flew at Kitty Hawk. Twelve seconds.",
        image: {
          src: "/images/moments/us/wright-flyer.jpg",
          alt: "The first flight at Kitty Hawk, December 17, 1903",
        },
      },
      "Ford Motor Company was founded.",
      "The first World Series was played.",
    ],
  },
  1904: {
    id: "subway",
    events: [
      {
        text: "The New York City subway opened.",
        image: {
          src: "/images/moments/us/subway-1904.jpg",
          alt: "The City Hall subway station",
        },
      },
    ],
  },
  1906: {
    id: "sf-earthquake",
    events: [
      {
        text: "The San Francisco earthquake and fire.",
        image: {
          src: "/images/moments/us/sf-earthquake.jpg",
          alt: "Sacramento Street during the 1906 San Francisco fire",
        },
      },
    ],
  },
  1908: {
    id: "model-t",
    events: [
      {
        text: "Ford's Model T put the country on wheels.",
        image: {
          src: "/images/moments/us/model-t.jpg",
          alt: "A Ford Model T, around 1910",
        },
      },
    ],
  },
  1909: {
    mentors: [
      {
        name: "William Howard Taft",
        photo: "/images/people/william-howard-taft.jpg",
      },
    ],
    id: "naacp",
    events: [
      {
        text: "The NAACP was founded.",
        image: {
          src: "/images/moments/us/du-bois.jpg",
          alt: "W. E. B. Du Bois",
        },
      },
    ],
  },
  1911: {
    id: "1911",
    events: [
      {
        text: "The Triangle Shirtwaist fire killed 146 garment workers.",
        image: {
          src: "/images/moments/us/triangle-fire.jpg",
          alt: "The Triangle Shirtwaist fire",
        },
      },
      "Standard Oil was broken up.",
    ],
  },
  1912: {
    id: "1912",
    events: [
      "Arizona completed the lower 48.",
      {
        text: "The Titanic sank en route to New York.",
        image: {
          src: "/images/moments/us/titanic.jpg",
          alt: "RMS Titanic",
        },
      },
    ],
  },
  1913: {
    mentors: [
      {
        name: "Woodrow Wilson",
        photo: "/images/people/woodrow-wilson.jpg",
      },
    ],
    id: "1913",
    events: [
      "The Federal Reserve was created.",
      "The income tax arrived with the 16th Amendment.",
      {
        text: "Ford's moving assembly line cut a car to 93 minutes.",
        image: {
          src: "/images/moments/us/assembly-line.jpg",
          alt: "The moving assembly line at Highland Park",
        },
      },
    ],
  },
  1914: {
    id: "panama",
    events: [
      {
        text: "The Panama Canal opened.",
        image: {
          src: "/images/moments/us/panama-canal.jpg",
          alt: "SS Ancon makes the first transit",
        },
      },
    ],
  },
  1915: {
    id: "1915",
    events: [
      {
        text: "A German U-boat sank the Lusitania.",
        image: {
          src: "/images/moments/us/lusitania.jpg",
          alt: "RMS Lusitania",
        },
      },
      "The first transcontinental phone call: New York to San Francisco.",
    ],
  },
  1917: {
    id: "wwi",
    events: [
      {
        text: "Entered World War I.",
        image: {
          src: "/images/moments/us/wwi-troops.jpg",
          alt: "American troops in France",
        },
      },
    ],
  },
  1918: {
    id: "1918",
    events: [
      {
        text: "The influenza pandemic killed hundreds of thousands at home.",
        image: {
          src: "/images/moments/us/flu-1918.jpg",
          alt: "The emergency hospital at Camp Funston, Kansas",
        },
      },
      "Armistice. The war ended.",
    ],
  },
  1919: {
    id: "prohibition",
    events: ["Prohibition was ratified."],
  },
  1920: {
    id: "1920",
    events: [
      {
        text: "Women won the vote with the 19th Amendment.",
        image: {
          src: "/images/moments/us/suffrage-1920.jpg",
          alt: "Celebrating the 19th Amendment",
        },
      },
      "KDKA in Pittsburgh made the first commercial radio broadcast.",
    ],
  },
  1921: {
    id: "harding",
    events: [],
    mentors: [
      {
        name: "Warren G. Harding",
        photo: "/images/people/warren-g-harding.jpg",
      },
    ],
  },
  1923: {
    id: "coolidge",
    events: [],
    mentors: [
      {
        name: "Calvin Coolidge",
        photo: "/images/people/calvin-coolidge.jpg",
      },
    ],
  },
  1924: {
    id: "citizenship",
    events: [
      {
        text: "Native Americans were granted citizenship.",
        image: {
          src: "/images/moments/us/coolidge-osage.jpg",
          alt: "President Coolidge with Osage leaders",
        },
      },
    ],
  },
  1925: {
    id: "1925",
    events: [
      "The Scopes trial put evolution in the dock.",
      {
        text: "Fitzgerald published The Great Gatsby.",
        image: {
          src: "/images/moments/us/gatsby.jpg",
          alt: "The Great Gatsby, first edition",
        },
      },
    ],
  },
  1927: {
    id: "1927",
    events: [
      {
        text: "Lindbergh flew the Atlantic alone.",
        image: {
          src: "/images/moments/us/lindbergh.jpg",
          alt: "Lindbergh and the Spirit of St. Louis",
        },
      },
      "The Jazz Singer — the movies learned to talk.",
      "Babe Ruth hit sixty home runs.",
    ],
  },
  1928: {
    id: "mickey",
    events: [
      {
        text: "Mickey Mouse debuted in Steamboat Willie.",
        image: {
          src: "/images/moments/us/steamboat-willie.jpg",
          alt: "Steamboat Willie",
        },
      },
    ],
  },
  1929: {
    mentors: [
      {
        name: "Herbert Hoover",
        photo: "/images/people/herbert-hoover.jpg",
      },
    ],
    id: "crash",
    events: [
      {
        text: "The stock market crashed. The Great Depression began.",
        image: {
          src: "/images/moments/us/crash-1929.jpg",
          alt: "Crowds outside the New York Stock Exchange, October 1929",
        },
      },
    ],
  },
  1931: {
    id: "1931",
    events: [
      {
        text: "The Empire State Building rose in 410 days.",
        image: {
          src: "/images/moments/us/empire-state.jpg",
          alt: "The Empire State Building",
        },
      },
      "The Star-Spangled Banner became the national anthem.",
    ],
  },
  1932: {
    mentors: [
      {
        name: "Franklin D. Roosevelt",
        photo: "/images/people/franklin-d-roosevelt.jpg",
      },
    ],
    id: "1932",
    events: [
      "Franklin Roosevelt was elected in a landslide.",
      {
        text: "Amelia Earhart flew the Atlantic solo.",
        image: {
          src: "/images/moments/us/earhart.jpg",
          alt: "Amelia Earhart",
        },
      },
    ],
  },
  1933: {
    id: "new-deal",
    events: [
      "The New Deal began in a hundred days.",
      "Prohibition was repealed.",
    ],
  },
  1935: {
    id: "1935",
    events: [
      "Social Security became law.",
      "Black Sunday buried the Plains in dust.",
    ],
  },
  1936: {
    id: "1936",
    events: [
      {
        text: "Hoover Dam held back the Colorado.",
        image: {
          src: "/images/moments/us/hoover-dam.jpg",
          alt: "Hoover Dam",
        },
      },
      "Jesse Owens won four golds in Berlin.",
    ],
  },
  1937: {
    id: "1937",
    events: [
      "The Golden Gate Bridge opened.",
      "The Hindenburg burned at Lakehurst.",
    ],
  },
  1938: {
    id: "1938",
    events: [
      "The minimum wage became law.",
      "Superman appeared in Action Comics #1.",
      {
        text: "Orson Welles panicked the nation with War of the Worlds.",
        image: {
          src: "/images/moments/us/welles.jpg",
          alt: "Orson Welles",
        },
      },
    ],
  },
  1939: {
    id: "1939",
    events: [
      "The Wizard of Oz and Gone with the Wind hit theaters.",
      "War began in Europe.",
    ],
  },
  1941: {
    id: "pearl-harbor",
    events: [
      {
        text: "Pearl Harbor. Entered World War II.",
        image: {
          src: "/images/moments/us/pearl-harbor.jpg",
          alt: "The USS Arizona burning at Pearl Harbor",
        },
      },
      "Mount Rushmore was completed.",
    ],
  },
  1942: {
    id: "1942",
    events: [
      {
        text: "Japanese Americans were interned by executive order.",
        image: {
          src: "/images/moments/us/internment.jpg",
          alt: "Awaiting relocation, photographed by Dorothea Lange",
        },
      },
      "The Manhattan Project began.",
      "Midway turned the Pacific war.",
    ],
  },
  1944: {
    id: "1944",
    events: [
      {
        text: "D-Day. Omaha Beach.",
        image: {
          src: "/images/moments/us/d-day.jpg",
          alt: "Into the Jaws of Death — Omaha Beach, June 6, 1944",
        },
      },
      "The GI Bill was signed.",
      "Bretton Woods made the dollar the world's anchor.",
    ],
  },
  1945: {
    mentors: [
      {
        name: "Harry S. Truman",
        photo: "/images/people/harry-s-truman.jpg",
      },
    ],
    id: "wwii-ends",
    events: [
      {
        text: "Trinity, Hiroshima, Nagasaki. The atomic age began.",
        image: {
          src: "/images/moments/us/trinity.jpg",
          alt: "The Trinity test, sixteen milliseconds in",
        },
      },
      "World War II ended.",
      "The United Nations was founded in San Francisco.",
    ],
  },
  1947: {
    id: "1947",
    events: [
      "The transistor was invented at Bell Labs.",
      {
        text: "Jackie Robinson broke the color line.",
        image: {
          src: "/images/moments/us/jackie-robinson.jpg",
          alt: "Jackie Robinson",
        },
      },
      "The Cold War began.",
    ],
  },
  1948: {
    id: "1948",
    events: [
      "The Marshall Plan rebuilt Europe.",
      {
        text: "The Berlin Airlift began.",
        image: {
          src: "/images/moments/us/berlin-airlift.jpg",
          alt: "A C-54 lands at Tempelhof",
        },
      },
    ],
  },
  1949: {
    id: "nato",
    events: [
      {
        text: "NATO was founded.",
        image: {
          src: "/images/moments/us/nato-signing.jpg",
          alt: "Signing the North Atlantic Treaty",
        },
      },
    ],
  },
  1950: {
    id: "korea",
    events: [
      {
        text: "The Korean War began.",
        image: {
          src: "/images/moments/us/korea-troops.jpg",
          alt: "American troops in Korea",
        },
      },
    ],
  },
  1951: {
    id: "tv",
    events: ["Television went coast to coast. I Love Lucy debuted."],
  },
  1952: {
    id: "h-bomb",
    events: [
      {
        text: "The first hydrogen bomb erased an island.",
        image: {
          src: "/images/moments/us/ivy-mike.jpg",
          alt: "Ivy Mike",
        },
      },
    ],
  },
  1953: {
    mentors: [
      {
        name: "Dwight D. Eisenhower",
        photo: "/images/people/dwight-d-eisenhower.jpg",
      },
    ],
    id: "korea-armistice",
    events: [
      {
        text: "The Korean armistice was signed.",
        image: {
          src: "/images/moments/us/armistice-korea.jpg",
          alt: "The armistice at Panmunjom",
        },
      },
    ],
  },
  1954: {
    id: "brown",
    events: [
      "Brown v. Board of Education struck down school segregation.",
      {
        text: "The Nautilus, the first nuclear submarine, was launched.",
        image: {
          src: "/images/moments/us/nautilus.jpg",
          alt: "The launch of USS Nautilus",
        },
      },
    ],
  },
  1955: {
    id: "1955",
    events: [
      "Rosa Parks kept her seat in Montgomery.",
      "The Salk polio vaccine was declared safe.",
      "Disneyland opened.",
    ],
  },
  1956: {
    id: "1956",
    events: [
      "The Interstate Highway System was signed into law.",
      {
        text: "Elvis appeared on Ed Sullivan.",
        image: {
          src: "/images/moments/us/elvis.jpg",
          alt: "Elvis Presley, 1956",
        },
      },
    ],
  },
  1957: {
    id: "1957",
    events: [
      {
        text: "The Little Rock Nine walked into Central High.",
        image: {
          src: "/images/moments/us/little-rock.jpg",
          alt: "The 101st Airborne escorts the Little Rock Nine",
        },
      },
      "Sputnik shocked the country skyward.",
    ],
  },
  1958: {
    id: "1958",
    events: [
      {
        text: "Founded NASA.",
        image: {
          src: "/images/moments/us/explorer-1.jpg",
          alt: "Explorer 1, America's first satellite",
        },
      },
      "The integrated circuit was invented.",
    ],
  },
  1959: {
    id: "statehood",
    events: [
      {
        text: "Alaska and Hawaii made it fifty stars.",
        image: {
          src: "/images/moments/us/hawaii-1959.jpg",
          alt: "Hawaii celebrates statehood",
        },
      },
    ],
  },
  1960: {
    id: "1960",
    events: [
      {
        text: "Four students sat down at a Greensboro lunch counter.",
        image: {
          src: "/images/moments/us/greensboro.jpg",
          alt: "The Greensboro lunch counter",
        },
      },
      "Kennedy and Nixon debated on live television.",
    ],
  },
  1961: {
    mentors: [
      {
        name: "John F. Kennedy",
        photo: "/images/people/john-f-kennedy.jpg",
      },
    ],
    id: "1961",
    events: [
      {
        text: "Alan Shepard became the first American in space.",
        image: {
          src: "/images/moments/us/shepard.jpg",
          alt: "Alan Shepard before the Freedom 7 flight",
        },
      },
      "The Freedom Riders rode south.",
      "The Bay of Pigs failed.",
    ],
  },
  1962: {
    id: "1962",
    events: [
      {
        text: "John Glenn orbited the Earth.",
        image: {
          src: "/images/moments/us/glenn.jpg",
          alt: "John Glenn",
        },
      },
      {
        text: "The Cuban Missile Crisis — thirteen days at the edge.",
        image: {
          src: "/images/moments/us/u2-cuba.jpg",
          alt: "U-2 reconnaissance over Cuba",
        },
      },
    ],
  },
  1963: {
    mentors: [
      {
        name: "Lyndon B. Johnson",
        photo: "/images/people/lyndon-b-johnson.jpg",
      },
    ],
    id: "1963",
    events: [
      {
        text: "Martin Luther King Jr. dreamed aloud at the Lincoln Memorial.",
        image: {
          src: "/images/moments/us/march-washington.jpg",
          alt: "The March on Washington, August 28, 1963",
        },
      },
      "President Kennedy was assassinated in Dallas.",
    ],
  },
  1964: {
    id: "1964",
    events: [
      {
        text: "The Civil Rights Act became law.",
        image: {
          src: "/images/moments/us/cra-signing.jpg",
          alt: "President Johnson signs the Civil Rights Act",
        },
      },
      "The Beatles landed at JFK.",
      "The Gulf of Tonkin resolution opened the door to Vietnam.",
    ],
  },
  1965: {
    id: "1965",
    events: [
      {
        text: "Selma. The Voting Rights Act became law.",
        image: {
          src: "/images/moments/us/selma.jpg",
          alt: "The march from Selma to Montgomery",
        },
      },
      "Medicare and Medicaid were created.",
      "Combat troops landed in Vietnam.",
    ],
  },
  1967: {
    id: "1967",
    events: [
      "The Summer of Love bloomed in San Francisco.",
      {
        text: "Thurgood Marshall joined the Supreme Court.",
        image: {
          src: "/images/moments/us/marshall.jpg",
          alt: "Thurgood Marshall",
        },
      },
      "The first Super Bowl was played.",
    ],
  },
  1968: {
    id: "1968",
    events: [
      "Martin Luther King Jr. was assassinated in Memphis.",
      "Robert Kennedy was assassinated in Los Angeles.",
      {
        text: "Apollo 8 read Genesis from lunar orbit.",
        image: {
          src: "/images/moments/us/earthrise.jpg",
          alt: "Earthrise, Apollo 8",
        },
      },
    ],
  },
  1969: {
    mentors: [
      {
        name: "Richard Nixon",
        photo: "/images/people/richard-nixon.jpg",
      },
    ],
    id: "moon",
    events: [
      {
        text: "Apollo 11. Armstrong and Aldrin walked on the Moon.",
        image: {
          src: "/images/moments/us/apollo-11.jpg",
          alt: "Buzz Aldrin on the Moon, photographed by Neil Armstrong",
        },
      },
      "ARPANET sent its first message — the internet was born.",
      "Woodstock. Stonewall.",
    ],
  },
  1970: {
    id: "1970",
    events: [
      "The first Earth Day.",
      "Kent State.",
    ],
  },
  1971: {
    id: "1971",
    events: [
      {
        text: "Intel shipped the 4004, the first microprocessor.",
        image: {
          src: "/images/moments/us/intel-4004.jpg",
          alt: "The Intel 4004",
        },
      },
      "The voting age dropped to 18.",
    ],
  },
  1972: {
    id: "1972",
    events: [
      "Nixon went to China.",
      "Burglars were caught at the Watergate.",
      "Title IX. Pong.",
    ],
  },
  1973: {
    id: "1973",
    events: [
      "The last troops left Vietnam.",
      "Roe v. Wade.",
      "The oil embargo brought gas lines.",
      "The first cell phone call was made on a Manhattan sidewalk.",
    ],
  },
  1974: {
    mentors: [
      {
        name: "Gerald Ford",
        photo: "/images/people/gerald-ford.jpg",
      },
    ],
    id: "nixon",
    events: ["Nixon resigned."],
  },
  1975: {
    id: "1975",
    events: [
      "Saigon fell.",
      "Microsoft was founded.",
      "Saturday Night Live went on the air.",
    ],
  },
  1976: {
    id: "bicentennial",
    events: [
      "Turned 200.",
      "Apple Computer was founded in a garage.",
      {
        text: "Viking 1 landed on Mars.",
        image: {
          src: "/images/moments/us/viking.jpg",
          alt: "Viking 1's first photograph from the surface of Mars",
        },
      },
    ],
  },
  1977: {
    mentors: [
      {
        name: "Jimmy Carter",
        photo: "/images/people/jimmy-carter.jpg",
      },
    ],
    id: "1977",
    events: [
      "Star Wars opened.",
      "The Apple II shipped.",
      {
        text: "The Voyagers left for the stars.",
        image: {
          src: "/images/moments/us/golden-record.jpg",
          alt: "The Voyager Golden Record",
        },
      },
      "Elvis died.",
    ],
  },
  1979: {
    id: "1979",
    events: [
      {
        text: "Three Mile Island melted down.",
        image: {
          src: "/images/moments/us/three-mile-island.jpg",
          alt: "Three Mile Island",
        },
      },
      "Fifty-two Americans were taken hostage in Tehran.",
      "ESPN signed on.",
    ],
  },
  1980: {
    mentors: [
      {
        name: "Ronald Reagan",
        photo: "/images/people/ronald-reagan.jpg",
      },
    ],
    id: "1980",
    events: [
      "The Miracle on Ice.",
      {
        text: "Mount St. Helens erupted.",
        image: {
          src: "/images/moments/us/st-helens.jpg",
          alt: "Mount St. Helens, May 18, 1980",
        },
      },
      "CNN invented 24-hour news.",
      "Ronald Reagan was elected.",
    ],
  },
  1981: {
    id: "1981",
    events: [
      {
        text: "The Space Shuttle Columbia flew.",
        image: {
          src: "/images/moments/us/shuttle.jpg",
          alt: "Columbia lifting off on STS-1, 1981",
        },
      },
      "The IBM PC arrived. MTV played its first video.",
      "AIDS was first reported.",
    ],
  },
  1982: {
    id: "1982",
    events: [
      "E.T. phoned home.",
      "Michael Jackson released Thriller.",
    ],
  },
  1983: {
    id: "1983",
    events: [
      "The internet switched on TCP/IP.",
      {
        text: "Sally Ride became the first American woman in space.",
        image: {
          src: "/images/moments/us/sally-ride.jpg",
          alt: "Sally Ride on the flight deck",
        },
      },
    ],
  },
  1984: {
    id: "1984",
    events: [
      {
        text: "The Macintosh said hello.",
        image: {
          src: "/images/moments/us/macintosh.jpg",
          alt: "The Macintosh 128K",
        },
      },
      "Los Angeles hosted the Olympics.",
    ],
  },
  1986: {
    id: "challenger",
    events: [
      {
        text: "Challenger broke apart 73 seconds after launch.",
        image: {
          src: "/images/moments/us/challenger-crew.jpg",
          alt: "The crew of STS-51-L",
        },
      },
    ],
  },
  1987: {
    id: "1987",
    events: [
      {
        text: "“Mr. Gorbachev, tear down this wall.”",
        image: {
          src: "/images/moments/us/brandenburg.jpg",
          alt: "Reagan at the Brandenburg Gate",
        },
      },
      "Black Monday dropped the Dow 22% in a day.",
    ],
  },
  1989: {
    mentors: [
      {
        name: "George H. W. Bush",
        photo: "/images/people/george-h-w-bush.jpg",
      },
    ],
    id: "1989",
    events: [
      {
        text: "The Berlin Wall fell.",
        image: {
          src: "/images/moments/us/berlin-wall.jpg",
          alt: "The Berlin Wall, November 1989",
        },
      },
      "The Exxon Valdez spilled into Prince William Sound.",
      "The Loma Prieta earthquake stopped the World Series.",
    ],
  },
  1990: {
    id: "1990",
    events: [
      {
        text: "The Hubble Space Telescope launched.",
        image: {
          src: "/images/moments/us/hubble.jpg",
          alt: "Hubble in orbit",
        },
      },
      "The Americans with Disabilities Act became law.",
    ],
  },
  1991: {
    id: "cold-war",
    events: [
      {
        text: "Desert Storm liberated Kuwait in a hundred hours.",
        image: {
          src: "/images/moments/us/kuwait-fires.jpg",
          alt: "The Kuwait oil fires",
        },
      },
      "The Soviet Union dissolved. The Cold War ended.",
    ],
  },
  1992: {
    mentors: [
      {
        name: "Bill Clinton",
        photo: "/images/people/bill-clinton.jpg",
      },
    ],
    id: "1992",
    events: [
      "Los Angeles burned after the Rodney King verdict.",
      {
        text: "Bill Clinton was elected.",
        image: {
          src: "/images/people/bill-clinton.jpg",
          alt: "Bill Clinton",
        },
      },
    ],
  },
  1993: {
    id: "1993",
    events: [
      {
        text: "Mosaic put a face on the web.",
        image: {
          src: "/images/moments/us/mosaic.jpg",
          alt: "NCSA Mosaic",
        },
      },
      "NAFTA was signed.",
    ],
  },
  1994: {
    id: "1994",
    events: [
      "Amazon was founded in a Bellevue garage.",
      "Netscape set the web on fire.",
    ],
  },
  1995: {
    id: "1995",
    events: [
      {
        text: "Oklahoma City.",
        image: {
          src: "/images/moments/us/okc.jpg",
          alt: "The Murrah Federal Building",
        },
      },
      "Windows 95 launched with the Rolling Stones.",
      "Toy Story — the first fully computer-animated film.",
      "eBay opened for bids.",
    ],
  },
  1997: {
    id: "1997",
    events: [
      {
        text: "Pathfinder put a rover on Mars.",
        image: {
          src: "/images/moments/us/pathfinder.jpg",
          alt: "Sojourner on Mars",
        },
      },
      {
        text: "Steve Jobs returned to Apple.",
        image: {
          src: "/images/people/steve-jobs.jpg",
          alt: "Steve Jobs",
        },
      },
    ],
  },
  1998: {
    id: "1998",
    events: [
      "Google was founded in a Menlo Park garage.",
      {
        text: "President Clinton was impeached and acquitted.",
        image: {
          src: "/images/moments/us/impeachment-1999.jpg",
          alt: "The impeachment trial in the Senate",
        },
      },
    ],
  },
  1999: {
    id: "1999",
    events: [
      "Columbine.",
      "The dot-com bubble inflated toward its peak.",
    ],
  },
  2000: {
    id: "2000",
    events: [
      "The dot-com bubble burst.",
      "Bush v. Gore was settled by the Supreme Court.",
    ],
  },
  2001: {
    mentors: [
      {
        name: "George W. Bush",
        photo: "/images/people/george-w-bush.jpg",
      },
    ],
    id: "september-11",
    events: [
      {
        text: "September 11.",
        image: {
          src: "/images/moments/us/sept-11.jpg",
          alt: "The Tribute in Light over Lower Manhattan",
        },
      },
      "The war in Afghanistan began.",
      "Apple introduced the iPod.",
    ],
  },
  2003: {
    id: "2003",
    events: [
      "The Iraq War began.",
      "Columbia was lost on reentry.",
      "The Human Genome Project was completed.",
    ],
  },
  2004: {
    id: "facebook",
    events: [
      {
        text: "Facebook launched from a Harvard dorm.",
        image: {
          src: "/images/moments/us/zuckerberg.jpg",
          alt: "Mark Zuckerberg at Harvard",
        },
      },
    ],
  },
  2005: {
    id: "2005",
    events: [
      {
        text: "Hurricane Katrina drowned New Orleans.",
        image: {
          src: "/images/moments/us/katrina.jpg",
          alt: "Hurricane Katrina from orbit, August 2005",
        },
      },
      "YouTube uploaded its first video.",
    ],
  },
  2006: {
    id: "twitter",
    events: ["Twitter sent its first tweet."],
  },
  2007: {
    id: "iphone",
    events: [
      {
        text: "The iPhone was introduced in San Francisco.",
        image: {
          src: "/images/moments/us/iphone.jpg",
          alt: "The original iPhone",
        },
      },
      "Netflix started streaming.",
    ],
  },
  2008: {
    mentors: [
      {
        name: "Barack Obama",
        photo: "/images/people/barack-obama.jpg",
      },
    ],
    id: "obama",
    events: [
      {
        text: "The financial crisis brought the economy to its knees.",
        image: {
          src: "/images/moments/us/lehman.jpg",
          alt: "Lehman Brothers",
        },
      },
      {
        text: "Elected Barack Obama, the first Black president.",
        image: {
          src: "/images/people/barack-obama.jpg",
          alt: "Barack Obama",
        },
      },
    ],
  },
  2009: {
    id: "hudson",
    events: [
      {
        text: "Captain Sullenberger landed on the Hudson.",
        image: {
          src: "/images/moments/us/hudson-1549.jpg",
          alt: "Flight 1549 in the Hudson",
        },
      },
    ],
  },
  2010: {
    id: "2010",
    events: [
      "The Affordable Care Act became law.",
      {
        text: "Deepwater Horizon spilled into the Gulf.",
        image: {
          src: "/images/moments/us/deepwater.jpg",
          alt: "Deepwater Horizon",
        },
      },
      "Instagram posted its first photo.",
    ],
  },
  2011: {
    id: "2011",
    events: [
      {
        text: "Osama bin Laden was killed.",
        image: {
          src: "/images/moments/us/situation-room.jpg",
          alt: "The Situation Room, May 1, 2011",
        },
      },
      {
        text: "The Space Shuttle flew its last mission.",
        image: {
          src: "/images/moments/us/atlantis.jpg",
          alt: "Atlantis lifting off on the final Shuttle mission",
        },
      },
      "Steve Jobs died.",
    ],
  },
  2012: {
    id: "2012",
    events: [
      {
        text: "Curiosity landed on Mars via sky crane.",
        image: {
          src: "/images/moments/us/curiosity.jpg",
          alt: "Curiosity's self-portrait on Mars",
        },
      },
      "Hurricane Sandy flooded New York. Sandy Hook.",
    ],
  },
  2013: {
    id: "2013",
    events: [
      "Snowden revealed the surveillance state.",
      "The Boston Marathon was bombed.",
    ],
  },
  2015: {
    id: "2015",
    events: [
      {
        text: "Same-sex marriage became legal nationwide.",
        image: {
          src: "/images/moments/us/rainbow-house.jpg",
          alt: "The White House in rainbow colors, June 2015",
        },
      },
      "A Falcon 9 booster landed itself.",
      "Hamilton opened on Broadway.",
    ],
  },
  2016: {
    mentors: [
      {
        name: "Donald Trump",
        photo: "/images/people/donald-trump.jpg",
      },
    ],
    id: "2016",
    events: [
      {
        text: "Elected Donald Trump.",
        image: {
          src: "/images/people/donald-trump.jpg",
          alt: "Donald Trump",
        },
      },
    ],
  },
  2017: {
    id: "2017",
    events: [
      {
        text: "A total solar eclipse crossed the whole country.",
        image: {
          src: "/images/moments/us/eclipse-2017.jpg",
          alt: "The 2017 total solar eclipse",
        },
      },
      "#MeToo changed what could be said out loud.",
    ],
  },
  2018: {
    id: "2018",
    events: [
      {
        text: "Parkland students marched for their lives.",
        image: {
          src: "/images/moments/us/march-lives.jpg",
          alt: "March for Our Lives",
        },
      },
    ],
  },
  2020: {
    mentors: [
      {
        name: "Joe Biden",
        photo: "/images/people/joe-biden.jpg",
      },
    ],
    id: "pandemic",
    events: [
      "The COVID-19 pandemic shut the country down.",
      "George Floyd's murder brought millions to the streets.",
      {
        text: "SpaceX returned human spaceflight to American soil.",
        image: {
          src: "/images/moments/us/crew-dragon.jpg",
          alt: "Falcon 9 launching Crew Dragon Demo-2, May 2020",
        },
      },
      "Elected Joe Biden.",
    ],
  },
  2021: {
    id: "2021",
    events: [
      "January 6 — the Capitol was stormed.",
      {
        text: "Ingenuity flew on Mars, the first powered flight on another world.",
        image: {
          src: "/images/moments/us/ingenuity.jpg",
          alt: "Ingenuity on Mars, photographed by Perseverance",
        },
      },
    ],
  },
  2022: {
    id: "2022",
    events: [
      {
        text: "The Webb telescope opened its eye.",
        image: {
          src: "/images/moments/us/webb.jpg",
          alt: "Webb's First Deep Field",
        },
      },
      "The Supreme Court overturned Roe v. Wade.",
      "ChatGPT launched. The AI era went mainstream.",
    ],
  },
  2024: {
    mentors: [
      {
        name: "Donald Trump",
        photo: "/images/people/donald-trump.jpg",
      },
    ],
    id: "2024",
    events: [
      {
        text: "Another total eclipse crossed the country.",
        image: {
          src: "/images/moments/us/eclipse-2024.jpg",
          alt: "The April 2024 total eclipse",
        },
      },
      {
        text: "Trump survived an assassination attempt in Butler, Pennsylvania.",
        image: {
          src: "/images/moments/us/butler.jpg",
          alt: "Butler, Pennsylvania, July 13, 2024",
        },
      },
      "Elected Donald Trump to a second term.",
    ],
  },
  2026: {
    id: "semiquincentennial",
    events: [
      {
        text: "Turned 250.",
        effect: "fireworks",
      },
      {
        text: "Hosted the FIFA World Cup with Canada and Mexico.",
        image: {
          src: "/images/moments/us/world-cup-2026.jpg",
          alt: "The 2026 FIFA World Cup",
        },
      },
    ],
  },
}

export const unitedStates = defineLifeline({
  slug: "united-states",
  name: "United States",
  birthYear: 1776,
  description:
    "Two hundred and fifty years of the American experiment — from Philadelphia to the Moon.",
  legend: [{ type: "mentor", label: "Presidents" }],
  milestones,
})
