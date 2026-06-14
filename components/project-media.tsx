import Image from "next/image"
import type { ProjectItem } from "@/lib/data"

export function ProjectMedia({ item }: { item: ProjectItem }) {
  if (item.type === "video" && item.src) {
    return (
      <video
        src={item.src}
        className="w-full rounded-lg outline outline-1 outline-white/10"
        autoPlay
        loop
        muted
        playsInline
      />
    )
  }

  if (item.type === "image" && item.src) {
    return (
      <Image
        src={item.src}
        alt={item.name}
        width={900}
        height={520}
        className="w-full rounded-lg outline outline-1 outline-white/10"
      />
    )
  }

  if (item.type === "group" && item.items) {
    return (
      <div className="space-y-4">
        {item.items.map((groupItem, index) => (
          <div key={index}>
            {groupItem.type === "video" ? (
              <video
                src={groupItem.src}
                className="w-full rounded-lg outline outline-1 outline-white/10"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <Image
                src={groupItem.src}
                alt={item.name}
                width={900}
                height={520}
                className="w-full rounded-lg outline outline-1 outline-white/10"
              />
            )}
          </div>
        ))}
      </div>
    )
  }

  return null
}