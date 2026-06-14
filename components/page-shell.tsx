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
    <div className={`min-h-screen bg-black text-white ${className}`}>
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  )
}