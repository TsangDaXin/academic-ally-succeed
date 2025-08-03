import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/bd61ad0f-0994-4b02-a1bf-754343f5612f.png" 
                alt="PlsMightFail" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">PlsMightFail</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Home
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">
              How it works
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex text-gray-600 hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6">
              Post Task
            </Button>
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;