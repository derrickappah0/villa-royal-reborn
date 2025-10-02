import { BookingForm } from "@/components/booking/booking-form";
import { BookingInfo } from "@/components/booking/booking-info";

export default function BookAppointment() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-lg text-muted-foreground">
            Schedule a viewing or consultation with our team
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <BookingForm />
          <BookingInfo />
        </div>
      </div>
    </div>
  );
}
