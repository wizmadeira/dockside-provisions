import { Anchor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-ocean p-2 rounded-lg">
                <Anchor className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Wizard Ocean Lda</h3>
                <p className="text-white/70 text-sm">Ship Provisioning Services</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Professional marine supply services for domestic and foreign vessels. 
              Quality provisions delivered worldwide with reliability and excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Fresh Provisions</li>
              <li>Beverages & Supplies</li>
              <li>Emergency Services</li>
              <li>Quality Assurance</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>+1 (555) 123-4567</li>
              <li>provisions@marinesupplypro.com</li>
              <li>24/7 Emergency Support</li>
              <li>Global Port Coverage</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Wizard Ocean Lda. All rights reserved. Professional ship provisioning services worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;