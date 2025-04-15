"use client"

import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/react"

export function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <VercelSpeedInsights />
    </>
  )
}
