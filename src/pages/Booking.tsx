import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import CarSelection from "@/components/CarSelection";
import OneTimePricingPlans from "@/components/OneTimePricingPlans";
import ServiceSelection from "@/components/ServiceSelection";
import TimeSelection from "@/components/TimeSelection";
import CustomerDetails from "@/components/CustomerDetails";
import BookingSummary from "@/components/BookingSummary";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const carTypes = ["Sedan", "SUV", "Hatchback", "Luxury"];
  // Default selectedCar to first car type
  const [selectedCar, setSelectedCar] = useState(carTypes[0]);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  // Removed selectedTime state

  // Update customerDetails to only include 'name'
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
  });

  // Get service type from sessionStorage on component mount
  useEffect(() => {
    const serviceType = sessionStorage.getItem('selectedServiceType');
    if (serviceType) {
      setSelectedServiceType(serviceType);
    }
  }, []);

  // If selectedCar is empty after first render, fix it
  useEffect(() => {
    if (!selectedCar) setSelectedCar(carTypes[0]);
  }, [selectedCar]);

  // New: total steps is now 5 (remove Date & Time)
  const totalSteps = 5;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedCar !== "";
      case 2:
        return selectedPlan !== "";
      case 3:
        return true; // Optional services
      // Skip step 4: was Date & Time
      case 4:
        return customerDetails.name; // Only require name
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CarSelection
            selectedCar={selectedCar}
            onCarSelect={setSelectedCar}
          />
        );
      case 2:
        return (
          <OneTimePricingPlans
            selectedPlan={selectedPlan}
            onPlanSelect={setSelectedPlan}
            selectedCar={selectedCar}
          />
        );
      case 3:
        return (
          <ServiceSelection
            selectedServices={selectedServices}
            onServicesChange={setSelectedServices}
          />
        );
      // REMOVED Date & Time selection step
      case 4:
        // This is now the CustomerDetails step (was step 5)
        return (
          <CustomerDetails
            customerDetails={customerDetails}
            onDetailsChange={setCustomerDetails}
          />
        );
      case 5:
        return (
          <BookingSummary
            selectedServiceType={selectedServiceType}
            selectedCar={selectedCar}
            selectedPlan={selectedPlan}
            selectedServices={selectedServices}
            customerName={customerDetails.name}
            onEditStep={(step) => setCurrentStep(step)}
          />
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Select Your Car Type";
      case 2:
        return `Choose Your ${selectedServiceType === 'waterless' ? 'Waterless' : selectedServiceType === 'premium-addons' ? 'Premium Add-on' : ''} Package`;
      case 3:
        return "Additional Services (Optional)";
      // case 4: now Your Details
      case 4:
        return "Your Details";
      case 5:
        return "Review and Book Now";
      default:
        return "";
    }
  };

  // Final step: Open WhatsApp with pre-filled message
  const handleBookNow = () => {
    const phone = "918920230357";
    let message = `Hello! I would like to book a car wash service.%0A`;
    message += `Name: ${customerDetails.name}%0A`;
    message += `Service Type: ${selectedServiceType || "-"}%0A`;
    message += `Car Type: ${selectedCar || "-"}%0A`;
    message += `Plan: ${selectedPlan || "-"}%0A`;
    if (selectedServices.length > 0) {
      message += `Add-ons: ${selectedServices.join(", ")}%0A`;
    }
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onCartOpen={() => {}} />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Service Type Indicator */}
        {selectedServiceType && (
          <div className="text-center mb-6">
            <div className="inline-block bg-green-400/10 border border-green-400 rounded-lg px-4 py-2">
              <span className="text-green-400 font-semibold">
                {selectedServiceType === 'one-time' && '✨ One-Time Premium Wash'}
                {selectedServiceType === 'waterless' && '🌿 Waterless Eco Cleaning'}
                {selectedServiceType === 'premium-addons' && '💎 Premium Add-ons'}
                {selectedServiceType === 'monthly' && '🏠 Monthly Doorstep Service'}
              </span>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold">Book Your Service</h1>
            <span className="text-gray-400">Step {currentStep} of {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-green-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">
            {getStepTitle()}
          </h2>
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          {currentStep === totalSteps ? (
            <Button
              onClick={handleBookNow}
              className="bg-green-400 hover:bg-green-500 text-black"
              disabled={!canProceed()}
            >
              Book Now
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              disabled={!canProceed() || currentStep === totalSteps}
              className="bg-green-400 hover:bg-green-500 text-black"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
