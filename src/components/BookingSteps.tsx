
interface BookingStepsProps {
  currentStep: number;
  selectedServiceType: string;
}

const BookingSteps = ({ currentStep, selectedServiceType }: BookingStepsProps) => {
  const getSteps = () => {
    const baseSteps = [
      { number: 1, title: "Select Car", subtitle: "Vehicle Type" },
      { number: 2, title: "Service Type", subtitle: "Monthly/One-time" },
      { number: 3, title: "Washing Plan", subtitle: "Choose Plan" },
    ];

    if (selectedServiceType === 'one-time') {
      return [
        ...baseSteps,
        { number: 4, title: "Additional Services", subtitle: "Add-ons" },
        { number: 5, title: "Book Now", subtitle: "Confirm" }
      ];
    } else {
      return [
        ...baseSteps,
        { number: 4, title: "Book Now", subtitle: "Confirm" }
      ];
    }
  };

  const steps = getSteps();

  return (
    <div className="mb-8 md:mb-12">
      {/* Mobile View - Vertical Steps */}
      <div className="md:hidden space-y-4">
        {steps.map((step, index) => (
          <div key={step.number} className={`flex items-center space-x-4 p-4 rounded-lg ${
            currentStep === step.number ? 'bg-green-400/10 border border-green-400' : 'bg-gray-800/50'
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
              currentStep === step.number ? 'bg-green-400 text-black' : 'bg-gray-700 text-white'
            }`}>
              {step.number}
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-400 mb-1">STEP {step.number}</div>
              <div className={`font-semibold ${currentStep === step.number ? 'text-green-400' : 'text-white'}`}>
                {step.title}
              </div>
              <div className="text-xs text-gray-400">{step.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Horizontal Steps */}
      <div className="hidden md:flex justify-center items-center space-x-4 lg:space-x-8">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className="text-xs text-gray-400 mb-2">STEP {step.number}</div>
            <div 
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold text-sm lg:text-base ${
                currentStep === step.number 
                  ? 'bg-green-400 text-black' 
                  : 'bg-gray-800 text-white'
              }`}
            >
              {step.title}
            </div>
            <div className="text-xs text-gray-400 mt-2">{step.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
