"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
          Take the first step towards owning your dream home in our coastal paradise. Our team is ready to guide you
          through every step of the process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          >
            <Link href="/contact">
              <Phone className="mr-2" size={20} />
              Contact Us Today
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all"
          >
            <Link href="/book-appointment">
              <Calendar className="mr-2" size={20} />
              Schedule a Visit
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
