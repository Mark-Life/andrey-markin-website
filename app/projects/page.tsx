import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/data/projects"
import MatrixBackground from "@/components/matrix-background"

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      {/* <MatrixBackground /> */}

      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-primary">Projects</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
            Explore my portfolio of successful client projects and innovative solutions
          </p>

          {/* Center the cards when there are fewer than 3 */}
          <div className="flex justify-center">
            <div
              className={`grid gap-8 ${
                projects.length === 1
                  ? "grid-cols-1 max-w-md"
                  : projects.length === 2
                    ? "grid-cols-1 md:grid-cols-2 max-w-3xl"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-full"
              }`}
            >
              {projects.map((project, index) => (
                <Card key={index} className="bg-secondary/50 border-primary/20 overflow-hidden h-full flex flex-col">
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex-grow flex flex-col p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/80 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="mt-auto">
                      <Link href={project.link} className="flex items-center justify-center">
                        View Case Study <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-6">Have a project in mind?</h2>
            <Button asChild size="lg" className="text-lg">
              <Link href="/#contact">Let's Work Together</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

