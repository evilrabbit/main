"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

/** Tweak these */
const DURATION_S = 7.5
const MAX_DPR = 1.5

const VERTEX_SHADER = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

/**
 * Additive point-glow fireworks in Old Glory red, white, and blue,
 * composited over a night-sky scrim via premultiplied canvas alpha.
 */
const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 u_res;
uniform float u_time;
uniform float u_dur;

#define TAU 6.28318530718
#define N_FIREWORKS 10
#define N_PARTICLES 42

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

vec2 hash21(float p) {
  return vec2(hash11(p), hash11(p + 17.17));
}

vec3 palette(float i) {
  float m = mod(i, 3.0);
  if (m < 0.5) return vec3(0.851, 0.198, 0.286); // Old Glory red
  if (m < 1.5) return vec3(1.0);                 // white
  return vec3(0.231, 0.457, 0.925);              // Old Glory blue
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;
  float t = u_time;
  float env = smoothstep(0.0, 0.5, t) * (1.0 - smoothstep(u_dur - 1.0, u_dur, t));

  vec3 col = vec3(0.0);

  for (int i = 0; i < N_FIREWORKS; i++) {
    float fi = float(i);
    float t0 = 0.3 + fi * (u_dur - 2.6) / float(N_FIREWORKS) + hash11(fi * 7.3) * 0.35;
    float lt = t - t0;
    if (lt < 0.0 || lt > 1.9) continue;

    vec2 center = vec2((hash11(fi * 3.1) - 0.5) * 1.4, -0.05 + hash11(fi * 5.7) * 0.5);
    vec3 base = palette(fi + floor(hash11(fi * 9.9) * 3.0));
    float T = lt / 1.9;

    for (int j = 0; j < N_PARTICLES; j++) {
      float fj = float(j);
      vec2 h = hash21(fi * 57.0 + fj * 13.7);
      float angle = (fj / float(N_PARTICLES) + h.x * 0.02) * TAU;
      float speed = 0.18 + 0.22 * h.y;

      vec2 p = center + vec2(cos(angle), sin(angle)) * speed * pow(T, 0.42);
      p.y -= 0.10 * T * T; // gravity

      float d = length(uv - p);
      float bright = exp(-T * 4.5) * (0.75 + 0.25 * sin(40.0 * T + fj));
      col += base * bright * 0.0011 / (d * d + 0.00003);
    }
  }

  col = clamp(col * env, 0.0, 1.0);
  float spark = max(col.r, max(col.g, col.b));
  float scrim = 0.45 * env;
  gl_FragColor = vec4(col, max(spark, scrim));
}
`

interface LifelineFireworksApi {
  launch: () => void
}

const LifelineFireworksContext = createContext<LifelineFireworksApi | null>(
  null,
)

export function useLifelineFireworks() {
  return useContext(LifelineFireworksContext)
}

function FireworksCanvas({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
    })
    if (!gl) {
      onDoneRef.current()
      return
    }

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const program = gl.createProgram()!
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX_SHADER))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER))
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      onDoneRef.current()
      return
    }
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    )
    const aPos = gl.getAttribLocation(program, "a_pos")
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, "u_res")
    const uTime = gl.getUniformLocation(program, "u_time")
    const uDur = gl.getUniformLocation(program, "u_dur")

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      canvas.width = Math.round(window.innerWidth * dpr)
      canvas.height = Math.round(window.innerHeight * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener("resize", resize)

    let frame = 0
    const start = performance.now()

    const step = (now: number) => {
      const t = (now - start) / 1000
      if (t >= DURATION_S) {
        onDoneRef.current()
        return
      }

      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, t)
      gl.uniform1f(uDur, DURATION_S)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, 3)

      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] h-full w-full"
    />
  )
}

export function LifelineFireworksProvider({
  children,
}: {
  children: ReactNode
}) {
  const [playing, setPlaying] = useState(false)

  const launch = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setPlaying(true)
  }, [])

  const done = useCallback(() => setPlaying(false), [])

  return (
    <LifelineFireworksContext.Provider value={{ launch }}>
      {children}
      {playing && <FireworksCanvas onDone={done} />}
    </LifelineFireworksContext.Provider>
  )
}
