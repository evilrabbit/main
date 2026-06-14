import type { Metadata } from "next"
import { Lifeline } from "@/components/lifeline"
import { PageShell } from "@/components/page-shell"
import { lifelineMarkers } from "@/lib/lifeline"

export const metadata: Metadata = {
  title: "Lifeline — Evil Rabbit",
  description: "The life and career of Evil Rabbit — from Buenos Aires to Vercel.",
}

export default function LifelinePage() {
  return (
    <PageShell>
      <Lifeline markers={lifelineMarkers} title="Lifeline" />
    </PageShell>
  )
}