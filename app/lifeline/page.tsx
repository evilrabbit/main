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
    <div className="h-screen overflow-hidden bg-black text-white">
      <SiteNav />
      <main className="mt-16">
        <Lifeline markers={lifelineMarkers} />
      </main>
      <SiteFooter className="fixed inset-x-0 bottom-0 z-40 border-white/10 bg-black/95 backdrop-blur-sm" />
    </div>
  )
}