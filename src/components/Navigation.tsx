import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-bold text-foreground">PlsMightFail</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#application" className="text-muted-foreground hover:text-foreground transition-colors">
            Application Form
          </a>
          <a href="#tasks" className="text-muted-foreground hover:text-foreground transition-colors">
            Tasks Submission
          </a>
          <a href="#list" className="text-muted-foreground hover:text-foreground transition-colors">
            Task List
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button variant="hero" size="default">
            Post Task
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;