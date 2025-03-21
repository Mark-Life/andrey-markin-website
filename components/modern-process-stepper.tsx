"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export interface ProcessStep {
  number: number
  title: string
  description: string
}

interface ModernProcessStepperProps {
  steps: ProcessStep[]
  className?: string
}

export default function ModernProcessStepper({ steps, className }: ModernProcessStepperProps) {
  const [activeStep, setActiveStep] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Auto-advance steps every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => {
        const next = current >= steps.length ? 1 : current + 1
        return next
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className={cn("w-full", className)} ref={containerRef}>
      {/* Desktop view - horizontal steps */}
      <div className="hidden md:block mb-12">
        <div className="flex justify-between items-center relative">
          {/* Progress bar background */}
          <div className="absolute h-1 bg-secondary/50 left-0 right-0 top-1/2 transform -translate-y-1/2 z-0"></div>

          {/* Animated progress bar */}
          <motion.div
            className="absolute h-1 bg-primary left-0 top-1/2 transform -translate-y-1/2 z-0"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />

          {/* Step indicators */}
          {steps.map((step) => (
            <div
              key={step.number}
              className="z-10 flex flex-col items-center"
              onClick={() => setActiveStep(step.number)}
            >
              <motion.div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer transition-all",
                  step.number <= activeStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground/70 border border-primary/20",
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={step.number === activeStep ? { scale: [1, 1.1, 1] } : {}}
                transition={{
                  duration: 0.5,
                  repeat: step.number === activeStep ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "reverse",
                }}
              >
                {step.number}
              </motion.div>
              <div className="mt-2 text-center">
                <p
                  className={cn(
                    "font-medium transition-colors",
                    step.number === activeStep ? "text-primary" : "text-foreground/70",
                  )}
                >
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view - step indicators */}
      <div className="md:hidden mb-6">
        <div className="flex justify-between items-center px-2">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer",
                step.number <= activeStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground/70 border border-primary/20",
              )}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveStep(step.number)}
            >
              {step.number}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Active step content */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="bg-secondary/30 border-primary/20 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                {activeStep}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">{steps[activeStep - 1].title}</h3>
                <div className="md:hidden text-sm text-foreground/70">
                  Step {activeStep} of {steps.length}
                </div>
              </div>
            </div>

            <p className="text-foreground/80 text-lg">{steps[activeStep - 1].description}</p>

            {/* Navigation buttons for mobile */}
            <div className="flex justify-between mt-6 md:hidden">
              <button
                className={cn(
                  "p-2 rounded-full bg-secondary/70 text-foreground/70 transition-opacity",
                  activeStep === 1 ? "opacity-50 cursor-not-allowed" : "opacity-100",
                )}
                onClick={() => setActiveStep((current) => Math.max(1, current - 1))}
                disabled={activeStep === 1}
              >
                <ChevronRight className="w-5 h-5 transform rotate-180" />
              </button>

              <button
                className={cn(
                  "p-2 rounded-full bg-secondary/70 text-foreground/70 transition-opacity",
                  activeStep === steps.length ? "opacity-50 cursor-not-allowed" : "opacity-100",
                )}
                onClick={() => setActiveStep((current) => Math.min(steps.length, current + 1))}
                disabled={activeStep === steps.length}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Step navigation dots (mobile) */}
      <div className="flex justify-center mt-4 md:hidden">
        {steps.map((step) => (
          <motion.div
            key={step.number}
            className={cn(
              "w-2 h-2 mx-1 rounded-full cursor-pointer",
              step.number === activeStep ? "bg-primary" : "bg-secondary/70",
            )}
            whileHover={{ scale: 1.5 }}
            onClick={() => setActiveStep(step.number)}
          />
        ))}
      </div>
    </div>
  )
}

