import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { projectsById } from "@/data/projects"
import TechStackScroller, { TechItem } from "@/components/tech-stack-scroller"


const aggregatorStack: TechItem[] = [
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png?height=60&width=60",
  },
  { 
    name: "Next.js", 
    logo: "https://www.svgrepo.com/show/354113/nextjs-icon.svg?height=60&width=60",
    invertColors: true,
  },
  { 
    name: "TypeScript", 
    logo: "https://www.svgrepo.com/show/303600/typescript-logo.svg?height=60&width=60",
  },
  { 
    name: "TailwindCSS", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?height=60&width=60",
  },
  { 
    name: "Drizzle", 
    logo: "https://avatars.githubusercontent.com/u/108468352?v=4",
  },
  { 
    name: "OpenAI", 
    logo: "https://www.svgrepo.com/show/306500/openai.svg?height=60&width=60",
    invertColors: true,
  },
  { 
    name: "PostgreSQL", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduoiT08M3e-ltNPh8mgvzMhx9FLJtsM61sg&s?height=60&width=60",
  },
  { 
    name: "Vercel", 
    logo: "https://www.svgrepo.com/show/327408/logo-vercel.svg?height=60&width=60",
    invertColors: true,
  },
  {
    name: "Supabase", 
    logo: "https://styles.redditmedia.com/t5_47da3l/styles/communityIcon_8wbqkp0rozjd1.jpg?format=pjpg&s=70862eec9c29aa0c25f2a6b9e708698dd03474e5",
  },
  { 
    name: "Stripe", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42uI2JPTWjq_uNG9UFt98jnpHODVQrQHysg&s?height=60&width=60",
  },
]

export default function AggregatorPage() {
  return (
    <main>
      <Navbar />

      <article className="pt-24 pb-20 relative">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/projects">
                <ArrowLeft size={16} className="mr-2" /> Back to Projects
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-6 text-primary">Intelligent Aggregator Platform</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Supabase</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">OpenAI</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Zod</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Drizzle</span>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-foreground/80">
                A high-performance, SEO-optimized aggregator platform built with Next.js, featuring AI-powered search and intelligent data exploration capabilities.
              </p>
            </div>
          </header>

          {/* Project Overview */}
          <section className="mb-16">
            <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden mb-8">
              <Image
                src={projectsById.Aggregator.image}
                alt="Intelligent Aggregator Platform"
                className="w-full h-full object-cover"
                width={1800}
                height={1200}
                priority
              />
            </div>
            <div className="prose prose-invert max-w-none">
              <p>
                In the dynamic landscape of today's web, aggregator websites stand as powerful tools for consolidating 
                information and offering comprehensive overviews. This project showcases a sophisticated platform that 
                combines modern web technologies with AI capabilities to deliver a seamless user experience.
              </p>
              <p>
                What makes this project particularly interesting is its innovative approach to content delivery, 
                combining static and dynamic rendering strategies with AI-powered features for intelligent data 
                exploration and semantic search capabilities.
              </p>
            </div>
          </section>

          {/* Technical Architecture */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Architecture</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                The platform employs a sophisticated multi-pronged approach to rendering and data management, 
                optimizing for both performance and SEO:
              </p>

              <h3>Rendering Strategy</h3>
              <ul>
                <li>
                  <strong>Static Site Generation (SSG):</strong> Pre-renders pages at build time for lightning-fast 
                  initial loads
                </li>
                <li>
                  <strong>Incremental Static Regeneration (ISR):</strong> Automatically updates static pages in the 
                  background when data changes
                </li>
                <li>
                  <strong>Server-Side Rendering (SSR):</strong> Handles dynamic content requiring real-time data
                </li>
              </ul>

              <h3>Data Management</h3>
              <ul>
                <li>
                  <strong>Database-Driven Routing:</strong> Dynamic route generation based on database content
                </li>
                <li>
                  <strong>Intelligent Caching:</strong> Multi-layer caching strategy to minimize database load
                </li>
                <li>
                  <strong>SEO Optimization:</strong> Automated sitemap generation and SEO-friendly URL structures
                </li>
              </ul>
            </div>

            <div className="aspect-video mt-10 bg-secondary/50 rounded-lg overflow-hidden mb-8">
                <Image
                  src="https://lxbpjvrr41.ufs.sh/f/6KZjuRTQYJxHWuTynaDgiNo7yhMxmQELI80UGnuVqPHDF1k6"
                  alt="Intelligent Aggregator Platform – search with AI"
                  className="w-full h-full object-cover"
                  width={1800}
                  height={1300}
                  priority
                />
              </div>
          </section>

          {/* User Experience */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Elevating User Experience</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                Beyond the core architecture, we implemented several key features and refinements that contribute 
                to a seamless and engaging user experience:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3>User Interface & Accessibility</h3>
                  <ul>
                    <li>
                      <strong>Empty States:</strong> Informative designs guide users when data is missing, preventing 
                      frustration and offering alternative actions
                    </li>
                    <li>
                      <strong>Strategic CTAs:</strong> Precisely placed calls-to-action drive engagement and 
                      conversions, optimized through A/B testing
                    </li>
                    <li>
                      <strong>Accessible Design:</strong> WCAG compliance ensures usability for users of all abilities
                    </li>
                    <li>
                      <strong>Mobile Responsiveness:</strong> A seamless experience across all devices through 
                      responsive design
                    </li>
                  </ul>
                </div>

                <div>
                  <h3>Performance & Security</h3>
                  <ul>
                    <li>
                      <strong>Data Validation:</strong> Robust Zod schemas enforce data integrity and prevent errors
                    </li>
                    <li>
                      <strong>Optimized Images:</strong> Supabase Storage and image compression minimize load times
                    </li>
                    <li>
                      <strong>Proactive Security:</strong> Protection against common web vulnerabilities safeguards 
                      user data
                    </li>
                    <li>
                      <strong>User Feedback:</strong> Built-in mechanisms enable continuous improvement based on 
                      user input
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3>Content & Monetization</h3>
                <ul>
                  <li>
                    <strong>Comprehensive Profiles:</strong> Detailed vendor profiles equip users with essential 
                    information for making informed decisions
                  </li>
                  <li>
                    <strong>Non-Intrusive Ads:</strong> Carefully integrated advertisements provide monetization 
                    without disrupting the user flow
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Innovations */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Innovations</h2>
            <div className="prose prose-invert max-w-none">
              <h3>AI-Powered Data Exploration</h3>
              <p>
                We developed an innovative AI agent system that understands natural language queries and uses tool 
                calling to interact with the PostgreSQL database. This allows users to ask complex questions and 
                receive tailored reports based on real-time data analysis.
              </p>

              <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden mb-8">
                <Image
                  src="https://lxbpjvrr41.ufs.sh/f/6KZjuRTQYJxHy1sX130hWqEK6jXl0V1uGNen82tHZd9J7mDo"
                  alt="Intelligent Aggregator Platform – search with AI"
                  className="w-full h-full object-cover"
                  width={1280}
                  height={600}
                />
              </div>

              <h3>Semantic Search with Embeddings</h3>
              <p>
                By leveraging PostgreSQL's vector extension, we implemented semantic search capabilities that go 
                beyond traditional keyword matching. This enables users to find results based on the meaning of 
                their queries, significantly improving content discovery.
              </p>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-2">Technology Stack</h2>
            <TechStackScroller className="flex justify-start" items={aggregatorStack} />
            <div className="prose prose-invert max-w-none">
              <h3>Frontend</h3>
              <ul>
                <li>
                  <strong>Next.js</strong> - React framework with SSG/ISR capabilities
                </li>
                <li>
                  <strong>TypeScript</strong> - Type-safe development
                </li>
                <li>
                  <strong>Tailwind CSS & Shadcn UI</strong> - Rapid UI development
                </li>
                <li>
                  <strong>Zod</strong> - Runtime type validation
                </li>
              </ul>

              <h3>Backend & Data</h3>
              <ul>
                <li>
                  <strong>Supabase</strong> - PostgreSQL database with vector support
                </li>
                <li>
                  <strong>Drizzle ORM</strong> - Type-safe database queries
                </li>
                <li>
                  <strong>Vercel</strong> - Edge deployment and hosting
                </li>
              </ul>

              <h3>AI & Search</h3>
              <ul>
                <li>
                  <strong>OpenAI</strong> - Natural language processing and query understanding
                </li>
                <li>
                  <strong>pgvector</strong> - Vector embeddings for semantic search
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                This project demonstrates how modern web technologies and AI can be combined to create a powerful 
                aggregator platform. By leveraging Next.js's advanced rendering capabilities and integrating 
                cutting-edge AI features, we've created a solution that not only performs exceptionally well but 
                also provides users with intelligent ways to explore and understand data.
              </p>
              <p>
                The platform's architecture ensures scalability and maintainability, while its AI-powered features 
                set it apart from traditional aggregators, making it a compelling solution for businesses seeking 
                to deliver value through curated information.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to build an intelligent data platform?</h2>
            <Button asChild size="lg" className="text-lg">
              <Link href="/#contact">Let's Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}


