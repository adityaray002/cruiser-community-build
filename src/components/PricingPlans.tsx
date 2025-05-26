
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
      name: "Basic License",
      price: 39,
      currency: "INR",
      features: [
        "Secure your customer usage",
        "View basic analytics",
        "Up to 350 customer profiles",
        "Custom network name"
      ],
      highlighted: false
    },
    {
      name: "Social License", 
      price: 55,
      currency: "INR",
      features: [
        "Secure your customer usage",
        "View basic analytics", 
        "Up to 900 customer profiles",
        "Custom network name"
      ],
      highlighted: false
    },
    {
      name: "Marketing License",
      price: 99,
      currency: "INR", 
      features: [
        "Secure your customer usage",
        "View basic analytics",
        "Up to 900 customer profiles", 
        "Custom network name"
      ],
      highlighted: true
    },
    {
      name: "Marketing License",
      price: 130,
      currency: "INR",
      features: [
        "Secure your customer usage",
        "View basic analytics",
        "Up to 350 customer profiles",
        "Custom network name"
      ],
      highlighted: false
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" size="icon" className="text-white">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1 mx-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer transition-all ${
                plan.highlighted 
                  ? 'bg-gray-700 border-green-400' 
                  : 'bg-gray-800 border-gray-600 hover:border-gray-500'
              }`}
              onClick={() => onPlanSelect(plan.name)}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-white">{plan.currency}</span>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                
                <h3 className="text-green-400 font-semibold text-lg text-center mb-4">
                  {plan.name}
                </h3>
                
                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-green-400 hover:bg-green-500 text-black' 
                      : 'bg-gray-600 hover:bg-gray-500 text-white'
                  }`}
                >
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Button variant="ghost" size="icon" className="text-green-400">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default PricingPlans;
