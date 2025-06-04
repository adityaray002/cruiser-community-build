
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// interface HeroSectionProps {
//   currentSlide: number;
//   totalSlides: number;
//   onSlideChange: (slide: number) => void;
// }

// const HeroSection = ({ currentSlide, totalSlides, onSlideChange }: HeroSectionProps) => {
//   const navigate = useNavigate();
  
//   return (
//     <section className="min-h-[80vh] md:min-h-[100vh] pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 inset-0 bg-black/50 z-0">
//       <div className="max-w-7xl mx-auto">
//         <div className="max-w-full lg:max-w-2xl">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
//              Premium Car Wash at Your  <span className="text-green-400">Doorstep</span>
          
           
//           </h1>
          
//           <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-prose">
//             We bring professional car cleaning to your home or office — saving you time, water, and effort. Book in seconds and enjoy the shine.

//           </p>
          
//           <Button 
//             size="lg"
//             className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
//             onClick={() => navigate('/booking')}
//           >
//             BOOK NOW
//           </Button>
//         </div>
        
//         {/* Slide Navigation */}
//         {/* <div className="flex items-center justify-center mt-12 md:mt-20 space-x-3 md:space-x-4">
//           <Button 
//             variant="ghost" 
//             size="icon"
//             className="text-white hover:text-green-400 h-8 w-8 md:h-10 md:w-10"
//             onClick={() => onSlideChange(Math.max(1, currentSlide - 1))}
//           >
//             <ArrowLeft className="h-4 w-4 md:h-6 md:w-6" />
//           </Button>
          
//           <div className="flex items-center space-x-2">
//             <span className="text-xl md:text-2xl font-bold">{currentSlide}</span>
//             <div className="w-16 md:w-20 h-1 bg-gray-600 rounded">
//               <div 
//                 className="h-full bg-green-400 rounded transition-all duration-300"
//                 style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
//               />
//             </div>
//             <span className="text-xl md:text-2xl font-bold">{totalSlides}</span>
//           </div>
          
//           <Button 
//             variant="ghost" 
//             size="icon"
//             className="text-white hover:text-green-400 h-8 w-8 md:h-10 md:w-10"
//             onClick={() => onSlideChange(Math.min(totalSlides, currentSlide + 1))}
//           >
//             <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
//           </Button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black min-h-screen flex items-center px-4 py-12 md:px-6 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        {/* Text Section */}
   <div className="flex flex-col justify-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-extrabold leading-tight tracking-tight"
          >
            <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Premium
            </span>
            Car Wash at Your {" "}
            <span className="text-green-400">Doorstep</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md"
          >
            We deliver expert car detailing services at your location — fast, eco-friendly, and convenient.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
    size="lg"
    className="bg-green-400 hover:bg-green-500 text-black font-semibold 
               px-6 py-3 text-base md:text-lg 
               max-w-xs mx-auto sm:max-w-none sm:mx-0 sm:w-auto"
    onClick={() => navigate("/booking")}
  >
              BOOK NOW
            </Button>
          </motion.div>
        </div>

        {/* Image Section with glowing background & animation */}
        <div className="relative flex justify-center items-center">
          {/* Glowing background */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-green-400 opacity-30 blur-3xl animate-pulse"></div>

          {/* Animated illustration */}
          <motion.img
            src="/sedan.png" // Replace with your illustration path
            alt="Car Wash Illustration"
            className="relative w-64 md:w-96 h-auto drop-shadow-lg"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


