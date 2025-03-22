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

      {/* Main content, description and CTA buttons should be relative to the container */}
      <div className="container mx-auto px-4 z-10 relative"> 
        <div className="max-w-8xl mx-auto relative h-full">
          {/* Subtitle
          <div className="mb-4 text-primary/80 text-lg md:text-xl tracking-wider">
            FULL-STACK AI DEVELOPMENT
          </div> */}

          {/* Main heading */}
          <h1 className="text-[clamp(4rem,16vw,14rem)] font-bold mb-8 leading-[0.9] font-gothic tracking-tighter overflow-hidden text-wrap">
            Launch<br />Your<br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Business</span>{" "}<br />
            with AI
          </h1>

          {/* Description - positioned in top right corner */}
          <div className="absolute top-0 right-0 flex flex-col gap-4 mt-4 tracking-wider max-w-md">
            {/* Subtitle */}
            <div className="text-primary/80 text-lg md:text-xl tracking-wider text-right">
              FULL-STACK AI DEVELOPMENT
            </div>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-right">
              Custom software solutions, AI development, and digital transformation services to help your business thrive
              in the age of artificial intelligence.
            </p>
          </div>

          {/* CTA Buttons - positioned in bottom right corner */}
          <div className="absolute bottom-0 right-0 flex flex-col gap-4 tracking-wider">
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="/#contact">Contact</Link>
              </Button>
            </div>
          </div>
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

