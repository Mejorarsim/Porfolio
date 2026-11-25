"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const ringRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ring = ringRef.current
    const glow = glowRef.current
    if (!ring || !glow) return
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!finePointer || reduced) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let ringX = targetX
    let ringY = targetY
    let glowX = targetX
    let glowY = targetY
    let scale = 1
    let targetScale = 1
    let frame = 0

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      ring.style.opacity = "1"
      glow.style.opacity = "1"
      const interactive = (event.target as Element | null)?.closest("a, button, input, textarea")
      targetScale = interactive ? 1.9 : 1
      ring.dataset.active = interactive ? "true" : "false"
    }
    const onLeave = () => {
      ring.style.opacity = "0"
      glow.style.opacity = "0"
    }
    const tick = () => {
      ringX += (targetX - ringX) * 0.22
      ringY += (targetY - ringY) * 0.22
      glowX += (targetX - glowX) * 0.08
      glowY += (targetY - glowY) * 0.08
      scale += (targetScale - scale) * 0.18
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", onMove)
    document.documentElement.addEventListener("pointerleave", onLeave)
    frame = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("pointermove", onMove)
      document.documentElement.removeEventListener("pointerleave", onLeave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div aria-hidden="true">
      <div ref={glowRef} className="cursor-glow" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  )
}
