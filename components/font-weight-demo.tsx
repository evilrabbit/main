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

  return (
    <div className="flex items-center justify-center py-12">
      <span 
        className="text-[120px] leading-none text-white select-none"
        style={{ 
          fontWeight: weight,
          fontVariationSettings: `"wght" ${weight}`,
          transition: "font-weight 30ms linear"
        }}
      >
        aA
      </span>
    </div>
  )
}
