
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ServiceSelectionProps {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
}

const ServiceSelection = ({ selectedServices, onServicesChange }: ServiceSelectionProps) => {
  const services = [
    { icon: "❄️", title: "Contactless Washing", description: "Vestibulum tortor risus, rutrum at congue sed ultricies finibus.", selected: true },
    { icon: "🛡️", title: "Safety Materials", description: "Cras eleifend tristique metus, eu gravida diam tempor consectetur.", selected: false },
    { icon: "⚙️", title: "Modern Equipment", description: "Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.", selected: true },
    { icon: "🌪️", title: "Extensive Cleaning", description: "Sed blandit non dolor et amet mi metus tincidunt ut non velit.", selected: false },
    { icon: "❄️", title: "Contactless Washing", description: "Vestibulum tortor risus, rutrum at congue sed ultricies finibus.", selected: false },
    { icon: "🛡️", title: "Safety Materials", description: "Cras eleifend tristique metus, eu gravida diam tempor consectetur.", selected: false },
    { icon: "⚙️", title: "Modern Equipment", description: "Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.", selected: false },
    { icon: "🌪️", title: "Extensive Cleaning", description: "Sed blandit non dolor et amet mi metus tincidunt ut non velit.", selected: false }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className={`cursor-pointer transition-all ${
              service.selected 
                ? 'bg-gray-700 border-green-400' 
                : 'bg-gray-800 border-gray-600 hover:border-gray-500'
            }`}
          >
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
              <h3 className="text-green-400 font-semibold text-base md:text-lg mb-2 md:mb-3">{service.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">{service.description}</p>
              <Button 
                size="icon"
                className={`h-8 w-8 md:h-10 md:w-10 ${
                  service.selected 
                    ? 'bg-green-400 hover:bg-green-500 text-black' 
                    : 'bg-gray-600 hover:bg-gray-500 text-white'
                }`}
              >
                <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
