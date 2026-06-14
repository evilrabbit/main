import Link from "next/link"
import { cn } from "@/lib/utils"

export function SiteFooter({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn("border-t border-white/10", className)}>
      <div className="mx-auto flex h-24 max-w-5xl items-center justify-between px-6">
        <Link
          href="https://x.com/evilrabbit_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 transition-colors hover:text-white"
        >
          @evilrabbit_
        </Link>
        <p className="text-sm text-zinc-600">© {currentYear}</p>
      </div>
    </footer>
  )
}