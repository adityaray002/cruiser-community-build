import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BookingSteps from "@/components/BookingSteps";
import CarSelection from "@/components/CarSelection";
import ServiceSelection from "@/components/ServiceSelection";
import PricingPlans from "@/components/PricingPlans";
import TimeSelection from "@/components/TimeSelection";

const Booking = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCar, setSelectedCar] = useState("Sedan");
  const [selectedPlan, setSelectedPlan] = useState("Marketing License");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-black text-white">
      {/* HEADER */}
      <Header onCartOpen={() => {}} />

      {/* HERO SECTION */}
      <section className="relative text-white w-full h-[655px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 "
          style={{ backgroundImage: "url('/MainViewWashing.png')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-full lg:max-w-2xl mb-8 md:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
                Car Washing
                <br />
                Online Booking
                <br />
                <span className="text-green-400">SERVICE.</span>
              </h1>

              <Button 
                size="lg"
                className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
              >
                START BOOKING
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="pt-12 md:pt-16 pb-20 px-4 md:px-6 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/70 p-6 rounded-lg shadow-lg">
            {/* Booking Steps */}
            <BookingSteps currentStep={currentStep} />

            {/* Step Content */}
            <div className="mt-8 md:mt-12">
              {currentStep === 1 && (
                <CarSelection 
                  selectedCar={selectedCar} 
                  onCarSelect={setSelectedCar} 
                />
              )}
              {currentStep === 2 && (
                <PricingPlans 
                  selectedPlan={selectedPlan}
                  onPlanSelect={setSelectedPlan}
                />
              )}
              {currentStep === 3 && (
                <ServiceSelection 
                  selectedServices={selectedServices}
                  onServicesChange={setSelectedServices}
                />
              )}
              {currentStep === 4 && (
                <TimeSelection />
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
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
                className="bg-green-400 hover:bg-green-500 text-black w-full sm:w-auto"
                onClick={handleNextStep}
                disabled={currentStep === 4}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
