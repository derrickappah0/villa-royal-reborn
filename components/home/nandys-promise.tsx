"use client"

import { useEffect, useRef, useState } from "react"

export function NandysPromise() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-balance">Nandy's Promise</h2>
          <blockquote className="text-xl sm:text-2xl text-muted-foreground italic leading-relaxed text-pretty">
            "We don't just build houses. We create homes where families grow, memories are made, and dreams come true.
            Every structure we deliver is a testament to our commitment to quality, security, and community."
          </blockquote>
          <div className="mt-8 h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
      </div>
    </section>
  )
}
