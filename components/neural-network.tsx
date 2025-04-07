"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import NetworkNode from "@/components/network-node";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import ResumeSection from "@/components/sections/resume-section";
import ContactSection from "@/components/sections/contact-section";
import IntroSection from "@/components/sections/intro-section";
import { useMobile } from "@/hooks/use-mobile";

type Section =
  | "intro"
  | "projects"
  | "skills"
  | "experience"
  | "resume"
  | "contact";

interface NodePosition {
  x: number;
  y: number;
  color: string;
}

export default function NeuralNetwork() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [nodePositions, setNodePositions] = useState<
    Record<Section, NodePosition>
  >({
    intro: { x: 50, y: 30, color: "blue" },
    projects: { x: 25, y: 40, color: "green" },
    skills: { x: 75, y: 40, color: "pink" },
    experience: { x: 30, y: 70, color: "purple" },
    resume: { x: 50, y: 80, color: "blue" },
    contact: { x: 70, y: 70, color: "green" },
  });
  const [connections, setConnections] = useState<
    { from: Section; to: Section; active: boolean }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  useEffect(() => {
    // Create connections between nodes
    const newConnections = [
      { from: "intro", to: "projects", active: false },
      { from: "intro", to: "skills", active: false },
      { from: "intro", to: "experience", active: false },
      { from: "projects", to: "skills", active: false },
      { from: "projects", to: "experience", active: false },
      { from: "skills", to: "experience", active: false },
      { from: "experience", to: "resume", active: false },
      { from: "skills", to: "resume", active: false },
      { from: "resume", to: "contact", active: false },
      { from: "experience", to: "contact", active: false },
    ];
    setConnections(newConnections);

    // Adjust positions for mobile
    if (isMobile) {
      setNodePositions({
        intro: { x: 50, y: 15, color: "blue" },
        projects: { x: 30, y: 30, color: "green" },
        skills: { x: 70, y: 30, color: "pink" },
        experience: { x: 30, y: 50, color: "purple" },
        resume: { x: 70, y: 50, color: "blue" },
        contact: { x: 50, y: 70, color: "green" },
      });
    }

    // Set intro as active after a delay
    const timer = setTimeout(() => {
      setActiveSection("intro");
    }, 1000);

    return () => clearTimeout(timer);
  }, [isMobile]);

  const handleNodeClick = (section: Section) => {
    // Activate connections from current active section to the new section
    if (activeSection) {
      setConnections((prev) =>
        prev.map((conn) => {
          if (
            (conn.from === activeSection && conn.to === section) ||
            (conn.from === section && conn.to === activeSection)
          ) {
            return { ...conn, active: true };
          }
          return conn;
        })
      );
    }

    setActiveSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
  };

  const renderConnections = () => {
    return connections.map((conn, index) => {
      const fromNode = nodePositions[conn.from];
      const toNode = nodePositions[conn.to];

      // Calculate start and end positions
      const startX = `${fromNode.x}%`;
      const startY = `${fromNode.y}%`;
      const endX = `${toNode.x}%`;
      const endY = `${toNode.y}%`;

      // Create a unique ID for the connection
      const id = `${conn.from}-${conn.to}`;

      return (
        <svg
          key={id}
          className="connection"
          style={{
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke={`hsl(var(--neon-${fromNode.color}))`}
            strokeWidth={conn.active ? "3" : "1"}
            strokeOpacity={conn.active ? "0.8" : "0.3"}
            strokeDasharray={conn.active ? "none" : "5,5"}
            className={conn.active ? "animate-flow" : ""}
          />
        </svg>
      );
    });
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      ref={containerRef}
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(50,50,50,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>

      {/* Neural network connections */}
      {renderConnections()}

      {/* Neural network nodes */}
      {Object.entries(nodePositions).map(([key, position]) => (
        <NetworkNode
          key={key}
          id={key as Section}
          position={position}
          isActive={activeSection === key}
          onClick={() => handleNodeClick(key as Section)}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
        />
      ))}

      {/* Theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Section content */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="section-container active"
          >
            <div
              className={`section-content neon-border-${nodePositions[activeSection].color}`}
            >
              <button
                onClick={closeSection}
                className="close-button"
                aria-label="Close section"
              >
                <X
                  className={`w-6 h-6 neon-text-${nodePositions[activeSection].color}`}
                />
              </button>

              {activeSection === "intro" && <IntroSection />}
              {activeSection === "projects" && <ProjectsSection />}
              {activeSection === "skills" && <SkillsSection />}
              {activeSection === "experience" && <ExperienceSection />}
              {activeSection === "resume" && <ResumeSection />}
              {activeSection === "contact" && <ContactSection />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
