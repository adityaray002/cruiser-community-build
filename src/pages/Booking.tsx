
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

// Import your existing components here:
import ServiceTypeSelection from "@/components/ServiceTypeSelection";
import CarSelection from "@/components/CarSelection";
import PricingPlans from "@/components/PricingPlans";
import OneTimePricingPlans from "@/components/OneTimePricingPlans";
import CustomerDetails from "@/components/CustomerDetails";
import ServiceSelection from "@/components/ServiceSelection";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const stepContentRef = useRef<HTMLDivElement>(null);

  const [selectedServiceType, setSelectedServiceType] = useState(""); // "one-time" or "monthly"
  const [selectedCar, setSelectedCar] = useState("Sedan");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stepsForOneTime = [
    "Service Type",
    "Select Car",
    "Washing Plan",
    "Additional Services",
    "Customer Details",
    "Summary",
  ];

  const stepsForMonthly = [
    "Service Type",
    "Washing Plan",
    "Customer Details",
    "Summary",
  ];

  const steps = selectedServiceType === "one-time" ? stepsForOneTime : stepsForMonthly;
  const totalSteps = steps.length;

  const validateCurrentStep = () => {
    if (selectedServiceType === "one-time") {
      switch (currentStep) {
        case 1:
          return selectedServiceType !== "";
        case 2:
          return selectedCar !== "";
        case 3:
          return selectedPlan !== "";
        case 4:
          return true; // Additional services are optional
        case 5:
          return customerName.trim() !== "";
        case 6:
          return true;
        default:
          return false;
      }
    } else {
      // monthly
      switch (currentStep) {
        case 1:
          return selectedServiceType !== "";
        case 2:
          return selectedPlan !== "";
        case 3:
          return customerName.trim() !== "";
        case 4:
          return true;
        default:
          return false;
      }
    }
  };

  const handleNextStep = () => {
    if (!validateCurrentStep()) return;
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
    setTimeout(() => {
      if (stepContentRef.current) {
        stepContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleBookNow = () => {
    let message = `Hello! I'd like to book a car wash service with the following details:\n\n`;
    message += `Name: ${customerName}\nService Type: ${selectedServiceType}\n`;
    if (selectedServiceType === "one-time") {
      message += `Car Type: ${selectedCar}\n`;
    }
    message += `Washing Plan: ${selectedPlan}\n`;
    if (selectedServiceType === "one-time" && selectedServices.length > 0) {
      message += `Additional Services: ${selectedServices.join(", ")}\n`;
    }
    message += `\nPlease confirm the booking details and let me know the next steps.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918920230357?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header showNav={false} onCartOpen={() => {}} />

      <section className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/MainViewWashing.png')" }}
        />
        <div className="absolute inset-0 bg-black/90" />

        <div className="relative z-10 pt-8 md:pt-16 pb-12 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto">
<div className="max-w-full lg:max-w-2xl mb-8 md:mb-12 mt-12">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
   
    Doorstep Car Wash
    <br />
    <span className="text-green-400">Anywhere. Anytime.</span>
  </h1>
  
</div>



          {/* Step Cards */}
          <div className="mb-6 flex flex-wrap gap-4 justify-start">
            {steps.map((title, idx) => {
              const stepNum = idx + 1;
              const isActive = currentStep === stepNum;
              const isCompleted = currentStep > stepNum;

              return (
                <motion.button
                  key={stepNum}
                  onClick={() => handleStepClick(stepNum)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 min-w-[150px] p-4 text-left rounded-xl border transition-all shadow-md
                    ${
                      isActive
                        ? "border-green-500 bg-green-500 text-black font-semibold shadow-lg"
                        : isCompleted
                        ? "border-green-600 bg-green-700 text-white"
                        : "border-gray-700 bg-gray-900 text-gray-500"
                    }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs border-2
                        ${
                          isActive
                            ? "bg-yellow-400 text-black border-yellow-400"
                            : isCompleted
                            ? "bg-teal-500 text-white border-teal-500"
                            : "bg-gray-700 text-white border-gray-700"
                        }`}
                    >
                      {isCompleted ? "✓" : stepNum}
                    </div>
                    <span className="text-sm font-semibold">{title}</span>
                  </div>
                  <p className="text-xs ml-9">
                    {title === "Service Type" && "Choose type"}
                    {title === "Select Car" && "Select vehicle"}
                    {title === "Washing Plan" && "Pick plan"}
                    {title === "Additional Services" && "Optional extras"}
                    {title === "Customer Details" && "Your info"}
                    {title === "Summary" && "Review & confirm"}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              ref={stepContentRef}
            >
              {selectedServiceType === "one-time" ? (
                <>
                  {currentStep === 1 && (
                    <ServiceTypeSelection
                      selectedServiceType={selectedServiceType}
                      onServiceTypeSelect={(val) => {
                        setSelectedServiceType(val);
                        setCurrentStep(1);
                      }}
                    />
                  )}
                  {currentStep === 2 && (
                    <CarSelection selectedCar={selectedCar} onCarSelect={setSelectedCar} />
                  )}
                  {currentStep === 3 && (
                    <OneTimePricingPlans 
                      selectedPlan={selectedPlan} 
                      onPlanSelect={setSelectedPlan}
                      selectedCar={selectedCar}
                    />
                  )}
                  {currentStep === 4 && (
                    <ServiceSelection
                      selectedServices={selectedServices}
                      onServicesChange={setSelectedServices}
                    />
                  )}
                  {currentStep === 5 && (
                    <CustomerDetails customerName={customerName} onNameChange={setCustomerName} />
                  )}
                  {currentStep === 6 && (
                    <div className="bg-gray-900 p-6 rounded-lg text-gray-300">
                      <h2 className="text-2xl font-semibold mb-4 text-green-400">Booking Summary</h2>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Service Type:</strong> {selectedServiceType || "-"}</li>
                        <li><strong>Car Type:</strong> {selectedCar || "-"}</li>
                        <li><strong>Washing Plan:</strong> {selectedPlan || "-"}</li>
                        <li><strong>Additional Services:</strong> {selectedServices.length > 0 ? selectedServices.join(", ") : "None"}</li>
                        <li><strong>Customer Name:</strong> {customerName || "-"}</li>
                      </ul>
                      <p className="mt-4 text-green-400 font-semibold">
                        Please review your selections and click “Book Now” to confirm.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Monthly / Daily Car Wash */}
                  {currentStep === 1 && (
                    <ServiceTypeSelection
                      selectedServiceType={selectedServiceType}
                      onServiceTypeSelect={(val) => {
                        setSelectedServiceType(val);
                        setCurrentStep(1); // reset step on service type change
                      }}
                    />
                  )}
                  {currentStep === 2 && (
                    <PricingPlans selectedPlan={selectedPlan} onPlanSelect={setSelectedPlan} />
                  )}
                  {currentStep === 3 && (
                    <CustomerDetails customerName={customerName} onNameChange={setCustomerName} />
                  )}
                  {currentStep === 4 && (
                    <div className="bg-gray-900 p-6 rounded-lg text-gray-300">
                      <h2 className="text-2xl font-semibold mb-4 text-green-400">Booking Summary</h2>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Service Type:</strong> {selectedServiceType || "-"}</li>
                        <li><strong>Washing Plan:</strong> {selectedPlan || "-"}</li>
                        <li><strong>Customer Name:</strong> {customerName || "-"}</li>
                      </ul>
                      <p className="mt-4 text-green-400 font-semibold">
                        Please review your selections and click “Book Now” to confirm.
                      </p>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>

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
            {currentStep === totalSteps ? (
              <Button
                className="w-full sm:w-auto bg-green-400 hover:bg-green-500 text-black"
                onClick={handleBookNow}
              >
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                className={`w-full sm:w-auto ${
                  validateCurrentStep()
                    ? "bg-green-400 hover:bg-green-500 text-black"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
                onClick={handleNextStep}
                disabled={!validateCurrentStep()}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
