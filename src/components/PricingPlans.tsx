// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// interface PricingPlansProps {
//   selectedPlan: string;
//   onPlanSelect: (plan: string) => void;
// }

// const PricingPlans = ({ selectedPlan, onPlanSelect }: PricingPlansProps) => {
//   const plans = [
//     {
//       name: "Hatchback",
//       price: 799,
//       currency: "INR",
//       features: [
//         "Washing at Doorstep",
//         "26 Days Exterior Cleaning (Dusting)",
//         "Tire Cleaning",
//         "Include 1 Foam Wash + Interior Cleaning + Polishing"
//       ],
//       highlighted: false
//     },
//     {
//       name: "Sedan", 
//       price: 799,
//       currency: "INR",
//       features: [
//         "Washing at Doorstep",
//         "26 Days Exterior Cleaning (Dusting)",
//         "Tire Cleaning",
//         "Include 1 Foam Wash + Interior Cleaning + Polishing"
//       ],
//       highlighted: false
//     },
//     {
//       name: "SUV", 
//       price: 999,
//       currency: "INR",
//       features: [
//        "Washing at Doorstep",
//         "26 Days Exterior Cleaning (Dusting)",
//         "Tire Cleaning",
//         "Include 1 Foam Wash + Interior Cleaning + Polishing"
//       ],
//       highlighted: false
//     },{
//       name: "Luxury", 
//       price: 1199,
//       currency: "INR",
//       features: [
//        "Washing at Doorstep",
//         "26 Days Exterior Cleaning (Dusting)",
//         "Tire Cleaning",
//         "Include 1 Foam Wash + Interior Cleaning + Polishing"
//       ],
//       highlighted: false
//     }

//   ];

//   return (
//     <div>
//       {/* Mobile View */}
//       <div className="md:hidden">
//         <div className="grid grid-cols-2 gap-3">
//           {plans.map((plan, index) => (
//             <Card 
//               key={index} 
//               className={`cursor-pointer transition-all ${
//                 selectedPlan === plan.name
//                   ? 'bg-gray-700 border-green-400' 
//                   : plan.highlighted 
//                   ? 'bg-gray-700 border-green-400' 
//                   : 'bg-gray-800 border-gray-600 hover:border-gray-500'
//               }`}
//               onClick={() => onPlanSelect(plan.name)}
//             >
//               <CardContent className="p-3">
//                 <div className="text-center mb-3">
//                   <span className="text-sm font-bold text-white">{plan.currency}</span>
//                   <span className="text-xl font-bold text-white">{plan.price}</span>
//                   <span className="text-xs text-gray-400">/month</span>
//                 </div>
                
//                 <h3 className="text-green-400 font-semibold text-xs text-center mb-3">
//                   {plan.name}
//                 </h3>
                
//                 <div className="space-y-1 mb-3">
//                   {plan.features.map((feature, i) => (
//                     <div key={i} className="flex items-center text-xs text-gray-300">
//                       <span className="text-green-400 mr-1 text-xs">✓</span>
//                       <span className="text-xs leading-tight">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
                
//                 <Button 
//                   className={`w-full text-xs py-1 h-8 ${
//                     selectedPlan === plan.name
//                       ? 'bg-green-400 hover:bg-green-500 text-black' 
//                       : 'bg-gray-600 hover:bg-gray-500 text-white'
//                   }`}
//                 >
//                   {selectedPlan === plan.name ? 'Selected' : 'Select'}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Desktop View */}
//       <div className="hidden md:flex items-center justify-between">
//         <Button variant="ghost" size="icon" className="text-white h-10 w-10 flex-shrink-0">
//           <ArrowLeft className="h-6 w-6" />
//         </Button>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-1 mx-6 lg:mx-8">
//           {plans.map((plan, index) => (
//             <Card 
//               key={index} 
//               className={`cursor-pointer transition-all ${
//                 selectedPlan === plan.name
//                   ? 'bg-gray-700 border-green-400' 
//                   : plan.highlighted 
//                   ? 'bg-gray-700 border-green-400' 
//                   : 'bg-gray-800 border-gray-600 hover:border-gray-500'
//               }`}
//               onClick={() => onPlanSelect(plan.name)}
//             >
//               <CardContent className="p-4 lg:p-6">
//                 <div className="text-center mb-4">
//                   <span className="text-xl lg:text-2xl font-bold text-white">{plan.currency}</span>
//                   <span className="text-3xl lg:text-4xl font-bold text-white">{plan.price}</span>
//                   <span className="text-gray-400">/month</span>
//                 </div>
                
//                 <h3 className="text-green-400 font-semibold text-base lg:text-lg text-center mb-4">
//                   {plan.name}
//                 </h3>
                
//                 <div className="space-y-2 mb-6">
//                   {plan.features.map((feature, i) => (
//                     <div key={i} className="flex items-center text-xs lg:text-sm text-gray-300">
//                       <span className="text-green-400 mr-2">✓</span>
//                       {feature}
//                     </div>
//                   ))}
//                 </div>
                
//                 <Button 
//                   className={`w-full ${
//                     selectedPlan === plan.name
//                       ? 'bg-green-400 hover:bg-green-500 text-black' 
//                       : 'bg-gray-600 hover:bg-gray-500 text-white'
//                   }`}
//                 >
//                   {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
        
//         <Button variant="ghost" size="icon" className="text-green-400 h-10 w-10 flex-shrink-0">
//           <ArrowRight className="h-6 w-6" />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default PricingPlans;
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowLeft, ArrowRight, Star } from "lucide-react";

// interface PricingPlansProps {
//   selectedPlan: string;
//   onPlanSelect: (plan: string) => void;
// }

// const PricingPlans = ({ selectedPlan, onPlanSelect }: PricingPlansProps) => {
//   const plans = [
//     {
//       name: "Hatchback",
//       price: 799,
//       currency: "₹",
//       features: [
//         "Washing at Doorstep",
//         "26 Days Exterior Cleaning (Dusting)",
//         "Tire Cleaning",
//         "1 Foam Wash + Interior Cleaning + Polishing"
//       ],
//       highlighted: false
//     },
//     {
//       name: "Sedan", 
//       price: 899, // Increased price to create a psychological step-up
//       currency: "₹",
//       features: [
//         "Washing at Doorstep",
//         "26 Days Exterior Cleaning (Dusting)",
//         "Tire Cleaning",
//         "1 Foam Wash + Interior Cleaning + Polishing"
//       ],
//       highlighted: true // Most popular
//     },
//     {
//       name: "SUV", 
//       price: 999,
//       currency: "₹",
//       features: [
//        "Washing at Doorstep",
//         "26 Days Exterior Cleaning (Dusting)",
//         "Tire Cleaning",
//         "1 Foam Wash + Interior Cleaning + Polishing"
//       ],
//       highlighted: false
//     },
//     {
//       name: "Luxury", 
//       price: 1199,
//       currency: "₹",
//       features: [
//        "Washing at Doorstep",
//         "26 Days Exterior Cleaning (Dusting)",
//         "Tire Cleaning",
//         "1 Foam Wash + Interior Cleaning + Polishing"
//       ],
//       highlighted: false
//     }
//   ];

//   return (
//     <div>
//       {/* Mobile View */}
//       <div className="md:hidden">
//         <div className="grid grid-cols-2 gap-3">
//           {plans.map((plan, index) => (
//             <Card 
//               key={index} 
//               className={`cursor-pointer transition-all border-2 ${
//                 selectedPlan === plan.name
//                   ? 'bg-green-400/10 border-green-400' 
//                   : plan.highlighted 
//                   ? 'bg-green-400/5 border-green-300' 
//                   : 'bg-gray-800 border-gray-600 hover:border-gray-500'
//               }`}
//               onClick={() => onPlanSelect(plan.name)}
//             >
//               <CardContent className="p-3">
//                 <div className="text-center mb-2">
//                   <div className="text-green-400 font-bold text-sm">{plan.currency}{plan.price} <span className="text-xs text-gray-400">/month</span></div>
//                 </div>
//                 <h3 className="text-white font-semibold text-xs text-center mb-2">
//                   {plan.name}
//                 </h3>
//                 {plan.highlighted && (
//                   <div className="flex justify-center mb-2">
//                     <span className="text-yellow-400 text-xs font-semibold flex items-center gap-1">
//                       <Star size={12} /> Most Popular
//                     </span>
//                   </div>
//                 )}
//                 <ul className="space-y-1 text-xs text-gray-300 mb-3">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-1">
//                       <span className="text-green-400">✓</span>{feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Button 
//                   className={`w-full text-xs py-1 h-8 ${
//                     selectedPlan === plan.name
//                       ? 'bg-green-400 hover:bg-green-500 text-black' 
//                       : 'bg-gray-700 hover:bg-gray-600 text-white'
//                   }`}
//                 >
//                   {selectedPlan === plan.name ? 'Selected' : 'Select'}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Desktop View */}
//       <div className="hidden md:flex items-center justify-between">
//         <Button variant="ghost" size="icon" className="text-white h-10 w-10 flex-shrink-0">
//           <ArrowLeft className="h-6 w-6" />
//         </Button>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-1 mx-6 lg:mx-8">
//           {plans.map((plan, index) => (
//             <Card 
//               key={index} 
//               className={`cursor-pointer transition-all border-2 ${
//                 selectedPlan === plan.name
//                   ? 'bg-green-400/10 border-green-400' 
//                   : plan.highlighted 
//                   ? 'bg-green-400/5 border-green-300' 
//                   : 'bg-gray-800 border-gray-600 hover:border-gray-500'
//               }`}
//               onClick={() => onPlanSelect(plan.name)}
//             >
//               <CardContent className="p-6">
//                 <div className="text-center mb-4">
//                   <div className="text-green-400 font-bold text-lg">{plan.currency}{plan.price}</div>
//                   <div className="text-gray-400 text-xs">per month</div>
//                 </div>
//                 <h3 className="text-white font-semibold text-lg text-center mb-3">
//                   {plan.name}
//                 </h3>
//                 {plan.highlighted && (
//                   <div className="flex justify-center mb-4">
//                     <span className="text-yellow-400 text-sm font-semibold flex items-center gap-1">
//                       <Star size={14} /> Most Popular
//                     </span>
//                   </div>
//                 )}
//                 <ul className="space-y-2 text-sm text-gray-300 mb-6">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       <span className="text-green-400">✓</span>{feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Button 
//                   className={`w-full text-sm py-2 ${
//                     selectedPlan === plan.name
//                       ? 'bg-green-400 hover:bg-green-500 text-black' 
//                       : 'bg-gray-700 hover:bg-gray-600 text-white'
//                   }`}
//                 >
//                   {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <Button variant="ghost" size="icon" className="text-green-400 h-10 w-10 flex-shrink-0">
//           <ArrowRight className="h-6 w-6" />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default PricingPlans;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PricingPlansProps {
  selectedPlan: string;
  onPlanSelect: (plan: string) => void;
}

const PricingPlans = ({ selectedPlan, onPlanSelect }: PricingPlansProps) => {
  const plans = [
    {
      name: "Hatchback",
      price: 799,
      currency: "₹",
      features: [
        "Washing at Doorstep",
        "26 Days Exterior Cleaning",
        "Tire Cleaning",
        "1 Foam Wash + Interior Cleaning + Polishing",
      ],
      image: "/hatchback.png",
    },
    {
      name: "Sedan",
      price: 799,
      currency: "₹",
      features: [
        "Washing at Doorstep",
        "26 Days Exterior Cleaning",
        "Tire Cleaning",
        "1 Foam Wash + Interior Cleaning + Polishing",
      ],
      image: "/sedan.png",
    },
    {
      name: "SUV",
      price: 999,
      currency: "₹",
      features: [
        "Washing at Doorstep",
        "26 Days Exterior Cleaning",
        "Tire Cleaning",
        "1 Foam Wash + Interior Cleaning + Polishing",
      ],
      image: "/suv.png",
    },
    {
      name: "Luxury",
      price: 1199,
      currency: "₹",
      features: [
        "Washing at Doorstep",
        "26 Days Exterior Cleaning",
        "Tire Cleaning",
        "1 Foam Wash + Interior Cleaning + Polishing",
      ],
      image: "/rangerover.png",
    },
  ];

  return (
    <div className="w-full">
      {/* Desktop Arrows */}
      <div className="hidden md:flex items-center justify-between mb-6">
        <Button variant="ghost" size="icon" className="text-white h-10 w-10">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white h-10 w-10">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {plans.map((plan, index) => (
          <Card
            key={index}
            onClick={() => onPlanSelect(plan.name)}
            className={`cursor-pointer transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-[#1f2937] to-[#111827] 
              border rounded-2xl shadow-md hover:shadow-green-500/20 overflow-hidden
              ${
                selectedPlan === plan.name
                  ? "border-green-400 shadow-green-400/20"
                  : "border-gray-700"
              }`}
          >
            <CardContent className="p-5 flex flex-col items-center">
              <img
                src={plan.image}
                alt={plan.name}
                width={100}
                height={60}
                className="object-contain mb-3"
              />

              <h3 className="text-xl font-extrabold text-green-400 mb-1 uppercase tracking-wide">
                {plan.name}
              </h3>

              <div className="text-white text-2xl font-bold mb-3">
                {plan.currency}
                {plan.price}
                <span className="text-sm text-gray-400 font-normal"> /month</span>
              </div>

              <ul className="text-sm text-gray-300 space-y-2 mb-4 w-full px-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold text-sm h-9 rounded-md transition-colors duration-200
                  ${
                    selectedPlan === plan.name
                      ? "bg-green-400 text-black hover:bg-green-500"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
              >
                {selectedPlan === plan.name ? "Selected" : "Select Plan"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
