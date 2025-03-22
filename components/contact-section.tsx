"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Calendar, User, Phone } from "lucide-react"
import { useState } from "react"
import { contact } from "@/data/contact"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    contact: "",
    projectDescription: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        contact: "",
        projectDescription: "",
      })
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contact</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
          Let's discuss your project and bring your ideas to life
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-secondary/50 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6">Contact</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Andrey Markin</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <a
                      href={contact.scheduleLink}
                      className="hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(contact.scheduleLink, "_blank")
                      }}
                    >
                      Schedule a meeting
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 mb-6">
                <p className="text-sm text-foreground/70">
                  Mark Life Ltd
                  <br />
                  UIC/UIN: 208147965
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-medium mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href={contact.socialMedia.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    </svg>
                  </a>
                  <a
                    href={contact.socialMedia.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors"
                    aria-label="Telegram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </a>
                  {/* <a
                    href="tel:+1234567890"
                    className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
                    aria-label="Phone"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                  </a> */}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <h4 className="text-xl font-medium text-primary mb-2">Project Request Received!</h4>
                  <p className="text-foreground/80">
                    Thank you for sharing your project details. I'll review your requirements and get back to you soon
                    to discuss next steps.
                  </p>
                  <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                    Submit Another Project
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium mb-1">
                      Contact
                    </label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formState.contact}
                      onChange={handleChange}
                      placeholder="your.email@example.com or phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium mb-1">
                      Project Description
                    </label>
                    <Textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formState.projectDescription}
                      onChange={handleChange}
                      placeholder="Tell me about your project goals, requirements, and timeline..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Project Request"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

