import { Button } from "./ui/button";
import { ArrowRight, Anchor, Ship, Globe } from "lucide-react";
import heroImage from "@/assets/hero-maritime.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20">
              <Ship className="h-6 w-6 text-white" />
            </div>
            <span className="text-white/90 font-medium">Professional Ship Provisioning</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Complete Marine
            <span className="block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              Supply Solutions
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Comprehensive provisioning services for domestic and foreign vessels. 
            We deliver quality food, beverages, and essential supplies to ships 
            worldwide with reliability and excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="transparent" size="lg">
              View Services
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-5 w-5 text-accent-light mr-2" />
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <p className="text-white/80 text-sm">Global Service</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Anchor className="h-5 w-5 text-accent-light mr-2" />
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <p className="text-white/80 text-sm">Ships Served</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Ship className="h-5 w-5 text-accent-light mr-2" />
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <p className="text-white/80 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;