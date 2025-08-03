import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import assistanceImage from "@/assets/24-7-assistance.jpg";

const AssistanceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src={assistanceImage} 
                  alt="24/7 Academic Assistance" 
                  className="w-24 h-24 rounded-2xl shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-academic-yellow text-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  24
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              24/7 Online Assistance
            </h2>
            
            <p className="text-xl mb-2 opacity-90">
              Your Academic Emergency Line
            </p>
            
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Post your tasks now and let top-rated experts handle the rest. 
              Get instant help from our community of verified academic professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="xl" className="text-primary">
                Post Tasks Now
              </Button>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Clock className="w-4 h-4" />
                <span>Average response time: 2 minutes</span>
              </div>
            </div>
            
            <div className="mt-8 text-sm opacity-70">
              <span className="font-semibold text-academic-yellow">200+ Writers</span> are at your service now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistanceSection;