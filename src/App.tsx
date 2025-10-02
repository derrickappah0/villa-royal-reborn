import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";
import PaymentPlans from "./pages/PaymentPlans";
import BuildForMe from "./pages/BuildForMe";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nandys-theme">
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment-plans" element={<PaymentPlans />} />
            <Route path="/build-for-me" element={<BuildForMe />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
