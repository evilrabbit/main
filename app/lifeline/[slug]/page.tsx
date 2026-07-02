import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { Lifeline } from "@/components/lifeline"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ThemeColor } from "@/components/theme-color"
import { getLifeline, lifelines } from "@/lib/lifelines"

export const dynamicParams = false

export function generateStaticParams() {
  return lifelines.map(({ slug }) => ({ slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const lifeline = getLifeline(params.slug)
  if (!lifeline) return {}

  const title = `${lifeline.name} — Lifeline`

  return {
    title,
    description: lifeline.description,
    openGraph: {
      title,
      description: lifeline.description,
      url: `https://lifeline.evilrabbit.com/${lifeline.slug}`,
      siteName: "Lifeline",
      locale: "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: lifeline.description,
    },
  }
}

export default function LifelinePage({
  params,
}: {
  params: { slug: string }
}) {
  const lifeline = getLifeline(params.slug)
  if (!lifeline) notFound()

  return (
    <div
      className={cn(
        GeistSans.className,
        "flex h-dvh flex-col overflow-hidden bg-white text-black antialiased dark:bg-black dark:text-white",
      )}
    >
      <ThemeColor />
      <SiteNav />
      <main className="flex-1 min-h-0 overflow-y-auto pt-16 md:overflow-hidden">
        <Lifeline
          markers={lifeline.markers}
          birthYear={lifeline.birthYear}
          title={`${lifeline.name} — Lifeline`}
          className="h-full"
        />
      </main>
      <SiteFooter className="shrink-0 backdrop-blur-sm" />
    </div>
  )
}
