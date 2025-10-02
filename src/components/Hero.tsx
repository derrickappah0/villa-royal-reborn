import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";
import heroImage from "@/assets/hero-villa.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury villa exterior at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience Unparalleled
            <span className="block text-gradient-royal">Luxury & Comfort</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover refined elegance and world-class hospitality at Nandy's Villa Royal, 
            where every moment becomes a cherished memory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 shadow-[var(--shadow-luxury)]"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Reserve Your Stay
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 text-lg px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80"
            >
              Explore Rooms
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-gold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Luxury Suites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-gold mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Concierge Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-gold mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Premium Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-gold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Guest Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
