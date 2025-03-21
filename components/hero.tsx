import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/90">
          Transform Your Business with AI
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10">
          Custom software solutions, AI development, and digital transformation services to help your business thrive.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="text-lg hover:bg-white/90">
            <Link href="/services">Explore Services</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg">
            <Link href="/#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

