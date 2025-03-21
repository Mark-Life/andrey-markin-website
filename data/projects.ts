export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: "TradeCapture AI",
    description: "Mobile app for SDRs to capture leads at tradeshows with AI assistance",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Expo", "OpenAI", "Supabase"],
    link: "/projects/tradecapture-ai",
  },
  // Add more projects here as they become available
]

