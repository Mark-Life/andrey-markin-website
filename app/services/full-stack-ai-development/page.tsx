import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Code, Database, Cpu, Zap, Server, Globe, Bot, Brain, MessageSquare, BarChart, FileText, Image as ImageIcon } from "lucide-react"
import Image from "next/image"
import TechStackScroller from "@/components/tech-stack-scroller"
import ServiceShowcase from "@/components/services/service-showcase"
import DeviceFrame from "@/components/device-frame"
import MinimalProcessStepper, { type ProcessStep } from "@/components/minimal-process-stepper"
import { TechItem } from "@/data/tech-stacks"
import { developmentSteps } from "@/data/dev-process"
import CTASection from "@/components/services/cta-section"
import ServiceGridSection from "@/components/services/service-grid-section"

// Define tech stack data
const aiDevelopmentStack: TechItem[] = [
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
    name: "Node.js", 
    logo: "https://seeklogo.com/images/N/node-js-logo-F4F55CD2D0-seeklogo.com.png?height=60&width=60",
  },
  { 
    name: "Python", 
    logo: "https://www.svgrepo.com/show/331553/python-package-index.svg?height=60&width=60",
  },
  { 
    name: "PyTorch", 
    logo: "https://blog.christianperone.com/wp-content/uploads/2018/10/pytorch-logo.png?height=60&width=60",
  },
  { 
    name: "OpenAI", 
    logo: "https://www.svgrepo.com/show/306500/openai.svg?height=60&width=60",
    invertColors: true,
  },
  { 
    name: "LlamaIndex", 
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/llamaindex-color.png?height=60&width=60",
  },
  { 
    name: "Pinecone", 
    logo: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4?height=60&width=60",
    invertColors: false,
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
    name: "Expo", 
    logo: "https://raw.githubusercontent.com/expo/expo/main/.github/resources/banner.png?height=60&width=60",
    invertColors: true,
  },
  {
    name: "Hugging Face",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/huggingface-color.png?height=60&width=60",
  },
  {
    name: "Anthropic",
    logo: "https://img.icons8.com/fluent/512/claude.png?height=60&width=60",
  },
  {
    name: "Stripe",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42uI2JPTWjq_uNG9UFt98jnpHODVQrQHysg&s?height=60&width=60",
  },
]

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
const serviceCards = [
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
                    src="https://lxbpjvrr41.ufs.sh/f/6KZjuRTQYJxHqlp4dpM3CM09gQvVGuoixZF58rBtkIcaYUWD"
                    alt="AI Application Demo"
                    width={900}
                    height={500}
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
      <ServiceGridSection 
        title="Comprehensive AI Development Services"
        services={serviceCards}
      />

      {/* Process Section - Using the minimal component */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>

          <MinimalProcessStepper steps={developmentSteps} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        heading="Ready to transform your business with AI?"
        text="Let's discuss how custom AI solutions can help you achieve your business goals and stay ahead of the competition."
        buttonText="Schedule a Consultation"
        buttonHref="/#contact"
      />

      <Footer />
    </main>
  )
}

