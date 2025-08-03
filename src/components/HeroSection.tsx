import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-academic.jpg";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="hero-title">
                Built for Learners. 
                <br />
                <span className="text-academic-blue-deep">Powered by Academics</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                From students to PhDs — our trusted community helps each other succeed and get rewarded.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="flex-1 sm:flex-none">
                Post Tasks Now
              </Button>
              <Button variant="outline" size="xl" className="flex-1 sm:flex-none">
                Become a Helper
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-academic-green rounded-full"></div>
                <span>200+ Active Writers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-academic-yellow rounded-full"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-academic-purple rounded-full"></div>
                <span>Verified Helpers</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 text-6xl opacity-30">🎯</div>
            <div className="absolute -top-4 -right-4 text-4xl opacity-40">✨</div>
            <div className="absolute -bottom-6 -left-6 text-5xl opacity-35">📚</div>
            
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8">
              <img 
                src="/lovable-uploads/e418db3f-a5b2-41a6-bdbe-f2e733e58749.png" 
                alt="Academic community helping each other" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;