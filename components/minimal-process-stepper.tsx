import { cn } from "@/lib/utils"

export interface ProcessStep {
  number: number
  title: string
  description: string
}

interface MinimalProcessStepperProps {
  steps: ProcessStep[]
  className?: string
}

export default function MinimalProcessStepper({ steps, className }: MinimalProcessStepperProps) {
  return (
    <div className={cn("w-full space-y-8", className)}>
      {steps.map((step) => (
        <div
          key={step.number}
          className={cn("transition-colors", "opacity-100")}
        >
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-lg font-medium text-primary">{step.number}.</span>
            <h3 className={cn("text-xl font-medium", "text-primary")}>
              {step.title}
            </h3>
          </div>

          <div className="pl-7 text-foreground/80">
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

