import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { projects, type Project } from "@/data/projects"

export default function ProjectsSection() {
  // Only show up to 3 projects on the home page
  const featuredProjects = projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
          Explore some of our recent work and client projects
        </p>

        {/* Center the cards when there are fewer than 3 */}
        <div className="flex justify-center">
          <div
            className={`grid gap-8 ${
              featuredProjects.length === 1
                ? "grid-cols-1 max-w-md"
                : featuredProjects.length === 2
                  ? "grid-cols-1 md:grid-cols-2 max-w-3xl"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-full"
            }`}
          >
            {featuredProjects.map((project: Project) => (
              <Card key={project.id} className="bg-secondary/50 border-primary/20 overflow-hidden h-full flex flex-col">
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
                    {project.tags.map((tag) => (
                      <span key={`${project.id}-${tag}`} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="mt-auto hover:bg-primary/30">
                    <Link href={project.link} className="flex items-center justify-center">
                      View Project <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

