"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

/**
 * Keeps <meta name="theme-color"> in sync with the class-based theme so
 * iOS Safari tints its top chrome to match. Media-query themeColor can't
 * do this because the switcher is independent of the system scheme.
 */
export function ThemeColor() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const color = resolvedTheme === "light" ? "#ffffff" : "#000000"

    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    )
    if (!meta) {
      meta = document.createElement("meta")
      meta.name = "theme-color"
      document.head.appendChild(meta)
    }
    meta.content = color
  }, [resolvedTheme])

  return null
}
