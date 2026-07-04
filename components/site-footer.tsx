import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function SiteFooter({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={cn(
        "border-t border-black/10 bg-white/95 transition-colors duration-150 dark:border-white/10 dark:bg-black/95",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <ThemeSwitcher />
        <p className="text-sm text-zinc-500 dark:text-zinc-600">
          © {currentYear}
        </p>
      </div>
    </footer>
  )
}
