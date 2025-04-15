"use client"

import Script from "next/script"

export default function HeadScripts() {
  return (
    <>
      <Script
        src="https://va.vercel-scripts.com/v1/script.js"
        data-endpoint="https://va.vercel-scripts.com/v1/view"
        strategy="afterInteractive"
      />
      <Script src="https://vitals.vercel-insights.com/v1/vitals.js" strategy="afterInteractive" />
    </>
  )
}
