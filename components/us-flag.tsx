import type { SVGProps } from "react"

export function UsFlag({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 44 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="0.169006" width="18" height="14" />
      <rect x="20" width="24" height="6" />
      <rect x="20" y="8" width="24" height="6" />
      <rect y="16" width="44" height="6" />
      <rect y="24" width="44" height="6" />
    </svg>
  )
}
