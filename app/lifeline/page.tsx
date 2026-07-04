import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { Lifeline } from "@/components/lifeline"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ThemeColor } from "@/components/theme-color"
import { LIFELINE_BIRTH_YEAR, lifelineMarkers } from "@/lib/lifeline"

export const metadata: Metadata = {
  title: "Lifeline — Evil Rabbit",
  description:
    "The life and career of Evil Rabbit — from Buenos Aires to Vercel.",
  openGraph: {
    title: "Lifeline — Evil Rabbit",
    description:
      "The life and career of Evil Rabbit — from Buenos Aires to Vercel.",
    url: "https://lifeline.evilrabbit.com",
    siteName: "Evil Rabbit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifeline — Evil Rabbit",
    description:
      "The life and career of Evil Rabbit — from Buenos Aires to Vercel.",
  },
}

export default function LifelinePage() {
  return (
    <div
      className={cn(
        GeistSans.className,
        "flex h-dvh flex-col overflow-hidden bg-white text-black antialiased transition-colors duration-300 dark:bg-black dark:text-white",
      )}
    >
      <ThemeColor />
      <SiteNav />
      <main className="flex-1 min-h-0 overflow-y-auto pt-16 md:overflow-hidden">
        <Lifeline
          markers={lifelineMarkers}
          birthYear={LIFELINE_BIRTH_YEAR}
          className="h-full"
        />
      </main>
      <SiteFooter className="shrink-0 backdrop-blur-sm" />
    </div>
  )
}
