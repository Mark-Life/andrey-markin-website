import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check, Code, Database, Cpu, Zap, Server, Globe } from "lucide-react"
import TechStackScroller from "@/components/tech-stack-scroller"
import AIServiceShowcase from "./ai-service-showcase"
import DeviceFrame from "@/components/device-frame"
import MinimalProcessStepper, { type ProcessStep } from "@/components/minimal-process-stepper"
import { aiDevelopmentStack } from "@/data/tech-stacks"

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

// Define service cards
type ServiceCard = {
  icon: React.ReactNode
  title: string
  features: string[]
}

const serviceCards: ServiceCard[] = [
  {
    icon: <Cpu className="text-primary h-6 w-6" />,
    title: "AI-Powered Applications",
    features: [
      "Custom AI assistants and chatbots",
      "Intelligent document processing",
      "Predictive analytics dashboards",
      "AI-enhanced customer experiences",
    ],
  },
  {
    icon: <Globe className="text-primary h-6 w-6" />,
    title: "Web & Mobile Development",
    features: [
      "Progressive Web Applications",
      "Cross-platform mobile apps",
      "E-commerce with AI recommendations",
      "Real-time collaborative platforms",
    ],
  },
  {
    icon: <Database className="text-primary h-6 w-6" />,
    title: "Data & Backend Solutions",
    features: [
      "Scalable cloud infrastructure",
      "Data pipelines and ETL processes",
      "API development and integration",
      "Database design and optimization",
    ],
  },
  {
    icon: <Server className="text-primary h-6 w-6" />,
    title: "Enterprise Integration",
    features: [
      "CRM and ERP system integration",
      "Legacy system modernization",
      "Custom middleware development",
      "Multi-platform data synchronization",
    ],
  },
  {
    icon: <Code className="text-primary h-6 w-6" />,
    title: "Custom Business Applications",
    features: [
      "AI-powered CRM systems",
      "Intelligent inventory management",
      "HR platforms with AI screening",
      "Custom booking and scheduling",
    ],
  },
  {
    icon: <Zap className="text-primary h-6 w-6" />,
    title: "AI Feature Integration",
    features: [
      "Natural language search capabilities",
      "Image recognition and processing",
      "Predictive analytics for business",
      "Voice interfaces and assistants",
    ],
  },
]

export default function FullStackAIDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

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
      <section className="">
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
            {serviceCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-background rounded-lg p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <ul className="space-y-3 mb-6">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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

