import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Check, Code, Database, Cpu, Zap, Server, Globe, Bot, Brain, MessageSquare, BarChart, FileText, Image as ImageIcon } from "lucide-react"
import Image from "next/image"
import TechStackScroller from "@/components/tech-stack-scroller"
import ServiceShowcase from "@/components/service-showcase"
import DeviceFrame from "@/components/device-frame"
import MinimalProcessStepper, { type ProcessStep } from "@/components/minimal-process-stepper"
import { aiDevelopmentStack } from "@/data/tech-stacks"
import { developmentSteps } from "@/data/dev-process"

// Define AI services data
const aiServices = [
  {
    id: "chatbots",
    name: "AI Chatbots",
    icon: <MessageSquare className="h-5 w-5" />,
    description:
      "Intelligent conversational agents that can handle customer inquiries, provide support, and automate routine tasks.",
    features: [
      "Natural language understanding",
      "Multi-platform integration",
      "Personalized responses",
      "Seamless handoff to human agents",
    ],
  },
  {
    id: "analytics",
    name: "Predictive Analytics",
    icon: <BarChart className="h-5 w-5" />,
    description:
      "Data-driven insights and forecasting to help you make better business decisions and identify opportunities.",
    features: ["Sales forecasting", "Customer behavior analysis", "Trend identification", "Anomaly detection"],
  },
  {
    id: "document",
    name: "Document Processing",
    icon: <FileText className="h-5 w-5" />,
    description: "Automated extraction and analysis of information from documents, invoices, receipts, and forms.",
    features: ["OCR and data extraction", "Form processing", "Document classification", "Information validation"],
  },
  {
    id: "vision",
    name: "Computer Vision",
    icon: <ImageIcon className="h-5 w-5" />,
    description: "Image and video analysis solutions for object detection, recognition, and visual inspection.",
    features: ["Object detection", "Facial recognition", "Product visual inspection", "Image classification"],
  },
  {
    id: "agents",
    name: "AI Agents",
    icon: <Bot className="h-5 w-5" />,
    description:
      "Autonomous AI agents that can perform complex tasks, make decisions, and interact with other systems.",
    features: ["Task automation", "Multi-agent coordination", "Workflow optimization", "Adaptive learning"],
  },
  {
    id: "nlp",
    name: "NL Processing",
    icon: <Brain className="h-5 w-5" />,
    description: "Text analysis, sentiment detection, and language generation for content creation and analysis.",
    features: ["Sentiment analysis", "Content summarization", "Language translation", "Text classification"],
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
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6 md:mb-8">
            <Button asChild variant="outline" size="sm" className="mr-4">
              <Link href="/services">
                <ArrowLeft size={16} className="mr-2" /> Back to Services
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="lg:col-span-4">
              <h1 className="text-5xl md:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 text-primary">Full-Stack AI Development</h1>
              <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-foreground/80 mb-5 md:mb-6 leading-tight">
                Transform your business ideas into powerful software solutions with cutting-edge AI capabilities
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 mb-8 lg:mb-0">
                <Button asChild size="lg" className="text-base md:text-lg">
                  <Link href="/#contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base md:text-lg">
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-8 relative w-full">
              <div className="w-full overflow-hidden">
                <DeviceFrame type="macos">
                  <Image
                    src="https://lxbpjvrr41.ufs.sh/f/6KZjuRTQYJxHmqfmYRQnVOUpwFEZs8WCxTD1BjtRqv2hl9kL"
                    alt="AI Application Demo"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </DeviceFrame>
              </div>
            </div>
          </div>
        </div>
      </section>

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

          <ServiceShowcase 
            services={aiServices}
            contactText="Start Your"
          />
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

