import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  items: string[]
  link: string
}

export default function ServiceCard({ title, description, items, link }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col bg-secondary/50 hover:bg-secondary/70 transition-colors border-primary/20 hover:border-primary/40">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="w-full mt-auto">
          <Link href={link} className="flex items-center justify-center">
            Learn more <ArrowRight size={16} className="" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

