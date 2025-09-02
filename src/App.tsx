import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyIA } from "./components/WhyIA";
import { Testimonials } from "./components/Testimonials";
import { Resources } from "./components/Resources";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Booking } from "./components/Booking";
import { Chatbot } from "./components/Chatbot";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "booking":
        return (
          <div className="pt-16">
            <Booking />
          </div>
        );
      case "home":
      default:
        return (
          <>
            <Hero onNavigateToBooking={() => setCurrentPage("booking")} />
            <About />
            <Services />
            <WhyIA />
            <Testimonials />
            <Resources />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
      <Footer />
      <Chatbot />
    </div>
  );
}