import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-dark-mode-QLgJWKqJsmKYRxpnclwcPP9QonlPff.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-light-mode-QLgJWKqJsmKYRxpnclwcPP9QonlPff.png"
          media="(prefers-color-scheme: light)"
        />
      </head>
      <body className={inter.className}>
        {children}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="your-website-id" />
      </body>
    </html>
  )
}
