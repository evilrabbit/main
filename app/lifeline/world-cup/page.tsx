import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { ArgentinaFlag } from "@/components/argentina-flag"
import { Lifeline } from "@/components/lifeline"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ThemeColor } from "@/components/theme-color"
import { argentinaWorldCup2026 } from "@/lib/lifelines/argentina-wc-2026"

export const metadata: Metadata = {
  title: "World Cup 2026 — Lifeline",
  description: argentinaWorldCup2026.description,
  openGraph: {
    title: "World Cup 2026 — Lifeline",
    description: argentinaWorldCup2026.description,
    url: "https://lifeline.evilrabbit.com/world-cup",
    siteName: "Lifeline",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Cup 2026 — Lifeline",
    description: argentinaWorldCup2026.description,
  },
}

export default function WorldCupLifelinePage() {
  return (
    <div
      className={cn(
        GeistSans.className,
        "flex h-dvh flex-col overflow-hidden bg-white text-black antialiased transition-colors duration-300 dark:bg-black dark:text-white",
      )}
    >
      <ThemeColor />
      <SiteNav logo={<ArgentinaFlag className="h-5 w-auto" />} />
      <main className="flex-1 min-h-0 overflow-y-auto pt-16 md:overflow-hidden">
        <Lifeline
          markers={argentinaWorldCup2026.markers}
          birthYear={argentinaWorldCup2026.birthYear}
          title="Argentina — World Cup 2026"
          className="h-full"
        />
      </main>
      <SiteFooter className="shrink-0 backdrop-blur-sm" />
    </div>
  )
}
