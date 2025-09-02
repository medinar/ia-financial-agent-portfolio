import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl text-gray-800">
              Meet Your Trusted Insurance Partner
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-800">Sarah Mitchell</strong> brings over 15 years of experience serving families and businesses across British Columbia, specializing in comprehensive insurance solutions tailored to West Coast lifestyles.
              </p>
              <p>
                As a licensed insurance agent with IA Financial Group based in Vancouver, I understand the unique insurance needs of BC residents—from earthquake coverage to flood protection and everything in between.
              </p>
              <p>
                My certifications include BC Life & Health Insurance License, Property & Casualty License, and I'm an active member of the Insurance Brokers Association of British Columbia (IBABC).
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 italic">
                "I believe insurance isn't just about policies—it's about protecting your family's future and giving you confidence to pursue your dreams."
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbnN1cmFuY2UlMjBhZ2VudHxlbnwxfHx8fDE3NTY3OTI5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sarah Mitchell - Insurance Agent"
                className="w-80 h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-sm">15+ Years</p>
                <p className="text-xs">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}