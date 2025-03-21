import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import ServiceCard from "@/components/service-card"
import MatrixBackground from "@/components/matrix-background"

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      {/* <MatrixBackground /> */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-primary">Services</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
            Comprehensive solutions to help your business grow with cutting-edge technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                items={service.items}
                link={service.link}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-6">Ready to transform your business?</h2>
            <Button asChild size="lg" className="text-lg">
              <Link href="/#contact">Let's Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

