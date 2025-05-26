
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (slide: number) => void;
}

const HeroSection = ({ currentSlide, totalSlides, onSlideChange }: HeroSectionProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            The shine that lasts
            <br />
            <span className="text-green-400">FOREVER.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s
          </p>
          
          <Button 
            size="lg"
            className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 text-lg"
            onClick={() => navigate('/booking')}
          >
            BOOK NOW
          </Button>
        </div>
        
        {/* Slide Navigation */}
        <div className="flex items-center justify-center mt-20 space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:text-green-400"
            onClick={() => onSlideChange(Math.max(1, currentSlide - 1))}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">{currentSlide}</span>
            <div className="w-20 h-1 bg-gray-600 rounded">
              <div 
                className="h-full bg-green-400 rounded transition-all duration-300"
                style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
              />
            </div>
            <span className="text-2xl font-bold">{totalSlides}</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:text-green-400"
            onClick={() => onSlideChange(Math.min(totalSlides, currentSlide + 1))}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
