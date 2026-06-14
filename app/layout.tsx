import type React from "react"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  metadataBase: new URL("https://evilrabbit.com"),
  title: "Evil Rabbit — Founding Designer at Vercel",
  description:
    "Evil Rabbit is a designer from Buenos Aires, based in San Francisco. Founding designer at Vercel — brand, product, and the visual language behind Geist and Next.js.",
  openGraph: {
    title: "Evil Rabbit",
    description:
      "Founding designer at Vercel. Brand, product, and type for the people who ship.",
    url: "https://evilrabbit.com",
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
    description:
      "Founding designer at Vercel. Brand, product, and type for the people who ship.",
    images: ["/opengraph-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}