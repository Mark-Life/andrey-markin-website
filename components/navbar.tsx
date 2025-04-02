"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary hover:text-white">
          Andrey Markin
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-foreground/80 hover:text-primary transition-colors" prefetch>
            Services
          </Link>
          <Link href="/projects" className="text-foreground/80 hover:text-primary transition-colors" prefetch>
            Projects
          </Link>
          <Link href="/#reviews" className="text-foreground/80 hover:text-primary transition-colors">
            Reviews
          </Link>
          <Link href="/#pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
          <Button asChild>
            <Link href="/#contact">Schedule a meeting</Link>
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/services"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#reviews"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/#pricing"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#contact"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                Schedule a meeting
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

