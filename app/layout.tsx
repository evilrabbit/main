import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Evil Rabbit",
  description: "Designer and Creative Director",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-4oJjK5HSAq99igAAlWB4Ypv2LQuonI.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Evil Rabbit",
    description: "Designer and Creative Director",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-image-4wolVkgnHmm9HXlCV4tJDlPLn0Tbrw.png",
        width: 1200,
        height: 630,
        alt: "Evil Rabbit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evil Rabbit",
    description: "Designer and Creative Director",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-image-4wolVkgnHmm9HXlCV4tJDlPLn0Tbrw.png"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import "./globals.css"


import './globals.css'