import { HeroSection } from "@/components/home/hero-section"
import { WhatWeOffer } from "@/components/home/what-we-offer"
import { PhotoGallery } from "@/components/home/photo-gallery"
import { LocationAdvantage } from "@/components/home/location-advantage"
import { NandysPromise } from "@/components/home/nandys-promise"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatWeOffer />
      <PhotoGallery />
      <LocationAdvantage />
      <NandysPromise />
      <CTASection />
    </main>
  )
}
