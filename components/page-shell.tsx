import { SiteFooter } from "./site-footer"
import { SiteNav } from "./site-nav"

export function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex min-h-screen flex-col bg-white text-black dark:bg-black dark:text-white ${className}`}
    >
      <SiteNav />
      <div className="flex flex-1 flex-col">{children}</div>
      <SiteFooter />
    </div>
  )
}