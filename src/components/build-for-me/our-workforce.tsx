"use client"

import type React from "react"

import { Wrench, Paintbrush, Hammer, Ruler, Drill, HardHat } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const workforce = [
  { icon: HardHat, title: "Masons", description: "Expert bricklayers and foundation specialists" },
  { icon: Hammer, title: "Carpenters", description: "Skilled woodworkers for all carpentry needs" },
  { icon: Paintbrush, title: "Painters", description: "Professional finishing and decoration" },
  { icon: Wrench, title: "Plumbers", description: "Licensed plumbing installation and repair" },
  { icon: Drill, title: "Electricians", description: "Certified electrical systems experts" },
  { icon: Ruler, title: "Tilers", description: "Precision tile and flooring installation" },
]

export function OurWorkforce() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Our Expert Workforce</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A complete team of skilled professionals dedicated to building your dream home.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {workforce.map((worker, index) => {
            const Icon = worker.icon
            const isActive = activeIndex === index

            return (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className={`
                  flex flex-col items-center p-6 rounded-lg border-2 transition-all duration-300
                  ${isActive ? "border-primary bg-primary/5 shadow-lg scale-105" : "border-border bg-card hover:border-primary/50"}
                `}
                >
                  <div
                    className={`
                    w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300
                    ${isActive ? "bg-primary scale-110" : "bg-primary/10"}
                  `}
                  >
                    <Icon
                      className={`w-8 h-8 transition-colors ${isActive ? "text-primary-foreground" : "text-primary"}`}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-center text-foreground">{worker.title}</h3>
                  {isActive && (
                    <p className="text-xs text-muted-foreground text-center mt-2 animate-[fadeIn_0.3s_ease-out]">
                      {worker.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
