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

  return (
    <div 
      ref={containerRef}
      className="flex items-center justify-center py-8 relative cursor-pointer select-none -mx-6 md:-mx-20"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Typographic grid lines - sized to match the text */}
      <div className="absolute left-0 right-0 pointer-events-none" style={{ top: '50%', transform: 'translateY(-50%)', height: '180px' }}>
        {/* Ascender line */}
        <div className="absolute w-full flex items-center left-0 right-0" style={{ top: '0%' }}>
          <span className="text-[10px] text-[#444] font-mono pr-3 text-right w-20 flex-shrink-0">ascender</span>
          <div className="h-px bg-[#333] flex-1" />
        </div>
        {/* Cap height line */}
        <div className="absolute w-full flex items-center left-0 right-0" style={{ top: '12%' }}>
          <span className="text-[10px] text-[#444] font-mono pr-3 text-right w-20 flex-shrink-0">cap height</span>
          <div className="h-px bg-[#333] flex-1" />
        </div>
        {/* X-height line */}
        <div className="absolute w-full flex items-center left-0 right-0" style={{ top: '42%' }}>
          <span className="text-[10px] text-[#444] font-mono pr-3 text-right w-20 flex-shrink-0">x-height</span>
          <div className="h-px bg-[#333] flex-1" />
        </div>
        {/* Baseline */}
        <div className="absolute w-full flex items-center left-0 right-0" style={{ top: '75%' }}>
          <span className="text-[10px] text-[#555] font-mono pr-3 text-right w-20 flex-shrink-0">baseline</span>
          <div className="h-px bg-[#444] flex-1" />
        </div>
        {/* Descender line */}
        <div className="absolute w-full flex items-center left-0 right-0" style={{ top: '100%' }}>
          <span className="text-[10px] text-[#444] font-mono pr-3 text-right w-20 flex-shrink-0">descender</span>
          <div className="h-px bg-[#333] flex-1" />
        </div>
      </div>

      <div className="flex relative z-10">
        {characters.map((char, index) => (
          <span
            key={index}
            ref={(el) => { charRefs.current[index] = el }}
            className={`text-[80px] md:text-[140px] leading-none ${GeistSans.className}`}
            style={{
              fontWeight: weights[index],
              fontVariationSettings: `"wght" ${weights[index]}`,
              WebkitTextStroke: "1px white",
              WebkitTextFillColor: "transparent",
              color: "transparent",
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
