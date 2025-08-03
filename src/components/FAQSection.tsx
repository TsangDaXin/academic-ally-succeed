import { HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Questions? We've got you
        </h2>
        
        <h3 className="text-2xl font-bold text-primary-foreground mb-2">
          Frequently <span className="text-academic-yellow">asked</span>
        </h3>
        <h3 className="text-2xl font-bold text-primary-foreground mb-8">
          questions
        </h3>
        
        <p className="text-primary-foreground/80 mb-12 max-w-md mx-auto">
          If you don't find your answer here, feel free to reached out!
        </p>
        
        <div className="space-y-4 max-w-lg mx-auto">
          {faqs.map((faq, index) => (
            <Button
              key={index}
              variant="secondary"
              size="lg"
              className="w-full justify-start bg-white/20 hover:bg-white/30 text-primary-foreground border-0 backdrop-blur-sm rounded-xl"
            >
              <HelpCircle className="w-5 h-5 mr-3" />
              {faq}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;