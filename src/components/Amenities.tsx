import { Dumbbell, Utensils, Waves, Sparkles, Car, Wifi } from "lucide-react";

const amenities = [
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Gourmet restaurant serving international cuisine with locally sourced ingredients",
  },
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Stunning rooftop pool with panoramic views and poolside bar service",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym equipment and personal training available 24/7",
  },
  {
    icon: Sparkles,
    title: "Luxury Spa",
    description: "Full-service spa offering rejuvenating treatments and wellness programs",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary ultra-fast internet throughout the entire property",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Complimentary valet service and secure parking for all guests",
  },
];

export const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            World-Class <span className="text-gradient-gold">Amenities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Indulge in premium facilities and services designed for your ultimate comfort
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <amenity.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{amenity.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
