import { ArrowRight } from "lucide-react";

const WorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Post a task",
      description: "Describe your academic needs and set your requirements"
    },
    {
      number: "02", 
      title: "Helpers Apply",
      description: "Verified experts review and apply to help with your task"
    },
    {
      number: "03",
      title: "Review & Select",
      description: "Choose the best helper based on profiles and proposals"
    },
    {
      number: "04",
      title: "Work Begins",
      description: "Your selected helper starts working on your assignment"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting academic help has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 text-gray-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;