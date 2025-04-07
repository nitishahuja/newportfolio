"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AboutSection() {
  const [text, setText] = useState("");
  const fullText = "Hey, I'm Nitish";
  const typingComplete = useRef(false);

  // Typing effect implementation
  useEffect(() => {
    setText(""); // Reset the state to ensure it's clean each time
    typingComplete.current = false;
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        const newText = fullText.substring(0, currentIndex + 1);
        setText(newText);
        currentIndex++;
      } else {
        typingComplete.current = true;
        clearInterval(typingInterval);
      }
    }, 150);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="order-2 md:order-1 space-y-6"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {text}
            {!typingComplete.current && (
              <span className="animate-pulse">|</span>
            )}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Engineer blending AI with real-world solutions.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card className="card-glass shadow-lg p-8">
              <CardContent className="space-y-6">
                <p className="text-foreground/90 mb-4">
                  I create AI-powered applications that address real-world
                  challenges, blending smart technology with intuitive design.
                </p>

                <Button
                  onClick={scrollToExperience}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full md:w-auto"
                  size="lg"
                >
                  View My Experience
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Profile Image */}
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
              <Image
                src="/NitishGhibli.png"
                alt="Profile"
                width={300}
                height={300}
                className="object-cover rounded-full"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/20 animate-pulse-slow"></div>
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-[hsl(var(--neon-purple))]/20 animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
