
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className={`cursor-pointer transition-all ${
              service.selected 
                ? 'bg-gray-700 border-green-400' 
                : 'bg-gray-800 border-gray-600 hover:border-gray-500'
            }`}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-green-400 font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              <Button 
                size="icon"
                className={`${
                  service.selected 
                    ? 'bg-green-400 hover:bg-green-500 text-black' 
                    : 'bg-gray-600 hover:bg-gray-500 text-white'
                }`}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
