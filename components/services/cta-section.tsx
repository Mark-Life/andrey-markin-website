import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface CTASectionProps {
  heading: string
  text: string
  buttonText: string
  buttonHref: string
  buttonSize?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export default function CTASection({
  heading,
  text,
  buttonText,
  buttonHref,
  buttonSize = "lg",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-20 border-t border-border", className)}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{heading}</h2>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          {text}
        </p>
        <Button asChild size={buttonSize} className="text-lg">
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  )
} 