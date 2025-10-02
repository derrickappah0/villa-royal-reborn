import { Clock, DollarSign, Award, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Clock,
    title: "Time-Saving",
    description:
      "We manage the entire construction process so you don't have to. Focus on your life while we build your home.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear, upfront quotes with no hidden costs. You know exactly what you're paying for from day one.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Every project undergoes rigorous quality checks. We use premium materials and proven construction methods.",
  },
  {
    icon: Shield,
    title: "One-Brand Trust",
    description: "From foundation to finishing, one trusted team handles everything. No coordination headaches.",
  },
]

export function WhyBuildWithUs() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-3 text-balance">
            Why Build With Nandy's Villa Royal?
          </h2>
          <p className="text-base text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            We make home construction simple, transparent, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-4 pb-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
