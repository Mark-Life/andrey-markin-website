import { Button } from "@/components/ui/button"
import Link from "next/link"

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
          <h1 className="text-[5rem] md:text-[8rem] lg:text-[13rem] font-bold mb-8 leading-[0.9] font-gothic tracking-tighter">
            Launch Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Business</span>{" "}
            with AI
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-10 leading-relaxed">
            Custom software solutions, AI development, and digital transformation services to help your business thrive
            in the age of artificial intelligence.
          </p>

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

      <div className="absolute bottom-8 inset-x-0 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="text-foreground/50 text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

