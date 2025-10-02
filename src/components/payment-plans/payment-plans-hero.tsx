"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function PaymentPlansHero() {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-background">
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
          Start Your Dream Home
          <br />
          <span className="text-primary">From 400,000 Cedis</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
          Affordable starter plans designed for first-time homeowners. Begin your journey to home ownership with our
          flexible payment options starting at just 400,000 cedis.
        </p>
      </div>
    </section>
  )
}
