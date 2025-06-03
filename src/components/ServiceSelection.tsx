
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceSelectionProps {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
}

const ServiceSelection = ({ selectedServices, onServicesChange }: ServiceSelectionProps) => {
  const services = [
    { id: "contactless-washing", icon: "❄️", title: "Contactless Washing", description: "Vestibulum tortor risus, rutrum at congue sed ultricies finibus." },
    { id: "safety-materials", icon: "🛡️", title: "Safety Materials", description: "Cras eleifend tristique metus, eu gravida diam tempor consectetur." },
    { id: "modern-equipment", icon: "⚙️", title: "Modern Equipment", description: "Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam." },
    { id: "extensive-cleaning", icon: "🌪️", title: "Extensive Cleaning", description: "Sed blandit non dolor et amet mi metus tincidunt ut non velit." },
    { id: "wax-polish", icon: "✨", title: "Wax & Polish", description: "Premium wax application for enhanced shine and protection." },
    { id: "interior-cleaning", icon: "🧹", title: "Interior Cleaning", description: "Complete interior vacuuming and surface cleaning." },
    { id: "tire-shine", icon: "🛞", title: "Tire Shine", description: "Professional tire cleaning and shine application." },
    { id: "air-freshener", icon: "🌸", title: "Air Freshener", description: "Pleasant fragrance application for fresh interior." }
  ];

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onServicesChange(selectedServices.filter(id => id !== serviceId));
    } else {
      onServicesChange([...selectedServices, serviceId]);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service) => (
          <Card 
            key={service.id} 
            className={`cursor-pointer transition-all ${
              selectedServices.includes(service.id)
                ? 'bg-gray-700 border-green-400' 
                : 'bg-gray-800 border-gray-600 hover:border-gray-500'
            }`}
            onClick={() => toggleService(service.id)}
          >
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
              <h3 className="text-green-400 font-semibold text-base md:text-lg mb-2 md:mb-3">{service.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">{service.description}</p>
              <Button 
                size="icon"
                className={`h-8 w-8 md:h-10 md:w-10 ${
                  selectedServices.includes(service.id)
                    ? 'bg-green-400 hover:bg-green-500 text-black' 
                    : 'bg-gray-600 hover:bg-gray-500 text-white'
                }`}
              >
                {selectedServices.includes(service.id) ? (
                  <Check className="h-3 w-3 md:h-4 md:w-4" />
                ) : (
                  <span className="text-xl">+</span>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
