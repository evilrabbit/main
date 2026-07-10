import type { SVGProps } from "react"

/**
 * Minimal geometric Argentine flag in the same block language as the
 * US mark — two bands and the sun. A placeholder for Evil Rabbit to
 * art-direct.
 */
export function ArgentinaFlag({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 44 30"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="44" height="8" fill="#74ACDF" />
      <rect y="8" width="44" height="14" fill="#FFFFFF" />
      <rect y="22" width="44" height="8" fill="#74ACDF" />
      <circle cx="22" cy="15" r="4.5" fill="#F6B40E" />
    </svg>
  )
}
