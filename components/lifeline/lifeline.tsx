"use client"

import { useLayoutEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { LifelineDesktop } from "./lifeline-desktop"
import { LifelineVertical } from "./lifeline-vertical"
import { LIFELINE_MOBILE_BREAKPOINT } from "./lifeline-layout"
import type { LifelineProps } from "./types"

export function Lifeline(props: LifelineProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useLayoutEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < LIFELINE_MOBILE_BREAKPOINT)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  if (isMobile === null) {
    return <div className="invisible h-full min-h-[50vh]" aria-hidden="true" />
  }

  if (isMobile) {
    return (
      <div className="pt-5">
        <LifelineVertical {...props} />
      </div>
    )
  }

  return (
    <LifelineDesktop
      {...props}
      className={cn("pt-5", props.className)}
    />
  )
}