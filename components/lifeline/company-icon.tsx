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

function Auth0Icon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 27 32"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.69096 13.6657C6.93608 12.8046 11.0487 8.69196 11.9098 3.44684L12.3326 0.894737C12.4108 0.398927 12.009 -0.0342526 11.5079 0.00227737C7.51539 0.310197 3.75249 1.63583 1.67009 2.48653C0.662823 2.89884 0 3.88002 0 4.97601V13.0394C0 13.5144 0.422753 13.8745 0.892465 13.7962L1.69096 13.6657Z"
        fill="currentColor"
      />
      <path
        d="M14.4356 3.44672C15.2968 8.69186 19.4094 12.8045 24.6545 13.6656L25.453 13.7961C25.9227 13.8744 26.3454 13.5143 26.3454 13.0393V4.97589C26.3454 3.88511 25.6826 2.90393 24.6753 2.48641C22.5982 1.63049 18.83 0.310075 14.8375 0.0021553C14.3365 -0.0343747 13.9294 0.398805 14.0129 0.894615L14.4356 3.44672Z"
        fill="currentColor"
      />
      <path
        d="M24.6589 16.1974C19.4138 17.0585 15.3012 21.1711 14.44 26.4162L13.9181 31.3952C13.8712 31.844 14.367 32.1624 14.7428 31.9119C14.7428 31.9119 14.748 31.9119 14.7532 31.9067C18.0412 29.6886 25.5461 23.8798 26.2872 16.6254C26.3238 16.2705 26.0054 15.9782 25.6557 16.0356L24.6641 16.1974H24.6589Z"
        fill="currentColor"
      />
      <path
        d="M11.9075 26.4138C11.0464 21.1687 6.9338 17.0561 1.68868 16.1949L0.618783 16.0175C0.305641 15.9653 0.0238052 16.2262 0.0551193 16.5446C0.759688 23.8408 8.36904 29.6861 11.6831 31.9042C12.0276 32.1338 12.4816 31.8572 12.4399 31.4449L11.9128 26.4086L11.9075 26.4138Z"
        fill="currentColor"
      />
    </svg>
  )
}

function AerolabIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 21 18"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5878 17.3168C10.4826 17.9346 9.20093 18.098 8.06312 17.8566C5.34563 17.2799 3.75846 15.0637 3.35752 11.8854C3.20051 10.6345 3.03359 9.19523 2.49026 7.9873C2.05751 7.0192 1.35515 6.21489 0.13636 5.90187C0.0414084 5.87787 -0.0159515 5.78547 0.00392544 5.69211C0.085083 5.31092 0.280788 4.39172 0.363203 4.00463C0.37318 3.95777 0.401191 3.91666 0.441323 3.89085C0.485138 3.86582 0.533095 3.85749 0.580729 3.86875C2.55383 4.34454 3.69669 5.59253 4.3916 7.13693C5.01482 8.52997 5.24382 10.1841 5.42533 11.6273C5.6977 13.8006 6.63664 15.428 8.49617 15.8226C9.22525 15.9773 10.057 15.8484 10.7421 15.3963C10.8133 15.3513 10.8393 15.265 10.8132 15.1885C10.4167 14.1047 7.6546 6.50725 7.25421 5.40524C7.22464 5.32723 7.25468 5.24027 7.32217 5.19443C8.24624 4.59602 14.2567 0.696049 15.2878 0.0289381C15.3685 -0.0248943 15.479 -0.00145882 15.5345 0.0812853C16.201 1.10825 20.1105 7.11292 20.7107 8.03557C20.7574 8.10564 20.7458 8.19651 20.6906 8.25692C19.798 9.17712 13.1692 16.0171 13.1692 16.0171C13.1685 16.0204 13.1639 16.0236 13.1595 16.0266C12.8925 16.3043 12.2521 16.9444 11.5878 17.3168Z"
        fill="currentColor"
      />
    </svg>
  )
}

const companyIcons = {
  aerolab: AerolabIcon,
  auth0: Auth0Icon,
  vercel: VercelIcon,
} as const

export type CompanyIconId = keyof typeof companyIcons

const companyIconSizes: Record<CompanyIconId, string> = {
  aerolab: "h-4 w-4",
  auth0: "h-4 w-4",
  vercel: "h-4 w-4",
}

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
        "inline-flex shrink-0 items-center justify-center text-white",
        companyIconSizes[id],
        className,
      )}
      aria-label={label}
      title={label}
    >
      <Icon className="h-full w-full" />
    </span>
  )
}