"use client"

import { useCallback, useEffect, useRef, useState } from "react"

export function useTimeline(itemCount: number) {
  const containerRef = useRef<HTMLOListElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set())
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const setItemRef = useCallback((index: number) => {
    return (node: HTMLLIElement | null) => {
      itemRefs.current[index] = node
    }
  }, [])

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, itemCount)
  }, [itemCount])

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLLIElement[]
    if (!nodes.length) return

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        setVisibleIds((prev) => {
          const next = new Set(prev)
          entries.forEach((entry) => {
            const id = entry.target.getAttribute("data-timeline-id")
            if (!id) return
            if (entry.isIntersecting) next.add(id)
          })
          return next
        })
      },
      { rootMargin: "-10% 0px -20% 0px", threshold: 0.15 },
    )

    nodes.forEach((node) => visibilityObserver.observe(node))

    const markInitiallyVisible = () => {
      setVisibleIds((prev) => {
        const next = new Set(prev)
        nodes.forEach((node) => {
          const id = node.getAttribute("data-timeline-id")
          if (!id) return
          const rect = node.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1) {
            next.add(id)
          }
        })
        return next
      })
    }

    const updateProgress = () => {
      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const viewportCenter = window.innerHeight * 0.42
      let nextActive = 0
      let nextProgress = 0

      nodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect()
        const anchor = rect.top + rect.height * 0.35

        if (anchor <= viewportCenter) {
          nextActive = index
        }
      })

      const first = nodes[0].getBoundingClientRect()
      const last = nodes[nodes.length - 1].getBoundingClientRect()
      const start = first.top + first.height * 0.35
      const end = last.top + last.height * 0.35
      const range = end - start

      if (range > 0) {
        const raw = (viewportCenter - start) / range
        nextProgress = Math.min(1, Math.max(0, raw))
      }

      setActiveIndex(nextActive)
      setProgress(nextProgress)
    }

    markInitiallyVisible()
    updateProgress()
    requestAnimationFrame(updateProgress)
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)

    return () => {
      visibilityObserver.disconnect()
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [itemCount])

  return {
    containerRef,
    setItemRef,
    visibleIds,
    activeIndex,
    progress,
  }
}