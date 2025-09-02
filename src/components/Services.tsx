import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Heart, Shield, Home, Building, PiggyBank } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Term and permanent life insurance to protect your family's financial future."
  },
  {
    icon: Shield,
    title: "Health & Disability",
    description: "Comprehensive health coverage and disability protection for unexpected events."
  },
  {
    icon: Home,
    title: "Home & Auto",
    description: "Protect your home and vehicles with competitive rates and comprehensive coverage."
  },
  {
    icon: Building,
    title: "Group & Business",
    description: "Employee benefits and business insurance solutions for growing companies."
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description: "Build wealth and secure your retirement with proven investment strategies."
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-800 mb-4">
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From life insurance to retirement planning, I offer a full range of services to protect what matters most to you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}