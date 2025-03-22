import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import ReviewsSection from "@/components/reviews-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <ReviewsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

