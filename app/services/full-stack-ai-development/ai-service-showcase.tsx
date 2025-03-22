"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, Brain, MessageSquare, BarChart, FileText, Image } from "lucide-react"
import DeviceFrame from "@/components/device-frame"
import Link from "next/link"
import { cn } from "@/lib/utils"

const aiServices = [
  {
    id: "chatbots",
    name: "AI Chatbots",
    icon: <MessageSquare className="h-5 w-5" />,
    description:
      "Intelligent conversational agents that can handle customer inquiries, provide support, and automate routine tasks.",
    demo: "/placeholder.svg?height=600&width=300",
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
    demo: "/placeholder.svg?height=600&width=300",
    features: ["Sales forecasting", "Customer behavior analysis", "Trend identification", "Anomaly detection"],
  },
  {
    id: "document",
    name: "Document Processing",
    icon: <FileText className="h-5 w-5" />,
    description: "Automated extraction and analysis of information from documents, invoices, receipts, and forms.",
    demo: "/placeholder.svg?height=600&width=300",
    features: ["OCR and data extraction", "Form processing", "Document classification", "Information validation"],
  },
  {
    id: "vision",
    name: "Computer Vision",
    icon: <Image className="h-5 w-5" />,
    description: "Image and video analysis solutions for object detection, recognition, and visual inspection.",
    demo: "/placeholder.svg?height=600&width=300",
    features: ["Object detection", "Facial recognition", "Product visual inspection", "Image classification"],
  },
  {
    id: "agents",
    name: "AI Agents",
    icon: <Bot className="h-5 w-5" />,
    description:
      "Autonomous AI agents that can perform complex tasks, make decisions, and interact with other systems.",
    demo: "/placeholder.svg?height=600&width=300",
    features: ["Task automation", "Multi-agent coordination", "Workflow optimization", "Adaptive learning"],
  },
  {
    id: "nlp",
    name: "NL Processing",
    icon: <Brain className="h-5 w-5" />,
    description: "Text analysis, sentiment detection, and language generation for content creation and analysis.",
    demo: "/placeholder.svg?height=600&width=300",
    features: ["Sentiment analysis", "Content summarization", "Language translation", "Text classification"],
  },
]

export default function AIServiceShowcase() {
  const [activeTab, setActiveTab] = useState("chatbots")

  return (
    <div className="w-full">
      {/* Mobile dropdown selector */}
      <div className="block md:hidden mb-6">
        <select
          className="w-full p-3 rounded-md bg-secondary/50 border border-primary/20 text-foreground"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          {aiServices.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop layout with tabs on the left */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side tabs for desktop */}
        <div className="hidden md:block w-full md:w-64 flex-shrink-0 content-center">
          <div className="flex flex-col gap-2 sticky top-24">
            {aiServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-md text-left transition-colors",
                  activeTab === service.id
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary/30 text-foreground/70 hover:bg-secondary/50 hover:text-foreground",
                )}
              >
                <span className="flex-shrink-0">{service.icon}</span>
                <span>{service.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="flex-grow">
          {aiServices.map((service) => (
            <div
              key={service.id}
              className={cn(
                "transition-opacity duration-300",
                activeTab === service.id ? "block opacity-100" : "hidden opacity-0",
              )}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-foreground/80 mb-6">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="font-medium mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-primary/20 p-1 rounded-full mr-2 mt-0.5">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 6L9 17L4 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                              />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild>
                    <Link href="/#contact">Discuss Your {service.name} Project</Link>
                  </Button>
                </div>

                <div className="flex justify-center">
                  <DeviceFrame>
                    <img
                      src={service.demo || "/placeholder.svg"}
                      alt={`${service.name} Demo`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </DeviceFrame>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

