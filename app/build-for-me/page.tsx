import { BuildForMeHero } from "@/components/build-for-me/build-for-me-hero"
import { HowItWorks } from "@/components/build-for-me/how-it-works"
import { OurWorkforce } from "@/components/build-for-me/our-workforce"
import { WhyBuildWithUs } from "@/components/build-for-me/why-build-with-us"
import { BuildRequestForm } from "@/components/build-for-me/build-request-form"
import { BuildCTA } from "@/components/build-for-me/build-cta"

export default function BuildForMePage() {
  return (
    <main className="min-h-screen pt-16">
      <BuildForMeHero />
      <HowItWorks />
      <OurWorkforce />
      <WhyBuildWithUs />
      <div className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BuildRequestForm />
        </div>
      </div>
      <BuildCTA />
    </main>
  )
}
