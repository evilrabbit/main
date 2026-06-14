import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"
import { investments } from "@/lib/data"

const focusAreas = [
  "Brand architecture & design systems",
  "Product design for developer tools",
  "Creative direction & campaigns",
  "Typography & visual identity",
]

export const metadata: Metadata = {
  title: "About — Evil Rabbit",
  description: "Evil Rabbit is Nicolás Garro — founding designer at Vercel.",
}

export default function AboutPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <SectionHeading>About</SectionHeading>

        <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
          <p className="text-balance text-2xl font-medium tracking-[-0.03em] text-white">
            Evil Rabbit is Nicolás Garro — a designer obsessed with craft, restraint, and making complex tools feel inevitable.
          </p>
          <p>
            Born in Buenos Aires and based in San Francisco, I&apos;ve spent nearly three decades designing products and brands — from broadcast and early freelance work to Auth0, and since 2016, Vercel from its ZEIT days to today.
          </p>
          <p>
            My work spans product design, creative direction, typography, and physical objects. I directed Geist, the type family at the center of Vercel&apos;s identity, and led the visual systems behind Next.js Conf, Ship, and the ▲ brand itself.
          </p>
          <p className="text-[15px] leading-relaxed text-zinc-400">
            {focusAreas.join(" · ")}
          </p>
        </div>

        <section className="mt-24 border-t border-white/10 pt-24">
          <h2 className="section-label mb-8">Recognition</h2>

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

        <section className="mt-24 border-t border-white/10 pt-24">
          <h2 className="section-label mb-4">Investments</h2>
          <p className="mb-8 text-[15px] leading-relaxed text-zinc-400">
            Angel investor in early-stage startups building tools for designers and developers.
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
    </PageShell>
  )
}