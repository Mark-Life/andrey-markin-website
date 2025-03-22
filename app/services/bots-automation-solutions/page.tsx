import { 
  Bot, 
  MessageSquare, 
  Workflow, 
  Database, 
  Zap, 
  BarChart,
  MessagesSquare,
  Share2,
  Clock,
  FileText,
  Settings,
  RefreshCw
} from "lucide-react"
import ServicePage, { 
  ServiceCardItem, 
  ServiceShowcaseItem 
} from "@/components/services/service-page"
import { TechItem } from "@/data/tech-stacks"

// Define tech stack data
const botsAutomationStack: TechItem[] = [
  {
    name: "Node.js",
    logo: "https://seeklogo.com/images/N/node-js-logo-F4F55CD2D0-seeklogo.com.png?height=60&width=60",
  },
  { 
    name: "TypeScript", 
    logo: "https://www.svgrepo.com/show/303600/typescript-logo.svg?height=60&width=60",
  },
  { 
    name: "Python", 
    logo: "https://www.svgrepo.com/show/331553/python-package-index.svg?height=60&width=60",
  },
  { 
    name: "Discord", 
    logo: "https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg",
  },
  { 
    name: "Telegram API", 
    logo: "https://www.svgrepo.com/show/303292/telegram-logo.svg?height=60&width=60",
  },
  { 
    name: "SlackAPI", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png?height=60&width=60",
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
    name: "Supabase", 
    logo: "https://styles.redditmedia.com/t5_47da3l/styles/communityIcon_8wbqkp0rozjd1.jpg?format=pjpg&s=70862eec9c29aa0c25f2a6b9e708698dd03474e5",
  },
  { 
    name: "Vercel", 
    logo: "https://www.svgrepo.com/show/327408/logo-vercel.svg?height=60&width=60",
    invertColors: true,
  },
  { 
    name: "Docker", 
    logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png?height=60&width=60",
  },
  { 
    name: "GitHub Actions", 
    logo: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4?height=60&width=60",
  }
]

// Define bots & automation services data
const botServices: ServiceShowcaseItem[] = [
  {
    id: "discord",
    name: "Discord Bots",
    icon: <MessagesSquare className="h-5 w-5" />,
    description:
      "Custom Discord bots that enhance community engagement, moderation, and provide automated functionality.",
    features: [
      "Server moderation and management",
      "User engagement and games",
      "AI-powered conversation",
      "Role management and permissions",
    ],
  },
  {
    id: "chat",
    name: "Chat Platform Bots",
    icon: <MessageSquare className="h-5 w-5" />,
    description:
      "Intelligent bots for Slack, Telegram, and other messaging platforms that streamline operations.",
    features: [
      "Slack workflows and notifications",
      "Telegram interactive assistants",
      "WhatsApp business automation",
      "Multi-platform deployment",
    ],
  },
  {
    id: "workflow",
    name: "Workflow Automation",
    icon: <Workflow className="h-5 w-5" />,
    description: "Systems that automate repetitive tasks and workflows to increase productivity and accuracy.",
    features: [
      "Document processing automation",
      "Approval workflow systems",
      "Data entry and validation",
      "Cross-platform integration",
    ],
  },
  {
    id: "database",
    name: "Database Automation",
    icon: <Database className="h-5 w-5" />,
    description: "Automated systems for database operations, data synchronization, and maintenance.",
    features: [
      "Scheduled data synchronization",
      "Custom ETL processes",
      "Database maintenance scripts",
      "Data validation and cleansing",
    ],
  },
  {
    id: "integration",
    name: "API Integrations",
    icon: <Share2 className="h-5 w-5" />,
    description:
      "Custom integrations that connect different systems and services for seamless data flow.",
    features: [
      "Third-party API connections",
      "Webhook implementations",
      "Data transformation services",
      "Real-time data exchange",
    ],
  },
  {
    id: "monitoring",
    name: "Monitoring & Alerts",
    icon: <BarChart className="h-5 w-5" />,
    description: "Systems that track performance, detect issues, and send timely notifications.",
    features: [
      "Service health monitoring",
      "Performance metrics tracking",
      "Automated alert systems",
      "Incident response automation",
    ],
  },
]

// Define service cards
const serviceCards: ServiceCardItem[] = [
  {
    icon: <Bot className="text-primary h-6 w-6" />,
    title: "Custom Bot Development",
    features: [
      "Discord community bots",
      "Slack workspace automation",
      "Telegram interactive assistants",
      "AI-powered conversational agents",
    ],
  },
  {
    icon: <Clock className="text-primary h-6 w-6" />,
    title: "Task Automation",
    features: [
      "Scheduled data operations",
      "Repetitive task automation",
      "Time-triggered workflows",
      "Event-based processes",
    ],
  },
  {
    icon: <FileText className="text-primary h-6 w-6" />,
    title: "Document Processing",
    features: [
      "Automated data extraction",
      "Document generation and formatting",
      "PDF processing and analysis",
      "Report creation and distribution",
    ],
  },
  {
    icon: <Database className="text-primary h-6 w-6" />,
    title: "Data Management",
    features: [
      "Database synchronization",
      "Data validation and cleaning",
      "ETL pipeline automation",
      "Cross-system data management",
    ],
  },
  {
    icon: <Settings className="text-primary h-6 w-6" />,
    title: "System Integration",
    features: [
      "API integration development",
      "Middleware solutions",
      "Service connection automation",
      "Custom integration bridges",
    ],
  },
  {
    icon: <RefreshCw className="text-primary h-6 w-6" />,
    title: "DevOps Automation",
    features: [
      "CI/CD pipeline setup",
      "Deployment automation",
      "Infrastructure management",
      "Testing and monitoring automation",
    ],
  },
]

export default function BotsAutomationPage() {
  return (
    <ServicePage
      title="Bots & Automation Solutions"
      description="Streamline operations and enhance productivity with custom bots and intelligent automation systems"
      heroImage="https://lxbpjvrr41.ufs.sh/f/6KZjuRTQYJxHqlp4dpM3CM09gQvVGuoixZF58rBtkIcaYUWD"
      heroImageAlt="Bot and Automation Systems"
      techStack={botsAutomationStack}
      showcaseTitle="Bot & Automation Solutions"
      showcaseDescription="From chat platform bots to complex workflow automation systems, we build intelligent tools that save time and improve efficiency"
      showcaseItems={botServices}
      showcaseContactText="Start Your"
      serviceGridTitle="Comprehensive Automation Services"
      serviceGridItems={serviceCards}
      ctaHeading="Ready to automate your workflows?"
      ctaText="Let's discuss how custom bots and automation can streamline your operations and boost productivity."
      ctaButtonText="Start Your Project"
      ctaButtonHref="/#contact"
    />
  )
} 