"use client"

import { motion } from "framer-motion"

interface NetworkNodeProps {
  id: string
  position: {
    x: number
    y: number
    color: string
  }
  isActive: boolean
  onClick: () => void
  label: string
}

export default function NetworkNode({ id, position, isActive, onClick, label }: NetworkNodeProps) {
  const size = isActive ? 80 : 60
  const pulseSize = size + 20

  return (
    <motion.div
      className="node"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      animate={{
        scale: isActive ? 1.1 : 1,
      }}
      transition={{
        duration: 0.3,
      }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
    >
      {/* Outer glow */}
      <div
        className={`node-pulse neon-border-${position.color} border-2 animate-node-pulse`}
        style={{
          width: pulseSize,
          height: pulseSize,
          marginLeft: -10,
          marginTop: -10,
        }}
      ></div>

      {/* Node content */}
      <div className={`node-content border-2 neon-border-${position.color}`}>
        <span className={`font-bold neon-text-${position.color}`}>{label}</span>
      </div>
    </motion.div>
  )
}

