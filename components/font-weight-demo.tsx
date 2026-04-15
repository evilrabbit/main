"use client"

import { useState } from "react"
import { GeistSans } from "geist/font/sans"

const word = "Typography"
const characters = word.split("")

export function FontWeightDemo() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div 
      className="flex items-center justify-center py-16 relative cursor-pointer select-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex">
        {characters.map((char, index) => (
          <span
            key={index}
            className={`text-[80px] md:text-[140px] leading-none ${GeistSans.className}`}
            style={{
              fontWeight: isHovering ? 900 : 100,
              fontVariationSettings: `"wght" ${isHovering ? 900 : 100}`,
              WebkitTextStroke: "1.5px white",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              transition: `font-weight 0.6s ease-out ${index * 0.05}s, font-variation-settings 0.6s ease-out ${index * 0.05}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
