"use client"

import { useEffect, useState } from "react"

export function FontWeightDemo() {
  const [weight, setWeight] = useState(100)
  const [direction, setDirection] = useState<"up" | "down">("up")

  useEffect(() => {
    const interval = setInterval(() => {
      setWeight((prevWeight) => {
        if (direction === "up") {
          if (prevWeight >= 900) {
            setDirection("down")
            return 900
          }
          return prevWeight + 10
        } else {
          if (prevWeight <= 100) {
            setDirection("up")
            return 100
          }
          return prevWeight - 10
        }
      })
    }, 30)

    return () => clearInterval(interval)
  }, [direction])

  // Calculate stroke width based on weight (thicker stroke for heavier weights)
  const strokeWidth = 1 + (weight - 100) / 200

  // Node positions that scale with weight
  const nodeScale = 0.8 + (weight - 100) / 1000

  return (
    <div className="flex items-center justify-center py-16 relative">
      {/* Main text with outline effect */}
      <div className="relative">
        <span 
          className="text-[200px] leading-none select-none"
          style={{ 
            fontWeight: weight,
            fontVariationSettings: `"wght" ${weight}`,
            WebkitTextStroke: `${strokeWidth}px white`,
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          aA
        </span>
        
        {/* Nodes overlay - positioned at key glyph points */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 280 200"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Lowercase 'a' nodes */}
          <circle cx="45" cy="95" r={3 * nodeScale} fill="white" />
          <circle cx="70" cy="55" r={3 * nodeScale} fill="white" />
          <circle cx="95" cy="75" r={3 * nodeScale} fill="white" />
          <circle cx="95" cy="115" r={3 * nodeScale} fill="white" />
          <circle cx="95" cy="155" r={3 * nodeScale} fill="white" />
          <circle cx="70" cy="155" r={3 * nodeScale} fill="white" />
          <circle cx="45" cy="135" r={3 * nodeScale} fill="white" />
          <circle cx="70" cy="105" r={3 * nodeScale} fill="white" />
          
          {/* Uppercase 'A' nodes */}
          <circle cx="155" cy="155" r={3 * nodeScale} fill="white" />
          <circle cx="175" cy="95" r={3 * nodeScale} fill="white" />
          <circle cx="195" cy="45" r={3 * nodeScale} fill="white" />
          <circle cx="215" cy="95" r={3 * nodeScale} fill="white" />
          <circle cx="235" cy="155" r={3 * nodeScale} fill="white" />
          <circle cx="175" cy="115" r={3 * nodeScale} fill="white" />
          <circle cx="215" cy="115" r={3 * nodeScale} fill="white" />
        </svg>
      </div>
    </div>
  )
}
