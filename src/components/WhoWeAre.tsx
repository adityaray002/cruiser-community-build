// import { Button } from "@/components/ui/button";

// const WhoWeAre = () => {
//   return (
//     <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#0b0f10" }}>
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
//           {/* ✅ Image on the Left */}
//           <div className="relative ">
//             <div
//               className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900  flex items-center justify-center mx-auto max-w-md h-[400px]"
//               style={{
//                 backgroundImage: "url('/mock.png')",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//                 // backgroundPosition: "center",
//               }}
//             />
//           </div>

//           {/* ✅ Text on the Right */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
//               Who We Are ?<br />
              
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
//               Car detailing is a process that involves thorough cleaning, restoration and finishing of a vehicle, both inside and out. It goes beyond a simple car wash to address every aspect of the vehicle's appearance and condition. Our expert team uses professional-grade tools and techniques to ensure your car looks its absolute best.
//             </p>
//             <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
//               <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold w-full sm:w-auto">
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

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
   const navigate = useNavigate();
  return (
    <section
      className="py-8 md:py-20 px-4 md:px-6"
      style={{ backgroundColor: "#0b0f10" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* ✅ Image on the Left */}
          <div className="relative px-2 sm:px-4">
            <div
              className="aspect-square rounded-full flex items-center justify-center mx-auto 
                         w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[65%]
                         bg-gradient-to-br from-gray-800 to-gray-900"
              style={{
                backgroundImage: "url('/mock.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

          {/* ✅ Text on the Right */}
          <div className="px-2 sm:px-4 text-center lg:text-left">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                Who We Are
              </h2>
              <div className="mx-auto lg:mx-0 w-24 h-1 bg-green-400 rounded animate-pulse mb-4"></div>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
  At CleanCruisers, we deliver professional doorstep car wash and detailing services with a focus on convenience, quality, and eco-friendly practices. From a quick wash to full detailing, we bring the shine to your location using modern tools and safe materials.
</p>
<p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
  Our trained team ensures your car looks brand new—saving you time and effort. With flexible plans, transparent pricing, and a customer-first approach, CleanCruisers is your go-to for daily and one-time car care.
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
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
