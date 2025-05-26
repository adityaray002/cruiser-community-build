
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
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-full lg:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
            The shine that lasts
            <br />
            <span className="text-green-400">FOREVER.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-prose">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s
          </p>
          
          <Button 
            size="lg"
            className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
            onClick={() => navigate('/booking')}
          >
            BOOK NOW
          </Button>
        </div>
        
        {/* Slide Navigation */}
        <div className="flex items-center justify-center mt-12 md:mt-20 space-x-3 md:space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:text-green-400 h-8 w-8 md:h-10 md:w-10"
            onClick={() => onSlideChange(Math.max(1, currentSlide - 1))}
          >
            <ArrowLeft className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold">{currentSlide}</span>
            <div className="w-16 md:w-20 h-1 bg-gray-600 rounded">
              <div 
                className="h-full bg-green-400 rounded transition-all duration-300"
                style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
              />
            </div>
            <span className="text-xl md:text-2xl font-bold">{totalSlides}</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:text-green-400 h-8 w-8 md:h-10 md:w-10"
            onClick={() => onSlideChange(Math.min(totalSlides, currentSlide + 1))}
          >
            <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
