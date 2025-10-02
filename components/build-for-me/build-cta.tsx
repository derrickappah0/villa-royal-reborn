import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MessageCircle } from "lucide-react"

export function BuildCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Ready to Build Your Dream Home?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
          Let's discuss your vision and create a custom plan that brings it to life. Our team is ready to answer all
          your questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/book-appointment">
              <Calendar className="mr-2" size={20} />
              Book Consultation
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            <Link href="/contact">
              <MessageCircle className="mr-2" size={20} />
              Get a Quote
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
