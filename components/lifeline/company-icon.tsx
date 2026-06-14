import { cn } from "@/lib/utils"

function VercelIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 4.5L20.7846 19.5H3.21539L12 4.5Z" />
    </svg>
  )
}

const companyIcons = {
  vercel: VercelIcon,
} as const

export type CompanyIconId = keyof typeof companyIcons

export function CompanyIcon({
  id,
  className,
  label,
}: {
  id: CompanyIconId
  className?: string
  label?: string
}) {
  const Icon = companyIcons[id]

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center text-white",
        className,
      )}
      aria-label={label}
      title={label}
    >
      <Icon className="h-full w-full" />
    </span>
  )
}