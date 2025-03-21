"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"
import { useEffect, useState, useRef } from "react"

export interface ProcessStep {
  number: number
  title: string
  description: string
}

interface ProcessStepperProps {
  steps: ProcessStep[]
  className?: string
}

export default function ProcessStepper({ steps, className }: ProcessStepperProps) {
  const [activeStep, setActiveStep] = useState(1)

  // Create refs for each step to detect when they're in view
  const stepRefs = useRef<(HTMLElement | null)[]>(steps.map(() => null))
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  useEffect(() => {
    if (!containerInView) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveStep(index + 1)
            }
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    stepRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [containerInView, steps])

  return (
    <div className={cn("w-full", className)} ref={containerRef}>
      {/* Mobile view - vertical cards */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <div key={index} ref={(el) => (stepRefs.current[index] = el)}>
            <StepCard step={step} isActive={activeStep === step.number} />
          </div>
        ))}
      </div>

      {/* Desktop view - timeline */}
      <div className="hidden md:block relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

        <div className="space-y-16 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="flex items-center flex-row-reverse"
            >
              <div className="w-1/2 px-8 text-left">
                <StepContent step={step} isActive={activeStep === step.number} />
              </div>

              <StepNumber number={step.number} isActive={activeStep === step.number} />

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Step card for mobile view
function StepCard({ step, isActive }: { step: ProcessStep; isActive: boolean }) {
  return (
    <Card
      className={cn(
        "p-6 border transition-all duration-300",
        isActive ? "border-primary bg-secondary/50" : "border-primary/20 bg-secondary/30",
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <StepNumber number={step.number} isActive={isActive} />
        <h3 className="text-xl font-bold">{step.title}</h3>
      </div>
      <p className="text-foreground/80">{step.description}</p>
    </Card>
  )
}

// Step content for desktop view
function StepContent({ step, isActive }: { step: ProcessStep; isActive: boolean }) {
  return (
    <div className={cn("transition-all duration-300", isActive ? "opacity-100" : "opacity-70")}>
      <h3 className={cn("text-xl font-bold mb-2 transition-colors", isActive ? "text-primary" : "text-foreground")}>
        {step.title}
      </h3>
      <p className="text-foreground/80">{step.description}</p>
    </div>
  )
}

// Step number bubble
function StepNumber({ number, isActive }: { number: number; isActive: boolean }) {
  return (
    <div
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold z-10 transition-all duration-300",
        isActive
          ? "bg-primary text-primary-foreground shadow-lg scale-110"
          : "bg-secondary/70 text-foreground border border-primary/30",
      )}
    >
      {number}
    </div>
  )
}

