import { defineLifeline, type LifelineMilestones } from "./build"

const milestones: LifelineMilestones = {
  1776: {
    id: "born",
    events: [
      "Declared independence in Philadelphia on July 4.",
      "Washington crossed the Delaware on Christmas night.",
    ],
  },
  1777: {
    id: "saratoga",
    events: [
      "Congress adopted the Stars and Stripes.",
      "Victory at Saratoga turned the war.",
      "Winter at Valley Forge.",
    ],
  },
  1778: {
    id: "french-alliance",
    events: ["France joined the war as an ally."],
  },
  1781: {
    id: "yorktown",
    events: [
      "Cornwallis surrendered at Yorktown.",
      "The Articles of Confederation took effect.",
    ],
  },
  1783: {
    id: "treaty-of-paris",
    events: ["The Treaty of Paris ended the war. Britain recognized independence."],
  },
  1786: {
    id: "shays",
    events: ["Shays' Rebellion exposed the weakness of the Confederation."],
  },
  1787: {
    id: "constitution",
    events: [
      "The Constitution was written in Philadelphia.",
      "The Northwest Ordinance charted the frontier.",
      "The Federalist Papers began appearing in New York.",
    ],
  },
  1788: {
    id: "ratified",
    events: ["The Constitution was ratified."],
  },
  1789: {
    id: "washington",
    events: [
      "George Washington became the first President.",
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
      "The Bill of Rights was ratified.",
      "Hamilton's Bank of the United States opened.",
    ],
  },
  1792: {
    id: "buttonwood",
    events: [
      "Traders signed the Buttonwood Agreement — the New York Stock Exchange.",
      "The White House cornerstone was laid.",
    ],
  },
  1793: {
    id: "cotton-gin",
    events: ["Eli Whitney invented the cotton gin."],
  },
  1794: {
    id: "whiskey",
    events: ["The Whiskey Rebellion tested federal power."],
  },
  1796: {
    id: "farewell",
    events: ["Washington's Farewell Address warned against faction and entanglement."],
  },
  1797: {
    id: "adams",
    events: ["John Adams became the second President."],
  },
  1800: {
    id: "dc",
    events: ["The capital moved to Washington, D.C."],
  },
  1801: {
    id: "jefferson",
    events: ["Thomas Jefferson became President after a tie thrown to the House."],
  },
  1803: {
    id: "louisiana",
    events: [
      "The Louisiana Purchase doubled the country overnight.",
      "Marbury v. Madison established judicial review.",
    ],
  },
  1804: {
    id: "lewis-clark",
    events: [
      "Lewis and Clark set out for the Pacific.",
      "Aaron Burr killed Alexander Hamilton in a duel.",
    ],
  },
  1805: {
    id: "pacific",
    events: ["Lewis and Clark reached the Pacific Ocean."],
  },
  1807: {
    id: "steamboat",
    events: ["Fulton's steamboat ran the Hudson."],
  },
  1808: {
    id: "slave-trade",
    events: ["The importation of enslaved people was banned."],
  },
  1812: {
    id: "war-of-1812",
    events: ["Went to war with Britain again."],
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
    events: ["Jackson won the Battle of New Orleans."],
  },
  1817: {
    id: "erie-begun",
    events: ["Construction began on the Erie Canal."],
  },
  1819: {
    id: "florida",
    events: ["Spain ceded Florida."],
  },
  1820: {
    id: "missouri",
    events: ["The Missouri Compromise drew a line through the country."],
  },
  1823: {
    id: "monroe",
    events: ["The Monroe Doctrine warned Europe off the hemisphere."],
  },
  1825: {
    id: "erie-opened",
    events: ["The Erie Canal opened the West."],
  },
  1828: {
    id: "jackson",
    events: [
      "Andrew Jackson was elected.",
      "Work began on the Baltimore & Ohio, the first American railroad.",
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
      "Garrison founded The Liberator.",
    ],
  },
  1836: {
    id: "alamo",
    events: [
      "The Alamo fell.",
      "Texas won independence at San Jacinto.",
    ],
  },
  1837: {
    id: "panic-1837",
    events: ["The Panic of 1837 brought depression."],
  },
  1838: {
    id: "trail-of-tears",
    events: ["The Trail of Tears — the forced removal of the Cherokee Nation."],
  },
  1841: {
    id: "oregon-trail",
    events: ["Wagon trains rolled west on the Oregon Trail."],
  },
  1844: {
    id: "telegraph",
    events: ["Morse tapped “What hath God wrought” from Washington to Baltimore."],
  },
  1845: {
    id: "texas",
    events: [
      "Texas joined the Union.",
      "“Manifest Destiny” entered the language.",
    ],
  },
  1846: {
    id: "mexican-war",
    events: [
      "War with Mexico began.",
      "The Oregon Treaty set the border at the 49th parallel.",
      "The Smithsonian was founded.",
    ],
  },
  1848: {
    id: "1848",
    events: [
      "The Treaty of Guadalupe Hidalgo delivered the Southwest.",
      "Gold was discovered at Sutter's Mill.",
      "Seneca Falls demanded the vote for women.",
    ],
  },
  1849: {
    id: "gold-rush",
    events: ["The Forty-Niners rushed for California."],
  },
  1850: {
    id: "1850",
    events: [
      "The Compromise of 1850 delayed the reckoning.",
      "California became a state.",
    ],
  },
  1851: {
    id: "moby-dick",
    events: ["Melville published Moby-Dick."],
  },
  1852: {
    id: "uncle-tom",
    events: ["Uncle Tom's Cabin set the country arguing."],
  },
  1854: {
    id: "kansas-nebraska",
    events: [
      "The Kansas-Nebraska Act reopened the wound.",
      "The Republican Party was founded.",
    ],
  },
  1857: {
    id: "dred-scott",
    events: ["Dred Scott — the Supreme Court's worst decision."],
  },
  1858: {
    id: "lincoln-douglas",
    events: ["Lincoln debated Douglas across Illinois."],
  },
  1859: {
    id: "1859",
    events: [
      "John Brown raided Harpers Ferry.",
      "The first oil well was drilled in Titusville, Pennsylvania.",
    ],
  },
  1860: {
    id: "lincoln-elected",
    events: [
      "Abraham Lincoln was elected. South Carolina seceded.",
      "The Pony Express began its run.",
    ],
  },
  1861: {
    id: "civil-war",
    events: [
      "Fort Sumter. The Civil War began.",
      "The transcontinental telegraph killed the Pony Express.",
    ],
  },
  1862: {
    id: "1862",
    events: [
      "Antietam — the bloodiest day in American history.",
      "The Homestead Act gave the frontier away.",
    ],
  },
  1863: {
    id: "gettysburg",
    events: [
      "The Emancipation Proclamation took effect.",
      "Gettysburg. Four months later, the Gettysburg Address.",
    ],
  },
  1864: {
    id: "sherman",
    events: ["Sherman marched to the sea."],
  },
  1865: {
    id: "civil-war-ends",
    events: [
      "Lee surrendered at Appomattox.",
      "Lincoln was assassinated at Ford's Theatre.",
      "The 13th Amendment abolished slavery.",
    ],
  },
  1866: {
    id: "atlantic-cable",
    events: ["The transatlantic cable connected America to Europe."],
  },
  1867: {
    id: "alaska",
    events: ["Bought Alaska from Russia — “Seward's Folly.”"],
  },
  1868: {
    id: "fourteenth",
    events: [
      "The 14th Amendment promised equal protection.",
      "President Johnson was impeached and acquitted.",
    ],
  },
  1869: {
    id: "railroad",
    events: [
      "The transcontinental railroad met at Promontory Summit.",
      "Wyoming gave women the vote.",
    ],
  },
  1870: {
    id: "fifteenth",
    events: [
      "The 15th Amendment barred racial tests at the ballot.",
      "Rockefeller founded Standard Oil.",
    ],
  },
  1871: {
    id: "chicago-fire",
    events: ["The Great Chicago Fire."],
  },
  1872: {
    id: "yellowstone",
    events: ["Yellowstone became the world's first national park."],
  },
  1873: {
    id: "panic-1873",
    events: ["The Panic of 1873."],
  },
  1876: {
    id: "centennial",
    events: [
      "Turned 100.",
      "Bell patented the telephone.",
      "Custer fell at Little Bighorn.",
      "Baseball's National League was founded.",
    ],
  },
  1877: {
    id: "1877",
    events: [
      "Reconstruction ended in a deal.",
      "Edison invented the phonograph.",
    ],
  },
  1879: {
    id: "light-bulb",
    events: ["Edison lit the first practical light bulb."],
  },
  1881: {
    id: "1881",
    events: [
      "President Garfield was assassinated.",
      "Clara Barton founded the Red Cross.",
      "Booker T. Washington opened Tuskegee.",
    ],
  },
  1882: {
    id: "1882",
    events: [
      "The Chinese Exclusion Act closed the door.",
      "Edison's Pearl Street station powered Manhattan.",
    ],
  },
  1883: {
    id: "1883",
    events: [
      "The Brooklyn Bridge opened.",
      "The railroads invented standard time.",
    ],
  },
  1886: {
    id: "liberty",
    events: [
      "The Statue of Liberty was dedicated in New York Harbor.",
      "Haymarket. The AFL was founded.",
      "A pharmacist in Atlanta invented Coca-Cola.",
    ],
  },
  1888: {
    id: "kodak",
    events: ["The Kodak camera: “You press the button, we do the rest.”"],
  },
  1889: {
    id: "1889",
    events: [
      "The Oklahoma Land Rush.",
      "The Johnstown Flood killed more than two thousand.",
    ],
  },
  1890: {
    id: "1890",
    events: [
      "Wounded Knee.",
      "The Sherman Antitrust Act took aim at the trusts.",
    ],
  },
  1891: {
    id: "basketball",
    events: ["James Naismith nailed up two peach baskets — basketball."],
  },
  1892: {
    id: "ellis-island",
    events: ["Ellis Island opened its doors."],
  },
  1893: {
    id: "1893",
    events: [
      "The World's Columbian Exposition dazzled Chicago.",
      "The Panic of 1893.",
    ],
  },
  1896: {
    id: "plessy",
    events: ["Plessy v. Ferguson blessed “separate but equal.”"],
  },
  1898: {
    id: "1898",
    events: [
      "The Spanish-American War. “Remember the Maine.”",
      "Hawaii was annexed.",
    ],
  },
  1901: {
    id: "1901",
    events: [
      "McKinley was assassinated. Theodore Roosevelt took over at 42.",
      "U.S. Steel became the first billion-dollar company.",
    ],
  },
  1903: {
    id: "kitty-hawk",
    events: [
      "The Wright brothers flew at Kitty Hawk. Twelve seconds.",
      "Ford Motor Company was founded.",
      "The first World Series was played.",
    ],
  },
  1904: {
    id: "subway",
    events: ["The New York City subway opened."],
  },
  1906: {
    id: "sf-earthquake",
    events: ["The San Francisco earthquake and fire."],
  },
  1908: {
    id: "model-t",
    events: ["Ford's Model T put the country on wheels."],
  },
  1909: {
    id: "naacp",
    events: ["The NAACP was founded."],
  },
  1911: {
    id: "1911",
    events: [
      "The Triangle Shirtwaist fire killed 146 garment workers.",
      "Standard Oil was broken up.",
    ],
  },
  1912: {
    id: "1912",
    events: [
      "Arizona completed the lower 48.",
      "The Titanic sank en route to New York.",
    ],
  },
  1913: {
    id: "1913",
    events: [
      "The Federal Reserve was created.",
      "The income tax arrived with the 16th Amendment.",
      "Ford's moving assembly line cut a car to 93 minutes.",
    ],
  },
  1914: {
    id: "panama",
    events: ["The Panama Canal opened."],
  },
  1915: {
    id: "1915",
    events: [
      "A German U-boat sank the Lusitania.",
      "The first transcontinental phone call: New York to San Francisco.",
    ],
  },
  1917: {
    id: "wwi",
    events: ["Entered World War I."],
  },
  1918: {
    id: "1918",
    events: [
      "The influenza pandemic killed hundreds of thousands at home.",
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
      "Women won the vote with the 19th Amendment.",
      "KDKA in Pittsburgh made the first commercial radio broadcast.",
    ],
  },
  1924: {
    id: "citizenship",
    events: ["Native Americans were granted citizenship."],
  },
  1925: {
    id: "1925",
    events: [
      "The Scopes trial put evolution in the dock.",
      "Fitzgerald published The Great Gatsby.",
    ],
  },
  1927: {
    id: "1927",
    events: [
      "Lindbergh flew the Atlantic alone.",
      "The Jazz Singer — the movies learned to talk.",
      "Babe Ruth hit sixty home runs.",
    ],
  },
  1928: {
    id: "mickey",
    events: ["Mickey Mouse debuted in Steamboat Willie."],
  },
  1929: {
    id: "crash",
    events: ["The stock market crashed. The Great Depression began."],
  },
  1931: {
    id: "1931",
    events: [
      "The Empire State Building rose in 410 days.",
      "The Star-Spangled Banner became the national anthem.",
    ],
  },
  1932: {
    id: "1932",
    events: [
      "Franklin Roosevelt was elected in a landslide.",
      "Amelia Earhart flew the Atlantic solo.",
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
      "Hoover Dam held back the Colorado.",
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
      "Orson Welles panicked the nation with War of the Worlds.",
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
      "Pearl Harbor. Entered World War II.",
      "Mount Rushmore was completed.",
    ],
  },
  1942: {
    id: "1942",
    events: [
      "Japanese Americans were interned by executive order.",
      "The Manhattan Project began.",
      "Midway turned the Pacific war.",
    ],
  },
  1944: {
    id: "1944",
    events: [
      "D-Day. Omaha Beach.",
      "The GI Bill was signed.",
      "Bretton Woods made the dollar the world's anchor.",
    ],
  },
  1945: {
    id: "wwii-ends",
    events: [
      "Trinity, Hiroshima, Nagasaki. The atomic age began.",
      "World War II ended.",
      "The United Nations was founded in San Francisco.",
    ],
  },
  1947: {
    id: "1947",
    events: [
      "The transistor was invented at Bell Labs.",
      "Jackie Robinson broke the color line.",
      "The Cold War began.",
    ],
  },
  1948: {
    id: "1948",
    events: [
      "The Marshall Plan rebuilt Europe.",
      "The Berlin Airlift began.",
    ],
  },
  1949: {
    id: "nato",
    events: ["NATO was founded."],
  },
  1950: {
    id: "korea",
    events: ["The Korean War began."],
  },
  1951: {
    id: "tv",
    events: ["Television went coast to coast. I Love Lucy debuted."],
  },
  1952: {
    id: "h-bomb",
    events: ["The first hydrogen bomb erased an island."],
  },
  1953: {
    id: "korea-armistice",
    events: ["The Korean armistice was signed."],
  },
  1954: {
    id: "brown",
    events: [
      "Brown v. Board of Education struck down school segregation.",
      "The Nautilus, the first nuclear submarine, was launched.",
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
      "Elvis appeared on Ed Sullivan.",
    ],
  },
  1957: {
    id: "1957",
    events: [
      "The Little Rock Nine walked into Central High.",
      "Sputnik shocked the country skyward.",
    ],
  },
  1958: {
    id: "1958",
    events: [
      "Founded NASA.",
      "The integrated circuit was invented.",
    ],
  },
  1959: {
    id: "statehood",
    events: ["Alaska and Hawaii made it fifty stars."],
  },
  1960: {
    id: "1960",
    events: [
      "Four students sat down at a Greensboro lunch counter.",
      "Kennedy and Nixon debated on live television.",
    ],
  },
  1961: {
    id: "1961",
    events: [
      "Alan Shepard became the first American in space.",
      "The Freedom Riders rode south.",
      "The Bay of Pigs failed.",
    ],
  },
  1962: {
    id: "1962",
    events: [
      "John Glenn orbited the Earth.",
      "The Cuban Missile Crisis — thirteen days at the edge.",
    ],
  },
  1963: {
    id: "1963",
    events: [
      "Martin Luther King Jr. dreamed aloud at the Lincoln Memorial.",
      "President Kennedy was assassinated in Dallas.",
    ],
  },
  1964: {
    id: "1964",
    events: [
      "The Civil Rights Act became law.",
      "The Beatles landed at JFK.",
      "The Gulf of Tonkin resolution opened the door to Vietnam.",
    ],
  },
  1965: {
    id: "1965",
    events: [
      "Selma. The Voting Rights Act became law.",
      "Medicare and Medicaid were created.",
      "Combat troops landed in Vietnam.",
    ],
  },
  1967: {
    id: "1967",
    events: [
      "The Summer of Love bloomed in San Francisco.",
      "Thurgood Marshall joined the Supreme Court.",
      "The first Super Bowl was played.",
    ],
  },
  1968: {
    id: "1968",
    events: [
      "Martin Luther King Jr. was assassinated in Memphis.",
      "Robert Kennedy was assassinated in Los Angeles.",
      "Apollo 8 read Genesis from lunar orbit.",
    ],
  },
  1969: {
    id: "moon",
    events: [
      "Apollo 11. Armstrong and Aldrin walked on the Moon.",
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
      "Intel shipped the 4004, the first microprocessor.",
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
      "Viking 1 landed on Mars.",
    ],
  },
  1977: {
    id: "1977",
    events: [
      "Star Wars opened.",
      "The Apple II shipped.",
      "The Voyagers left for the stars.",
      "Elvis died.",
    ],
  },
  1979: {
    id: "1979",
    events: [
      "Three Mile Island melted down.",
      "Fifty-two Americans were taken hostage in Tehran.",
      "ESPN signed on.",
    ],
  },
  1980: {
    id: "1980",
    events: [
      "The Miracle on Ice.",
      "Mount St. Helens erupted.",
      "CNN invented 24-hour news.",
      "Ronald Reagan was elected.",
    ],
  },
  1981: {
    id: "1981",
    events: [
      "The Space Shuttle Columbia flew.",
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
      "Sally Ride became the first American woman in space.",
    ],
  },
  1984: {
    id: "1984",
    events: [
      "The Macintosh said hello.",
      "Los Angeles hosted the Olympics.",
    ],
  },
  1986: {
    id: "challenger",
    events: ["Challenger broke apart 73 seconds after launch."],
  },
  1987: {
    id: "1987",
    events: [
      "“Mr. Gorbachev, tear down this wall.”",
      "Black Monday dropped the Dow 22% in a day.",
    ],
  },
  1989: {
    id: "1989",
    events: [
      "The Berlin Wall fell.",
      "The Exxon Valdez spilled into Prince William Sound.",
      "The Loma Prieta earthquake stopped the World Series.",
    ],
  },
  1990: {
    id: "1990",
    events: [
      "The Hubble Space Telescope launched.",
      "The Americans with Disabilities Act became law.",
    ],
  },
  1991: {
    id: "cold-war",
    events: [
      "Desert Storm liberated Kuwait in a hundred hours.",
      "The Soviet Union dissolved. The Cold War ended.",
    ],
  },
  1992: {
    id: "1992",
    events: [
      "Los Angeles burned after the Rodney King verdict.",
      "Bill Clinton was elected.",
    ],
  },
  1993: {
    id: "1993",
    events: [
      "Mosaic put a face on the web.",
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
      "Oklahoma City.",
      "Windows 95 launched with the Rolling Stones.",
      "Toy Story — the first fully computer-animated film.",
      "eBay opened for bids.",
    ],
  },
  1997: {
    id: "1997",
    events: [
      "Pathfinder put a rover on Mars.",
      "Steve Jobs returned to Apple.",
    ],
  },
  1998: {
    id: "1998",
    events: [
      "Google was founded in a Menlo Park garage.",
      "President Clinton was impeached and acquitted.",
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
    id: "september-11",
    events: [
      "September 11.",
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
    events: ["Facebook launched from a Harvard dorm."],
  },
  2005: {
    id: "2005",
    events: [
      "Hurricane Katrina drowned New Orleans.",
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
      "The iPhone was introduced in San Francisco.",
      "Netflix started streaming.",
    ],
  },
  2008: {
    id: "obama",
    events: [
      "The financial crisis brought the economy to its knees.",
      "Elected Barack Obama, the first Black president.",
    ],
  },
  2009: {
    id: "hudson",
    events: ["Captain Sullenberger landed on the Hudson."],
  },
  2010: {
    id: "2010",
    events: [
      "The Affordable Care Act became law.",
      "Deepwater Horizon spilled into the Gulf.",
      "Instagram posted its first photo.",
    ],
  },
  2011: {
    id: "2011",
    events: [
      "Osama bin Laden was killed.",
      "The Space Shuttle flew its last mission.",
      "Steve Jobs died.",
    ],
  },
  2012: {
    id: "2012",
    events: [
      "Curiosity landed on Mars via sky crane.",
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
      "Same-sex marriage became legal nationwide.",
      "A Falcon 9 booster landed itself.",
      "Hamilton opened on Broadway.",
    ],
  },
  2016: {
    id: "2016",
    events: ["Elected Donald Trump."],
  },
  2017: {
    id: "2017",
    events: [
      "A total solar eclipse crossed the whole country.",
      "#MeToo changed what could be said out loud.",
    ],
  },
  2018: {
    id: "2018",
    events: ["Parkland students marched for their lives."],
  },
  2020: {
    id: "pandemic",
    events: [
      "The COVID-19 pandemic shut the country down.",
      "George Floyd's murder brought millions to the streets.",
      "SpaceX returned human spaceflight to American soil.",
      "Elected Joe Biden.",
    ],
  },
  2021: {
    id: "2021",
    events: [
      "January 6 — the Capitol was stormed.",
      "Ingenuity flew on Mars, the first powered flight on another world.",
    ],
  },
  2022: {
    id: "2022",
    events: [
      "The Webb telescope opened its eye.",
      "The Supreme Court overturned Roe v. Wade.",
      "ChatGPT launched. The AI era went mainstream.",
    ],
  },
  2024: {
    id: "2024",
    events: [
      "Another total eclipse crossed the country.",
      "Elected Donald Trump to a second term.",
    ],
  },
  2026: {
    id: "semiquincentennial",
    events: [
      "Turned 250.",
      "Hosted the FIFA World Cup with Canada and Mexico.",
    ],
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
