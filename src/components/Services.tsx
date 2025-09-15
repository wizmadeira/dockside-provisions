import { Card } from "./ui/card";
import { Coffee, Apple, Package, Truck, Clock, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Apple,
      title: "Fresh Provisions",
      description: "High-quality fresh fruits, vegetables, and perishable goods sourced from trusted suppliers.",
    },
    {
      icon: Coffee,
      title: "Beverages & Supplies",
      description: "Complete beverage solutions including soft drinks, water, coffee, and specialty drinks.",
    },
    {
      icon: Package,
      title: "General Provisions",
      description: "Comprehensive range of dry goods, canned foods, and essential ship supplies.",
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Efficient delivery services to ports worldwide with flexible scheduling options.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service to meet urgent provisioning needs and emergency supplies.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Certified suppliers and rigorous quality control ensuring food safety standards.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Comprehensive Marine Supply Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide complete provisioning solutions for vessels of all sizes, 
            ensuring your crew has everything needed for successful voyages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-maritime transition-all duration-300 border-0">
              <div className="bg-gradient-ocean p-3 rounded-lg w-fit mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;