"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    id: "avenue-one",
    title: "Full Stack Engineer",
    company: "Avenue One",
    location: "New York City, NY",
    duration: "May 2024 – December 2024",
    description: [
      "Projected a 15% revenue increase by developing a Transaction Management System that standardized 100K+ data points across 10K+ properties, optimizing rental leases and maintenance workflows for asset management.",
      "Reduced API failures by 60% by using Serverless Stack Toolkit to test Node.js-based AWS Lambda functions pre-deployment and automating the process with GitHub Actions, integrating with Next.js, React v18, and Aurora RDS for seamless data management.",
      "Minimized data inconsistencies by 60% by implementing UI-triggered workflows that invoked store procedures, ensuring database version control with Liquibase, and standardizing development environments using Docker.",
      "Led the migration from REST to GraphQL, improving API response times by 25% and reducing cloud compute costs by 18%, while implementing CI/CD pipelines to automate deployment and ensure efficient testing.",
      "Automated reconciliation workflows, reducing manual effort by 85% for the asset management team, by deploying AWS Glue, SQS, Step Functions, and Python-based ETL to efficiently detect and process recurring lease validation patterns.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "AWS Lambda",
      "GraphQL",
      "Aurora RDS",
      "Docker",
      "AWS Glue",
      "SQS",
      "Step Functions",
      "Python",
      "ETL",
    ],
    logo: "/avenue1_logo.jpeg?height=100&width=100",
  },
  {
    id: "decision-point",
    title: "Software Engineer",
    company: "Decision Point Analytics",
    location: "India",
    duration: "June 2021 – July 2023",
    description: [
      'Engineered "Beagle" an enterprise Generative AI BI platform integrated with Microsoft Teams and Slack, building TypeScript & React interfaces and architecting Spring Boot services with a custom NLP engine, enabling natural language query resolution and driving $800K in revenue.',
      "Created and deployed Redux-driven onboarding workflows with schema-based validation and incomplete-flow detection logic, reducing enterprise integration drop-offs by 25% and improving connector stability for Power BI and RDBMS platforms.",
      "Architected a role-based system with RBAC and Kafka in Spring Boot, enabling analysts and authorized users to send contextual nudges based on user roles and cohort learnings through the dashboard, increasing user engagement by 40% for decision-makers.",
      "Designed a queue-based refresh orchestration pipeline using Spring Boot and Redis to coordinate frontend polling with backend processing, reducing dashboard latency by 30% and enabling near real-time data visualization at scale.",
      'Proposed and led the launch of "Beagle Charts," a customizable React visualization library using Chart.js, D3.js, and 3D rendering, leading a team of 4 and aligning with stakeholders to enhance analytics tooling and improve user retention by 35%.',
    ],
    technologies: [
      "TypeScript",
      "React",
      "Spring Boot",
      "NLP",
      "Redux",
      "Kafka",
      "Redis",
      "Chart.js",
      "D3.js",
      "Microsoft Teams API",
      "Slack API",
    ],
    logo: "/decision_point_logo.png?height=100&width=100",
  },
  {
    id: "elev8-solar",
    title: "Full Stack Product Engineer",
    company: "Elev8 Solar",
    location: "India",
    duration: "May 2022 – June 2023",
    description: [
      "Drove $50K+ in first-year revenue by launching a renewable energy startup, managing a 6-member team, and implementing data-driven customer acquisition strategies for scalable solar solutions.",
      "Reduced onboarding & project setup time by 40% (from ~5 days to 3 days) by integrating Python, Azure Logic Apps, and Azure DevOps Pipelines with Terraform, automating workflows from consultation to deployment-ready proposals.",
      "Increased user engagement by 25% and improved financial transparency by developing a cost analysis and projection tool using Python, Pandas, and Power BI, integrating local energy rates & installation costs to provide data-driven solar investment insights.",
    ],
    technologies: [
      "Python",
      "Azure Logic Apps",
      "Azure DevOps",
      "Terraform",
      "Pandas",
      "Power BI",
    ],
    logo: "/elev8SolarLogo.png?height=100&width=100",
  },
];

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>("avenue-one");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
          Work Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My professional journey as a Full Stack Engineer and Software
          Developer.
        </p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className={`card-glass overflow-hidden transition-all duration-300 hover:shadow-md ${
                expandedId === experience.id ? "border-primary" : ""
              }`}
            >
              <CardContent className="p-0">
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(experience.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="hidden md:block w-16 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                        <img
                          src={experience.logo || "/placeholder.svg"}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {experience.title}
                        </h3>
                        <div className="flex items-center mt-1 text-foreground/80">
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center mt-1 text-muted-foreground">
                          <div className="flex items-center mr-4">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{experience.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(experience.id);
                      }}
                    >
                      {expandedId === experience.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>

                  {/* Preview of first responsibility */}
                  {expandedId !== experience.id && (
                    <p className="mt-4 text-foreground/80 line-clamp-2">
                      {experience.description[0]}
                    </p>
                  )}
                </div>

                {/* Expanded content */}
                {expandedId === experience.id && (
                  <div className="px-6 pb-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-primary">
                        Responsibilities & Achievements:
                      </h4>
                      <ul className="space-y-3">
                        {experience.description.map((item, i) => (
                          <li key={i} className="flex">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-primary mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
