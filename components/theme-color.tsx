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

    // iOS Safari ignores content changes on an existing theme-color meta;
    // it only re-reads the value when a fresh node is inserted.
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((node) => node.remove())

    const meta = document.createElement("meta")
    meta.name = "theme-color"
    meta.content = color
    document.head.appendChild(meta)
  }, [resolvedTheme])

  return null
}
