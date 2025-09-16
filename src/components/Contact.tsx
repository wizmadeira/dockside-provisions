import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Provision Your Vessel?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Contact us today for competitive quotes and reliable marine supply services. 
            Our team is ready to assist with all your provisioning needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-white/80 mb-2">shipchandler@wizmadeira.com</p>
                  <p className="text-white/60">Quick response guaranteed</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-white/80 mb-2">Porto do Funchal - Ilha da Madeira</p>
                  <p className="text-white/60">Strategic Atlantic location</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Operating Hours</h3>
                  <p className="text-white/80 mb-2">24/7 Operations</p>
                  <p className="text-white/60">Always available for urgent needs</p>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get a Quote</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 mb-2 font-medium">Vessel Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-light"
                    placeholder="Enter vessel name"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 font-medium">Port of Call</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-light"
                    placeholder="Destination port"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-2 font-medium">Contact Information</label>
                <input 
                  type="email" 
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-light"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-2 font-medium">Provisioning Requirements</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-light resize-none"
                  placeholder="Describe your provisioning needs, quantities, and delivery date"
                ></textarea>
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Quote Request
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;