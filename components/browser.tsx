"use client"

import { useState } from "react"

interface Tab {
  favicon?: React.ReactNode
  title: string
  active?: boolean
}

interface BrowserProps {
  url: string
  showContent?: boolean
  children?: React.ReactNode
  tabs?: Tab[]
  onUrlChange?: (url: string) => void
}

export function Browser({ url, showContent = false, children, tabs, onUrlChange }: BrowserProps) {
  const [inputValue, setInputValue] = useState(url)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="rounded-xl overflow-hidden border border-[#333]" style={{ backgroundColor: "#000", maxWidth: "650px" }}>
      {/* Browser header */}
      <div className="flex items-center px-4 py-2.5 gap-4 h-11">
        {/* Traffic lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Tabs (if provided) or URL bar */}
        {tabs && tabs.length > 0 ? (
          <div className="flex-1 flex items-center gap-1 relative overflow-hidden">
            {tabs.map((tab, index) => (
              <div 
                key={index}
                className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm ${
                  tab.active ? 'bg-[#222] text-white' : 'bg-transparent text-[#666]'
                }`}
              >
                {tab.favicon && (
                  <div className="w-4 h-4 overflow-hidden flex items-center justify-center bg-white text-black text-[10px] font-bold flex-shrink-0" style={{ borderRadius: "22%" }}>
                    {tab.favicon}
                  </div>
                )}
                <span className="truncate max-w-[60px]">{tab.title}</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 opacity-50">
                  <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            ))}
            {/* Progressive blur fade on right - multiple layers with increasing blur */}
            <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none flex">
              <div className="flex-1 backdrop-blur-[0.5px]" style={{ maskImage: "linear-gradient(to right, transparent, black)", WebkitMaskImage: "linear-gradient(to right, transparent, black)" }} />
              <div className="flex-1 backdrop-blur-[1px]" style={{ maskImage: "linear-gradient(to right, transparent, black)", WebkitMaskImage: "linear-gradient(to right, transparent, black)" }} />
              <div className="flex-1 backdrop-blur-[2px]" style={{ maskImage: "linear-gradient(to right, transparent, black)", WebkitMaskImage: "linear-gradient(to right, transparent, black)" }} />
              <div className="flex-1 backdrop-blur-[4px]" style={{ maskImage: "linear-gradient(to right, transparent, black)", WebkitMaskImage: "linear-gradient(to right, transparent, black)" }} />
            </div>
          </div>
        ) : (
          <>
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
              <div 
                className={`flex items-center justify-center gap-1.5 bg-[#222] rounded-md px-4 py-1.5 min-w-[280px] transition-all cursor-text hover:bg-[#2a2a2a] ${isFocused ? 'ring-1 ring-[#444]' : ''}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5V6C5 4.34315 6.34315 3 8 3ZM8 4.5C7.17157 4.5 6.5 5.17157 6.5 6V7H9.5V6C9.5 5.17157 8.82843 4.5 8 4.5Z" fill="#4D4D4D"/>
                </svg>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value)
                    onUrlChange?.(e.target.value)
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="text-sm text-white bg-transparent outline-none text-center w-full"
                  spellCheck={false}
                />
              </div>
            </div>
          </>
        )}

        {/* Copy button */}
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.25 4.5C14.2165 4.5 15 5.2835 15 6.25V13.75C15 14.7165 14.2165 15.5 13.25 15.5H7.75C6.7835 15.5 6 14.7165 6 13.75V6.25C6 5.2835 6.7835 4.5 7.75 4.5H13.25ZM7.75 6C7.61193 6 7.5 6.11193 7.5 6.25V13.75C7.5 13.8881 7.61193 14 7.75 14H13.25C13.3881 14 13.5 13.8881 13.5 13.75V6.25C13.5 6.11193 13.3881 6 13.25 6H7.75ZM8.25 0.5C9.2165 0.5 10 1.2835 10 2.25V3H8.5V2.25C8.5 2.11193 8.38807 2 8.25 2H2.75C2.61193 2 2.5 2.11193 2.5 2.25V9.75C2.5 9.88807 2.61193 10 2.75 10H4.5V11.5H2.75C1.7835 11.5 1 10.7165 1 9.75V2.25C1 1.2835 1.7835 0.5 2.75 0.5H8.25Z" fill="#4D4D4D"/>
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
