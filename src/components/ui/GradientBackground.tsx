"use client"

import { GrainGradient } from "@paper-design/shaders-react"

export function GradientBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(0, 0%, 100%)"
        softness={0.76}
        intensity={0.45}
        noise={0}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={1}
        colors={["hsl(233, 100%, 10%)", "hsl(220, 90%, 20%)", "hsl(210, 70%, 35%)"]}
      />
    </div>
  )
}
