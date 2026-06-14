import Link from "next/link"
import { RabbitLogo } from "./rabbit-logo"

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/lifeline", label: "Lifeline" },
]

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-white transition-opacity hover:opacity-70">
          <RabbitLogo className="h-6 w-6" />
          <span className="text-sm font-medium tracking-tight">Evil Rabbit</span>
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden text-[13px] font-medium tracking-wide text-zinc-500 transition-colors hover:text-white sm:block"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://x.com/evilrabbit_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-zinc-500 transition-colors hover:text-white"
          >
            @evilrabbit_
          </Link>
        </div>
      </div>
    </nav>
  )
}