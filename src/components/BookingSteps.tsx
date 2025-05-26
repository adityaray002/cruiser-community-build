
interface BookingStepsProps {
  currentStep: number;
}

const BookingSteps = ({ currentStep }: BookingStepsProps) => {
  const steps = [
    { number: 1, title: "Select Car", subtitle: "Sedan" },
    { number: 2, title: "Washing Plan", subtitle: "INR99 / Month" },
    { number: 3, title: "Additional Services", subtitle: "Add-ons" },
    { number: 4, title: "Date and Time", subtitle: "Schedule" }
  ];

  return (
    <div className="flex justify-center items-center space-x-8 mb-12">
      {steps.map((step, index) => (
        <div key={step.number} className="flex flex-col items-center">
          <div className="text-xs text-gray-400 mb-2">STEP {step.number}</div>
          <div 
            className={`px-6 py-3 rounded-lg font-semibold ${
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
  );
};

export default BookingSteps;
