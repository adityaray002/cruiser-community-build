
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: "❄️",
//       title: "Contactless Washing",
//       description: "Vestibulum tortor risus, rutrum at congue sed ultricies finibus.",
//       rating: 4
//     },
//     {
//       icon: "🛡️",
//       title: "Safety Materials", 
//       description: "Cras eleifend tristique metus, eu gravida diam tempor consectetur aliquam.",
//       rating: 5
//     },
//     {
//       icon: "⚙️",
//       title: "Modern Equipment",
//       description: "Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.",
//       rating: 4
//     },
//     {
//       icon: "🌪️",
//       title: "Extensive Cleaning",
//       description: "Sed blandit non dolor et amet mi metus tincidunt ut non velit.",
//       rating: 4
//     }
//   ];
  
//   return (
//     <section className=" py-12 md:py-20 px-4 md:px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Washing Services</h2>
//           <div className="w-20 h-1 bg-green-400 mx-auto"></div>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//           {services.map((service, index) => (
//             <Card key={index} className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
//               <CardContent className="p-4 md:p-6 text-center">
//                 <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
//                 <h3 className="text-green-400 font-semibold text-base md:text-lg mb-2 md:mb-3">{service.title}</h3>
//                 <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{service.description}</p>
//                 <div className="flex justify-center space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <span 
//                       key={i} 
//                       className={`text-xs md:text-sm ${i < service.rating ? 'text-green-400' : 'text-gray-600'}`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      icon: "❄️",
      title: "Contactless Washing",
      description: "Fully touch-free washing to protect your car’s paint and ensure a hygienic experience.",
      rating: 4
    },
    {
      icon: "🛡️",
      title: "Safety Materials",
      description: "We use non-toxic, car-safe materials that are gentle on paint and tough on dirt.",
      rating: 5
    },
    {
      icon: "⚙️",
      title: "Modern Equipment",
      description: "High-performance tools for deep, efficient, and scratch-free cleaning every time.",
      rating: 4
    },
    {
      icon: "🌪️",
      title: "Extensive Cleaning",
      description: "We go beyond the basics—interiors, exteriors, tires, and trims cleaned with precision.",
      rating: 4
    }
  ];

  return (
    <section className=" py-12 md:py-20 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Washing Services</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
                <h3 className="text-green-400 font-semibold text-base md:text-lg mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{service.description}</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs md:text-sm ${i < service.rating ? 'text-green-400' : 'text-gray-600'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

