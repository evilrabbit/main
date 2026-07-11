import type { Metadata } from "next"
import { cookies, headers } from "next/headers"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { ArgentinaFlag } from "@/components/argentina-flag"
import { SiteNav } from "@/components/site-nav"
import { ThemeColor } from "@/components/theme-color"
import { argentina } from "@/lib/lifelines/argentina"
import { ArgentinaLifeline, type ArgentinaLang } from "./argentina-lifeline"

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
    images: [
      {
        url: "https://www.evilrabbit.com/opengraph-image.png",
        width: 1400,
        height: 800,
        alt: "Evil Rabbit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.evilrabbit.com/opengraph-image.png"],
    title: "Argentina — Lifeline",
    description: argentina.description,
  },
}

/** Explicit choice from the footer toggle wins; Accept-Language otherwise. */
function detectLang(): ArgentinaLang {
  const cookie = cookies().get("lang")?.value
  if (cookie === "es" || cookie === "en") return cookie

  const acceptLanguage = headers().get("accept-language") ?? ""
  const preferred = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? ""
  return preferred.startsWith("es") ? "es" : "en"
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
      <ArgentinaLifeline initialLang={detectLang()} />
    </div>
  )
}
