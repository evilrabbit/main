"use client"

import { useState, useRef, useEffect } from "react"

interface Tab {
  favicon?: React.ReactNode
  title: string
  url?: string
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
  const [copied, setCopied] = useState(false)
  const [visibleTabs, setVisibleTabs] = useState<Tab[]>(tabs || [])
  const [hasMounted, setHasMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Trigger fade-in after mount
  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // When down to 1 tab, switch to URL mode with that tab's URL or generate from title
  useEffect(() => {
    if (tabs && visibleTabs.length === 1) {
      const lastTab = visibleTabs[0]
      const tabUrl = lastTab.url || lastTab.title.toLowerCase().replace(/\s+/g, '') + ".com"
      setInputValue(tabUrl)
    }
  }, [visibleTabs, tabs])

  // Reset tabs immediately when all tabs are closed
  useEffect(() => {
    if (tabs && visibleTabs.length === 0) {
      setVisibleTabs(tabs)
      setInputValue(url)
    }
  }, [visibleTabs.length, tabs, url])

  // Sync with prop changes
  useEffect(() => {
    if (tabs) {
      setVisibleTabs(tabs)
    }
  }, [tabs])

  const handleCloseTab = (indexToClose: number) => {
    setVisibleTabs(prev => {
      const newTabs = prev.filter((_, index) => index !== indexToClose)
      // If closing the last tab, reset to all tabs immediately
      if (newTabs.length === 0 && tabs) {
        setInputValue(url)
        return tabs
      }
      return newTabs
    })
  }

  const handleActivateTab = (indexToActivate: number) => {
    setVisibleTabs(prev => prev.map((tab, index) => ({
      ...tab,
      active: index === indexToActivate
    })))
  }

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', index.toString())
    
    // Create a custom drag image with rounded corners
    const target = e.currentTarget as HTMLElement
    const clone = target.cloneNode(true) as HTMLElement
    clone.style.position = 'absolute'
    clone.style.top = '-1000px'
    clone.style.left = '-1000px'
    clone.style.borderRadius = '9999px'
    clone.style.overflow = 'hidden'
    clone.style.backgroundColor = '#222'
    clone.style.padding = '6px 12px'
    document.body.appendChild(clone)
    e.dataTransfer.setDragImage(clone, clone.offsetWidth / 2, clone.offsetHeight / 2)
    
    // Remove clone after drag starts
    requestAnimationFrame(() => {
      document.body.removeChild(clone)
    })
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index)
    }
  }

  const handleDragLeave = () => {
    setDragOverIndex(null)
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      setVisibleTabs(prev => {
        const newTabs = [...prev]
        const [draggedTab] = newTabs.splice(draggedIndex, 1)
        newTabs.splice(dropIndex, 0, draggedTab)
        return newTabs
      })
    }
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputValue)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div 
      className={`overflow-hidden border border-[#333] ${showContent ? 'rounded-xl' : 'rounded-full'}`} 
      style={{ backgroundColor: "#000", maxWidth: showContent ? "800px" : "650px", width: "100%" }}
    >
      {/* Browser header */}
      <div className="flex items-center px-4 py-2.5 gap-4 h-11">
        {/* Traffic lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Tabs (if more than 1) or URL bar */}
        {tabs && visibleTabs.length > 1 ? (
          <div className="flex-1 relative overflow-hidden -ml-2">
            <div 
              className={`flex items-center gap-1 overflow-x-auto px-6 transition-opacity duration-500 ${hasMounted ? 'opacity-100' : 'opacity-0'}`} 
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <>
                {visibleTabs.map((tab, index) => (
                  <div 
                    key={tab.title}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragEnd={handleDragEnd}
                    onClick={() => !tab.active && handleActivateTab(index)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm flex-shrink-0 transition-all duration-150 ease-out cursor-grab active:cursor-grabbing ${
                      draggedIndex === index 
                        ? 'opacity-50' 
                        : dragOverIndex === index 
                          ? 'bg-[#333] text-white' 
                          : tab.active 
                            ? 'bg-[#222] text-white' 
                            : 'bg-transparent text-[#666] hover:bg-[#161616] hover:text-[#999]'
                    }`}
                  >
                    {tab.favicon && (
                      <div className="w-4 h-4 overflow-hidden flex items-center justify-center bg-white text-black text-[10px] font-bold flex-shrink-0" style={{ borderRadius: "22%" }}>
                        {tab.favicon}
                      </div>
                    )}
                    <span className="whitespace-nowrap">{tab.title}</span>
                    <button 
                      onClick={() => handleCloseTab(index)}
                      className="flex-shrink-0 opacity-50 hover:opacity-100 p-1.5 -m-1.5 transition-all duration-150 ease-out"
                    >
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </>
            </div>
            {/* Gradient fade on left */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-6 pointer-events-none"
              style={{ background: "linear-gradient(to right, black, transparent)" }}
            />
            {/* Gradient fade on right */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-6 pointer-events-none"
              style={{ background: "linear-gradient(to left, black, transparent)" }}
            />
          </div>
        ) : (
          <>
            {/* Navigation arrows */}
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
                <path d="M10.8534 7.29286C11.2439 7.68338 11.2439 8.3164 10.8534 8.70692L5.49989 14.0604L4.43935 12.9999L9.43935 7.99989L4.43935 2.99989L5.49989 1.93934L10.8534 7.29286Z" fill="#666666"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8534 7.29286C11.2439 7.68338 11.2439 8.3164 10.8534 8.70692L5.49989 14.0604L4.43935 12.9999L9.43935 7.99989L4.43935 2.99989L5.49989 1.93934L10.8534 7.29286Z" fill="#666666"/>
              </svg>
            </div>

            {/* URL bar */}
            <div 
              className="flex-1 flex items-center justify-center"
              onClick={() => inputRef.current?.focus()}
            >
              <div 
                className={`relative flex items-center justify-center bg-[#222] rounded-full pl-4 pr-8 py-1.5 min-w-[280px] transition-all cursor-text hover:bg-[#2a2a2a] ${isFocused ? 'bg-[#2a2a2a]' : ''}`}
              >
                <div className="flex items-center justify-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5V6C5 4.34315 6.34315 3 8 3ZM8 4.5C7.17157 4.5 6.5 5.17157 6.5 6V7H9.5V6C9.5 5.17157 8.82843 4.5 8 4.5Z" fill="#4D4D4D"/>
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value)
                      onUrlChange?.(e.target.value)
                    }}
                    onFocus={(e) => {
                      setIsFocused(true)
                      e.target.select()
                    }}
                    onBlur={() => {
                      setIsFocused(false)
                      if (inputValue.trim() === "") {
                        setInputValue(url)
                      }
                    }}
                    className="text-sm text-white bg-transparent outline-none selection:bg-white selection:text-black caret-white"
                    style={{ width: `${Math.max(inputValue.length + 1, 1)}ch` }}
                    spellCheck={false}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                  />
                </div>
                <button className="absolute right-2 p-2 -m-2 text-[#4D4D4D] hover:text-white transition-all duration-150 ease-out">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.96875 0.875C10.3651 0.875 13.125 3.61376 13.125 7C13.125 10.3862 10.3651 13.125 6.96875 13.125C4.92066 13.1249 3.10477 12.1293 1.98633 10.5986L1.59961 10.0684L2.65918 9.29395L3.04688 9.82422C3.92772 11.0295 5.35557 11.8124 6.96875 11.8125C9.64727 11.8125 11.8125 9.65437 11.8125 7C11.8125 4.34563 9.64727 2.1875 6.96875 2.1875C4.74997 2.18759 2.88317 3.67001 2.30859 5.6875H5.25V7H0.65625C0.293813 7 0 6.70619 0 6.34375V1.75H1.3125V4.58301C2.25538 2.40103 4.43352 0.875081 6.96875 0.875Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}

        {/* Close tab button - show when exactly 1 tab remaining */}
        {tabs && visibleTabs.length === 1 && (
          <button 
            onClick={() => handleCloseTab(0)}
            className="text-[#4D4D4D] hover:text-white transition-all duration-150 ease-out cursor-pointer p-1"
            title="Close tab"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        )}

        {/* Copy button - show when in URL mode (no tabs or 1 or fewer tabs) */}
        {(!tabs || visibleTabs.length <= 1) && (
          <button 
            onClick={handleCopy}
            className="text-[#4D4D4D] hover:text-white transition-all duration-150 ease-out cursor-pointer"
            title={copied ? "Copied!" : "Copy URL"}
          >
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.25 4.5C14.2165 4.5 15 5.2835 15 6.25V13.75C15 14.7165 14.2165 15.5 13.25 15.5H7.75C6.7835 15.5 6 14.7165 6 13.75V6.25C6 5.2835 6.7835 4.5 7.75 4.5H13.25ZM7.75 6C7.61193 6 7.5 6.11193 7.5 6.25V13.75C7.5 13.8881 7.61193 14 7.75 14H13.25C13.3881 14 13.5 13.8881 13.5 13.75V6.25C13.5 6.11193 13.3881 6 13.25 6H7.75ZM8.25 0.5C9.2165 0.5 10 1.2835 10 2.25V3H8.5V2.25C8.5 2.11193 8.38807 2 8.25 2H2.75C2.61193 2 2.5 2.11193 2.5 2.25V9.75C2.5 9.88807 2.61193 10 2.75 10H4.5V11.5H2.75C1.7835 11.5 1 10.7165 1 9.75V2.25C1 1.2835 1.7835 0.5 2.75 0.5H8.25Z" fill="currentColor"/>
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Content area */}
      {showContent && (
        <div className="bg-black" style={{ height: "480px" }}>
          {children}
        </div>
      )}
    </div>
  )
}
