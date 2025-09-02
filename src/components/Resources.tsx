import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen, Calculator, FileText, TrendingUp } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Understanding Life Insurance",
    description: "A comprehensive guide to choosing between term and permanent life insurance options.",
    readTime: "5 min read"
  },
  {
    icon: Calculator,
    title: "Top 5 Ways to Save on Home Insurance",
    description: "Expert tips to reduce your home insurance premiums without sacrificing coverage.",
    readTime: "3 min read"
  },
  {
    icon: FileText,
    title: "Small Business Insurance Checklist",
    description: "Essential coverage types every small business owner should consider.",
    readTime: "4 min read"
  },
  {
    icon: TrendingUp,
    title: "Retirement Planning in Your 30s",
    description: "Start building wealth early with smart investment and insurance strategies.",
    readTime: "6 min read"
  }
];

export function Resources() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-800 mb-4">
            Educational Resources
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed with expert insights and practical guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <resource.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-500">{resource.readTime}</span>
                </div>
                <CardTitle className="text-xl text-gray-800">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600">
                  {resource.description}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}