"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface BackgroundEffectsProps {
  scrollY: number
}

export default function BackgroundEffects({ scrollY }: BackgroundEffectsProps) {
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([])
  const { theme } = useTheme()

  useEffect(() => {
    // Generate random glowing dots
    const generateDots = () => {
      const newDots = []
      const colors = ["var(--neon-blue)", "var(--neon-green)", "var(--neon-pink)", "var(--neon-purple)"]

      for (let i = 0; i < 15; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 400,
          size: Math.random() * 200 + 50,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      setDots(newDots)
    }

    generateDots()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Glowing dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="glowing-dot"
          style={
            {
              "--dot-color": dot.color.replace("var(--", "").replace(")", ""),
              left: `${dot.x}%`,
              top: `${dot.y + scrollY * 0.05}px`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              opacity: theme === "light" ? 0.2 : 0.4, // Adjust opacity based on theme
            } as React.CSSProperties
          }
          animate={{
            opacity: theme === "light" ? [0.1, 0.2, 0.1] : [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + dot.id,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
    </div>
  )
}

