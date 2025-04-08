"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaDocker,
  FaDatabase,
  FaJava,
  FaGit,
} from "react-icons/fa";

interface Skill {
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  example: string;
}

const skills: Skill[] = [
  // Languages
  {
    name: "JavaScript",
    category: "Languages",
    description:
      "Expert in modern JavaScript (ES6+) with a focus on asynchronous programming and functional paradigms.",
    icon: <FaReact />, // React icon for JS
    example:
      "Built dynamic, interactive UIs using React and Node.js in enterprise applications, like 'Beagle' at Decision Point Analytics.",
  },
  {
    name: "TypeScript",
    category: "Languages",
    description:
      "Proficient in TypeScript, leveraging type safety and generics for scalable web apps and reducing runtime errors.",
    icon: <FaReact />, // React icon for TS
    example:
      "Used in developing enterprise platforms at Decision Point Analytics, ensuring type-safe code and robust app architecture.",
  },
  {
    name: "Python",
    category: "Languages",
    description:
      "Extensive experience in Python, with a focus on data processing, machine learning, and backend development.",
    icon: <FaPython />,
    example:
      "Developed machine learning models for real estate analysis at AI Real Estate Financial Analysis using Python and XGBoost.",
  },
  {
    name: "Java",
    category: "Languages",
    description:
      "Proficient in Java, specializing in backend development, multithreading, and Spring Boot for enterprise applications.",
    icon: <FaJava />,
    example:
      "Built scalable backend services using Java and Spring Boot for enterprise applications in Decision Point Analytics.",
  },
  {
    name: "SQL",
    category: "Languages",
    description:
      "Advanced SQL knowledge including complex joins, window functions, and query optimization.",
    icon: <FaDatabase />,
    example:
      "Optimized and managed SQL queries for enterprise applications like 'Resume Matcher AI' and 'Beagle' at Avenue One.",
  },

  // Frameworks & Libraries
  {
    name: "React.js",
    category: "frameworks",
    description:
      "Specialized in React.js with hooks, state management, and performance optimization.",
    icon: <FaReact />,
    example:
      "Developed enterprise-grade web applications, such as Beagle, integrating with Microsoft Teams and Slack.",
  },
  {
    name: "Node.js",
    category: "frameworks",
    description:
      "Built scalable backend services and APIs using Node.js and Express, integrating with various cloud services.",
    icon: <FaNodeJs />,
    example:
      "Developed high-performance APIs and microservices for enterprise applications like Avenue One's Transaction Management System.",
  },
  {
    name: "Next.js",
    category: "frameworks",
    description:
      "Expertise in Next.js for server-side rendering, static site generation, and API routes.",
    icon: <FaReact />,
    example:
      "Built SEO-friendly websites with Next.js, leveraging SSR and static generation for performance optimization in client projects.",
  },
  {
    name: "Express.js",
    category: "frameworks",
    description:
      "Extensive experience building scalable backend services using Express.js, providing APIs for modern web applications.",
    icon: <FaNodeJs />,
    example:
      "Used Express.js for building RESTful APIs at Avenue One and Decision Point Analytics, optimizing backend performance.",
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "Databases",
    description:
      "Advanced experience in PostgreSQL, including performance tuning, indexing strategies, and complex queries.",
    icon: <FaDatabase />,
    example:
      "Optimized and managed PostgreSQL databases in enterprise applications, ensuring quick data retrieval and minimal downtime.",
  },
  {
    name: "MySQL",
    category: "Databases",
    description:
      "Proficient in MySQL database design, optimization, and administration.",
    icon: <FaDatabase />,
    example:
      "Managed large-scale MySQL databases for enterprise applications at Avenue One, ensuring consistency and high availability.",
  },
  {
    name: "MongoDB",
    category: "Databases",
    description:
      "Proficient in MongoDB schema design, aggregation pipeline, and indexing for NoSQL data storage.",
    icon: <FaDatabase />,
    example:
      "Used MongoDB for scalable, NoSQL data storage in client applications, ensuring flexibility and fast data retrieval.",
  },

  // Cloud & DevOps
  {
    name: "AWS EC2",
    category: "cloud",
    description: "EC2 provides scalable compute capacity for applications.",
    icon: <FaAws />,
    example:
      "Deployed scalable cloud applications on AWS EC2, ensuring efficient cloud infrastructure management.",
  },
  {
    name: "AWS S3",
    category: "cloud",
    description: "S3 for scalable storage of data with high availability.",
    icon: <FaAws />,
    example:
      "Used AWS S3 to store and retrieve large amounts of data in enterprise applications.",
  },
  {
    name: "AWS Lambda",
    category: "cloud",
    description:
      "Lambda for serverless computing to run code in response to events.",
    icon: <FaAws />,
    example:
      "Implemented AWS Lambda to run serverless functions for scalable processing in cloud environments.",
  },
  {
    name: "Docker",
    category: "cloud",
    description:
      "Proficient in containerization with Docker for development and production environments, ensuring seamless deployments.",
    icon: <FaDocker />,
    example:
      "Implemented Docker containers for scalable applications, improving deployment speed and environment consistency.",
  },
  {
    name: "Kubernetes",
    category: "cloud",
    description:
      "Experience with Kubernetes for container orchestration, ensuring scalable and reliable cloud applications.",
    icon: <FaAws />,
    example:
      "Used Kubernetes for orchestrating and managing containerized applications at Elev8 Solar for cloud-based environments.",
  },
  {
    name: "Terraform",
    category: "cloud",
    description:
      "Expertise in infrastructure automation using Terraform for cloud environments.",
    icon: <FaAws />,
    example:
      "Implemented Terraform for automating infrastructure setup and managing cloud resources, reducing manual setup time by 40%.",
  },

  // Version Control & Tools
  {
    name: "Git",
    category: "Tools",
    description:
      "Proficient in Git for version control, collaboration, and managing codebase across teams.",
    icon: <FaGit />,
    example:
      "Used Git for managing version control across all projects at Avenue One and Decision Point Analytics, ensuring seamless collaboration.",
  },
  {
    name: "Jenkins",
    category: "Tools",
    description:
      "Experienced with Jenkins for automating continuous integration and deployment pipelines.",
    icon: <FaGit />,
    example:
      "Configured Jenkins pipelines for continuous integration and delivery at Avenue One, automating build and deployment processes.",
  },
  {
    name: "Webpack",
    category: "Tools",
    description:
      "Used Webpack for bundling JavaScript and assets in production applications.",
    icon: <FaGit />,
    example:
      "Optimized client-side builds using Webpack in Next.js and React.js projects, reducing load times and enhancing performance.",
  },
];

const skillCategories = [
  { id: "languages", name: "Languages" },
  { id: "frameworks", name: "Frameworks & Libraries" },
  { id: "databases", name: "Databases" },
  { id: "cloud", name: "Cloud & DevOps" },
  { id: "tools", name: "Version Control & Tools" },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("languages");

  const filteredSkills = skills.filter(
    (skill) => skill.category.toLowerCase() === activeCategory
  );

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
          Technologies I specialize in to build solutions that scale and deliver
          real value.
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
              className={`cursor-pointer text-sm py-1.5 px-3 tab-badge ${
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
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Card className="card-hover card-glass transition-all duration-300 cursor-pointer">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    {skill.icon}
                    <h4 className="ml-2 font-bold text-foreground">
                      {skill.name}
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
                <p className="text-foreground/80 text-sm mt-2">
                  {skill.example}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
