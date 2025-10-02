import { BookingForm } from "@/components/booking/booking-form"
import { BookingInfo } from "@/components/booking/booking-info"

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's Talk About
            <br />
            <span className="text-primary">Your Dream Home</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Schedule a consultation with our team. We'll discuss your vision, answer your questions, and help you take
            the first step toward home ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          <div>
            <BookingInfo />
          </div>
        </div>
      </div>
    </main>
  )
}
