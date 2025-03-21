"use client"

import { cn } from "@/lib/utils"
// import { Card } from "@/components/ui/card"

export interface TechItem {
  name: string
  logo: string
}

interface TechStackScrollerProps {
  items: TechItem[]
  className?: string
}

export default function TechStackScroller({ items, className }: TechStackScrollerProps) {
  return (
    <div className={cn("w-full py-4", className)}>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {items.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <div className="rounded-full w-10 h-10 flex items-center justify-center">
              <img
                src={tech.logo || "/placeholder.svg?height=60&width=60"}
                alt={tech.name}
                className="w-10 h-10 object-contain rounded-[8px]"
              />
            </div>
            {/* <span className="text-sm font-medium">{tech.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  )
}

