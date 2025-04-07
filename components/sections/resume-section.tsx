"use client";

import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ResumeSection() {
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
          Resume
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Download my resume to learn more about my education, work experience,
          and skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="card-glass h-full flex flex-col items-center justify-center p-10">
            <div className="w-20 h-28 mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-[hsl(var(--neon-purple))] opacity-20 rounded"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FileDown className="w-10 h-10 text-primary" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-primary mb-2">
              Nitish Ahuja - Resume.pdf
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              Full Stack Engineer | Appled AI
              <br />
              Last updated: April 2025
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-40"
                onClick={() => window.open("/Nitish'sResume.pdf", "_blank")}
              >
                <FileDown className="mr-2 h-5 w-5" />
                Download PDF
              </Button>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground min-w-40"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/nitishahuja",
                    "_blank"
                  )
                }
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View on LinkedIn
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="card-glass h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Education
              </h3>

              <div className="bg-card/60 p-6 rounded-lg border border-primary/20 shadow-sm mb-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-bold text-primary">
                    Master of Science, Computer Information Systems
                  </h4>
                  <span className="text-foreground/80">
                    September 2023 – August 2025
                  </span>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                  <p className="text-foreground/80">
                    Northeastern University, Boston, MA
                  </p>
                  <p className="text-primary">GPA: 3.76/4.0</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Key Skills
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-card/60 p-3 rounded border border-border">
                    <h4 className="text-sm font-medium text-primary mb-1">
                      Languages
                    </h4>
                    <p className="text-foreground/80 text-sm">
                      JavaScript, TypeScript, Java, Python, Go, SQL
                    </p>
                  </div>
                  <div className="bg-card/60 p-3 rounded border border-border">
                    <h4 className="text-sm font-medium text-primary mb-1">
                      Frameworks
                    </h4>
                    <p className="text-foreground/80 text-sm">
                      React, Node.js, Next.js, Express, Spring Boot
                    </p>
                  </div>
                  <div className="bg-card/60 p-3 rounded border border-border">
                    <h4 className="text-sm font-medium text-primary mb-1">
                      Databases
                    </h4>
                    <p className="text-foreground/80 text-sm">
                      PostgreSQL, MySQL, MongoDB, Snowflake
                    </p>
                  </div>
                  <div className="bg-card/60 p-3 rounded border border-border">
                    <h4 className="text-sm font-medium text-primary mb-1">
                      Cloud & DevOps
                    </h4>
                    <p className="text-foreground/80 text-sm">
                      AWS, Azure, Docker, Kubernetes, Terraform
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
