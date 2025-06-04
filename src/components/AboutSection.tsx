
// import { Button } from "@/components/ui/button";

// const AboutSection = () => {
//   return (
//     <section className="py-12 md:py-20 px-4 md:px-6"style={{ backgroundColor: "#0b0f10" }}>
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//           <div className="order-2 lg:order-1">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
//               Professional Washing<br />
//               And Cleaning.
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
//               Car detailing is a process that involves thorough cleaning, restoration and finishing of a vehicle, both inside and out. It goes beyond a simple car wash to address every aspect of the vehicle's appearance and condition. Our expert team uses professional-grade tools and techniques to ensure your car looks its absolute best.
//             </p>
//             <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
//               <Button 
//                 className="bg-green-400 hover:bg-green-500 text-black font-semibold w-full sm:w-auto"
//               >
//                 GET OUR SERVICE
//               </Button>
//               <Button 
//                 variant="outline"
//                 className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black w-full sm:w-auto"
//               >
//                 Learn More
//               </Button>
//             </div>
//           </div>
//           <div className="relative order-1 lg:order-2">
//             <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto max-w-md"  style={{
//                     backgroundImage: "url('/professional washing.png')",
//                     backgroundSize: "cover",
//                    backgroundRepeat:"no-repeat"

//                    }}>
//               {/* <div className="w-3/4 h-3/4 bg-cover bg-center rounded-full" 
//                    style={{
//                     backgroundImage: "url('/professional washing.png')"
//                    }}
//               /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="py-8 md:py-20 px-4 md:px-6"
      style={{ backgroundColor: "#0b0f10" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 px-2 sm:px-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Professional Washing And Cleaning
              
            </h2>
             <div className="mx-auto lg:mx-0 w-24 h-1 bg-green-400 rounded animate-pulse mb-4"></div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Car detailing is a process that involves thorough cleaning, restoration and finishing of a vehicle, both inside and out. It goes beyond a simple car wash to address every aspect of the vehicle's appearance and condition. Our expert team uses professional-grade tools and techniques to ensure your car looks its absolute best.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button  onClick={() => navigate("/booking")} className="bg-green-400 hover:bg-green-500 text-black font-semibold w-full sm:w-auto">
                GET OUR SERVICE
              </Button>
              {/* <Button
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black w-full sm:w-auto"
              >
                Learn More
              </Button> */}
            </div>
          </div>

          {/* Image Content */}
          <div className="relative order-1 lg:order-2 px-2 sm:px-4">
            <div
              className="aspect-square rounded-full flex items-center justify-center mx-auto 
             w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[65%] 
             bg-gradient-to-br from-gray-800 to-gray-900"
              style={{
                backgroundImage: "url('/professional washing.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
