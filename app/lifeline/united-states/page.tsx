import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { Lifeline, LifelineLegend } from "@/components/lifeline"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ThemeColor } from "@/components/theme-color"
import { UsFlag } from "@/components/us-flag"
import { unitedStates } from "@/lib/lifelines/united-states"

export const metadata: Metadata = {
  title: "United States — Lifeline",
  description: unitedStates.description,
  openGraph: {
    title: "United States — Lifeline",
    description: unitedStates.description,
    url: "https://lifeline.evilrabbit.com/united-states",
    siteName: "Lifeline",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "United States — Lifeline",
    description: unitedStates.description,
  },
}

export default function UnitedStatesLifelinePage() {
  return (
    <div
      className={cn(
        GeistSans.className,
        "flex h-dvh flex-col overflow-hidden bg-white text-black antialiased transition-colors duration-300 dark:bg-black dark:text-white",
      )}
    >
      <ThemeColor />
      <SiteNav logo={<UsFlag className="h-5 w-auto" />} />
      <main className="flex-1 min-h-0 overflow-y-auto pt-16 md:overflow-hidden">
        <Lifeline
          markers={unitedStates.markers}
          birthYear={unitedStates.birthYear}
          title="United States — Lifeline"
          className="h-full"
        />
      </main>
      <SiteFooter
        className="shrink-0 backdrop-blur-sm"
        legend={<LifelineLegend items={unitedStates.legend} />}
      />
    </div>
  )
}
