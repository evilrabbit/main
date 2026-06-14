export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-12 text-2xl font-medium tracking-[-0.03em] text-black dark:text-white">
      {children}
    </h1>
  )
}