import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import TechStackScroller from "@/components/tech-stack-scroller"
import ServiceShowcase from "@/components/services/service-showcase"
import DeviceFrame from "@/components/device-frame"
import MinimalProcessStepper, { ProcessStep } from "@/components/minimal-process-stepper"
import { TechItem } from "@/data/tech-stacks"
import { developmentSteps } from "@/data/dev-process"
import CTASection from "@/components/services/cta-section"
import ServiceGridSection from "@/components/services/service-grid-section"
import { ReactNode } from "react"

export interface ServiceShowcaseItem {
  id: string
  name: string
  icon: ReactNode
  description: string
  features: string[]
}

export interface ServiceCardItem {
  icon: ReactNode
  title: string
  features: string[]
}

export interface ServicePageProps {
  title: string
  description: string
  heroImage: string
  heroImageAlt: string
  techStack: TechItem[]
  showcaseTitle?: string
  showcaseDescription?: string
  showcaseItems?: ServiceShowcaseItem[]
  showcaseContactText?: string
  serviceGridTitle?: string
  serviceGridItems?: ServiceCardItem[]
  ctaHeading: string
  ctaText: string
  ctaButtonText: string
  ctaButtonHref: string
}

export default function ServicePage({
  title,
  description,
  heroImage,
  heroImageAlt,
  techStack,
  showcaseTitle,
  showcaseDescription,
  showcaseItems,
  showcaseContactText,
  serviceGridTitle,
  serviceGridItems,
  ctaHeading,
  ctaText,
  ctaButtonText,
  ctaButtonHref,
}: ServicePageProps) {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6 md:mb-8">
            <Button asChild variant="outline" size="sm" className="mr-4">
              <Link href="/services">
                <ArrowLeft size={16} className="mr-2" /> Back to Services
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="lg:col-span-4">
              <h1 className="text-5xl md:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 text-primary">{title}</h1>
              <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-foreground/80 mb-5 md:mb-6 leading-tight">
                {description}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 mb-8 lg:mb-0">
                <Button asChild size="lg" className="text-base md:text-lg">
                  <Link href="/#contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base md:text-lg">
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-8 relative w-full">
              <div className="w-full overflow-hidden">
                <DeviceFrame type="macos">
                  <Image
                    src={heroImage}
                    alt={heroImageAlt}
                    width={900}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </DeviceFrame>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="">
        <div className="container mx-auto px-4">
          <TechStackScroller items={techStack} />
        </div>
      </section>

      {/* Services Showcase - Conditional */}
      {showcaseItems && showcaseItems.length > 0 && (
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            {showcaseTitle && (
              <h2 className="text-3xl font-bold mb-4 text-center">{showcaseTitle}</h2>
            )}
            {showcaseDescription && (
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
                {showcaseDescription}
              </p>
            )}

            <ServiceShowcase 
              services={showcaseItems}
              contactText={showcaseContactText || "Start Your"}
            />
          </div>
        </section>
      )}

      {/* Service Categories - Conditional */}
      {serviceGridItems && serviceGridItems.length > 0 && (
        <ServiceGridSection 
          title={serviceGridTitle || "Our Services"}
          services={serviceGridItems}
        />
      )}

      {/* Process Section - Using the minimal component */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>

          <MinimalProcessStepper steps={developmentSteps} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        heading={ctaHeading}
        text={ctaText}
        buttonText={ctaButtonText}
        buttonHref={ctaButtonHref}
      />

      <Footer />
    </main>
  )
} 