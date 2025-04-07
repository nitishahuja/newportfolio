"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import AboutSection from "@/components/sections/about-section"
import ExperienceSection from "@/components/sections/experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import ResumeSection from "@/components/sections/resume-section"
import ContactSection from "@/components/sections/contact-section"
import BackgroundEffects from "@/components/background-effects"

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState<string>("about")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = document.querySelectorAll(".section")
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionId = section.id

        if (sectionTop < 100 && sectionTop > -300) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      <BackgroundEffects scrollY={scrollY} />

      <Navbar activeSection={activeSection} />

      <div className="container mx-auto px-4 py-20">
        <section id="about" className="section min-h-screen flex items-center py-20">
          <AboutSection />
        </section>

        <section id="experience" className="section py-20">
          <ExperienceSection />
        </section>

        <section id="projects" className="section py-20">
          <ProjectsSection />
        </section>

        <section id="skills" className="section py-20">
          <SkillsSection />
        </section>

        <section id="resume" className="section py-20">
          <ResumeSection />
        </section>

        <section id="contact" className="section py-20">
          <ContactSection />
        </section>
      </div>
    </div>
  )
}

