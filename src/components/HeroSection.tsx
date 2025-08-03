import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Built for Learners.
                <br />
                <span className="text-primary">Powered by Academics</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                From students to PhDs — our trusted community helps each other succeed and get rewarded.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg rounded-xl">
                Post Tasks Now
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 text-lg rounded-xl hover:bg-gray-50">
                Become a Helper
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600 font-medium">200+ Active Writers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600 font-medium">24/7 Support</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">5.0 from 2000+ students</span>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <img 
                src="/lovable-uploads/e418db3f-a5b2-41a6-bdbe-f2e733e58749.png" 
                alt="Academic community helping each other" 
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full"></div>
              <div className="absolute top-8 -left-6 w-4 h-4 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;