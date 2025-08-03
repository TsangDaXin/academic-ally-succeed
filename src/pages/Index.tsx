import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AssistanceSection from "@/components/AssistanceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AntiScamSection from "@/components/AntiScamSection";
import ReviewsSection from "@/components/ReviewsSection";
import HelperCallToAction from "@/components/HelperCallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <AssistanceSection />
        <HowItWorksSection />
        <AntiScamSection />
        <ReviewsSection />
        <HelperCallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
