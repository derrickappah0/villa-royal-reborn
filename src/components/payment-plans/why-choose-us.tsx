import { Shield, Clock, Award, HeartHandshake } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Affordable Entry",
    description: "Start your home ownership journey with just 20-30% deposit. No hidden fees or surprise charges.",
  },
  {
    icon: Clock,
    title: "Flexible Payment Terms",
    description: "Choose from 24-36 month payment plans designed for first-time homebuyers.",
  },
  {
    icon: Award,
    title: "Quality Starter Homes",
    description: "Every starter home is built to high standards with modern finishes and essential amenities.",
  },
  {
    icon: HeartHandshake,
    title: "First-Time Buyer Support",
    description: "Dedicated guidance for first-time homebuyers throughout your entire journey.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-foreground mb-3 text-balance">
            Why Choose Our Starter Plans?
          </h2>
          <p className="text-base text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            We've designed our starter plans specifically for first-time homebuyers with affordability in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-secondary-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-secondary-foreground/70 text-pretty">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
