"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Nitish Ahuja</span>
        </h1>

        <motion.h2
          className="text-xl md:text-2xl font-medium text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Full Stack Engineer & AI Specialist
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Building innovative solutions at the intersection of AI and web technologies. Experienced in developing
          data-driven applications and scalable systems.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
          <Button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-purple))] text-black hover:shadow-[0_0_15px_rgba(0,0,255,0.5)] transition-all duration-300"
            size="lg"
          >
            Explore My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute right-10 bottom-10 w-64 h-64 rounded-full bg-gradient-to-r from-[hsl(var(--neon-blue))/10] to-[hsl(var(--neon-purple))/10] blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

