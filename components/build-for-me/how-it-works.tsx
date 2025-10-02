"use client"

import type React from "react"

import { FileText, Hammer, Key } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Choose or Upload Your Design",
    description: "Select from our curated house plans or bring your own architectural design. We work with any vision.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Our Team Builds It",
    description:
      "Our experienced workforce of masons, carpenters, and craftsmen bring your design to life with precision and care.",
  },
  {
    number: "03",
    icon: Key,
    title: "We Deliver Your Home",
    description:
      "Move into a completed, quality-assured home built to your exact specifications. Your dream, delivered.",
  },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="how-it-works" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            Three simple steps from your land to your dream home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border" />
                )}

                <div className="relative bg-card rounded-lg p-8 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-pretty">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
