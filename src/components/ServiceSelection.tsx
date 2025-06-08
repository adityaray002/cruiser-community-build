
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceSelectionProps {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
}

const ServiceSelection = ({ selectedServices, onServicesChange }: ServiceSelectionProps) => {
  const services = [
    { id: "rubbing", image: "/Rubbing1.jpg", title: "Rubbing", description: "Removes surface scratches and oxidation.", price: "₹299" },
    { id: "3m-wax", image: "/3M1.jpg", title: "3M Wax", description: "Protective layer with deep shine.", price: "₹399" },
    { id: "dry-cleaning", image: "/dryclean2.png", title: "Dry Cleaning", description: "Complete interior vacuum and cleaning.", price: "₹349" },
    { id: "rubbing-wax", image: "/rubbingwax.png", title: "Rubbing + 3M Wax", description: "Combo for deep clean and polish.", price: "₹649" },
    { id: "full-package", image: "/images/full-package.jpg", title: "Rubbing + Wax + Dry Cleaning", description: "Premium complete cleaning package.", price: "₹899" },
    { id: "rubbing-dry", image: "/images/rubbing-dry.jpg", title: "Rubbing + Dry Cleaning", description: "Surface restoration and interior care.", price: "₹599" },
    { id: "wax-dry", image: "/images/wax-dry.jpg", title: "3M Wax + Dry Cleaning", description: "Glossy finish with clean interiors.", price: "₹699" },
    { id: "air-freshener", image: "/airfreshner.png", title: "Air Freshener", description: "Fresh and pleasant car interior.", price: "₹99" }
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
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`cursor-pointer transition-all border-2 rounded-xl overflow-hidden p-2 shadow-md hover:shadow-lg ${
              selectedServices.includes(service.id)
                ? 'border-green-400 bg-gray-700' 
                : 'border-gray-600 bg-gray-800 hover:border-gray-500'
            }`}
            onClick={() => toggleService(service.id)}
          >
            <CardContent className="p-2 md:p-4 text-center flex flex-col h-full">
              <img src={service.image} alt={service.title} className="w-full h-28 object-cover rounded-md mb-2" />
              <h3 className="text-green-400 font-semibold text-sm md:text-lg mb-1">{service.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm mb-2 leading-tight flex-grow">{service.description}</p>
              <p className="text-white font-bold text-sm md:text-base mb-3">{service.price}</p>
              <Button 
                size="icon"
                className={`h-6 w-6 md:h-10 md:w-10 rounded-full mt-auto ${
                  selectedServices.includes(service.id)
                    ? 'bg-green-400 hover:bg-green-500 text-black' 
                    : 'bg-gray-600 hover:bg-gray-500 text-white'
                }`}
              >
                {selectedServices.includes(service.id) ? (
                  <Check className="h-3 w-3 md:h-4 md:w-4" />
                ) : (
                  <span className="text-sm md:text-xl">+</span>
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
