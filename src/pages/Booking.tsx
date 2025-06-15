import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [selectedCar, setSelectedCar] = useState(carTypes[0]);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const serviceType = sessionStorage.getItem('selectedServiceType');
    if (serviceType) {
      setSelectedServiceType(serviceType);
    }
  }, []);

  useEffect(() => {
    if (!selectedCar) setSelectedCar(carTypes[0]);
  }, [selectedCar]);

  const isPremiumAddons = selectedServiceType === "premium-addons";
  const shouldSkipAddons = selectedServiceType === "one-time" || selectedServiceType === "waterless";
  const totalSteps = isPremiumAddons || shouldSkipAddons ? 4 : 5;

  const getActualStep = (step: number) => {
    if (isPremiumAddons) {
      // Steps: 1-Car, 2-Services, 3-Details, 4-Review
      if (step === 1) return 1; // CarSelection
      if (step === 2) return 3; // ServiceSelection
      if (step === 3) return 4; // CustomerDetails
      if (step === 4) return 5; // BookingSummary
    } else if (shouldSkipAddons) {
      // Steps: 1-Car, 2-Package, 3-Details, 4-Review
      if (step === 1) return 1; // CarSelection
      if (step === 2) return 2; // OneTimePricingPlans
      if (step === 3) return 4; // CustomerDetails
      if (step === 4) return 5; // BookingSummary
    } else {
      // Default: 1-Car, 2-Package, 3-Services, 4-Details, 5-Review
      return step;
    }
    return step;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep === 1) {
      navigate("/");
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    const actualStep = getActualStep(currentStep);

    // ---- CHANGED: Premium Add-ons requires at least ONE add-on selected. ---
    if (isPremiumAddons && actualStep === 3) {
      return selectedServices.length > 0;
    }
    switch (actualStep) {
      case 1:
        return selectedCar !== "";
      case 2:
        // Step 2 is only used in non-premium-addons flow
        return selectedPlan !== "";
      case 3:
        // In non-premium-addons flow, services are optional
        return true;
      case 4:
        return !!customerDetails.name;
      case 5: // On summary page
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    const actualStep = getActualStep(currentStep);
    switch (actualStep) {
      case 1:
        return (
          <CarSelection
            selectedCar={selectedCar}
            onCarSelect={setSelectedCar}
          />
        );
      case 2:
        // Only render for NON-premium-addons flows (step 2 is skipped in premium-addons)
        return (
          <OneTimePricingPlans
            selectedPlan={selectedPlan}
            onPlanSelect={setSelectedPlan}
            selectedCar={selectedCar}
          />
        );
      case 3:
        // ===== Pass isPremiumAddons and heading text for customisation =====
        return (
          <ServiceSelection
            selectedServices={selectedServices}
            onServicesChange={setSelectedServices}
            isPremiumAddons={isPremiumAddons}
          />
        );
      case 4:
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
    const actualStep = getActualStep(currentStep);
    switch (actualStep) {
      case 1:
        return "Select Your Car Type";
      case 2:
        const serviceName =
          selectedServiceType === "waterless"
            ? "Waterless"
            : selectedServiceType === "one-time"
            ? "Doorstep Premium Car wash"
            : "Premium Add-on";
        return `Choose Your ${serviceName} Package`;
      case 3:
        return "Additional Services (Optional)";
      case 4:
        return "Your Details";
      case 5:
        return "Review and Book Now";
      default:
        return "";
    }
  };

  const handleBookNow = () => {
    console.log("Book Now button clicked");

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
    console.log("Opening WhatsApp URL:", whatsappUrl);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header onCartOpen={() => {}} />

      {/* Removed: Floating contact button for easy call */}
      {/* 
      <a
        href="tel:8920230357"
        className="fixed bottom-6 right-6 z-50 bg-green-400 hover:bg-green-500 shadow-lg rounded-full p-4 flex items-center transition-transform active:scale-95"
        style={{ boxShadow: '0 2px 16px rgba(0,255,100,0.20)' }}
        aria-label="Call us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28c.31 0 .61.15.8.4l1.54 2.08a2.004 2.004 0 01-.18 2.53l-.71.71a16.001 16.001 0 006.59 6.59l.71-.71a2.004 2.004 0 012.53-.18l2.08 1.54c.25.19.39.49.39.8V19a2 2 0 01-2 2h-1C7.373 21 3 16.627 3 11V5z" />
        </svg>
      </a>
      */}
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Removed: Easy-to-find contact above booking steps */}
        {/* 
        <div className="flex justify-end mb-4">
          <a
            href="tel:8920230357"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-green-400 hover:bg-green-500 text-black font-semibold transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28c.31 0 .61.15.8.4l1.54 2.08a2.004 2.004 0 01-.18 2.53l-.71.71a16.001 16.001 0 006.59 6.59l.71-.71a2.004 2.004 0 012.53-.18l2.08 1.54c.25.19.39.49.39.8V19a2 2 0 01-2 2h-1C7.373 21 3 16.627 3 11V5z" />
            </svg>
            <span>Call: +91 89202 30357</span>
          </a>
        </div>
        */}
        {/* Service Type Indicator */}
        {selectedServiceType && (
          <div className="text-center mb-6">
            <div className="inline-block bg-green-400/10 border border-green-400 rounded-lg px-4 py-2">
              <span className="text-green-400 font-semibold">
                {selectedServiceType === 'one-time' && '✨ Doorstep Premium Car wash'}
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
            variant="black"
            onClick={prevStep}
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
