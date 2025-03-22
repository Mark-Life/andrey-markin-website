import { cn } from "@/lib/utils"
import ServiceCard, { ServiceCardProps } from "./service-card"

export interface ServiceGridSectionProps {
  title: string
  services: Omit<ServiceCardProps, "className">[]
  className?: string
}

export default function ServiceGridSection({ title, services, className }: ServiceGridSectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 