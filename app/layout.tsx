import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evil Rabbit",
  description:
    "Evil Rabbit's personal website. Designer from Buenos Aires, Argentina. Based in San Francisco, California.",
  generator: "v0.dev",
  metadataBase: new URL("https://evilrabbit.dev"),
  openGraph: {
    title: "Evil Rabbit",
    description:
      "Evil Rabbit's personal website. Designer from Buenos Aires, Argentina. Based in San Francisco, California.",
    url: "https://evilrabbit.dev",
    siteName: "Evil Rabbit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evil Rabbit - Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evil Rabbit",
    description:
      "Evil Rabbit's personal website. Designer from Buenos Aires, Argentina. Based in San Francisco, California.",
    creator: "@evilrabbit_",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
