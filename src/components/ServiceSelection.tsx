import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceSelectionProps {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
  isPremiumAddons?: boolean;
}

// ==== Only use NEW SERVICE NAMES for all flows ====
const premiumServices = [
  { id: "rubbing", image: "/Rubbing1.jpg", title: "Paint Restoration", description: "Removes scratches and swirl marks for a showroom shine.", price: "₹1299" },
  { id: "3m-wax", image: "/3M1.jpg", title: "Gloss Wax Coat", description: "Deep gloss wax for premium UV protection and shine.", price: "₹399" },
  { id: "dry-cleaning", image: "/dryclean2.png", title: "Interior Spa", description: "Complete seat, mat and carpet deep cleaning.", price: "₹599" },
  { id: "combo-package", image: "/RubbingWaxDryclean.png", title: "Complete Makeover", description: "All-in-one: Paint restoration, wax, and full interior spa.", price: "₹1999" }
];

const ServiceSelection = ({ selectedServices, onServicesChange, isPremiumAddons }: ServiceSelectionProps) => {
  // Always use premiumServices for cards, for all flows
  const services = premiumServices;

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onServicesChange(selectedServices.filter(id => id !== serviceId));
    } else {
      onServicesChange([...selectedServices, serviceId]);
    }
  };

  // Keep headings as per other refinements if desired
  const heading = isPremiumAddons ? "Select Add-on(s)" : "Additional Services";
  const description = isPremiumAddons
    ? "Please select at least one add-on to proceed"
    : "Optional - You can skip this step if you don't need additional services";

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-white mb-2">{heading}</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
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

      <div className={`text-center`}>
        <p className={`font-semibold text-sm md:text-base ${isPremiumAddons ? "text-red-400" : "text-green-400"}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceSelection;
