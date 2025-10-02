import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Rooms } from "@/components/Rooms";
import { Amenities } from "@/components/Amenities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
