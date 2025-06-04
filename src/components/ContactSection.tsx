
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#0b0f10" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to give your car the shine it deserves?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-6">
          Book your car wash appointment in just a few clicks. Our professionals will handle the rest at your doorstep.
        </p>
        <a href="/booking">
          <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-3 text-sm sm:text-base">
            BOOK A SERVICE
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;

// const ContactSection = () => {
//   return (
//     <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#0b0f10" }}>
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Apply for a car wash.</h2>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
//           {/* Contact Form */}
//           <Card className="bg-gray-800/80 border-gray-700">
//             <CardContent className="p-6 md:p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <Input 
//                   placeholder="Full Name"
//                   className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 h-12"
//                 />
//                 <Input 
//                   placeholder="Email Address"
//                   type="email"
//                   className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 h-12"
//                 />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <Input 
//                   placeholder="Phone Number"
//                   type="tel"
//                   className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 h-12"
//                 />
//                 <Input 
//                   placeholder="Car Model"
//                   className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 h-12"
//                 />
//               </div>
//               <Textarea 
//                 placeholder="Message"
//                 rows={4}
//                 className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 mb-6 resize-none"
//               />
//               <Button 
//                 className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold h-12"
//               >
//                 SUBMIT APPLICATION
//               </Button>
//             </CardContent>
//           </Card>
          
//           {/* Map Placeholder */}
//           <Card className="bg-gray-800/80 border-gray-700">
//             <CardContent className="p-6 md:p-8 h-full flex items-center justify-center">
//               <div className="text-center w-full">
//                 <div className="w-full h-48 md:h-64 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
//                   <span className="text-gray-400">Interactive Map</span>
//                 </div>
//                 <p className="text-gray-300">Find us at our convenient location</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
