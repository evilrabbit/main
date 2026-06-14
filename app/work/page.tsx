"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { ProjectMedia } from "@/components/project-media"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/data"

export default function WorkPage() {
  const [visibleItems, setVisibleItems] = useState<string[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index")
            if (index) {
              setVisibleItems((prev) => [...new Set([...prev, index])])
            }
          }
        })
      },
      { rootMargin: "120px" },
    )

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <SectionHeading>Selected Work</SectionHeading>

        {Object.entries(projects).map(([category, items], categoryIndex) => (
          <section key={category} className="mb-20 last:mb-0">
            <h2 className="mb-10 text-sm font-medium capitalize text-zinc-400">{category}</h2>

            <div className="space-y-20">
              {items.map((item, index) => {
                const itemKey = `${categoryIndex}-${index}`
                const isVisible = visibleItems.includes(itemKey)

                return (
                  <article key={itemKey} data-index={itemKey} className="min-h-[1px]">
                    {isVisible && (
                      <>
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
                      </>
                    )}
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </main>
    </PageShell>
  )
}