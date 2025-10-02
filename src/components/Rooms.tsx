import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Tv, Coffee, Bath, Maximize, Users } from "lucide-react";
import roomRoyal from "@/assets/room-royal.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";

const rooms = [
  {
    id: 1,
    name: "Royal Suite",
    image: roomRoyal,
    price: "$599",
    size: "85 m²",
    guests: "2-4",
    description: "Our signature suite featuring a king bed, separate living area, and panoramic views.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Coffee, label: "Minibar" },
      { icon: Bath, label: "Luxury Bath" },
    ],
  },
  {
    id: 2,
    name: "Deluxe Suite",
    image: roomDeluxe,
    price: "$399",
    size: "65 m²",
    guests: "2-3",
    description: "Spacious accommodation with premium furnishings and modern amenities.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Coffee, label: "Minibar" },
      { icon: Bath, label: "Premium Bath" },
    ],
  },
  {
    id: 3,
    name: "Executive Room",
    image: roomExecutive,
    price: "$299",
    size: "45 m²",
    guests: "2",
    description: "Contemporary design with all essential luxuries for business and leisure travelers.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Cable TV" },
      { icon: Coffee, label: "Coffee Maker" },
      { icon: Bath, label: "Modern Bath" },
    ],
  },
];

export const Rooms = () => {
  return (
    <section id="rooms" className="py-24 bg-muted/30">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-royal">Premium</span> Accommodations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each room is meticulously designed to provide the ultimate comfort and luxury experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card
              key={room.id}
              className="overflow-hidden group hover:shadow-[var(--shadow-luxury)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} interior`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                  {room.price}/night
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.guests} Guests</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <amenity.icon className="w-4 h-4 text-primary" />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Book This Room
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
