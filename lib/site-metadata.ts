import type { Metadata } from "next"

const siteUrl = "https://www.evilrabbit.com"
const openGraphImage = `${siteUrl}/opengraph-image.png`

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Evil Rabbit — Founding Designer at Vercel",
  description:
    "Evil Rabbit is a designer from Buenos Aires, based in San Francisco. Founding designer at Vercel — brand, product, and the visual language behind Geist and Next.js.",
  openGraph: {
    title: "Evil Rabbit",
    description:
      "Founding designer at Vercel. Brand, product, and type for the people who ship.",
    url: siteUrl,
    siteName: "Evil Rabbit",
    images: [
      {
        url: openGraphImage,
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
    images: [openGraphImage],
  },
}