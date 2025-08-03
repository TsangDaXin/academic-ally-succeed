import { Button } from "@/components/ui/button";
import { GraduationCap, DollarSign, Clock } from "lucide-react";
import helperImage from "@/assets/helper-character.jpg";

const HelperCallToAction = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Extra Income",
      description: "Flexible earning opportunities"
    },
    {
      icon: Clock,
      title: "Work Your Schedule",
      description: "Choose when and what to work on"
    },
    {
      icon: GraduationCap,
      title: "Share Your Expertise",
      description: "Help students succeed in your field"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-8 left-8 text-5xl text-academic-yellow opacity-60">⭐</div>
      <div className="absolute top-16 right-12 text-4xl text-academic-yellow opacity-50">⭐</div>
      <div className="absolute bottom-12 left-16 text-6xl text-academic-yellow opacity-40">⭐</div>
      
      <div className="container mx-auto relative z-10">
        <div className="bg-gradient-soft rounded-3xl p-12 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-academic-yellow/10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full translate-x-20 translate-y-20"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="section-title mb-6">
                Interested being a 
                <span className="text-primary block">helper?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our community of verified academic helpers and start earning money by sharing your expertise with students worldwide.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
              
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                Apply Now
              </Button>
              
              <div className="mt-6 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">200+ experts</span> already earning with us
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full transform scale-110"></div>
                <img 
                  src={helperImage} 
                  alt="Academic helper" 
                  className="relative w-64 h-64 object-cover rounded-full shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-academic-yellow text-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg">
                  <span>$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelperCallToAction;