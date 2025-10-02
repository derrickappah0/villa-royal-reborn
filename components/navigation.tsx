"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/payment-plans", label: "Payment Plans" },
    { href: "/build-for-me", label: "Build For Me" },
    { href: "/contact", label: "Contact" },
    { href: "/book-appointment", label: "Book Appointment", highlight: true },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/50"
          : "bg-background/80 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={handleLinkClick}>
            <Image
              src="https://dajxrhxxcyiovhqotsjt.supabase.co/storage/v1/object/public/pics/ChatGPT_Image_Sep_30__2025__06_o18_48_PM-removebg-preview.png"
              alt="Nandy's Villa Royal Logo"
              width={150}
              height={56}
              priority
              className="h-12 w-auto md:h-14 transition-all duration-300 group-hover:scale-105 drop-shadow-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group hover:scale-105 rounded-lg ${
                  link.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300 hover:bg-muted rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] hover:translate-x-1 ${
                  link.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
                onClick={handleLinkClick}
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
