import { BuildForMeHero } from "@/components/build-for-me/build-for-me-hero";
import { HowItWorks } from "@/components/build-for-me/how-it-works";
import { WhyBuildWithUs } from "@/components/build-for-me/why-build-with-us";
import { OurWorkforce } from "@/components/build-for-me/our-workforce";
import { BuildCTA } from "@/components/build-for-me/build-cta";

export default function BuildForMe() {
  return (
    <>
      <BuildForMeHero />
      <HowItWorks />
      <WhyBuildWithUs />
      <OurWorkforce />
      <BuildCTA />
    </>
  );
}
