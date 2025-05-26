
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header onCartOpen={() => {}} />
        
        <main className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
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

            {/* Services Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
              {[
                { icon: "❄️", title: "Contactless Washing", rating: 4 },
                { icon: "🛡️", title: "Safety Materials", rating: 5 },
                { icon: "⚙️", title: "Modern Equipment", rating: 4 },
                { icon: "🌪️", title: "Extensive Cleaning", rating: 4 }
              ].map((service, index) => (
                <Card key={index} className="bg-gray-800/80 border-gray-700">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
                    <h3 className="text-green-400 font-semibold text-base md:text-lg mb-2 md:mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">Vestibulum tortor risus, rutrum at congue sed ultricies finibus.</p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs md:text-sm ${i < service.rating ? 'text-green-400' : 'text-gray-600'}`}>★</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

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
        </main>
      </div>
    </div>
  );
};

export default Booking;
