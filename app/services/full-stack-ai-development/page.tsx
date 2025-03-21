import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check, Code, Database, Cpu, Zap, Server, Globe } from "lucide-react"
import TechStackScroller from "@/components/tech-stack-scroller"
import AIServiceShowcase from "./ai-service-showcase"
import DeviceFrame from "./device-frame"
import MinimalProcessStepper, { type ProcessStep } from "@/components/minimal-process-stepper"
import { aiDevelopmentStack } from "@/data/tech-stacks"
import MatrixBackground from "@/components/matrix-background"

// Define the development process steps
const developmentSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Idea & Planning",
    description:
      "You share your idea, and we provide you with tech stack, deployment strategy, and project timeline. We'll work together to define the scope, features, and technical requirements to ensure we're aligned on the vision and goals for your project.",
  },
  {
    number: 2,
    title: "Proof of Concept | 3-5 days",
    description:
      "Within just a few days, we create a working proof of concept to test the core ideas and functionalities. This rapid prototype helps validate technical feasibility and gives you something tangible to evaluate before committing to full development.",
  },
  {
    number: 3,
    title: "First Iteration of MVP | 2 weeks",
    description:
      "We quickly develop the first version of the MVP, allowing the business to validate their idea in a real-world environment. This focused approach delivers core functionality that can be tested with real users to gather valuable feedback early in the process.",
  },
  {
    number: 4,
    title: "Validation and Improvements",
    description:
      "After validation, we make improvements, add robust features, conduct testing, and provide deployment support. Based on user feedback and performance data, we refine the product, enhance the user experience, and ensure everything is production-ready.",
  },
]

export default function FullStackAIDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* <MatrixBackground /> */}

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Button asChild variant="outline" size="sm" className="mr-4">
              <Link href="/services">
                <ArrowLeft size={16} className="mr-2" /> Back to Services
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Full-Stack AI Development</h1>
              <p className="text-xl text-foreground/80 mb-8">
                Transform your business ideas into powerful software solutions with cutting-edge AI capabilities
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/#contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <DeviceFrame>
                <img
                  src="/placeholder.svg?height=600&width=300"
                  alt="AI Application Demo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </DeviceFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* Tech Stack Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <TechStackScroller items={aiDevelopmentStack} />
        </div>
      </section>

      {/* AI Services Showcase */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">AI Solutions</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
            Explore the possibilities of AI integration for your business
          </p>

          <AIServiceShowcase />
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Comprehensive AI Development Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-background rounded-lg p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI-Powered Applications</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Custom AI assistants and chatbots</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Intelligent document processing</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Predictive analytics dashboards</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>AI-enhanced customer experiences</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/#contact">Learn More</Link>
              </Button>
            </div>

            {/* Card 2 */}
            <div className="bg-background rounded-lg p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Globe className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Web & Mobile Development</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Progressive Web Applications</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Cross-platform mobile apps</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>E-commerce with AI recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Real-time collaborative platforms</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/#contact">Learn More</Link>
              </Button>
            </div>

            {/* Card 3 */}
            <div className="bg-background rounded-lg p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Database className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Data & Backend Solutions</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Scalable cloud infrastructure</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Data pipelines and ETL processes</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>API development and integration</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Database design and optimization</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/#contact">Learn More</Link>
              </Button>
            </div>

            {/* Card 4 */}
            <div className="bg-background rounded-lg p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Server className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise Integration</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>CRM and ERP system integration</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Legacy system modernization</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Custom middleware development</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Multi-platform data synchronization</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/#contact">Learn More</Link>
              </Button>
            </div>

            {/* Card 5 */}
            <div className="bg-background rounded-lg p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Business Applications</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>AI-powered CRM systems</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Intelligent inventory management</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>HR platforms with AI screening</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Custom booking and scheduling</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/#contact">Learn More</Link>
              </Button>
            </div>

            {/* Card 6 */}
            <div className="bg-background rounded-lg p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Feature Integration</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Natural language search capabilities</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Image recognition and processing</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Predictive analytics for business</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Voice interfaces and assistants</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/#contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Using the minimal component */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>

          <MinimalProcessStepper steps={developmentSteps} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business with AI?</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Let's discuss how custom AI solutions can help you achieve your business goals and stay ahead of the
            competition.
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link href="/#contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

