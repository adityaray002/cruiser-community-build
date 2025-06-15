
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "🏠",
      title: "Monthly Doorstep Service",
      description: "Daily car wash at your doorstep with flexible monthly plans. Available in Dwarka Mor, Nawada, and Uttam Nagar.",
      priceRange: "₹799 - ₹1199",
      features: ["26 Days Exterior Cleaning", "1 Foam Wash + Interior", "Tire Cleaning", "At Your Doorstep"]
    },
    {
      icon: "🚗",
      title: "One-Time Premium Wash",
      description: "Professional car wash service with multiple package options and additional services available.",
      priceRange: "₹299 - ₹699",
      features: ["Foam Wash", "Interior Cleaning", "Tire Dressing", "Multiple Packages"]
    },
    {
      icon: "✨",
      title: "Additional Services",
      description: "Enhance your car's look with our premium add-on services like rubbing, waxing, and dry cleaning.",
      priceRange: "₹149 - ₹1999",
      features: ["Paint Rubbing", "3M Wax", "Dry Cleaning", "Combo Packages"]
    },
    {
      icon: "🌊",
      title: "Waterless Cleaning",
      description: "Eco-friendly waterless car cleaning service that's gentle on your car and the environment.",
      priceRange: "₹349 - ₹399",
      features: ["No Water Required", "Eco-Friendly", "Paint Safe", "Quick Service"]
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Car Washing Services</h2>
          <p className="text-gray-300 text-lg mb-6">Professional car care services delivered right to your doorstep</p>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/80 border-gray-700 backdrop-blur-sm hover:border-green-400 transition-all duration-300">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-green-400 font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">{service.description}</p>
                
                <div className="mt-auto">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-white">{service.priceRange}</span>
                    <span className="text-gray-400 text-sm block">Starting from</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-300 justify-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 text-lg"
            onClick={() => navigate('/booking')}
          >
            View All Packages & Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
