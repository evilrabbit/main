import type { Metadata } from "next"
import { InfinityMark } from "@/components/infinity-mark"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"
import { expertise } from "@/lib/data"

export const metadata: Metadata = {
  title: "Experience — Evil Rabbit",
  description: "Career history of Evil Rabbit — Vercel, Auth0, Aerolab, and more.",
}

export default function ExperiencePage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <SectionHeading>Experience</SectionHeading>

        <div className="divide-y divide-white/10">
          {expertise.map((item) => (
            <div
              key={item.company}
              className="group grid gap-2 py-6 transition-colors sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
            >
              <div>
                <h2 className="text-base font-medium text-white transition-colors group-hover:text-zinc-200">
                  {item.company}
                </h2>
                <p className="mt-1 text-sm text-zinc-500">{item.role}</p>
              </div>
              <p className="text-sm text-zinc-500">
                {item.period}
                {item.current && <InfinityMark />}
              </p>
            </div>
          ))}
        </div>
      </main>
    </PageShell>
  )
}