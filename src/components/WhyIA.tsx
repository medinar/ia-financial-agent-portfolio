import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "150+ Years of Excellence",
    description: "IA Financial Group has been protecting Canadian families since 1892 with proven financial strength."
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Personalized service with dedicated support throughout your insurance journey."
  },
  {
    icon: TrendingUp,
    title: "Financial Stability",
    description: "A+ credit rating and over $200 billion in assets under management."
  },
  {
    icon: CheckCircle,
    title: "Comprehensive Coverage",
    description: "Full suite of insurance and wealth management solutions under one roof."
  }
];

export function WhyIA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-800 mb-4">
            Why Choose IA Financial Group?
          </h2>
          <p className="text-xl text-gray-600">
            Partner with one of Canada's most trusted insurance companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <span className="text-2xl text-blue-600">IA</span>
            </div>
          </div>
          <h3 className="text-2xl text-gray-800 mb-4">IA Financial Group</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As one of the largest insurance companies in Canada, IA Financial Group provides the security and stability you need to protect your financial future with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}