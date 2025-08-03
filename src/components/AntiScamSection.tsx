import { Shield, CreditCard, Star, Ban, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import securityImage from "@/assets/security-trust.jpg";

const AntiScamSection = () => {
  const guarantees = [
    {
      icon: CheckCircle,
      title: "Verified Helpers Only",
      description: "All helpers undergo identity verification and academic credential checks"
    },
    {
      icon: CreditCard,
      title: "Escrow Payment System", 
      description: "Your payment is held securely until you approve the completed work"
    },
    {
      icon: Star,
      title: "Ratings, Reviews, and Bans",
      description: "Transparent rating system with immediate bans for any fraudulent activity"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-academic-blue-deep to-primary rounded-3xl p-12 text-center text-primary-foreground overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <img 
              src={securityImage} 
              alt="Security background" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 rounded-full p-6 backdrop-blur-sm">
                <Shield className="w-12 h-12 text-academic-yellow" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Worry Of Scam?
            </h2>
            
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Don't worry. We got you covered with multiple layers of protection.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {guarantees.map((guarantee, index) => {
                const IconComponent = guarantee.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-academic-green mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{guarantee.title}</h3>
                      <p className="text-sm opacity-80 leading-relaxed">
                        {guarantee.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-academic-green" />
                <span className="font-semibold">100% Money-Back Guarantee</span>
              </div>
              <p className="text-sm opacity-80">
                If you're not satisfied with the quality, get a full refund within 7 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AntiScamSection;