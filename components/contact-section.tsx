"use client"

import type React from "react"

import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contact</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
          Let's discuss your project and bring your ideas to life
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

