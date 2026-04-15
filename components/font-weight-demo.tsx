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
  const [targetWeights, setTargetWeights] = useState<number[]>(initialWeights)
  const [isHovering, setIsHovering] = useState(false)
  const animationRef = useRef<number | null>(null)

  // Smooth interpolation towards target weights
  useEffect(() => {
    const animate = () => {
      setWeights(prev => {
        const newWeights = prev.map((current, index) => {
          const target = targetWeights[index]
          const diff = target - current
          // Ease factor: smaller = smoother, larger = snappier
          const ease = isHovering ? 0.15 : 0.08
          const newWeight = current + diff * ease
          // Stop animating when close enough
          if (Math.abs(diff) < 1) return target
          return newWeight
        })
        return newWeights
      })
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [targetWeights, isHovering])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const newTargets = characters.map((_, index) => {
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
      const maxDistance = 180
      // Use easeOutCubic for smoother falloff
      const normalizedDistance = Math.min(distance / maxDistance, 1)
      const eased = 1 - Math.pow(1 - (1 - normalizedDistance), 3)
      const weight = Math.round(900 - (eased * 800))
      
      return Math.max(100, Math.min(900, weight))
    })

    setTargetWeights(newTargets)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setTargetWeights(initialWeights)
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

  // Geist Sans font metrics as percentages of the rendered text height
  // Based on actual font: ascender ~0.93em, cap ~0.73em, x-height ~0.53em, descender ~-0.21em from baseline
  // With leading-none (line-height: 1), text is positioned with baseline at ~80% from top
  const baseline = gridMetrics.height * 0.795 + 6
  const ascenderOffset = baseline - (gridMetrics.height * 0.88)   // top of "h"
  const capHeightOffset = baseline - (gridMetrics.height * 0.695) + 2 // top of "T"  
  const xHeightOffset = baseline - (gridMetrics.height * 0.505) + 2   // top of "o", "r", "a"
  const descenderOffset = baseline + (gridMetrics.height * 0.20)  // bottom of "y", "p"

  return (
    <div 
      ref={containerRef}
      className="flex items-center justify-center py-8 relative cursor-pointer select-none -mx-6 md:-mx-20"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Typographic grid lines - positioned based on actual Geist Sans metrics */}
      {gridMetrics.height > 0 && (
        <div className="absolute left-0 right-0 pointer-events-none" style={{ top: gridMetrics.top }}>
          {/* Ascender line - top of "h" */}
          <div className="absolute w-full h-px bg-[#333]" style={{ top: ascenderOffset }} />
          {/* Cap height - top of "T" */}
          <div className="absolute w-full h-px bg-[#333]" style={{ top: capHeightOffset }} />
          {/* X-height - top of lowercase "o", "r", "a", "p" body */}
          <div className="absolute w-full h-px bg-[#333]" style={{ top: xHeightOffset }} />
          {/* Baseline - where all letters sit */}
          <div className="absolute w-full h-px bg-[#444]" style={{ top: baseline }} />
          {/* Descender - bottom of "y", "p" tails */}
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
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
