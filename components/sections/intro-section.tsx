"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function IntroSection() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--neon-blue))] via-[hsl(var(--neon-purple))] to-[hsl(var(--neon-pink))]">
          Nitish Ahuja
        </h1>
        <h2 className="text-xl md:text-2xl neon-text-blue mb-6">Full Stack Engineer & AI Specialist</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="prose prose-invert max-w-none"
      >
        <p className="text-lg">
          Welcome to my interactive portfolio. I'm a Full Stack Engineer with expertise in AI and web technologies,
          currently pursuing my Master's in Computer Information Systems at Northeastern University.
        </p>

        <p className="text-lg mt-4">
          With experience at companies like Avenue One and Decision Point Analytics, I specialize in building
          data-driven applications, AI-powered platforms, and scalable web solutions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-lg border border-[hsl(var(--neon-blue))] shadow-[0_0_10px_rgba(0,0,255,0.3)]">
          <h3 className="text-xl font-bold neon-text-blue mb-2">Full Stack Development</h3>
          <p className="text-gray-300">Building scalable web applications with modern frameworks and technologies</p>
        </div>

        <div className="bg-black bg-opacity-60 p-6 rounded-lg border border-[hsl(var(--neon-green))] shadow-[0_0_10px_rgba(0,255,0,0.3)]">
          <h3 className="text-xl font-bold neon-text-green mb-2">AI & Machine Learning</h3>
          <p className="text-gray-300">Implementing intelligent solutions with cutting-edge AI technologies</p>
        </div>

        <div className="bg-black bg-opacity-60 p-6 rounded-lg border border-[hsl(var(--neon-purple))] shadow-[0_0_10px_rgba(128,0,255,0.3)]">
          <h3 className="text-xl font-bold neon-text-purple mb-2">Data Engineering</h3>
          <p className="text-gray-300">Creating efficient data pipelines and analytics solutions</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-lg mb-4">Explore my portfolio by clicking on the neural network nodes</p>
        <div className="flex items-center justify-center space-x-2 animate-pulse">
          <span className="neon-text-blue">Navigate</span>
          <ArrowRight className="h-5 w-5 text-[hsl(var(--neon-blue))]" />
        </div>
      </motion.div>
    </div>
  )
}

