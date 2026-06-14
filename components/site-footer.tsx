import Link from "next/link"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">
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