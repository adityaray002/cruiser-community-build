import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import ServiceDetails from "./ServiceDetails";

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

  // Show clear heading depending on flow
  const heading = isPremiumAddons ? "Select Add-on(s)" : null;

  return (
    <div>
      {heading && (
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">{heading}</h2>
          <div className="mt-1 text-green-300 text-sm font-medium">
            Enhance your wash with these curated add-ons. Tap to select.
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6">
        {standardServices.map((service) => (
          <ServiceDetails
            key={service.id}
            title={service.title}
            price={service.price}
            description={service.description}
            details={service.details}
            selected={selectedServices.includes(service.id)}
            image={service.image}
            onSelect={() => toggleService(service.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
