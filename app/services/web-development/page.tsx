import { 
  Globe, 
  ShoppingCart, 
  Code, 
  Zap, 
  FileCode, 
  Wrench,
  Layout,
  Database,
  Server,
  Share2,
  Search,
  Bot
} from "lucide-react"
import ServicePage, { 
  ServiceCardItem, 
  ServiceShowcaseItem 
} from "@/components/services/service-page"
import { TechItem } from "@/data/tech-stacks"
import { Metadata } from "next"

// Define tech stack data
const webDevelopmentStack: TechItem[] = [
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
  {
    name: "uploadthing", 
    logo: "https://docs.uploadthing.com/apple-icon.png?05d3be2615320439",
  },
  {
    name: "clerk", 
    logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/clerk-uvna1mxd54k50cohb8o2i.png/clerk-nzr7956knokwjx841f6yye.png?_a=DAJFJtWIZAAC",
    invertColors: true,
  },
  
]

// Define web development services data
const webServices: ServiceShowcaseItem[] = [
  {
    id: "corporate",
    name: "Next.js Websites",
    icon: <Globe className="h-5 w-5" />,
    description:
      "Modern, fast-loading websites with server-side rendering for optimal SEO performance and user experience.",
    features: [
      "React server components architecture",
      "SEO-optimized server-side rendering",
      "Serverless infrastructure with auto scaling",
      "Blazing-fast page loads",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce Solutions",
    icon: <ShoppingCart className="h-5 w-5" />,
    description:
      "High-performance online stores built with Next.js that provide exceptional shopping experiences.",
    features: [
      "Custom e-commerce applications",
      "Server components for fast product pages",
      "Stripe/payment gateway integration",
      "Real-time inventory management",
    ],
  },
  {
    id: "webapps",
    name: "Web Applications",
    icon: <Code className="h-5 w-5" />,
    description: "Interactive, data-driven web applications that solve complex business challenges.",
    features: [
      "Customer portals with secure authentication",
      "Booking and SaaS platforms",
      "Complex dashboards and analytics",
      "Real-time data visualization",
    ],
  },
  {
    id: "aiapps",
    name: "AI-Powered Applications",
    icon: <Bot className="h-5 w-5" />,
    description: "Web applications enhanced with AI and LLM capabilities to deliver intelligent experiences.",
    features: [
      "LLM-powered chat interfaces",
      "AI-driven content generation",
      "Smart recommendation systems",
      "Personalized user experiences",
    ],
  },
  {
    id: "aggregators",
    name: "Smart Aggregators",
    icon: <Database className="h-5 w-5" />,
    description:
      "Intelligent data aggregation platforms that collect, analyze, and display information from multiple sources.",
    features: [
      "Real-time data integration",
      "AI-powered comparison tools",
      "Advanced filtering capabilities",
      "Custom data visualization",
    ],
  },
  {
    id: "optimization",
    name: "Performance Optimization",
    icon: <Zap className="h-5 w-5" />,
    description: "Enhancements that improve speed, user experience, and search engine visibility.",
    features: [
      "Core Web Vitals optimization",
      "Mobile responsiveness",
      "SEO technical optimization",
      "Performance monitoring",
    ],
  },
]

// Define service cards
const serviceCards: ServiceCardItem[] = [
  {
    icon: <Layout className="text-primary h-6 w-6" />,
    title: "Next.js Websites",
    features: [
      "Server-side rendering for SEO",
      "React server components",
      "Static site generation",
      "Incremental static regeneration",
    ],
  },
  {
    icon: <ShoppingCart className="text-primary h-6 w-6" />,
    title: "E-commerce Development",
    features: [
      "Custom online stores with Next.js",
      "Payment processing integration",
      "Headless e-commerce architecture",
      "Mobile-optimized shopping experience",
    ],
  },
  {
    icon: <Database className="text-primary h-6 w-6" />,
    title: "Smart Aggregators",
    features: [
      "Data collection from multiple sources",
      "AI-powered comparison systems",
      "Real-time data synchronization",
      "Custom filtering and search engines",
    ],
  },
  {
    icon: <Bot className="text-primary h-6 w-6" />,
    title: "LLM Chat Applications",
    features: [
      "Custom AI assistants",
      "Knowledge base integration",
      "Conversation history management",
      "Multi-platform chat interfaces",
    ],
  },
  {
    icon: <Share2 className="text-primary h-6 w-6" />,
    title: "API Development",
    features: [
      "RESTful API architecture",
      "GraphQL implementation",
      "Third-party integrations",
      "API authentication and security",
    ],
  },
  {
    icon: <Search className="text-primary h-6 w-6" />,
    title: "SEO & Performance",
    features: [
      "Server-side rendering for SEO",
      "Performance optimization",
      "Core Web Vitals improvement",
      "Accessibility compliance",
    ],
  },
]

export const metadata: Metadata = {
  title: "Web Development | Andrey Markin",
  description: "Modern Next.js web solutions with server-side rendering for optimal SEO and exceptional user experiences",
}

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      title="Web Development"
      description="Modern Next.js web solutions with server-side rendering for optimal SEO and exceptional user experiences"
      heroImage="https://lxbpjvrr41.ufs.sh/f/6KZjuRTQYJxHqlp4dpM3CM09gQvVGuoixZF58rBtkIcaYUWD"
      heroImageAlt="Web Development Services"
      techStack={webDevelopmentStack}
      showcaseTitle="Modern Web Development"
      showcaseDescription="From server-rendered websites to AI-powered web applications"
      showcaseItems={webServices}
      showcaseContactText="Start Your"
      serviceGridTitle="Next.js Web Development Services"
      serviceGridItems={serviceCards}
      ctaHeading="Ready to build a modern web experience?"
      ctaText="Let's discuss your new idea."
      ctaButtonText="Start Your Project"
      ctaButtonHref="/#contact"
    />
  )
} 