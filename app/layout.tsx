import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"



export const metadata: Metadata = {
  title: "Evil Rabbit",
  description: "Evil Rabbit's personal website",
  generator: "v0.dev",
  openGraph: {
    title: "Evil Rabbit",
    description: "Evil Rabbit's personal website",
    url: "https://evilrabbit.dev",
    siteName: "Evil Rabbit",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Evil Rabbit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evil Rabbit",
    description: "Evil Rabbit's personal website",
    images: ["/opengraph-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-black ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`${GeistSans.className} bg-black`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
