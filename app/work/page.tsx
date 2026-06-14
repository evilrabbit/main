import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { ProjectMedia } from "@/components/project-media"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/data"

export const metadata: Metadata = {
  title: "Work — Evil Rabbit",
  description: "Selected work by Evil Rabbit — product, branding, and physical design.",
}

export default function WorkPage() {
  return (
    <PageShell>
      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-32 text-left">
        <SectionHeading>Selected Work</SectionHeading>

        {Object.entries(projects).map(([category, items]) => (
          <section key={category} className="mb-20 last:mb-0">
            <h2 className="section-title mb-10 capitalize">{category}</h2>

            <div className="space-y-20">
              {items.map((item, index) => (
                <article key={`${category}-${index}`}>
                  <header className="mb-5">
                    <p className="text-[15px] leading-relaxed">
                      <span className="text-zinc-500">{item.year}</span>
                      <span className="mx-2 text-zinc-600">—</span>
                      <span>{item.name}</span>
                    </p>
                    {item.collaboration && (
                      <p className="mt-1 text-sm text-zinc-500">
                        with{" "}
                        {item.collaboration.collaborators.map((collaborator, i) => (
                          <span key={collaborator.name}>
                            {collaborator.url ? (
                              <Link
                                href={collaborator.url}
                                className="transition-colors hover:text-white"
                              >
                                {collaborator.name}
                              </Link>
                            ) : (
                              collaborator.name
                            )}
                            {i < item.collaboration!.collaborators.length - 1 && ", "}
                          </span>
                        ))}
                      </p>
                    )}
                  </header>
                  <ProjectMedia item={item} />
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </PageShell>
  )
}