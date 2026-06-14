import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { RabbitLogo } from "@/components/rabbit-logo"

export const metadata: Metadata = {
  title: "Evil Rabbit — Founding Designer at Vercel",
  description:
    "Evil Rabbit is Nicolás Garro — founding designer at Vercel. Brand, product, and the visual language behind Geist and Next.js.",
}

export default function HomePage() {
  return (
    <PageShell>
      <main className="flex flex-1 items-center justify-center">
        <RabbitLogo className="h-32 w-32 text-black dark:text-white sm:h-40 sm:w-40" />
      </main>
    </PageShell>
  )
}