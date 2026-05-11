"use client"

import dynamic from "next/dynamic"

const LogoParticles = dynamic(() => import("@/components/logo-particles"), {
  ssr: false,
})

export default function Home() {
  return <LogoParticles />
}
