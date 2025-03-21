import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  unit?: string
  description: string
  features: string[]
  highlighted?: boolean
}

export default function PricingCard({
  title,
  price,
  unit = "/h",
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card
      className={`flex flex-col h-full ${highlighted ? "border-primary" : "border-primary/20"} ${highlighted ? "bg-secondary/70" : "bg-secondary/50"}`}
    >
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          {unit && <span className="text-foreground/70">{unit}</span>}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className={`w-full ${highlighted ? "" : "variant-outline"}`}>
          <Link href="/#contact">Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

