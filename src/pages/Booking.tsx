
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookingSteps from "@/components/BookingSteps";
import CarSelection from "@/components/CarSelection";
import ServiceSelection from "@/components/ServiceSelection";
import PricingPlans from "@/components/PricingPlans";
import ServiceTypeSelection from "@/components/ServiceTypeSelection";
import CustomerDetails from "@/components/CustomerDetails";

const Booking = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCar, setSelectedCar] = useState("Sedan");
  const [selectedServiceType, setSelectedServiceType] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState("");

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return selectedCar !== "";
      case 2:
        return selectedServiceType !== "";
      case 3:
        return selectedPlan !== "";
      case 4:
        if (selectedServiceType === 'one-time') {
          // Additional services are optional for one-time
          return true;
        } else {
          // This is the name step for monthly
          return customerName.trim() !== "";
        }
      case 5:
        if (selectedServiceType === 'one-time') {
          // This is the name step for one-time
          return customerName.trim() !== "";
        }
        return true;
      default:
        return true;
    }
  };

  const handleNextStep = () => {
    if (!validateCurrentStep()) {
      return;
    }

    const maxSteps = selectedServiceType === 'one-time' ? 6 : 5;
    if (currentStep < maxSteps) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === maxSteps) {
      handleBookNow();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBookNow = () => {
    let message = `Hello! I'd like to book a car wash service with the following details:

Name: ${customerName}
Car Type: ${selectedCar}
Service Type: ${selectedServiceType}`;

    if (selectedPlan) {
      message += `\nWashing Plan: ${selectedPlan}`;
    }

    if (selectedServiceType === 'one-time' && selectedServices.length > 0) {
      message += `\nAdditional Services: ${selectedServices.join(', ')}`;
    }

    message += `\n\nPlease confirm the booking details and let me know the next steps.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918920230357?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const getMaxSteps = () => {
    return selectedServiceType === 'one-time' ? 6 : 5;
  };

  const isNameStep = () => {
    return (selectedServiceType === 'monthly' && currentStep === 4) || 
           (selectedServiceType === 'one-time' && currentStep === 5);
  };

  const isFinalStep = () => {
    return (selectedServiceType === 'monthly' && currentStep === 5) || 
           (selectedServiceType === 'one-time' && currentStep === 6);
  };

  return (
    <div className="bg-black text-white">
      {/* HERO SECTION WITH INTEGRATED BOOKING */}
      <section className="relative text-white w-full min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/MainViewWashing.png')" }}
        />
        <div className="absolute inset-0 bg-black/90" />

        <div className="relative z-10 pt-8 md:pt-16 pb-12 md:pb-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Title Section */}
            <div className="max-w-full lg:max-w-2xl mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                Car Washing
                <br />
                Online Booking
                <br />
                <span className="text-green-400">SERVICE.</span>
              </h1>
            </div>

            {/* Integrated Booking Section */}
            <div className="bg-gray-900/70 p-4 md:p-6 rounded-lg shadow-lg">
              {/* Booking Steps */}
              <BookingSteps currentStep={currentStep} selectedServiceType={selectedServiceType} />

              {/* Step Content */}
              <div className="mt-6 md:mt-8">
                {currentStep === 1 && (
                  <CarSelection 
                    selectedCar={selectedCar} 
                    onCarSelect={setSelectedCar} 
                  />
                )}
                {currentStep === 2 && (
                  <ServiceTypeSelection 
                    selectedServiceType={selectedServiceType}
                    onServiceTypeSelect={setSelectedServiceType}
                  />
                )}
                {currentStep === 3 && (
                  <PricingPlans 
                    selectedPlan={selectedPlan}
                    onPlanSelect={setSelectedPlan}
                  />
                )}
                {currentStep === 4 && selectedServiceType === 'one-time' && (
                  <ServiceSelection 
                    selectedServices={selectedServices}
                    onServicesChange={setSelectedServices}
                  />
                )}
                {isNameStep() && (
                  <CustomerDetails 
                    customerName={customerName}
                    onNameChange={setCustomerName}
                  />
                )}
                {isFinalStep() && (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Book!</h3>
                    <div className="bg-gray-800 p-6 rounded-lg mb-6">
                      <h4 className="text-green-400 font-semibold mb-4">Booking Summary</h4>
                      <div className="space-y-2 text-left">
                        <p><span className="text-gray-400">Name:</span> {customerName}</p>
                        <p><span className="text-gray-400">Car Type:</span> {selectedCar}</p>
                        <p><span className="text-gray-400">Service Type:</span> {selectedServiceType}</p>
                        {selectedPlan && (
                          <p><span className="text-gray-400">Washing Plan:</span> {selectedPlan}</p>
                        )}
                        {selectedServiceType === 'one-time' && selectedServices.length > 0 && (
                          <p><span className="text-gray-400">Additional Services:</span> {selectedServices.join(', ')}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 md:mt-8">
                <Button 
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black w-full sm:w-auto"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>

                <Button 
                  className={`w-full sm:w-auto ${
                    validateCurrentStep() 
                      ? 'bg-green-400 hover:bg-green-500 text-black' 
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={handleNextStep}
                  disabled={!validateCurrentStep()}
                >
                  {isFinalStep() ? 'Book Now' : 'Next'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
