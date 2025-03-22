import { Button } from "@/components/ui/button"
import Link from "next/link"
import ScrollIndicator from "@/components/scroll-indicator"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-l border-primary/5 h-full opacity-75"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-t border-primary/5 w-full opacity-75"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-8xl mx-auto">
          {/* Subtitle */}
          <div className="mb-4 text-primary/80 text-lg md:text-xl tracking-wider">
            FULL-STACK AI DEVELOPMENT
          </div>

          {/* Main heading */}
          <h1 className="text-[clamp(4rem,14vw,13rem)] font-bold mb-8 leading-[0.9] font-gothic tracking-tighter overflow-hidden text-wrap">
            Launch Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Business</span>{" "}
            with AI
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-10 leading-relaxed">
            Bring your business idea – 3 days to Proof of Concept, 2 weeks to MVP
          </p>
          {/* Custom software solutions, AI development, and digital transformation services to help your business thrive in the age of artificial intelligence. */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>

          {/* Stats or highlights */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="bg-secondary/30 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <ScrollIndicator />
      </div>
    </section>
  )
}

