"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import emailjs from "emailjs-com"; // Import emailjs

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Change handler for form inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // EmailJS template submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS credentials (replace these with your actual keys)
    const serviceID = "service_nfud51m";
    const templateID = "template_j4ki5cr";
    const publicKey = "zh3y6hMQUeqhtBwXk";

    // Send form data to your email using EmailJS
    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          to_name: "Nitish", // The name that will receive the email
          from_email: formData.email,
          to_email: "nitishahuja971@gmail.com", // Your email address to receive the message
          message: formData.message,
        },
        publicKey
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          toast({
            title: "Message sent!",
            description:
              "Thank you for reaching out. I'll get back to you soon.",
          });

          // Reset form after submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          // Reset the submitted state after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (error) => {
          setIsSubmitting(false);
          console.error(error);
          toast({
            title: "Error",
            description: "Ahh, something went wrong. Please try again.",
          });
        }
      );
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
          Contact Me
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-foreground/80">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/80">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-input bg-background/50 focus-visible:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/80">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-input bg-background/50 focus-visible:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/80">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      className="min-h-32 border-input bg-background/50 focus-visible:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="card-glass h-full">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a
                    href="mailto:ahuja.nit@northeastern.edu"
                    className="text-primary hover:underline"
                  >
                    ahuja.nit@northeastern.edu
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <a
                    href="tel:8573952435"
                    className="text-primary hover:underline"
                  >
                    (857) 395-2435
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="text-foreground">New York, NY</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-foreground font-medium mb-4">
                  Connect With Me
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/nitishahuja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span className="sr-only">LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/nitishahuja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
