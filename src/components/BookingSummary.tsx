
import React from "react";

interface BookingSummaryProps {
  selectedServiceType: string;
  selectedCar: string;
  selectedPlan: string;
  selectedServices: string[];
  customerName: string;
  onEditStep: (step: number) => void;
}

const serviceTypeLabels: Record<string, string> = {
  "one-time": "One-time Wash",
  "monthly": "Monthly Wash",
  "daily-car-wash": "Daily Car Wash",
};

// Pricing data for one-time services
const carPricing: Record<string, Record<string, number>> = {
  "Sedan": {
    "exterior wash + interior wash": 599,
    "exterior wash only": 399,
    "interior wash only": 299,
    "waterless": 349
  },
  "SUV": {
    "exterior wash + interior wash": 699,
    "exterior wash only": 499,
    "interior wash only": 349,
    "waterless": 399
  },
  "Hatchback": {
    "exterior wash + interior wash": 499,
    "exterior wash only": 349,
    "interior wash only": 299,
    "waterless": 349
  },
  "Luxury": {
    "exterior wash + interior wash": 699,
    "exterior wash only": 499,
    "interior wash only": 349,
    "waterless": 399
  }
};

// Additional services pricing
const additionalServicesPricing: Record<string, number> = {
  "rubbing": 299,
  "3m-wax": 399,
  "dry-cleaning": 349,
  "rubbing-wax": 649,
  "full-package": 899,
  "rubbing-dry": 599,
  "wax-dry": 699,
  "air-freshener": 99
};

const BookingSummary = ({
  selectedServiceType,
  selectedCar,
  selectedPlan,
  selectedServices,
  customerName,
  onEditStep,
}: BookingSummaryProps) => {
  const calculateTotal = () => {
    let total = 0;
    
    // Add base plan cost
    if (selectedServiceType === "one-time" && selectedCar && selectedPlan) {
      total += carPricing[selectedCar]?.[selectedPlan.toLowerCase()] || 0;
    }
    
    // Add additional services cost
    selectedServices.forEach(serviceId => {
      total += additionalServicesPricing[serviceId] || 0;
    });
    
    return total;
  };

  const total = calculateTotal();

  return (
    <div className="p-6 bg-gray-900 rounded-lg text-white max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-green-400">Current Selection</h2>

      {selectedServiceType && (
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Service Type:</span>
            <span>{serviceTypeLabels[selectedServiceType] || selectedServiceType}</span>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(1)}
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {(selectedServiceType === "one-time" || selectedServiceType === "daily-car-wash") && selectedCar && (
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Car Type:</span>
            <span>{selectedCar}</span>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(2)}
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {selectedPlan && (
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Washing Plan:</span>
            <span>{selectedPlan}</span>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(selectedServiceType === "one-time" ? 3 : 2)}
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {selectedServiceType === "one-time" && selectedServices.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <span className="font-semibold">Additional Services:</span>
            <div className="flex-1 ml-4">
              <ul className="list-disc">
                {selectedServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(4)}
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {customerName && (
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Customer Name:</span>
            <span>{customerName}</span>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(selectedServiceType === "one-time" ? 5 : 3)}
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {total > 0 && (
        <div className="border-t border-gray-700 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Total Amount:</span>
            <span className="font-bold text-lg text-green-400">₹{total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
