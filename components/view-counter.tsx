"use client"

import { useEffect, useState } from "react"

interface ViewCounterProps {
  slug: string
}

export function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    // Register view and get count
    fetch(`/api/views/${slug}`, { method: 'POST' })
      .then(res => res.json())
      .then(data => setViews(data.views))
      .catch(() => setViews(null))
  }, [slug])

  if (views === null) {
    return null
  }

  return (
    <span className="text-[#666]">
      {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
    </span>
  )
}
