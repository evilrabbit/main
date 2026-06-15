import type { Metadata } from "next"
import { Lifeline } from "@/components/lifeline"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { lifelineMarkers } from "@/lib/lifeline"

export const metadata: Metadata = {
  title: "Lifeline — Evil Rabbit",
  description: "The life and career of Evil Rabbit — from Buenos Aires to Vercel.",
}

export default function LifelinePage() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      <SiteNav />
      <main className="flex-1 min-h-0 overflow-y-auto pt-16 md:overflow-hidden">
        <Lifeline markers={lifelineMarkers} className="h-full" />
      </main>
      <SiteFooter className="shrink-0 backdrop-blur-sm" />
    </div>
  )
}