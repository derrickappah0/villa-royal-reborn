import { PaymentPlansHero } from "@/components/payment-plans/payment-plans-hero"
import { PlanComparison } from "@/components/payment-plans/plan-comparison"
import { PaymentCalculator } from "@/components/payment-plans/payment-calculator"
import { WhyChooseUs } from "@/components/payment-plans/why-choose-us"

export default function PaymentPlansPage() {
  return (
    <main className="min-h-screen pt-16">
      <PaymentPlansHero />
      <PlanComparison />
      <PaymentCalculator />
      <WhyChooseUs />
    </main>
  )
}
