import { ArrowRight, FileText, Users, Search, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Post a Task",
      description: "Submit your academic task with detailed requirements. Specify deadlines, word count, and any special instructions.",
      color: "bg-primary"
    },
    {
      number: "02", 
      icon: Users,
      title: "Helpers Apply",
      description: "Verified helpers bid on your task including their qualifications, reviews, and competitive pricing.",
      color: "bg-academic-green"
    },
    {
      number: "03",
      icon: Search,
      title: "Review & Select",
      description: "Browse applications, compare qualifications. Choose your helper based on reviews, expertise, and pricing.",
      color: "bg-academic-purple"
    },
    {
      number: "04",
      icon: Play,
      title: "Work Begins",
      description: "Once confirmed, the helper starts the task. Track progress and communicate directly through our secure platform.",
      color: "bg-academic-yellow text-foreground"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-soft">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">How Does It Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your academic tasks completed in 4 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                        <span className={`text-sm font-bold ${step.color.includes('text-foreground') ? 'text-foreground' : 'text-white'}`}>
                          {step.number}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-8 mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="card-title mb-4">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to get started? It only takes a few minutes to post your first task.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 inline-block shadow-lg">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-academic-green rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Average completion time:</span>
                <span className="font-semibold text-foreground">2-3 days</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Success rate:</span>
                <span className="font-semibold text-foreground">98.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;