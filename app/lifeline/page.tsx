import type { Metadata } from "next"
import Link from "next/link"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { LifelineSearch } from "@/components/lifeline-search"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ThemeColor } from "@/components/theme-color"
import { LIFELINE_CURRENT_YEAR, lifelines } from "@/lib/lifelines"

export const metadata: Metadata = {
  title: "Lifeline",
  description: "Every life is a line. Type a name to draw one.",
  openGraph: {
    title: "Lifeline",
    description: "Every life is a line. Type a name to draw one.",
    url: "https://lifeline.evilrabbit.com",
    siteName: "Lifeline",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifeline",
    description: "Every life is a line. Type a name to draw one.",
  },
}

export default function LifelineLandingPage() {
  const people = lifelines.map(({ slug, name }) => ({ slug, name }))

  return (
    <div
      className={cn(
        GeistSans.className,
        "flex h-dvh flex-col overflow-hidden bg-white text-black antialiased dark:bg-black dark:text-white",
      )}
    >
      <ThemeColor />
      <SiteNav />
      <main className="flex min-h-0 flex-1 flex-col items-center justify-center gap-10 overflow-y-auto px-6 pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Lifeline
          </h1>
          <p className="mt-4 text-[15px] text-zinc-500">
            Every life is a line. Type a name to draw one.
          </p>
        </div>

        <LifelineSearch people={people} />

        <ul className="flex flex-wrap items-baseline justify-center gap-x-8 gap-y-3">
          {lifelines.map((lifeline) => (
            <li key={lifeline.slug}>
              <Link
                href={`/lifeline/${lifeline.slug}`}
                className="group text-[14px] text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
              >
                {lifeline.name}
                <span className="ml-2 text-[12px] tabular-nums text-zinc-400 transition-colors group-hover:text-zinc-500 dark:text-zinc-600">
                  {lifeline.birthYear}–
                  {lifeline.endYear ?? LIFELINE_CURRENT_YEAR}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter className="shrink-0 backdrop-blur-sm" />
    </div>
  )
}
