import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "United States — Lifeline, 1776 to 2026"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const FLAG_SCALE = 4

// Same geometry as components/us-flag.tsx (44 x 30), scaled up.
const FLAG_RECTS = [
  { x: 0, y: 0, w: 18, h: 14 },
  { x: 20, y: 0, w: 24, h: 6 },
  { x: 20, y: 8, w: 24, h: 6 },
  { x: 0, y: 16, w: 44, h: 6 },
  { x: 0, y: 24, w: 44, h: 6 },
]

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            width: 44 * FLAG_SCALE,
            height: 30 * FLAG_SCALE,
          }}
        >
          {FLAG_RECTS.map((rect, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: rect.x * FLAG_SCALE,
                top: rect.y * FLAG_SCALE,
                width: rect.w * FLAG_SCALE,
                height: rect.h * FLAG_SCALE,
                backgroundColor: "#fff",
              }}
            />
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            United States
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginTop: 16,
            }}
          >
            <div style={{ fontSize: 36, color: "#71717a" }}>1776–2026</div>
            <div style={{ fontSize: 28, color: "#52525b" }}>
              lifeline.evilrabbit.com
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
