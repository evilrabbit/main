import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { ArgentinaFlag } from "@/components/argentina-flag"
import { Lifeline } from "@/components/lifeline"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ThemeColor } from "@/components/theme-color"
import { argentina } from "@/lib/lifelines/argentina"

export const metadata: Metadata = {
  title: "Argentina — Lifeline",
  description: argentina.description,
  openGraph: {
    title: "Argentina — Lifeline",
    description: argentina.description,
    url: "https://lifeline.evilrabbit.com/argentina",
    siteName: "Lifeline",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Argentina — Lifeline",
    description: argentina.description,
  },
}

export default function ArgentinaLifelinePage() {
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
          markers={argentina.markers}
          birthYear={argentina.birthYear}
          legend={argentina.legend}
          title="Argentina — Lifeline"
          className="h-full"
        />
      </main>
      <SiteFooter className="shrink-0 backdrop-blur-sm" />
    </div>
  )
}
