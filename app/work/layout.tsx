import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work — Evil Rabbit",
  description: "Selected work by Evil Rabbit — product, branding, and physical design.",
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}