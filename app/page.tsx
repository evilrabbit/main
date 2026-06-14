import { PageShell } from "@/components/page-shell"
import { RabbitLogo } from "@/components/rabbit-logo"

export default function Home() {
  return (
    <PageShell>
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-end px-6 pb-20 pt-32">
        <div className="fade-up mb-10">
          <RabbitLogo className="mb-8 h-12 w-12 text-white" />
        </div>

        <div className="fade-up fade-up-delay-1 max-w-3xl">
          <h1 className="text-balance text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em]">
            I design the visual language of the web&apos;s most ambitious tools.
          </h1>
          <p className="text-balance mt-6 max-w-2xl text-[clamp(1.125rem,2.5vw,1.5rem)] leading-snug tracking-[-0.02em] text-zinc-400">
            Founding designer at Vercel — shaping brand, product, and type for the people who ship.
          </p>
        </div>

        <p className="fade-up fade-up-delay-2 mt-12 text-sm text-zinc-500">
          Buenos Aires → San Francisco
        </p>
      </main>
    </PageShell>
  )
}