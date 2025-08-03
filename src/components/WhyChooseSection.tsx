import { CheckCircle, Shield, Repeat, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Trusted, Verified Helpers",
      description: "All helpers undergo strict verification. Academic credentials, performance history, and real student reviews ensure quality.",
      color: "text-academic-green"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Escrow system protects your payments. Money is only released when you're 100% satisfied with the completed work.",
      color: "text-primary"
    },
    {
      icon: Repeat,
      title: "Smart & Repeat-Friendly",
      description: "One-click access to your favorite helpers. Smart matching system connects you with experts in your specific field.",
      color: "text-academic-purple"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Why choose <span className="text-primary">PlsMightFail</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who trust our platform for their academic success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="card-title mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-academic-yellow text-academic-yellow" />
            ))}
          </div>
          <p className="text-muted-foreground">
            4.9/5 rating from <span className="font-semibold text-foreground">2,000+ satisfied students</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;