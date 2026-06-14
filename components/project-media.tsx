import Image from "next/image"
import type { ProjectItem } from "@/lib/data"
import { cn } from "@/lib/utils"

function mediaClassName(borderless?: boolean) {
  return cn(
    "w-full rounded-lg",
    !borderless && "outline outline-1 outline-black/10 dark:outline-white/10",
  )
}

export function ProjectMedia({ item }: { item: ProjectItem }) {
  if (item.type === "video" && item.src) {
    return (
      <video
        src={item.src}
        className={mediaClassName(item.borderless)}
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
        className={mediaClassName(item.borderless)}
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
                className={mediaClassName(item.borderless)}
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
                className={mediaClassName(item.borderless)}
              />
            )}
          </div>
        ))}
      </div>
    )
  }

  return null
}