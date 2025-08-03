import { HelpCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    "How does it work?",
    "How is payment process?", 
    "How to apply?",
    "What if there is a scam?",
    "Face any issues?"
  ];

  return (
    <section className="py-16 px-6 bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Questions? We've got you
          </h2>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Frequently <span className="text-yellow-400">asked</span>
            </h3>
            <h3 className="text-2xl font-bold text-white">questions</h3>
          </div>
          <p className="text-white/80 mt-6 max-w-md mx-auto">
            If you don't find your answer here, feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <HelpCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">{faq}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-white/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;