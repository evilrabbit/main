export function LifelineLegend() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30">
      <div className="mx-auto max-w-5xl px-6 pb-6">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-zinc-500">
          <li className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
              aria-hidden="true"
            />
            <span>Mentors</span>
          </li>
          <li className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500"
              aria-hidden="true"
            />
            <span>Met in person</span>
          </li>
        </ul>
      </div>
    </div>
  )
}