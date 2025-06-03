
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceTypeSelectionProps {
  selectedServiceType: string;
  onServiceTypeSelect: (type: string) => void;
}

const ServiceTypeSelection = ({ selectedServiceType, onServiceTypeSelect }: ServiceTypeSelectionProps) => {
  const serviceTypes = [
    {
      type: "monthly",
      title: "Monthly Service",
      description: "Regular monthly car washing with subscription plans",
      icon: "📅"
    },
    {
      type: "one-time",
      title: "One-Time Service", 
      description: "Single car wash service with additional options",
      icon: "🚗"
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
        {serviceTypes.map((service) => (
          <Card 
            key={service.type}
            className={`cursor-pointer transition-all ${
              selectedServiceType === service.type
                ? 'bg-gray-700 border-green-400' 
                : 'bg-gray-800 border-gray-600 hover:border-gray-500'
            }`}
            onClick={() => onServiceTypeSelect(service.type)}
          >
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-2xl md:text-4xl mb-2 md:mb-4">{service.icon}</div>
              <h3 className="text-green-400 font-semibold text-sm md:text-lg mb-2 md:mb-3">{service.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">{service.description}</p>
              <Button 
                className={`w-full text-xs md:text-sm ${
                  selectedServiceType === service.type
                    ? 'bg-green-400 hover:bg-green-500 text-black' 
                    : 'bg-gray-600 hover:bg-gray-500 text-white'
                }`}
              >
                {selectedServiceType === service.type ? 'Selected' : 'Select'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceTypeSelection;
