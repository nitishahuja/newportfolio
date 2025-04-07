"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: "language" | "framework" | "database" | "cloud" | "tool";
  description: string;
  icon: string; // New icon field for better visual appeal
  example: string; // Real world example of how the skill is used
}

const skills: Skill[] = [
  // Languages
  {
    name: "JavaScript",
    level: 90,
    category: "language",
    description:
      "Expert in modern JavaScript (ES6+) with extensive experience in asynchronous programming, closures, and functional programming concepts.",
    icon: "js-icon",
    example:
      "Used for building scalable front-end applications with React and Node.js in enterprise applications at Avenue One and Decision Point Analytics.",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "language",
    description:
      "Proficient in TypeScript with strong typing, interfaces, generics, and advanced type manipulation.",
    icon: "ts-icon",
    example:
      "Used in the development of enterprise platforms at Decision Point Analytics and Avenue One, ensuring type safety and reducing runtime errors.",
  },
  {
    name: "Python",
    level: 85,
    category: "language",
    description:
      "Strong Python skills for data processing, API development, and machine learning applications.",
    icon: "python-icon",
    example:
      "Built AI-based models for real estate analysis using XGBoost and Python at AI Real Estate Financial Analysis project, as well as data-driven tools at Elev8 Solar.",
  },
  {
    name: "Java",
    level: 80,
    category: "language",
    description:
      "Experienced in Java development with Spring Boot, multithreading, and enterprise application architecture.",
    icon: "java-icon",
    example:
      "Developed backend services and APIs with Spring Boot for scalable applications in enterprise solutions at Decision Point Analytics.",
  },
  {
    name: "SQL",
    level: 85,
    category: "language",
    description:
      "Advanced SQL knowledge including complex joins, window functions, and query optimization.",
    icon: "sql-icon",
    example:
      "Used for optimizing complex queries and managing large-scale data at Avenue One, working with PostgreSQL and MySQL.",
  },

  // Frameworks
  {
    name: "React.js",
    level: 90,
    category: "framework",
    description:
      "Expert in React with hooks, context API, custom hooks, and performance optimization techniques.",
    icon: "react-icon",
    example:
      "Built dynamic, interactive UIs for enterprise applications, such as Beagle at Decision Point Analytics and the Transaction Management System at Avenue One.",
  },
  {
    name: "Node.js",
    level: 85,
    category: "framework",
    description:
      "Extensive experience building scalable backend services with Node.js and Express.",
    icon: "nodejs-icon",
    example:
      "Developed high-performance backend services at Avenue One, improving API reliability and performance using Node.js and Express.",
  },
  {
    name: "Next.js",
    level: 85,
    category: "framework",
    description:
      "Advanced knowledge of Next.js for server-side rendering, static site generation, and API routes.",
    icon: "nextjs-icon",
    example:
      "Built SEO-friendly websites with Next.js, leveraging SSR and static generation for performance optimization in various client projects.",
  },
  {
    name: "Spring Boot",
    level: 75,
    category: "framework",
    description:
      "Experience with Spring Boot for building enterprise Java applications.",
    icon: "springboot-icon",
    example:
      "Developed and maintained enterprise-level applications and microservices at Decision Point Analytics using Spring Boot.",
  },

  // Databases
  {
    name: "PostgreSQL",
    level: 85,
    category: "database",
    description:
      "Advanced knowledge of PostgreSQL including performance tuning, indexing strategies, and complex queries.",
    icon: "postgresql-icon",
    example:
      "Used PostgreSQL to manage and optimize large datasets in the Resume Matcher AI and Beagle platforms for fast data retrieval and security.",
  },
  {
    name: "MySQL",
    level: 80,
    category: "database",
    description:
      "Strong experience with MySQL database design, optimization, and administration.",
    icon: "mysql-icon",
    example:
      "Handled large-scale MySQL databases in production at Avenue One, ensuring data consistency and performance.",
  },
  {
    name: "MongoDB",
    level: 75,
    category: "database",
    description:
      "Proficient in MongoDB schema design, aggregation pipeline, and indexing.",
    icon: "mongodb-icon",
    example:
      "Used MongoDB for scalable, NoSQL data storage in client applications, ensuring fast data retrieval and flexibility.",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    level: 80,
    category: "cloud",
    description:
      "Extensive experience with AWS services including EC2, S3, Lambda, and more.",
    icon: "aws-icon",
    example:
      "Deployed scalable cloud applications using AWS services like EC2, S3, and Lambda, optimizing the infrastructure for cost savings and performance at Avenue One.",
  },
  {
    name: "Docker",
    level: 85,
    category: "cloud",
    description:
      "Proficient in containerization with Docker for development and deployment.",
    icon: "docker-icon",
    example:
      "Implemented Docker for containerizing development environments at Avenue One, ensuring seamless deployment across environments.",
  },
  {
    name: "Kubernetes",
    level: 75,
    category: "cloud",
    description:
      "Experience with Kubernetes for container orchestration and deployment.",
    icon: "kubernetes-icon",
    example:
      "Used Kubernetes for orchestrating and managing containerized applications in cloud-based environments at Elev8 Solar.",
  },
  {
    name: "Terraform",
    level: 70,
    category: "cloud",
    description: "Knowledge of infrastructure as code using Terraform.",
    icon: "terraform-icon",
    example:
      "Implemented Terraform for automating cloud infrastructure setup, reducing manual setup time by 40% at Elev8 Solar.",
  },
];

const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "language", name: "Languages" },
  { id: "framework", name: "Frameworks & Libraries" },
  { id: "database", name: "Databases" },
  { id: "cloud", name: "Cloud & DevOps" },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level);

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
          Skills
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My technical expertise spans various programming languages,
          frameworks, databases, and cloud technologies.
        </p>
      </motion.div>

      {/* Skill Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {skillCategories.map((category) => (
            <Badge
              key={category.id}
              className={`cursor-pointer text-sm py-1.5 px-3 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {sortedSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Card
              className="card-hover card-glass transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedSkill(skill)}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-foreground">{skill.name}</h4>
                  <Badge className="bg-primary/10 text-primary border border-primary/20">
                    {skill.level}%
                  </Badge>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 mb-2">
                  <div
                    className="bg-primary h-2.5 rounded-full skill-bar-fill"
                    style={
                      {
                        "--bar-width": `${skill.level}%`,
                      } as React.CSSProperties
                    }
                  ></div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {skill.category}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-primary/20 rounded-lg p-6 max-w-md w-full m-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-primary">
                {selectedSkill.name}
              </h3>
              <button
                className="text-primary hover:text-primary/80"
                onClick={() => setSelectedSkill(null)}
              >
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
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-foreground/80">Proficiency:</span>
                <Badge className="bg-primary text-primary-foreground">
                  {selectedSkill.level}%
                </Badge>
              </div>
              <div className="w-full bg-secondary rounded-full h-2.5 mb-4">
                <div
                  className="bg-primary h-2.5 rounded-full skill-bar-fill"
                  style={
                    {
                      "--bar-width": `${selectedSkill.level}%`,
                    } as React.CSSProperties
                  }
                ></div>
              </div>

              <div className="mb-4">
                <span className="text-foreground/80">Category:</span>
                <Badge className="ml-2 bg-primary/10 text-primary border border-primary/20">
                  {selectedSkill.category}
                </Badge>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 text-primary">
                  Description:
                </h4>
                <p className="text-foreground/80">
                  {selectedSkill.description}
                </p>
                <h4 className="text-lg font-medium mb-2 text-primary mt-4">
                  Real-world Example:
                </h4>
                <p className="text-foreground/80">{selectedSkill.example}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
