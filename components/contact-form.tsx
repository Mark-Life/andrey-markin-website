"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type React from "react"
import { sendTelegramNotification } from "@/actions/telegram-bot"
import { useToast } from "@/hooks/use-toast"

interface FormState {
  name: string
  contact: string
  projectDescription: string
}

export function ContactForm() {
  const { toast } = useToast()
  const [formState, setFormState] = useState<FormState>({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendTelegramNotification(formState)
      
      if (result.success) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          contact: "",
          projectDescription: "",
        })
        toast({
          title: "Success!",
          description: "Project request sent successfully!",
          variant: "default",
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to send project request. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
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
  )
} 