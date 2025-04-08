"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  skills: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

const projects: Project[] = [
  {
    id: "resume-matcher",
    title: "Resume Matcher AI",
    description:
      "A Chrome extension that increased application-to-interview conversion rates by 1%, serving 100+ active users by leveraging Generative AI for resume optimization.",
    longDescription:
      "A Chrome extension that increased application-to-interview conversion rates by 1%, serving 100+ active users by leveraging Generative AI for resume optimization and utilizing PostgreSQL for structured data storage. Migrated from OpenAI API to a custom fine-tuned BERT model, hosting costs by 60% and improving data security, while integrating a Golang API for low-latency processing and achieving 99% uptime via AWS EC2 & S3 and load balancing.",
    image: "/resume-matcher.png?height=300&width=600",
    skills: ["React", "TypeScript", "PostgreSQL", "BERT", "Golang", "AWS"],
    links: {
      github: "https://github.com/nitishahuja/resume-match-ai",
      demo: "https://chromewebstore.google.com/detail/resume-matcher/molcjekjdoolkopcpgnlopbhifleaang?hl=en",
    },
  },
  {
    id: "real-estate",
    title: "AI Real Estate Financial Analysis",
    description:
      "Developed a real estate underwriting tool using XGBoost and synthetic data generation to predict key investment metrics with 85% prediction accuracy.",
    longDescription:
      "Developed a real estate underwriting tool using XGBoost and synthetic data generation to predict key investment metrics like ROI, NOI, Cap Rate, and Annual Cash Flow, with 85% prediction accuracy and an MAE under 5%. Engineered an optimized pipeline for data preprocessing, model training, and real-time predictions, processing 500K rows of property data to predict investment metrics, enabling faster and more accurate property evaluations.",
    image: "/RealEstateUnderwritingAI.png?height=300&width=600",
    skills: ["Python", "XGBoost", "Data Science", "React", "FastAPI"],
    links: {
      github: "https://github.com/nitishahuja/RealEstateUnderwritingAI",
    },
  },
  {
    id: "routemaster",
    title: "RouteMaster",
    description:
      "A route optimization application for delivery services that reduced travel time by 15% using advanced algorithms.",
    longDescription:
      "RouteMaster is a sophisticated route optimization application designed for delivery services. By implementing advanced algorithms including genetic algorithms and simulated annealing, the application successfully reduced travel time by 15% and fuel consumption by 12%. The system features real-time traffic integration, dynamic rerouting capabilities, and a user-friendly interface for delivery personnel.",
    image: "/RouteMaster.png?height=300&width=600",
    skills: [
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Google Maps API",
      "Algorithms",
    ],
    links: {
      github: "https://github.com/nitishahuja/RouteMaster",
      demo: "https://route-master-seven.vercel.app/",
    },
  },
  {
    id: "note-taking",
    title: "Collaborative Note Taking App",
    description:
      "Real-time collaborative note-taking application with rich text editing and version history.",
    longDescription:
      "A real-time collaborative note-taking application that allows multiple users to edit documents simultaneously. Features include rich text editing, version history, commenting, and organization with folders and tags. The application uses WebSockets for real-time updates and implements operational transformation algorithms to handle concurrent edits without conflicts.",
    image: "/Jotion.png?height=300&width=600",
    skills: ["React", "Socket.io", "MongoDB", "Express", "Draft.js"],
    links: {
      github: "https://github.com/nitishahuja/Note-Taking-App",
      demo: "https://notion-clone-inky-one.vercel.app/",
    },
  },
  {
    id: "advanced-banking",
    title: "Advanced Banking Database Architecture",
    description:
      "Developed a comprehensive relational database for banking infrastructure on Azure, managing over 8K customer records.",
    longDescription:
      "Developed a relational database for banking infrastructure on Azure, integrating modules for loans, transactions, accounting, and customer services. Utilized SQL for robust data management, supporting over 8K customer records. Implemented advanced security protocols and scalable architecture to ensure data integrity for up to a million transactions within the banking operations infrastructure.",
    image: "/AdvancedBanking.jpeg?height=300&width=600",
    skills: [
      "SQL",
      "Microsoft Azure",
      "Database Design",
      "Security",
      "Cloud Computing",
    ],
    links: {
      github: "https://github.com/nitishahuja/Banking-Infrastructure-database",
      demo: "https://fascinating-sherbet-8bed41.netlify.app/",
    },
  },
  {
    id: "image-editor",
    title: "Image Editor",
    description:
      "Java-based image processing application with custom pixel manipulation algorithms, optimized for speed.",
    longDescription:
      "Developed a Java-based Image Processing application leveraging Object-Oriented Design, MVC, and Java Swing for an advanced architecture. Optimized backend development and testing with Spring Boot and JUnit, achieving a 70% improvement in image processing speed. This resulted in quicker image analysis and enhanced user experience through JavaFX-based GUI capabilities.",
    image: "/ImageEditor.jpeg?height=300&width=600",
    skills: ["Java", "Spring Boot", "Java Swing", "JUnit", "Image Processing"],
    links: {
      github: "https://github.com/nitishahuja/Image-Editor",
    },
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my latest projects showcasing innovative solutions in AI, web
          development, and data engineering. Each project demonstrates my
          technical expertise and problem-solving approach.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="card-hover card-glass overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.skills.slice(0, 3).map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-primary/5 text-primary border-primary/20 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {project.skills.length > 3 && (
                    <Badge
                      variant="outline"
                      className="bg-primary/5 text-primary border-primary/20 text-xs"
                    >
                      +{project.skills.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setSelectedProject(project)}
                >
                  <Code className="mr-2 h-4 w-4" />
                  Details
                </Button>

                <div className="flex space-x-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-primary hover:text-primary hover:bg-primary/10 h-9 w-9"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </a>
                  )}

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-primary hover:text-primary hover:bg-primary/10 h-9 w-9"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </Button>
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Project details modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-primary/20 rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto m-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-primary">
                {selectedProject.title}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary"
                onClick={() => setSelectedProject(null)}
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
            </div>

            <div className="mb-6">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

              <p className="text-foreground/80 mb-4">
                {selectedProject.longDescription}
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2 text-primary">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {selectedProject.links.github && (
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Button>
                </a>
              )}

              {selectedProject.links.demo && (
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
