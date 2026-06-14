import type { Metadata } from "next"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Experience — Evil Rabbit",
  description: "Career history of Evil Rabbit — Vercel, Auth0, Aerolab, and more.",
}

export default function ExperiencePage() {
  return (
    <PageShell>
      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-32 text-left">
        <SectionHeading>Experience</SectionHeading>
        <ExperienceTimeline />
      </main>
    </PageShell>
  )
}