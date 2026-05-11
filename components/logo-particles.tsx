"use client"

import { useRef, useEffect, useCallback } from "react"

const SVG_PATH =
  "M294.319 4.31153L248.987 43.3362C239.752 51.1954 227.439 65.8303 221.282 76.6706L202.813 108.107C196.657 118.406 183.225 126.807 172.871 127.078C162.518 127.349 144.888 127.349 134.534 127.078C124.18 126.807 110.188 118.135 104.592 108.107L86.1226 76.6706C79.9659 66.3724 67.3738 51.4668 58.419 43.3362L12.8059 4.31153C3.85172 -3.54767 -1.74495 -0.29583 0.493592 11.0866L10.8477 63.3913C13.366 75.045 21.4816 91.5763 29.5965 100.52L62.3366 136.292C70.4522 145.236 74.6496 161.767 71.5712 173.15L70.1725 179.384C67.0941 190.765 65.4144 210.006 66.5346 221.66L67.6536 237.107C68.4928 248.761 74.0901 262.582 79.1273 267.731C84.1638 272.61 91.1598 282.366 93.9585 289.412C97.0369 296.458 106.271 306.486 114.665 312.719C123.061 318.952 135.374 321.662 141.53 318.952C148.245 316.242 158.6 316.242 164.756 318.952C171.192 321.662 183.225 318.681 192.18 312.719C200.855 306.757 210.088 296.188 212.887 289.412C215.966 282.637 222.682 272.61 227.719 267.731C232.756 262.854 238.353 249.032 239.192 237.107L240.311 221.66C241.15 210.006 239.752 190.765 236.673 179.383L235.274 173.149C232.196 161.767 236.114 145.236 244.51 136.292L277.249 100.52C285.365 91.5763 293.76 75.045 295.998 63.3913L306.352 11.0866C309.43 -0.29583 303.834 -3.27631 294.319 4.31153ZM169.513 288.057C164.756 292.665 159.439 301.066 157.76 305.672C155.522 310.28 152.723 310.28 150.764 305.672C148.526 300.795 143.489 292.664 139.571 288.057C134.814 283.45 136.493 281.824 142.929 284.805C149.366 287.786 159.999 287.786 166.155 284.805C172.312 282.095 173.991 283.45 169.513 288.057Z"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  targetX: number
  targetY: number
  startX: number
  startY: number
  jitterX: number
  jitterY: number
  delay: number
  alpha: number
  flickerPhase: number
  flickerSpeed: number
  isFlickering: boolean
  flickerStart: number
  density: number
}

function fillSVGPath(pathData: string, gridSize: number): { x: number; y: number; edgeDist: number }[] {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path.setAttribute("d", pathData)

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("viewBox", "0 0 308 320")
  svg.appendChild(path)
  document.body.appendChild(svg)

  const points: { x: number; y: number; edgeDist: number }[] = []
  const bbox = path.getBBox()

  const allPoints: { x: number; y: number }[] = []
  for (let x = bbox.x; x < bbox.x + bbox.width; x += gridSize) {
    for (let y = bbox.y; y < bbox.y + bbox.height; y += gridSize) {
      const point = svg.createSVGPoint()
      point.x = x
      point.y = y
      if (path.isPointInFill(point)) {
        allPoints.push({ x, y })
      }
    }
  }

  const pointSet = new Set(allPoints.map(p => `${p.x},${p.y}`))

  for (const p of allPoints) {
    let minDist = Infinity
    const checkDirs = [
      [-1, 0], [1, 0], [0, -1], [0, 1],
      [-1, -1], [1, -1], [-1, 1], [1, 1]
    ]
    
    for (let d = 1; d <= 10; d++) {
      for (const [dx, dy] of checkDirs) {
        const nx = p.x + dx * gridSize * d
        const ny = p.y + dy * gridSize * d
        if (!pointSet.has(`${nx},${ny}`)) {
          minDist = Math.min(minDist, d)
          break
        }
      }
    }
    
    points.push({ x: p.x, y: p.y, edgeDist: Math.min(minDist, 10) })
  }

  document.body.removeChild(svg)
  return points
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export default function LogoParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number>(0)
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false })
  const isMobileRef = useRef<boolean>(false)

  const init = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    const width = window.innerWidth
    const height = window.innerHeight
    
    // Detect mobile based on screen size and touch capability
    const isMobile = width < 768 || ('ontouchstart' in window)
    isMobileRef.current = isMobile

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.scale(dpr, dpr)

    // Use larger grid size on mobile for fewer particles and better performance
    const gridSize = isMobile ? 2.5 : 1.5
    const points = fillSVGPath(SVG_PATH, gridSize)
    
    const logoHeight = 320
    const logoWidth = 308
    // 60% larger on mobile
    const scaleFactor = isMobile ? 1.6 : 1
    const scale = Math.min(
      (height * 0.169) / logoHeight,
      (width * 0.197) / logoWidth
    ) * scaleFactor

    const offsetX = width / 2 - (logoWidth * scale) / 2
    const offsetY = height / 2 - (logoHeight * scale) / 2

    const centerX = width / 2
    const centerY = height / 2

    const filteredPoints = points.filter((point) => {
      const edgeProb = point.edgeDist <= 2 ? 1 : 0.6
      const logoCenter = { x: logoWidth / 2, y: logoHeight / 2 }
      const distFromCenter = Math.sqrt(
        Math.pow(point.x - logoCenter.x, 2) + Math.pow(point.y - logoCenter.y, 2)
      )
      const maxDist = Math.sqrt(logoCenter.x * logoCenter.x + logoCenter.y * logoCenter.y)
      const normalizedDist = distFromCenter / maxDist
      
      const densityFactor = normalizedDist < 0.3 ? 0.9 : 
                           normalizedDist > 0.7 ? 0.85 : 
                           0.5 + Math.random() * 0.2
      
      return Math.random() < edgeProb * densityFactor
    })

    const particles: Particle[] = filteredPoints.map((point) => {
      const targetX = point.x * scale + offsetX
      const targetY = point.y * scale + offsetY

      const jitterAmount = 1.5 + Math.random() * 2
      const jitterX = (Math.random() - 0.5) * jitterAmount
      const jitterY = (Math.random() - 0.5) * jitterAmount

      // Spawn from a random point on a circle around the center
      const angle = Math.random() * Math.PI * 2
      const minRadius = Math.max(width, height) * 0.6
      const maxRadius = Math.max(width, height) * 1.2
      const spawnRadius = minRadius + Math.random() * (maxRadius - minRadius)
      
      // Add randomness to the spawn position
      const angleJitter = (Math.random() - 0.5) * 0.5
      const finalAngle = angle + angleJitter
      
      const startX = centerX + Math.cos(finalAngle) * spawnRadius + (Math.random() - 0.5) * 200
      const startY = centerY + Math.sin(finalAngle) * spawnRadius + (Math.random() - 0.5) * 200

      // Calculate delay based on distance from target to center (closer = faster)
      const distFromCenter = Math.sqrt(
        Math.pow(targetX - centerX, 2) + Math.pow(targetY - centerY, 2)
      )
      const maxDist = Math.sqrt(
        Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
      )
      const normalizedDist = distFromCenter / maxDist

      // Stagger: particles going to the center arrive first
      // Add randomness for organic feel
      // On mobile, reduce delays for faster animation
      const baseDelay = normalizedDist * (isMobile ? 0.3 : 0.6)
      const randomDelay = Math.random() * (isMobile ? 0.15 : 0.25)
      const delay = baseDelay + randomDelay

      const isFlickering = Math.random() < 0.15

      return {
        x: startX,
        y: startY,
        vx: 0,
        vy: 0,
        targetX: targetX + jitterX,
        targetY: targetY + jitterY,
        startX,
        startY,
        jitterX,
        jitterY,
        delay,
        alpha: 0,
        flickerPhase: Math.random() * Math.PI * 2,
        flickerSpeed: 0.5 + Math.random() * 2,
        isFlickering,
        flickerStart: 4000 + Math.random() * 2000,
        density: point.edgeDist / 10,
      }
    })

    particlesRef.current = particles
    startTimeRef.current = null
  }, [])

  useEffect(() => {
    init()
    window.addEventListener("resize", init)
    return () => window.removeEventListener("resize", init)
  }, [init])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }
    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const attractRadius = 180
    const repelRadius = 100
    const attractStrength = 0.06
    const repelStrength = 1.2

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      // Faster animation on mobile (1.5s vs 3s on desktop)
      const duration = isMobileRef.current ? 1500 : 3000
      const globalProgress = Math.min(elapsed / duration, 1)

      const dpr = window.devicePixelRatio || 1
      const width = canvas.width / dpr
      const height = canvas.height / dpr

      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, width, height)

      const mouse = mouseRef.current
      const particles = particlesRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        const particleProgress = Math.max(0, Math.min(1, (globalProgress - p.delay) / (1 - p.delay)))
        const easedProgress = easeOutQuart(particleProgress)

        // Base position from animation
        const baseX = p.startX + (p.targetX - p.startX) * easedProgress
        const baseY = p.startY + (p.targetY - p.startY) * easedProgress

        // Magnet effect
        if (mouse.active && particleProgress > 0.3) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < repelRadius && dist > 0) {
            const force = (1 - dist / repelRadius) * repelStrength
            const pushX = (dx / dist) * force * repelRadius
            const pushY = (dy / dist) * force * repelRadius
            p.vx += pushX * 0.15
            p.vy += pushY * 0.15
          } else if (dist < attractRadius && dist > 0) {
            const normalizedDist = (dist - repelRadius) / (attractRadius - repelRadius)
            const force = (1 - normalizedDist) * attractStrength
            const pullX = -(dx / dist) * force * (attractRadius - repelRadius)
            const pullY = -(dy / dist) * force * (attractRadius - repelRadius)
            p.vx += pullX * 0.08
            p.vy += pullY * 0.08
          }
        }

        // Spring back to base position with ease-in (slow first, then faster)
        const distToTarget = Math.sqrt(Math.pow(baseX - p.x, 2) + Math.pow(baseY - p.y, 2))
        const maxReturnDist = 300
        const normalizedDist = Math.min(distToTarget / maxReturnDist, 1)
        // Ease-in: starts slow, accelerates as it gets closer
        const easeInFactor = normalizedDist * normalizedDist * normalizedDist
        // Much stronger spring on mobile for instant snap-back
        const returnStrength = isMobileRef.current 
          ? 0.15 + easeInFactor * 0.35
          : 0.008 + easeInFactor * 0.12
        
        p.vx += (baseX - p.x) * returnStrength
        p.vy += (baseY - p.y) * returnStrength

        // Heavy damping on mobile to kill oscillation, particles snap into place
        const dampingFactor = isMobileRef.current
          ? 0.65
          : 0.92 - easeInFactor * 0.08
        p.vx *= dampingFactor
        p.vy *= dampingFactor

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Alpha - fade in as particles travel
        let alpha = Math.min(1, particleProgress * 2)

        // Flickering after settled
        if (p.isFlickering && elapsed > p.flickerStart && particleProgress >= 1) {
          const flickerTime = elapsed - p.flickerStart
          const flickerCycle = Math.sin(flickerTime * 0.003 * p.flickerSpeed + p.flickerPhase)
          
          if (flickerCycle < -0.7) {
            const fadeProgress = (flickerCycle + 1) / 0.3
            alpha = easeInOutCubic(fadeProgress) * 0.3
          } else if (flickerCycle < -0.4) {
            alpha = 0.3 + (flickerCycle + 0.7) / 0.3 * 0.7
          }
        }

        // Breathing
        if (particleProgress >= 1) {
          const breathe = Math.sin(elapsed * 0.001 + p.flickerPhase) * 0.08
          alpha = Math.max(0.2, Math.min(1, alpha + breathe))
        }

        p.alpha = alpha

        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`
        ctx.fillRect(Math.round(p.x), Math.round(p.y), 1, 1)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-black"
    />
  )
}
