"use client"

import { useEffect, useRef } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()/\\[]{}|<>+="
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize) + 1

    // Array to track y-position of each column
    const drops = new Array(columns).fill(1)

    const getRandomChar = () => {
      return characters[Math.floor(Math.random() * characters.length)]
    }

    const draw = () => {
      // Semi-transparent black background to create fade effect
      ctx.fillStyle = "rgba(9, 9, 11, 0.25)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text style
      ctx.fillStyle = "rgba(0, 255, 0, 0.15)"
      ctx.font = `${fontSize}px monospace`

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = getRandomChar()
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(text, x, y)

        // Reset position if drop reaches bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move drop down
        drops[i]++
      }
    }

    const animate = () => {
      draw()
      animationFrameId = requestAnimationFrame(animate)
    }

    let animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-zinc-950" aria-hidden="true" />
}

