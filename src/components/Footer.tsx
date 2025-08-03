import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* CTA Strip */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold">
                <span className="text-academic-yellow">200+ Writers</span> are at your service now
              </p>
              <p className="text-sm opacity-80">Get instant help from verified academic experts</p>
            </div>
            <Button variant="secondary" size="lg" className="font-bold">
              Post Tasks Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold">PlsMightFail</span>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                The trusted academic help platform connecting students with verified experts worldwide.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Github className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Essay Writing</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Research Papers</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Programming Help</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Math Solutions</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Lab Reports</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Thesis Support</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">How It Works</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Pricing</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Become a Helper</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Reviews</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-3 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@plsmightfail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>24/7 Online Support</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2">Quick Links</h4>
                <ul className="space-y-1 text-sm opacity-80">
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-60">
              © 2024 PlsMightFail. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm opacity-60">
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