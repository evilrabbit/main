import { GeistSans } from "geist/font/sans"

export function HeadingShowcase() {
  return (
    <div className={`flex flex-col gap-4 py-8 ${GeistSans.className}`}>
      <div className="flex items-baseline gap-4">
        <span className="text-[#444] font-mono text-xs w-8 flex-shrink-0">H1</span>
        <span className="text-[48px] md:text-[56px] leading-tight font-semibold text-white">Heading</span>
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-[#444] font-mono text-xs w-8 flex-shrink-0">H2</span>
        <span className="text-[36px] md:text-[42px] leading-tight font-semibold text-white">Heading</span>
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-[#444] font-mono text-xs w-8 flex-shrink-0">H3</span>
        <span className="text-[28px] md:text-[32px] leading-tight font-medium text-white">Heading</span>
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-[#444] font-mono text-xs w-8 flex-shrink-0">H4</span>
        <span className="text-[22px] md:text-[24px] leading-tight font-medium text-white">Heading</span>
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-[#444] font-mono text-xs w-8 flex-shrink-0">H5</span>
        <span className="text-[18px] md:text-[20px] leading-tight font-medium text-white">Heading</span>
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-[#444] font-mono text-xs w-8 flex-shrink-0">H6</span>
        <span className="text-[16px] md:text-[18px] leading-tight font-medium text-[#999]">Heading</span>
      </div>
    </div>
  )
}
