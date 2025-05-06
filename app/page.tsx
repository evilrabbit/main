"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { css, Global } from "@emotion/react"

export default function Home() {
  const currentYear = new Date().getFullYear()
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  const expertise = [
    {
      company: "Vercel",
      role: "Founding Designer, Head of Design",
      period: "2016-",
      hasSvg: true,
    },
    {
      company: "Auth0",
      role: "Product Designer",
      period: "2015-2016",
    },
    {
      company: "Aerolab",
      role: "Product Designer",
      period: "2014-2015",
    },
    {
      company: "Viacom",
      role: "Head of Design (Latin America)",
      period: "2010-2014",
    },
    {
      company: "Identidad",
      role: "Designer",
      period: "2006-2010",
    },
    {
      company: "TSYA",
      role: "Designer",
      period: "2006-2008",
    },
    {
      company: "Freelance",
      role: "Designer",
      period: "1998-2006",
    },
  ]

  const projects = {
    product: [
      {
        year: "2024",
        name: '"Grep" Rebranding',
        type: "group",
        items: [
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-18%20at%203.43.18%E2%80%AFPM-ZJYcI1ffOmIYfTRfI9FHHc1sVvhQXs.png",
          },
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grep-AjN4JvqJsmKYRxpnclwcPP9QonlPff.png",
          },
        ],
      },
      // Removed "Vercel Dashboard" Desktop Design project
      {
        year: "2022",
        name: '"Next.js Conf" Design + Direction',
        type: "group",
        items: [
          {
            type: "video",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NextjsConf1-KIWXmKnFYlD1bt9HDocmnzTTPkz9E3.mp4",
          },
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-0FZE1yxPgKYKUvqdV9CRvfuNOiacBc.png",
          },
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09-UsZCFIlbXjiGEHaY14eYEIeyRhPYGi.png",
          },
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Conf-vector-MSAWjnq65M9HPKuFcDIOFGtNQ0izde.png",
          },
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08-YWCh6HycJ5wgWKuN4f8jL99N1X1nUI.png",
          },
        ],
      },
      {
        year: "2019",
        name: '"Vercel Dashboard" Mobile Design',
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZEIT%20-%20Dashshboard-bGz1ewqQQuHShlT4AI9f9Wo6iOZ3AH.jpeg",
      },
      {
        year: "2018",
        name: '"Now" macOS Desktop App',
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Now-desktop-2D9g3xr25Y5Fh944pZ7BOkTBvoVLZO.png",
      },
      {
        year: "2015",
        name: '"Auth0 Guardian" iOS Mobile App',
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Auth0-ZbTIJW8HpChOc63CAGFk37xZecgT0d.png",
      },
    ],
    branding: [
      {
        year: "2024",
        name: '"Vercel Ship" Creative Direction',
        type: "group",
        items: [
          {
            type: "video",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-B2ZCyfDdcqB3AisTV0UckUzI3u18Nd.mp4",
          },
          {
            type: "video",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ship%202-rehaChte5crqmkj5f0kxTszQSzxB2N.mp4",
          },
          {
            type: "video",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ship3-GtutL3aJroRwYFhZ1g5sur2cvs0vZC.mp4",
          },
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Remera%20Ship%20Style-V1BnZYxnKHowUWWq7Lmp437FCUDQRV.jpeg",
          },
        ],
      },
      {
        year: "2024",
        name: '"Next.js Conf" Creative Direction',
        type: "group",
        items: [
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NextjsConf2024-2-LP6tzL7RqEUcppubIqSgBifU3c6Kas.jpeg",
          },
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nextjs%20Conf%202024-dn7I0lgfKr2OVLupzTvblBQ7m7zewS.jpeg",
          },
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Next.js%20Conf%202024%20award-Pz6Kq6o2jtrIWaR81ckcX1bXgvZmSE.jpeg",
          },
          {
            type: "video",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conf%202024%20website-7IF3dXKHAjrP44rGhLR50tq1Vx0qd8.mp4",
          },
          {
            type: "video",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Next.js%20Lanyard-0WuOpEEyLgupe7YG6Bl1MRAKaMe3Hu.mp4",
          },
        ],
      },
      {
        year: "2024",
        name: '"Everybody can cook" v0 Billboard Campaign. San Francisco, CA.',
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%20-%20Billboard%20-%20Everybody%20can%20cook-4CUsyH8OVzjfeFsCXohwkmNfhSEVID.jpeg",
      },
      {
        year: "2024",
        name: "Evil Rabbit Poster",
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%20-%20Evil%20Rabbit%20Billboard-Z27DVWEHMLVQZB5LuvlxCDvRPoNf7k.jpeg",
      },
      {
        year: "2024",
        name: '"AI Night by Vercel" Branding Design',
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI-Night-d5AzW5k7Tf9PgOa3kFSYgDFBH3pj48.png",
      },
      {
        year: "2024",
        name: '"What will you ship?" Billboard Campaign',
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%20-%20What%20will%20you%20ship%202%20-%20Billboard-CFp5xtVz4Bolnu7oTyeEsDxKJ12G2e.jpeg",
      },
      {
        year: "2023",
        name: '"▲ ~/ npm i ai" Billboard Campaign',
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NPM%20AI%20Campaign-x9MmfQjGZBfFPdU2VbvNzp1kFytyjb.jpeg",
      },
      {
        year: "2023",
        name: '"Geist Font" Creative Direction',
        type: "group",
        items: [
          {
            type: "video",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Geist%20video%202-4eMuQOhEngEAtDcojhQbRxDdoYxz35.mp4",
          },
          {
            type: "video",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Geist%20video-hj28jOp5TIgF2ppf3G57lZZ7yGOgFw.mp4",
          },
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Geist%20Page-WW91iEfa0hWuTQYPGOBvPFjjkCMuH3.png",
          },
        ],
      },
      {
        year: "2019",
        name: '"ZEIT to Vercel" Rebranding',
        type: "video",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-WCk0E0BIzQEV5VZS8678m4xXPTkz8h.mp4",
      },
      {
        year: "2018",
        name: '"MDX" Logotype Design',
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mdx-671NVkYzk112EiESM0wHHlNiKa40Ww.png",
      },
    ],
    physical: [
      {
        year: "2018",
        name: "ZEIT Keyboard (in collab with Rama Works)",
        type: "group",
        items: [
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZEIT%20Keyboard-LYTRpUq0Ngb0rLL1mAXPS4ZwqAX9Vd.jpeg",
          },
          {
            type: "image",
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZEIT%20Keyboatd%202.jpg-Vbf6Wkxs6aQZU15LPvcnnPxvIMQ6uG.jpeg",
          },
        ],
      },
    ],
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index")
            if (index) {
              setVisibleItems((prev) => [...new Set([...prev, index])])
            }
          }
        })
      },
      { rootMargin: "100px" },
    )

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Global
        styles={css`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          ::selection {
            color: black;
            background: white;
          }
          .text-gray-500::selection {
            color: #999;
            background: #333;
          }
          .expertise-item {
            transition: border-color 0.3s ease;
            padding-top: 1rem;
            position: relative;
          }
          .expertise-item::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background-color: white;
            transition: width 0.3s ease-out;
          }
          @media (hover: hover) and (pointer: fine) {
            .expertise-item:focus-within::after,
            .expertise-item:hover::after {
              width: 100%;
            }
            .expertise-item:hover {
              border-color: white;
            }
          }
          .fade-in {
            opacity: 0;
            animation: fadeIn 0.5s ease-out forwards;
          }
          .delay-1 { animation-delay: 0.1s; }
          .delay-2 { animation-delay: 0.2s; }
          .delay-3 { animation-delay: 0.3s; }
          .delay-4 { animation-delay: 0.4s; }
          .delay-5 { animation-delay: 0.5s; }
          .delay-6 { animation-delay: 0.6s; }
          body {
            background-color: black !important;
          }
          html, body {
            background-color: black;
          }

          #__next {
            background-color: black;
          }
          
          .infinity-svg {
            display: inline-flex;
            vertical-align: middle;
            height: 0.73em;
            margin-left: 0;
            position: relative;
            top: 0.06em;
          }
        `}
      />
      <div className="min-h-screen bg-black text-white font-mono text-sm flex flex-col">
        <div className="max-w-[700px] w-full mx-auto px-4 flex-grow">
          <header className="h-[12.5rem] flex items-center fade-in">
            <div className="flex flex-col items-start">
              <svg
                viewBox="0 0 308 320"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[2.88rem] h-[2.88rem]"
                aria-hidden="true"
              >
                <path d="M294.319 4.31153L248.987 43.3362C239.752 51.1954 227.439  65.8303 221.282 76.6706L202.813 108.107C196.657 118.406 183.225 126.807  172.871  127.078C162.518 127.349 144.888 127.349 134.534 127.078C124.18 126.807 110.188 118.135 104.592 108.107L86.1226 76.6706C79.9659 66.3724 67.3738 51.4668 58.419 43.3362L12.8059 4.31153C3.85172 -3.54767 -1.74495 -0.29583 0.493592 11.0866L10.8477 63.3913C13.366 75.045 21.4816 91.5763 29.5965 100.52L62.3366 136.292C70.4522 145.236 74.6496 161.767 71.5712 173.15L70.1725 179.384C67.0941 190.765 65.4144 210.006 66.5346 221.66L67.6536 237.107C68.4928 248.761 74.0901 262.582 79.1273 267.731C84.1638 272.61 91.1598 282.366 93.9585 289.412C97.0369 296.458 106.271 306.486 114.665 312.719C123.061 318.952 135.374 321.662 141.53 318.952C148.245 316.242 158.6 316.242 164.756 318.952C171.192 321.662 183.225 318.681 192.18 312.719C200.855 306.757 210.088 296.188 212.887 289.412C215.966 282.637 222.682 272.61 227.719 267.731C232.756 262.854 238.353 249.032 239.192 237.107L240.311 221.66C241.15 210.006 239.752 190.765 236.673 179.383L235.274 173.149C232.196 161.767 236.114 145.236 244.51 136.292L277.249 100.52C285.365 91.5763 293.76 75.045 295.998 63.3913L306.352 11.0866C309.43 -0.29583 303.834 -3.27631 294.319 4.31153ZM169.513 288.057C164.756 292.665 159.439 301.066 157.76 305.672C155.522 310.28 152.723 310.28 150.764 305.672C148.526 300.795 143.489 292.664 139.571 288.057C134.814 283.45 136.493 281.824 142.929 284.805C149.366 287.786 159.999 287.786 166.155 284.805C172.312 282.095 173.991 283.45 169.513 288.057Z" />
              </svg>
            </div>
          </header>

          <section className="mb-12 fade-in delay-1">
            <p className="mb-4 text-[#666]">
              <span className="text-white">Evil Rabbit</span> is a designer from Buenos Aires, Argentina.
            </p>
            <p className="mb-8 text-[#666]">Based in San Francisco, California.</p>
          </section>

          <section className="mb-12 fade-in delay-2">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-baseline border-b border-[#333] pb-4 expertise-item"
              >
                <div>
                  <h2 className="font-normal">{item.company}</h2>
                  <p className="text-[#666]">{item.role}</p>
                </div>
                <div className="text-[#666] flex items-center whitespace-nowrap">
                  {item.period}
                  {item.hasSvg && (
                    <svg
                      width="17.5"
                      height="7.7"
                      viewBox="0 0 167 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="infinity-svg"
                      aria-label="Present"
                    >
                      <path
                        d="M83.6096 27.5354C90.1929 21.2022 96.5262 15.8272 102.61 11.4104C108.693 6.91053 113.818 3.91053 117.985 2.41043C122.151 0.910535 126.693 0.160536 131.61 0.160425C141.943 0.160536 150.276 3.61887 156.61 10.5354C163.026 17.3689 166.234 25.6605 166.235 35.4104C166.234 42.0772 164.818 48.2438 161.985 53.9104C159.151 59.5771 155.109 63.8688 149.86 66.7854C144.693 69.7021 138.734 71.1605 131.985 71.1604C123.235 71.1605 115.568 69.2855 108.985 65.5354C102.485 61.7855 94.0262 54.7021 83.6096 44.2854C72.7762 55.0355 64.1512 62.2021 57.7346 65.7854C51.3179 69.3688 43.8596 71.1605 35.3596 71.1604C24.5263 71.1605 16.068 67.7855 9.98465 61.0354C3.98464 54.2855 0.984642 45.7438 0.98465 35.4104C0.984642 25.7438 4.1513 17.4522 10.4846 10.5354C16.9013 3.61887 25.2763 0.160536 35.6096 0.160425C40.6096 0.160536 45.1929 0.910535 49.3596 2.41043C53.5263 3.91053 58.6096 6.91053 64.6096 11.4104C70.6929 15.8272 77.0262 21.2022 83.6096 27.5354ZM91.7346 35.2854C100.568 44.0355 107.818 49.9938 113.485 53.1604C119.235 56.2438 124.943 57.7855 130.61 57.7854C137.693 57.7855 143.234 55.7021 147.235 51.5354C151.234 47.2855 153.234 42.1605 153.235 36.1604C153.234 29.5772 151.234 24.1605 147.235 19.9104C143.318 15.5772 138.109 13.4105 131.61 13.4104C127.943 13.4105 124.401 14.0772 120.985 15.4104C117.568 16.6605 113.485 18.9105 108.735 22.1604C103.985 25.3272 98.3179 29.7022 91.7346 35.2854ZM75.4846 35.2854C69.4846 30.2022 64.1096 26.0355 59.3596 22.7854C54.6096 19.4522 50.4429 17.0772 46.8596 15.6604C43.2763 14.2439 39.3596 13.5355 35.1096 13.5354C29.0263 13.5355 23.9846 15.6605 19.9846 19.9104C15.9846 24.1605 13.9846 29.5772 13.9846 36.1604C13.9846 40.7438 15.0263 44.6188 17.1096 47.7854C19.193 50.9522 21.7346 53.4105 24.7346 55.1604C27.8179 56.9105 31.6513 57.7855 36.2346 57.7854C42.2346 57.7855 48.0679 56.2021 53.7346 53.0354C59.4012 49.8688 66.6512 43.9522 75.4846 35.2854Z"
                        fill="#666666"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </section>

          <section className="mb-12 fade-in delay-3">
            <h2 className="text-sm font-bold mb-4">Awards</h2>
            <div className="flex justify-between items-baseline border-b border-[#333] pb-4 expertise-item">
              <div>
                <h3 className="font-normal">Next.js Conf</h3>
                <p className="text-[#666]">Site of the Day | Developer Award</p>
              </div>
              <Link href="https://www.awwwards.com/sites/next-js-conf-1" className="text-[#666] hover:text-white">
                Sep 16, 2024
              </Link>
            </div>
          </section>

          <section className="mb-12 fade-in delay-4">
            <h2 className="text-sm font-bold mb-4">Featured</h2>
            <div className="mb-4">
              <p>
                <span className="text-[#666]">2024</span>
                <span className="text-[#666] mx-[2px]">—</span>
                <span>Highlighted in "The Book Of Design" by The Network + Framer</span>
              </p>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Book%20of%20Design-jqoANW3Z76lqpdFismnllxX3Bd9vw4.jpeg"
                alt="The Book Of Design"
                width={700}
                height={400}
                className="w-full h-auto rounded-lg outline outline-1 outline-[#333] mt-4"
              />
            </div>
          </section>

          <hr className="border-t border-[#333] my-12" />

          <main className="fade-in delay-5 mt-0">
            {Object.entries(projects).map(([category, items], categoryIndex) => (
              <div key={category} className="mb-16">
                <h3 className="text-sm font-bold mb-8 capitalize">{category}</h3>
                {items.map((item, index) => (
                  <div key={index} className="mb-24" data-index={`${categoryIndex}-${index}`}>
                    {visibleItems.includes(`${categoryIndex}-${index}`) && (
                      <>
                        <p className="mb-4">
                          <span className="text-[#666]">{item.year}</span>
                          <span className="text-[#666] mx-1">—</span>
                          <span>{item.name === '"Grep" Rebranding' ? '"Grep" Rebranding Direction' : item.name}</span>
                        </p>
                        {item.type === "video" && (
                          <video
                            src={item.src}
                            className="w-full h-auto rounded-lg outline outline-1 outline-[#333]"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            Your browser does not support the video tag.
                          </video>
                        )}
                        {item.type === "image" && (
                          <Image
                            src={item.src || "/placeholder.svg"}
                            alt={item.name}
                            width={700}
                            height={400}
                            className="w-full h-auto rounded-lg outline outline-1 outline-[#333]"
                          />
                        )}
                        {item.type === "group" && (
                          <div className="space-y-4">
                            {item.items.map((groupItem, groupIndex) => (
                              <div key={groupIndex} className="mb-4">
                                {groupItem.type === "video" ? (
                                  <video
                                    src={groupItem.src}
                                    className="w-full h-auto rounded-lg outline outline-1 outline-[#333]"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                  >
                                    Your browser does not support the video tag.
                                  </video>
                                ) : (
                                  <Image
                                    src={groupItem.src || "/placeholder.svg"}
                                    alt={item.name}
                                    width={700}
                                    height={400}
                                    className="w-full h-auto rounded-lg outline outline-1 outline-[#333]"
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </main>

          <section className="mb-12 fade-in delay-6">
            <h2 className="text-sm font-bold mb-4">Angel Investor</h2>
            <p className="mb-4 text-[#666]">
              Invests in early stage startups focused on creating tools for designers and developers.
            </p>
            <ul className="space-y-2 mb-12">
              <li>
                <Link href="https://codecrafters.io/" className="hover:text-gray-300">
                  CodeCrafters
                </Link>
              </li>
              <li>
                <Link href="https://langbase.com/" className="hover:text-gray-300">
                  Langbase
                </Link>
              </li>
              <li>
                <Link href="https://onboardbase.com/" className="hover:text-gray-300">
                  Onboardbase
                </Link>
              </li>
              <li>
                <Link href="https://paper.design/" className="hover:text-gray-300">
                  Paper by Lost Coast
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <footer className="w-full border-t border-[#333] mt-8 h-[12.5rem] fade-in delay-6">
          <div className="max-w-[700px] w-full mx-auto px-4 h-full flex justify-between items-center">
            <div className="flex space-x-8">
              <Link href="https://twitter.com/evilrabbit_" className="hover:text-gray-300">
                𝕏
              </Link>
              <Link href="https://dribbble.com/evilrabbit" className="hover:text-gray-300">
                Dribbble
              </Link>
              <Link href="https://github.com/evilrabbit" className="hover:text-gray-300">
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/evilrabbit/" className="hover:text-gray-300">
                LinkedIn
              </Link>
            </div>
            <div className="text-[#666]">© {currentYear}</div>
          </div>
        </footer>
      </div>
    </>
  )
}
