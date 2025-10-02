"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const phrases = ["A Lifestyle", "A Dream", "An Investment", "Your Paradise", "Your Future", "A Community"]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1))
          setTypingSpeed(150)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1))
          setTypingSpeed(100)
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed, phrases])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-20 sm:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-coastal-luxury-homes-with-palm-trees-and-be.jpg"
          alt="Nandy's Villa Royal Community"
          className="w-full h-full object-cover animate-[zoomIn_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 text-balance animate-[fadeInUp_0.8s_ease-out] min-h-[140px] sm:min-h-[180px] lg:min-h-[240px] flex flex-col items-center justify-center gap-2 sm:gap-3">
          <span className="leading-tight">More Than Homes...</span>
          <span className="text-primary flex items-center leading-tight">
            {currentText}
            <span className="inline-block w-0.5 sm:w-1 h-8 sm:h-12 md:h-14 lg:h-16 bg-primary ml-1 animate-[blink_1s_ease-in-out_infinite]" />
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty animate-[fadeInUp_0.8s_ease-out_0.2s_both] px-4 sm:px-0">
          Experience modern living in a gated, secure, and coastal-inspired community near Ghana's beautiful beaches.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-[fadeInUp_0.8s_ease-out_0.4s_both] px-4 sm:px-0">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform w-full sm:w-auto"
          >
            <Link href="/payment-plans">
              Explore Our Community
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="hover:scale-105 transition-transform bg-transparent w-full sm:w-auto"
          >
            <Link href="/book-appointment">Book a Visit</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}
