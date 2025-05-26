
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarSelectionProps {
  selectedCar: string;
  onCarSelect: (car: string) => void;
}

const CarSelection = ({ selectedCar, onCarSelect }: CarSelectionProps) => {
  const carTypes = ["Sedan", "SUV", "Pick Up", "Mini Bus"];

  return (
    <div className="text-center">
      <div className="flex items-center justify-center space-x-8 mb-8">
        <Button variant="ghost" size="icon" className="text-green-400">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="w-96 h-48 flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Red Sedan"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        <Button variant="ghost" size="icon" className="text-green-400">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="flex justify-center space-x-8">
        {carTypes.map((car) => (
          <button
            key={car}
            onClick={() => onCarSelect(car)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCar === car 
                ? 'text-green-400 border-b-2 border-green-400' 
                : 'text-white hover:text-green-400'
            }`}
          >
            {car}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarSelection;
