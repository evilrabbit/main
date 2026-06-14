import { cn } from "@/lib/utils"

function BabyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.75 1.2 1 2 1s1.5-.25 2-1" />
      <path d="M12 2c2.2 0 4 1.5 4 4.2 0 1.2-.4 2.2-1.1 3.1C17.8 10.8 19 13.1 19 16v2.5c0 1.4-1.1 2.5-2.5 2.5h-9C6.1 21 5 19.9 5 18.5V16c0-2.9 1.2-5.2 3.1-6.7C7.4 8.4 7 7.4 7 6.2 7 3.5 8.8 2 12 2z" />
    </svg>
  )
}

const markerIcons = {
  baby: BabyIcon,
} as const

export type MarkerIconId = keyof typeof markerIcons

export function MarkerIcon({
  id,
  className,
  label,
}: {
  id: MarkerIconId
  className?: string
  label?: string
}) {
  const Icon = markerIcons[id]

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