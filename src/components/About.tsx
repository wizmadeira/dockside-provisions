import { Button } from "./ui/button";
import { CheckCircle, Award, Users, MapPin } from "lucide-react";

const About = () => {
  const features = [
    "ISO certified food safety standards",
    "Global network of trusted suppliers", 
    "Flexible payment and credit terms",
    "Emergency provisioning services",
    "Multilingual customer support",
    "Competitive wholesale pricing"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Your Trusted Maritime Supply Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience in marine provisioning, we specialize in 
              supplying domestic and foreign ships with high-quality food, beverages, 
              and essential supplies. Our wholesale operations ensure competitive 
              pricing while maintaining the highest standards of quality and service.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-card p-6 rounded-lg shadow-card text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">ISO Certified</h3>
              <p className="text-muted-foreground">Food safety & quality standards</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg shadow-card text-center mt-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Experienced maritime professionals</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg shadow-card text-center -mt-8">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Worldwide port coverage</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg shadow-card text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Reliable</h3>
              <p className="text-muted-foreground">On-time delivery guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;