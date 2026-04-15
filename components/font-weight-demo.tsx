"use client"

import { useState, useRef, useEffect } from "react"
import { GeistSans } from "geist/font/sans"

const word = "Typography"
const characters = word.split("")

// Initial gradient weights from thin (100) to black (900)
const initialWeights = characters.map((_, index) => {
  const progress = index / (characters.length - 1)
  return Math.round(100 + progress * 800)
})

export function FontWeightDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const charRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [weights, setWeights] = useState<number[]>(initialWeights)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const newWeights = characters.map((_, index) => {
      const charEl = charRefs.current[index]
      if (!charEl) return 100

      const rect = charEl.getBoundingClientRect()
      const charCenterX = rect.left + rect.width / 2
      const charCenterY = rect.top + rect.height / 2
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - charCenterX, 2) + 
        Math.pow(e.clientY - charCenterY, 2)
      )

      // Max distance for effect (in pixels)
      const maxDistance = 200
      // Calculate weight based on proximity (closer = heavier)
      const normalizedDistance = Math.min(distance / maxDistance, 1)
      const weight = Math.round(900 - (normalizedDistance * 800))
      
      return Math.max(100, Math.min(900, weight))
    })

    setWeights(newWeights)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setWeights(initialWeights)
  }

  const textRef = useRef<HTMLDivElement>(null)
  const [gridMetrics, setGridMetrics] = useState({ top: 0, height: 0 })

  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect()
      const containerRect = containerRef.current?.getBoundingClientRect()
      if (containerRect) {
        setGridMetrics({
          top: rect.top - containerRect.top,
          height: rect.height
        })
      }
    }
  }, [])

  // Geist Sans metrics (approximate ratios of em)
  const ascenderOffset = gridMetrics.height * 0.05
  const capHeightOffset = gridMetrics.height * 0.18
  const xHeightTopOffset = gridMetrics.height * 0.35
  const xHeightBottomOffset = gridMetrics.height * 0.78
  const descenderOffset = gridMetrics.height * 0.98

  return (
    <div 
      ref={containerRef}
      className="flex items-center justify-center py-8 relative cursor-pointer select-none -mx-6 md:-mx-20"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Typographic grid lines - positioned based on actual text metrics */}
      {gridMetrics.height > 0 && (
        <div className="absolute left-0 right-0 pointer-events-none" style={{ top: gridMetrics.top }}>
          {/* Ascender line - top of h */}
          <div className="absolute w-full h-px bg-[#333]" style={{ top: ascenderOffset }} />
          {/* Cap height - top of T */}
          <div className="absolute w-full h-px bg-[#333]" style={{ top: capHeightOffset }} />
          {/* x-height top - top of lowercase letters like o, a, r */}
          <div className="absolute w-full h-px bg-[#333]" style={{ top: xHeightTopOffset }} />
          {/* x-height bottom / baseline - where lowercase letters sit */}
          <div className="absolute w-full h-px bg-[#444]" style={{ top: xHeightBottomOffset }} />
          {/* Descender - bottom of y, p, g */}
          <div className="absolute w-full h-px bg-[#333]" style={{ top: descenderOffset }} />
        </div>
      )}

      <div ref={textRef} className="flex relative z-10">
        {characters.map((char, index) => (
          <span
            key={index}
            ref={(el) => { charRefs.current[index] = el }}
            className={`text-[80px] md:text-[140px] leading-none ${GeistSans.className}`}
            style={{
              fontWeight: weights[index],
              fontVariationSettings: `"wght" ${weights[index]}`,
              color: "white",
              transition: isHovering 
                ? "font-weight 0.15s ease-out, font-variation-settings 0.15s ease-out"
                : "font-weight 0.4s ease-out, font-variation-settings 0.4s ease-out",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
