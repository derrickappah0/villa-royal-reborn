import { HeroSection } from "@/components/home/hero-section";
import { WhatWeOffer } from "@/components/home/what-we-offer";
import { LocationAdvantage } from "@/components/home/location-advantage";
import { NandysPromise } from "@/components/home/nandys-promise";
import { PhotoGallery } from "@/components/home/photo-gallery";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      <LocationAdvantage />
      <NandysPromise />
      <PhotoGallery />
      <CTASection />
    </>
  );
}
