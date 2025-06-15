
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceSelectionProps {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
  isPremiumAddons?: boolean;
}

// Always use the same list for both flows
const standardServices = [
  { id: "rubbing", image: "/Rubbing1.jpg", title: "Rubbing", description: "Removes light scratches, swirl marks, and restores paint clarity.", price: "₹1299", details: "Ideal for dull or mildly scratched paint. Includes exterior cleaning." },
  { id: "3m-wax", image: "/3M1.jpg", title: "3M Wax", description: "High-gloss protective wax coating for long-lasting shine.", price: "₹399", details: "Best applied after washing or rubbing. Lasts up to 2 months." },
  { id: "dry-cleaning", image: "/dryclean2.png", title: "Dry Cleaning", description: "Deep vacuuming and interior fabric cleaning for seats and mats.", price: "₹599", details: "Targets stains and odours. Suitable for cloth and synthetic seats." },
  { id: "rubbing-wax", image: "/rubbingwax.png", title: "Rubbing + 3M Wax", description: "Paint correction plus gloss protection in one combo.", price: "₹1499", details: "Saves money vs. individual services. Popular maintenance combo." },
  { id: "full-package", image: "/RubbingWaxDryclean.png", title: "Rubbing + Wax + Dry Cleaning", description: "Complete exterior and interior rejuvenation package.", price: "₹1999", details: "Best value! Covers paint, wax, and full interior clean." },
  { id: "rubbing-dry", image: "/RubbingDryclean1.png", title: "Rubbing + Dry Cleaning", description: "Revives paint finish and refreshes car interiors.", price: "₹1599", details: "Great for busy families or post-road-trip refreshment." },
  { id: "wax-dry", image: "/WaxDryClean.png", title: "3M Wax + Dry Cleaning", description: "Shiny exterior with spotless and clean interior.", price: "₹999", details: "Economical choice for regular car upkeep." },
  { id: "air-freshener", image: "/airfreshner.png", title: "Air Freshener", description: "Keeps your car smelling fresh and inviting after every drive.", price: "₹149", details: "Scents may vary. Long-lasting fragrance." }
];

const ServiceSelection = ({ selectedServices, onServicesChange, isPremiumAddons }: ServiceSelectionProps) => {
  // Use standard services always
  const services = standardServices;

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onServicesChange(selectedServices.filter(id => id !== serviceId));
    } else {
      onServicesChange([...selectedServices, serviceId]);
    }
  };

  // Heading for each flow
  const heading = isPremiumAddons ? "Select Add-on(s)" : "Additional Services";

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-white mb-2">{heading}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 mb-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`relative cursor-pointer border-2 rounded-xl overflow-hidden p-0 shadow-lg hover:shadow-xl transition-all h-full bg-gray-900 ${
              selectedServices.includes(service.id)
                ? 'border-green-400'
                : 'border-gray-700 hover:border-gray-400'
            }`}
            onClick={() => toggleService(service.id)}
          >
            <CardContent className="p-0 flex flex-col h-full">
              {/* Image Banner */}
              <div className="w-full h-32 md:h-36 bg-black relative overflow-hidden flex justify-center items-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  style={{ maxHeight: '100%', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
                {selectedServices.includes(service.id) && (
                  <span className="absolute top-2 right-2 bg-green-400 text-black rounded-full px-2 py-0.5 text-xs font-semibold shadow">
                    Selected
                  </span>
                )}
              </div>
              {/* Info section */}
              <div className="flex flex-col flex-1 px-4 py-3 gap-1">
                <h3 className="text-lg font-semibold text-green-400">{service.title}</h3>
                <div className="flex items-center mb-1">
                  <span className="text-sm font-bold text-white">{service.price}</span>
                  {/* You could add a small discount tag etc. here */}
                </div>
                <p className="text-gray-200 text-xs mb-1">{service.description}</p>
                <div>
                  {/* Details block for extra info (expand if needed) */}
                  <span className="block bg-gray-800/60 text-gray-400 text-xs rounded px-2 py-1">{service.details}</span>
                </div>
                <div className="flex-1" />
                {/* Select/Check Button at card bottom */}
                <div className="flex justify-end mt-2">
                  <Button
                    size="icon"
                    className={`h-8 w-8 md:h-10 md:w-10 rounded-full shadow border-2 ${
                      selectedServices.includes(service.id)
                        ? 'bg-green-400 hover:bg-green-500 text-black border-green-400'
                        : 'bg-gray-700 hover:bg-gray-600 text-white border-gray-500'
                    }`}
                  >
                    {selectedServices.includes(service.id) ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <span className="text-xl leading-none">+</span>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;

