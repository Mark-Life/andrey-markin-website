export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  hide?: boolean
  slug?: string
}

export const projectsById: Record<string, Project> = {
  Aggregator: {
    id: 'Aggregator',
    title: "Intelligent Aggregator Platform",
    description: "High-performance, SEO-optimized aggregator platform built with Next.js",
    image: "https://lxbpjvrr41.ufs.sh/f/6KZjuRTQYJxHHJ76tUspOSZHF573cwrDvLBxKTg1AnaMC9ej",
    tags: ["Next.js", "Supabase", "OpenAI", "Tailwind CSS"],
    slug: "aggregator",
    link: "/projects/aggregator",
  },
  TradeCaptureAI: {
    id: 'TradeCaptureAI',
    title: "TradeCapture AI",
    description: "Mobile app for SDRs to capture leads at tradeshows with AI assistance",
    image: "https://lxbpjvrr41.ufs.sh/f/6KZjuRTQYJxHTPcBsxkDe7KZ3qSBQ8E1Yw2vu6bIcXGVmk9R",
    tags: ["React Native", "Expo", "OpenAI", "Supabase"],
    link: "/projects/tradecapture-ai",
    hide: true,
  },
  // Add more projects here as they become available
}

// For backwards compatibility and array operations
export const projects: Project[] = Object.values(projectsById)

