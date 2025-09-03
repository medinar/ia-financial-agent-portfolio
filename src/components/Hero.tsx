import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigateToBooking?: () => void;
}

export function Hero({ onNavigateToBooking }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900/90 to-blue-700/90">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1721042235332-45f89689cfba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGluc3VyYW5jZXxlbnwxfHx8fDE3NTY3OTAwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="absolute inset-0 bg-blue-900/60 z-10" />
      
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl mb-6">
          Protecting What Matters Most
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Personalized insurance solutions with IA Financial Group
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Get a Free Quote
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
            onClick={onNavigateToBooking}
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}