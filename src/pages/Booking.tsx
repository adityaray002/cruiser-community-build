
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import ServiceTypeSelection from "@/components/ServiceTypeSelection";
import CarSelection from "@/components/CarSelection";
import PricingPlans from "@/components/PricingPlans";
import OneTimePricingPlans from "@/components/OneTimePricingPlans";
import ServiceSelection from "@/components/ServiceSelection";
import TimeSelection from "@/components/TimeSelection";
import CustomerDetails from "@/components/CustomerDetails";
import BookingSummary from "@/components/BookingSummary";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const totalSteps = 7;

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
        return selectedServiceType !== "";
      case 2:
        return selectedCar !== "";
      case 3:
        return selectedPlan !== "";
      case 4:
        return true; // Optional services
      case 5:
        return selectedTime !== "";
      case 6:
        return customerDetails.name && customerDetails.phone && customerDetails.address;
      default:
        return false;
    }
  };

  const shouldShowServices = () => {
    return selectedServiceType === "one-time";
  };

  const shouldShowMonthlyPlans = () => {
    return selectedServiceType === "monthly" || selectedServiceType === "daily-car-wash";
  };

  const shouldShowOneTimePlans = () => {
    return selectedServiceType === "one-time";
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceTypeSelection
            selectedServiceType={selectedServiceType}
            onServiceTypeSelect={setSelectedServiceType}
          />
        );
      case 2:
        return (
          <CarSelection
            selectedCar={selectedCar}
            onCarSelect={setSelectedCar}
          />
        );
      case 3:
        if (shouldShowMonthlyPlans()) {
          return (
            <PricingPlans
              selectedPlan={selectedPlan}
              onPlanSelect={setSelectedPlan}
              selectedCar={selectedCar}
            />
          );
        } else if (shouldShowOneTimePlans()) {
          return (
            <OneTimePricingPlans
              selectedPlan={selectedPlan}
              onPlanSelect={setSelectedPlan}
              selectedCar={selectedCar}
            />
          );
        }
        return null;
      case 4:
        if (shouldShowServices()) {
          return (
            <ServiceSelection
              selectedServices={selectedServices}
              onServicesChange={setSelectedServices}
            />
          );
        } else {
          return (
            <TimeSelection
              selectedTime={selectedTime}
              onTimeSelect={setSelectedTime}
            />
          );
        }
      case 5:
        if (shouldShowServices()) {
          return (
            <TimeSelection
              selectedTime={selectedTime}
              onTimeSelect={setSelectedTime}
            />
          );
        } else {
          return (
            <CustomerDetails
              details={customerDetails}
              onDetailsChange={setCustomerDetails}
            />
          );
        }
      case 6:
        if (shouldShowServices()) {
          return (
            <CustomerDetails
              details={customerDetails}
              onDetailsChange={setCustomerDetails}
            />
          );
        } else {
          return (
            <BookingSummary
              serviceType={selectedServiceType}
              car={selectedCar}
              plan={selectedPlan}
              services={selectedServices}
              time={selectedTime}
              customerDetails={customerDetails}
            />
          );
        }
      case 7:
        return (
          <BookingSummary
            serviceType={selectedServiceType}
            car={selectedCar}
            plan={selectedPlan}
            services={selectedServices}
            time={selectedTime}
            customerDetails={customerDetails}
          />
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Choose Your Service Type";
      case 2:
        return "Select Your Car Type";
      case 3:
        return "Choose Your Package";
      case 4:
        return shouldShowServices() ? "Additional Services (Optional)" : "Select Date & Time";
      case 5:
        return shouldShowServices() ? "Select Date & Time" : "Your Details";
      case 6:
        return shouldShowServices() ? "Your Details" : "Review and Book Now";
      case 7:
        return "Review and Book Now";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onCartOpen={() => {}} />
      
      <div className="container mx-auto px-4 py-8 pt-24">
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

          <Button
            onClick={nextStep}
            disabled={!canProceed() || currentStep === totalSteps}
            className="bg-green-400 hover:bg-green-500 text-black"
          >
            {currentStep === totalSteps ? "Book Now" : "Next"}
            {currentStep !== totalSteps && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
