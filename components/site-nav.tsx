import Link from "next/link"
import { RabbitLogo } from "./rabbit-logo"
import { XLogo } from "./x-logo"

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/80">
      <div
        data-site-nav-inner
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <Link
          href="/"
          data-site-nav-logo
          aria-label="Evil Rabbit"
          className="text-black transition-opacity hover:opacity-70 dark:text-white"
        >
          <RabbitLogo className="h-6 w-6" />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="https://x.com/evilrabbit_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="@evilrabbit_ on X"
            className="text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
          >
            <XLogo className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
