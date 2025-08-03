import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Strip */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-yellow-400">200+ Writers</span> are at your service now
              </h3>
              <p className="text-white/90">Get instant help from verified academic experts</p>
            </div>
            <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-xl">
              Post Tasks Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/bd61ad0f-0994-4b02-a1bf-754343f5612f.png" 
                    alt="PlsMightFail" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-xl font-bold">PlsMightFail</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The trusted academic help platform connecting students with verified experts worldwide.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Essay Writing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programming Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Math Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lab Reports</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become a Helper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p>support@plsmightfail.com</p>
                <p>+1 (555) 123-4567</p>
                <p>24/7 Online Support</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">
              © 2024 PlsMightFail. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>🔒 Secure Platform</span>
              <span>✅ Verified Helpers</span>
              <span>💰 Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;