import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Biology Student, Harvard",
      rating: 5,
      text: "The helper nailed it. Got a boost earlier than expected, but overall happy.",
      subject: "Research Project"
    },
    {
      name: "Mike Chen", 
      role: "Engineering Student, MIT",
      rating: 5,
      text: "Great experience! Smart the helper, fast and spot-on.",
      subject: "Calculus Assignment"
    },
    {
      name: "Emma Davis",
      role: "Psychology Student, Yale", 
      rating: 5,
      text: "Nice work and thrill everything was excellent. 10/10",
      subject: "Essay Writing"
    },
    {
      name: "Alex Rivera",
      role: "Computer Science, Stanford",
      rating: 5, 
      text: "Clean code work, great helper and thrill. Literally got the result really, really fast.",
      subject: "Programming Assignment"
    },
    {
      name: "Jessica Wu",
      role: "Literature Student, Princeton",
      rating: 5,
      text: "Communication was great. Minor delay but still on time for submission.",
      subject: "Literature Analysis"
    },
    {
      name: "David Park",
      role: "Chemistry Student, Berkeley",
      rating: 5,
      text: "I have delightful but the platform is legit. Love the communication feature!",
      subject: "Lab Report"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 text-6xl text-academic-yellow opacity-60 animate-pulse">⭐</div>
      <div className="absolute top-32 right-16 text-4xl text-academic-yellow opacity-40">⭐</div>
      <div className="absolute bottom-20 left-1/4 text-5xl text-academic-yellow opacity-50">⭐</div>
      <div className="absolute bottom-32 right-20 text-3xl text-academic-yellow opacity-70">⭐</div>
      <div className="absolute top-1/2 right-1/3 text-4xl text-academic-yellow opacity-30">⭐</div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-academic-yellow px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-foreground" />
            <span className="font-bold text-foreground">Real Reviews. Real Results.</span>
            <Star className="w-5 h-5 text-foreground" />
          </div>
          
          <h2 className="section-title mb-4">
            What Students Say About Us
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real users who got real results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-academic-yellow text-academic-yellow" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-primary">{review.subject}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-lg">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-academic-yellow text-academic-yellow" />
              ))}
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">4.9/5</p>
            <p className="text-muted-foreground text-sm">
              Average rating from <span className="font-semibold">2,000+ reviews</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;