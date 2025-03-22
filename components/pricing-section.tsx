import PricingCard from "@/components/pricing-card"

const pricingPlans = [
  {
    title: "Default",
    price: "$60",
    unit: "/h",
    description: "For standard projects with flexible timelines",
    features: [
      "Full-stack development",
      "AI integration",
      "We set the deadline",
      "Regular updates",
    ],
  },
  {
    title: "Priority",
    price: "$80",
    unit: "/h",
    description: "For time-sensitive projects with specific deadlines",
    features: [
      "Expedited development",
      "Advanced AI solutions",
      "You set the deadline",
      "Daily progress updates",
    ],
    highlighted: true,
  },
  {
    title: "Project",
    price: "Custom",
    unit: "",
    description: "Pay per deliverable, tailored specifically to your business goals",
    features: [
      "Fixed pricing per milestone",
      "Clearly defined deliverables",
      "Transparent timelines",
      "Flexible revisions and support",
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Pricing</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
          Flexible options to meet your project needs and budget
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              unit={plan.unit}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

