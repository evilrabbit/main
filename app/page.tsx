"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ProjectMedia } from "@/components/project-media"
import { RabbitLogo } from "@/components/rabbit-logo"
import { SiteNav } from "@/components/site-nav"
import { expertise, investments, projects } from "@/lib/data"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="section-label mb-8">{children}</h2>
}

function InfinityMark() {
  return (
    <svg
      width="17.5"
      height="7.7"
      viewBox="0 0 167 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1 inline-block align-middle"
      aria-label="Present"
    >
      <path
        d="M83.6096 27.5354C90.1929 21.2022 96.5262 15.8272 102.61 11.4104C108.693 6.91053 113.818 3.91053 117.985 2.41043C122.151 0.910535 126.693 0.160536 131.61 0.160425C141.943 0.160536 150.276 3.61887 156.61 10.5354C163.026 17.3689 166.234 25.6605 166.235 35.4104C166.234 42.0772 164.818 48.2438 161.985 53.9104C159.151 59.5771 155.109 63.8688 149.86 66.7854C144.693 69.7021 138.734 71.1605 131.985 71.1604C123.235 71.1605 115.568 69.2855 108.985 65.5354C102.485 61.7855 94.0262 54.7021 83.6096 44.2854C72.7762 55.0355 64.1512 62.2021 57.7346 65.7854C51.3179 69.3688 43.8596 71.1605 35.3596 71.1604C24.5263 71.1605 16.068 67.7855 9.98465 61.0354C3.98464 54.2855 0.984642 45.7438 0.98465 35.4104C0.984642 25.7438 4.1513 17.4522 10.4846 10.5354C16.9013 3.61887 25.2763 0.160536 35.6096 0.160425C40.6096 0.160536 45.1929 0.910535 49.3596 2.41043C53.5263 3.91053 58.6096 6.91053 64.6096 11.4104C70.6929 15.8272 77.0262 21.2022 83.6096 27.5354ZM91.7346 35.2854C100.568 44.0355 107.818 49.9938 113.485 53.1604C119.235 56.2438 124.943 57.7855 130.61 57.7854C137.693 57.7855 143.234 55.7021 147.235 51.5354C151.234 47.2855 153.234 42.1605 153.235 36.1604C153.234 29.5772 151.234 24.1605 147.235 19.9104C143.318 15.5772 138.109 13.4105 131.61 13.4104C127.943 13.4105 124.401 14.0772 120.985 15.4104C117.568 16.6605 113.485 18.9105 108.735 22.1604C103.985 25.3272 98.3179 29.7022 91.7346 35.2854ZM75.4846 35.2854C69.4846 30.2022 64.1096 26.0355 59.3596 22.7854C54.6096 19.4522 50.4429 17.0772 46.8596 15.6604C43.2763 14.2439 39.3596 13.5355 35.1096 13.5354C29.0263 13.5355 23.9846 15.6605 19.9846 19.9104C15.9846 24.1605 13.9846 29.5772 13.9846 36.1604C13.9846 40.7438 15.0263 44.6188 17.1096 47.7854C19.193 50.9522 21.7346 53.4105 24.7346 55.1604C27.8179 56.9105 31.6513 57.7855 36.2346 57.7854C42.2346 57.7855 48.0679 56.2021 53.7346 53.0354C59.4012 49.8688 66.6512 43.9522 75.4846 35.2854Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Home() {
  const currentYear = new Date().getFullYear()
  const [visibleItems, setVisibleItems] = useState<string[]>([])

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
      { rootMargin: "120px" },
    )

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav />

      <main className="mx-auto max-w-5xl px-6">
        <section className="flex min-h-[92vh] flex-col justify-end pb-20 pt-32">
          <div className="fade-up mb-10">
            <RabbitLogo className="mb-8 h-12 w-12 text-white" />
          </div>

          <div className="fade-up fade-up-delay-1 max-w-3xl">
            <h1 className="text-balance text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em]">
              I design the visual language of the web&apos;s most ambitious tools.
            </h1>
            <p className="text-balance mt-6 max-w-2xl text-[clamp(1.125rem,2.5vw,1.5rem)] leading-snug tracking-[-0.02em] text-zinc-400">
              Founding designer at Vercel — shaping brand, product, and type for the people who ship.
            </p>
          </div>

          <p className="fade-up fade-up-delay-2 mt-12 text-sm text-zinc-500">
            Buenos Aires → San Francisco
          </p>
        </section>

        <section id="about" className="border-t border-white/10 py-24">
          <SectionHeading>About</SectionHeading>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
              <p className="text-balance text-2xl font-medium tracking-[-0.03em] text-white">
                Evil Rabbit is Nicolás Garro — a designer obsessed with craft, restraint, and making complex tools feel inevitable.
              </p>
              <p>
                Born in Buenos Aires and based in San Francisco, I&apos;ve spent nearly three decades designing products and brands — from broadcast and early freelance work to Auth0, and since 2016, Vercel from its ZEIT days to today.
              </p>
              <p>
                My work spans product design, creative direction, typography, and physical objects. I co-directed Geist, the type family at the center of Vercel&apos;s identity, and led the visual systems behind Next.js Conf, Ship, and the ▲ brand itself.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <p className="section-label mb-4">Focus</p>
                <ul className="space-y-3 text-[15px] text-zinc-300">
                  <li>Brand architecture &amp; design systems</li>
                  <li>Product design for developer tools</li>
                  <li>Creative direction &amp; campaigns</li>
                  <li>Typography &amp; visual identity</li>
                </ul>
              </div>

              <div>
                <p className="section-label mb-4">Also</p>
                <p className="text-[15px] leading-relaxed text-zinc-400">
                  Angel investor in early-stage startups building tools for designers and developers — including Ato, CodeCrafters, Langbase, Paper, and Puma Browser.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-white/10 py-24">
          <SectionHeading>Experience</SectionHeading>

          <div className="divide-y divide-white/10">
            {expertise.map((item) => (
              <div
                key={item.company}
                className="group grid gap-2 py-6 transition-colors sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                <div>
                  <h3 className="text-base font-medium text-white transition-colors group-hover:text-zinc-200">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">{item.role}</p>
                </div>
                <p className="text-sm text-zinc-500">
                  {item.period}
                  {item.current && <InfinityMark />}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-t border-white/10 py-24">
          <SectionHeading>Selected Work</SectionHeading>

          {Object.entries(projects).map(([category, items], categoryIndex) => (
            <div key={category} className="mb-20 last:mb-0">
              <h3 className="mb-10 text-sm font-medium capitalize text-zinc-400">{category}</h3>

              <div className="space-y-20">
                {items.map((item, index) => {
                  const itemKey = `${categoryIndex}-${index}`
                  const isVisible = visibleItems.includes(itemKey)

                  return (
                    <article key={itemKey} data-index={itemKey} className="min-h-[1px]">
                      {isVisible && (
                        <>
                          <header className="mb-5">
                            <p className="text-[15px] leading-relaxed">
                              <span className="text-zinc-500">{item.year}</span>
                              <span className="mx-2 text-zinc-600">—</span>
                              <span>{item.name}</span>
                            </p>
                            {item.collaboration && (
                              <p className="mt-1 text-sm text-zinc-500">
                                with{" "}
                                {item.collaboration.collaborators.map((collaborator, i) => (
                                  <span key={collaborator.name}>
                                    {collaborator.url ? (
                                      <Link
                                        href={collaborator.url}
                                        className="transition-colors hover:text-white"
                                      >
                                        {collaborator.name}
                                      </Link>
                                    ) : (
                                      collaborator.name
                                    )}
                                    {i < item.collaboration!.collaborators.length - 1 && ", "}
                                  </span>
                                ))}
                              </p>
                            )}
                          </header>
                          <ProjectMedia item={item} />
                        </>
                      )}
                    </article>
                  )
                })}
              </div>
            </div>
          ))}
        </section>

        <section className="border-t border-white/10 py-24">
          <SectionHeading>Recognition</SectionHeading>

          <div className="space-y-10">
            <div className="flex flex-col justify-between gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-medium">Next.js Conf</h3>
                <p className="mt-1 text-sm text-zinc-500">Site of the Day · Developer Award</p>
              </div>
              <Link
                href="https://www.awwwards.com/sites/next-js-conf-1"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                Sep 16, 2024
              </Link>
            </div>

            <div>
              <p className="mb-4 text-[15px]">
                <span className="text-zinc-500">2024</span>
                <span className="mx-2 text-zinc-600">—</span>
                <span>Highlighted in &ldquo;The Book Of Design&rdquo; by The Network + Framer</span>
              </p>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Book%20of%20Design-jqoANW3Z76lqpdFismnllxX3Bd9vw4.jpeg"
                alt="The Book Of Design"
                width={900}
                height={520}
                className="w-full rounded-lg outline outline-1 outline-white/10"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-24">
          <SectionHeading>Investments</SectionHeading>
          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-zinc-400">
            Early-stage bets on startups building tools for designers and developers.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {investments.map((investment) => (
              <li key={investment.name}>
                <Link
                  href={investment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-zinc-300 transition-colors hover:text-white"
                >
                  {investment.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mt-8 border-t border-white/10">
        <div className="mx-auto flex h-24 max-w-5xl items-center justify-between px-6">
          <Link
            href="https://x.com/evilrabbit_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            @evilrabbit_
          </Link>
          <p className="text-sm text-zinc-600">© {currentYear}</p>
        </div>
      </footer>
    </div>
  )
}