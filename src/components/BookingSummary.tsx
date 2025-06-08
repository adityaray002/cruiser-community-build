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

const BookingSummary = ({
  selectedServiceType,
  selectedCar,
  selectedPlan,
  selectedServices,
  customerName,
  onEditStep,
}: BookingSummaryProps) => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg text-white max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-green-400">Review Your Booking</h2>

      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => onEditStep(1)}>
          <span className="font-semibold">Service Type:</span>
          <span>{serviceTypeLabels[selectedServiceType] || selectedServiceType}</span>
          <button className="text-green-400 underline ml-2 text-sm">Edit</button>
        </div>
      </div>

      {(selectedServiceType === "one-time" || selectedServiceType === "daily-car-wash") && (
        <div className="mb-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => onEditStep(2)}>
            <span className="font-semibold">Car Type:</span>
            <span>{selectedCar}</span>
            <button className="text-green-400 underline ml-2 text-sm">Edit</button>
          </div>
        </div>
      )}

      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => onEditStep(3)}>
          <span className="font-semibold">Washing Plan:</span>
          <span>{selectedPlan}</span>
          <button className="text-green-400 underline ml-2 text-sm">Edit</button>
        </div>
      </div>

      {selectedServiceType === "one-time" && selectedServices.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between items-start cursor-pointer" onClick={() => onEditStep(4)}>
            <span className="font-semibold">Additional Services:</span>
            <ul className="ml-4 list-disc">
              {selectedServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <button className="text-green-400 underline ml-2 text-sm">Edit</button>
          </div>
        </div>
      )}

      <div className="mb-6">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => onEditStep(selectedServiceType === "one-time" ? 5 : 4)}>
          <span className="font-semibold">Customer Name:</span>
          <span>{customerName}</span>
          <button className="text-green-400 underline ml-2 text-sm">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
