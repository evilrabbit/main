"use client"

import { useState, useRef, useEffect } from "react"
import { GeistSans } from "geist/font/sans"

export function FontWeightDemo() {
  const [weight, setWeight] = useState(100)
  const [isHovering, setIsHovering] = useState(false)
  const [trails, setTrails] = useState<number[]>([])
  const lastTrailWeight = useRef(100)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (isHovering) {
      // Animate to 900 on hover
      const animate = () => {
        setWeight((prevWeight) => {
          if (prevWeight >= 900) {
            return 900
          }
          const newWeight = Math.min(900, prevWeight + 15)
          return newWeight
        })
        animationRef.current = requestAnimationFrame(animate)
      }
      // Start with a small delay
      const timeout = setTimeout(() => {
        animationRef.current = requestAnimationFrame(animate)
      }, 100)
      return () => {
        clearTimeout(timeout)
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
      }
    } else {
      // Animate back to 100 on mouse leave
      const animate = () => {
        setWeight((prevWeight) => {
          if (prevWeight <= 100) {
            setTrails([]) // Clear trails when back to start
            return 100
          }
          return Math.max(100, prevWeight - 15)
        })
        animationRef.current = requestAnimationFrame(animate)
      }
      animationRef.current = requestAnimationFrame(animate)
      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovering])

  // Add trail at certain weight intervals
  useEffect(() => {
    const weightDiff = Math.abs(weight - lastTrailWeight.current)
    if (weightDiff >= 100 && isHovering) {
      lastTrailWeight.current = weight
      setTrails(prev => {
        const newTrails = [...prev, weight]
        if (newTrails.length > 8) {
          return newTrails.slice(-8)
        }
        return newTrails
      })
    }
    if (weight === 100) {
      lastTrailWeight.current = 100
    }
  }, [weight, isHovering])

  return (
    <div 
      className="flex items-center justify-center py-16 relative cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
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
        }}
      >
        Typography
      </span>
    </div>
  )
}
