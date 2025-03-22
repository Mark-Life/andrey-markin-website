"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import DeviceFrame from "@/components/device-frame"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceFeature {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  demo?: string
  features: string[]
}

interface ServiceShowcaseProps {
  services: ServiceFeature[]
  contactText?: string
}

export default function ServiceShowcase({ services, contactText = "Discuss Your Project" }: ServiceShowcaseProps) {
  const [activeTab, setActiveTab] = useState(services[0]?.id || "")

  return (
    <div className="w-full">
      {/* Mobile dropdown selector */}
      <div className="block md:hidden mb-6">
        <select
          className="w-full p-3 rounded-md bg-secondary/50 border border-primary/20 text-foreground"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          {services.map((service) => (
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
            {services.map((service) => (
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
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "transition-opacity duration-300",
                activeTab === service.id ? "block opacity-100" : "hidden opacity-0",
              )}
            >
              <div className={cn(
                "grid gap-8 items-center",
                service.demo ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
              )}>
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
                    <Link href="/#contact">{contactText} {service.name}</Link>
                  </Button>
                </div>

                {service.demo && (
                  <div className="flex justify-center">
                    <DeviceFrame>
                      <img
                        src={service.demo}
                        alt={`${service.name} Demo`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </DeviceFrame>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

