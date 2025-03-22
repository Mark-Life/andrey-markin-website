import { Check } from "lucide-react"

export interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  features: string[]
  className?: string
}

export default function ServiceCard({ icon, title, features, className = "" }: ServiceCardProps) {
  return (
    <div className={`bg-background rounded-lg p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all ${className}`}>
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3 mb-6">
        {features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start">
            <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
} 