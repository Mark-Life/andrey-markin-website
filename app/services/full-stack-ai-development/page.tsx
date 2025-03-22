import { 
  MessageSquare, 
  BarChart, 
  FileText, 
  Image as ImageIcon, 
  Bot, 
  Brain, 
  Cpu, 
  Globe, 
  Database, 
  Server, 
  Code, 
  Zap 
} from "lucide-react"
import ServicePage, { 
  ServiceCardItem, 
  ServiceShowcaseItem 
} from "@/components/services/service-page"
import { TechItem } from "@/data/tech-stacks"

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
const aiServices: ServiceShowcaseItem[] = [
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
const serviceCards: ServiceCardItem[] = [
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
    <ServicePage
      title="Full-Stack AI Development"
      description="Transform your business ideas into powerful software solutions with cutting-edge AI capabilities"
      heroImage="https://lxbpjvrr41.ufs.sh/f/6KZjuRTQYJxHqlp4dpM3CM09gQvVGuoixZF58rBtkIcaYUWD"
      heroImageAlt="AI Application Demo"
      techStack={aiDevelopmentStack}
      showcaseTitle="AI Solutions"
      showcaseDescription="Explore the possibilities of AI integration for your business"
      showcaseItems={aiServices}
      showcaseContactText="Start Your"
      serviceGridTitle="Comprehensive AI Development Services"
      serviceGridItems={serviceCards}
      ctaHeading="Ready to transform your business with AI?"
      ctaText="Let's discuss how custom AI solutions can help you achieve your business goals and stay ahead of the competition."
      ctaButtonText="Schedule a Consultation"
      ctaButtonHref="/#contact"
    />
  )
}

