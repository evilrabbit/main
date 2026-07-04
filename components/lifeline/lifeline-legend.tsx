import type { LifelineLegendItem } from "./types"

const LEGEND_DOT_CLASS: Record<LifelineLegendItem["type"], string> = {
  mentor: "bg-blue-500",
  met: "bg-pink-500",
}

const DEFAULT_ITEMS: LifelineLegendItem[] = [
  { type: "mentor", label: "Mentors" },
  { type: "met", label: "Met in person" },
]

function LifelineLegendItems({ items }: { items: LifelineLegendItem[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-zinc-500">
      {items.map((item) => (
        <li key={item.type} className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${LEGEND_DOT_CLASS[item.type]}`}
            aria-hidden="true"
          />
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  )
}

export function LifelineLegend({
  inline = false,
  items = DEFAULT_ITEMS,
}: {
  inline?: boolean
  items?: LifelineLegendItem[]
}) {
  if (inline) {
    return (
      <div className="mt-10">
        <LifelineLegendItems items={items} />
      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30">
      <div className="mx-auto max-w-5xl px-6 pb-6">
        <LifelineLegendItems items={items} />
      </div>
    </div>
  )
}
