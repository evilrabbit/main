"use client"

import { useEffect, useState, useRef } from "react"
import { GeistSans } from "geist/font/sans"

export function FontWeightDemo() {
  const [weight, setWeight] = useState(100)
  const [direction, setDirection] = useState<"up" | "down">("up")
  const [trails, setTrails] = useState<number[]>([])
  const lastTrailWeight = useRef(100)

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

  // Add trail at certain weight intervals
  useEffect(() => {
    const weightDiff = Math.abs(weight - lastTrailWeight.current)
    if (weightDiff >= 100) {
      lastTrailWeight.current = weight
      setTrails(prev => {
        const newTrails = [...prev, weight]
        // Keep only last 8 trails
        if (newTrails.length > 8) {
          return newTrails.slice(-8)
        }
        return newTrails
      })
    }
  }, [weight])

  return (
    <div className="flex items-center justify-center py-16 relative">
      {/* Trail layers */}
      {trails.map((trailWeight, index) => {
        const age = trails.length - index
        const opacity = Math.max(0.08, 0.5 - (age * 0.06))
        return (
          <span
            key={`${trailWeight}-${index}`}
            className={`text-[120px] md:text-[180px] leading-none select-none absolute ${GeistSans.className}`}
            style={{
              fontWeight: trailWeight,
              fontVariationSettings: `"wght" ${trailWeight}`,
              WebkitTextStroke: "1px rgba(255,255,255," + opacity + ")",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Typography
          </span>
        )
      })}
      
      {/* Current weight - outlined */}
      <span 
        className={`text-[120px] md:text-[180px] leading-none select-none relative z-10 ${GeistSans.className}`}
        style={{ 
          fontWeight: weight,
          fontVariationSettings: `"wght" ${weight}`,
          WebkitTextStroke: "1.5px white",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          transition: "font-weight 30ms linear"
        }}
      >
        Typography
      </span>
    </div>
  )
}
