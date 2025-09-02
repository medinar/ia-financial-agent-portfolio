import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fGVufDF8fHx8MTc1Njc5MjQ0M3ww&ixlib=rb-4.1.0&q=80&w=150",
    quote: "Sarah helped us find the perfect group insurance plan for our growing team. Her expertise saved us thousands while ensuring comprehensive coverage."
  },
  {
    name: "Jennifer Rodriguez",
    role: "Working Mother",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fGVufDF8fHx8MTc1Njc5MjQ0M3ww&ixlib=rb-4.1.0&q=80&w=150",
    quote: "When my husband was diagnosed with cancer, our life insurance policy gave us peace of mind. Sarah's guidance was invaluable during a difficult time."
  },
  {
    name: "Robert Thompson",
    role: "Retiree",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fGVufDF8fHx8MTc1Njc5MjQ0M3ww&ixlib=rb-4.1.0&q=80&w=150",
    quote: "Sarah's retirement planning strategies helped us achieve our financial goals ahead of schedule. We're now enjoying a comfortable retirement."
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-800 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            See how we've helped families and businesses protect what matters most
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}