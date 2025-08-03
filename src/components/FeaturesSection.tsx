import { Shield, Clock, Users, Award, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted, Verified Helpers",
      description: "All our academic helpers are thoroughly vetted and verified for quality assurance."
    },
    {
      icon: Clock,
      title: "Smart & Repeat-Friendly",
      description: "Easy-to-use platform designed for recurring academic assistance needs."
    },
    {
      icon: Users,
      title: "Secure Payments",
      description: "Protected payment system with escrow services for your peace of mind."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why choose PlsMightFail?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide a secure, reliable platform connecting students with verified academic experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rating Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-2xl font-bold text-gray-900 ml-2">5.0</span>
          </div>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-gray-900">2000+ satisfied students</span> trust our platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;