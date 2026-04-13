interface BrowserProps {
  url: string
  showContent?: boolean
  children?: React.ReactNode
}

export function Browser({ url, showContent = false, children }: BrowserProps) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#000", maxWidth: "650px" }}>
      {/* Browser header */}
      <div className="flex items-center px-4 py-3 gap-4" style={{ backgroundColor: "#111" }}>
        {/* Traffic lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-1 text-[#666]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* URL bar */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-center gap-1.5 bg-[#222] rounded-md px-4 py-1.5 min-w-[280px]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#666] flex-shrink-0">
              <path d="M9 4.5V4C9 2.34315 7.65685 1 6 1C4.34315 1 3 2.34315 3 4V4.5M6 7.5V8.5M4.2 11H7.8C8.9201 11 9.4802 11 9.908 10.782C10.2843 10.5903 10.5903 10.2843 10.782 9.908C11 9.4802 11 8.9201 11 7.8V7.7C11 6.5799 11 6.01984 10.782 5.59202C10.5903 5.21569 10.2843 4.90973 9.908 4.71799C9.4802 4.5 8.9201 4.5 7.8 4.5H4.2C3.0799 4.5 2.51984 4.5 2.09202 4.71799C1.71569 4.90973 1.40973 5.21569 1.21799 5.59202C1 6.01984 1 6.5799 1 7.7V7.8C1 8.9201 1 9.4802 1.21799 9.908C1.40973 10.2843 1.71569 10.5903 2.09202 10.782C2.51984 11 3.0799 11 4.2 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm text-white">{url}</span>
          </div>
        </div>

        {/* Copy button */}
        <div className="text-[#666]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3 11V3.5C3 2.67157 3.67157 2 4.5 2H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Content area */}
      {showContent && (
        <div className="bg-black min-h-[300px]">
          {children}
        </div>
      )}
    </div>
  )
}
