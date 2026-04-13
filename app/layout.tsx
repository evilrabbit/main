import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-black`}>
      <body className="font-sans bg-black">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
