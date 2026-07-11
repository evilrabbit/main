import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { RabbitLogo } from "@/components/rabbit-logo"
import { WorldCup2026Logo } from "@/components/world-cup-2026-logo"
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
    url: "https://lifeline.evilrabbit.com/2026/world-cup",
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
      <SiteNav
        logo={
          <span className="flex items-center gap-3">
            {/* Optical pairing: the rabbit is a near-square silhouette,
                the trophy a narrow 0.65-aspect mark — it runs a touch
                taller to carry the same visual weight. */}
            <RabbitLogo className="h-6 w-6" />
            <span
              aria-hidden="true"
              className="h-5 w-px bg-black/10 transition-colors duration-300 dark:bg-white/10"
            />
            <WorldCup2026Logo className="h-[26px] w-auto" />
            <span className="text-[15px] font-medium leading-5">
              FIFA World Cup 2026™
            </span>
          </span>
        }
      />
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
