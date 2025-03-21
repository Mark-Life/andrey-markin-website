import ServiceCard from "@/components/service-card"
import { services } from "@/data/services"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  // Only show up to 6 services on the home page
  const featuredServices = services.slice(0, 6)

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Services</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
          Comprehensive solutions to help your business grow with technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              items={service.items}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

