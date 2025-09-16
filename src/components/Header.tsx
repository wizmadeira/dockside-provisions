import { Button } from "./ui/button";
import { Anchor, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-ocean p-2 rounded-lg">
              <Anchor className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Wizard Ocean Lda</h1>
              <p className="text-xs text-muted-foreground">Ship Provisioning Services</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#capabilities" className="text-foreground hover:text-primary transition-colors">Capabilities</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="maritime" size="sm" className="hidden sm:flex">
              Get Quote
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;