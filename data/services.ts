export interface Service {
  title: string
  description: string
  items: string[]
  link: string
}

export const services: Service[] = [
  {
    title: "Full-stack AI Development",
    description: "Transform ideas into AI-powered solutions",
    items: ["Custom AI Solutions", "Automation Systems", "Data Pipeline Development", "Full-stack App deployments"],
    link: "/services/full-stack-ai-development",
  },
  {
    title: "Web Development",
    description: "Modern web solutions for your business",
    items: ["Progressive Web Apps", "Full-Stack Applications", "E-commerce Solutions", "API Development & Integration"],
    link: "/services/web-development",
  },
  {
    title: "Bots & Automation Solutions",
    description: "Streamline workflows with automation",
    items: [
      "Discord, Slack, Telegram, etc.",
      "API Integrations",
      "Database Automation Systems",
      "Workflow Automation Tools",
    ],
    link: "/services/bots-automation-solutions",
  },
  // {
  //   title: "Data Management & Analytics",
  //   description: "Unlock insights from your data",
  //   items: [
  //     "Data Cleaning & Preprocessing",
  //     "Business Intelligence",
  //     "Data Analysis & Visualization",
  //     "ETL Pipeline Development",
  //   ],
  //   link: "/services/data-management-analytics",
  // },
  // {
  //   title: "Chatbot & Customer Success",
  //   description: "Enhance customer experience with AI",
  //   items: [
  //     "AI Customer Service Chatbots",
  //     "Support Ticket Integration",
  //     "Multi-platform Chat Solutions",
  //     "Analytics & Tracking",
  //   ],
  //   link: "/services/chatbot-customer-success",
  // },
  // {
  //   title: "AI Fundraising",
  //   description: "Innovative solutions for non-profits",
  //   items: [
  //     "Donor Management Platforms",
  //     "Automated Reporting Systems",
  //     "Digital Transformation",
  //     "NGO & Social Impact Solutions",
  //   ],
  //   link: "/services/ai-fundraising",
  // },
]

