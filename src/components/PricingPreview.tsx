
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingPreview = () => {
  const navigate = useNavigate();

  const monthlyPlans = [
    { name: "Hatchback", price: 799, image: "/hatchback.png" },
    { name: "Sedan", price: 799, image: "/sedan.png" },
    { name: "SUV", price: 999, image: "/suv.png" },
    { name: "Luxury", price: 1199, image: "/rangerover.png" }
  ];

  const oneTimePlans = [
    { name: "Exterior + Interior", price: "299-699", car: "All Cars" },
    { name: "Exterior Only", price: "349-499", car: "All Cars" },
    { name: "Interior Only", price: "299-349", car: "All Cars" },
    { name: "Waterless", price: "349-399", car: "All Cars" }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-300 text-lg">Choose the plan that works best for you</p>
        </div>

        {/* Monthly Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-400 text-center mb-8">Monthly Doorstep Service</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyPlans.map((plan, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all">
                <CardContent className="p-6 text-center">
                  <img src={plan.image} alt={plan.name} className="w-20 h-12 object-contain mx-auto mb-4" />
                  <h4 className="text-white font-semibold text-lg mb-2">{plan.name}</h4>
                  <div className="text-2xl font-bold text-green-400 mb-2">₹{plan.price}</div>
                  <div className="text-gray-400 text-sm mb-4">per month</div>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div>• 26 Days Cleaning</div>
                    <div>• 1 Foam Wash</div>
                    <div>• Interior Cleaning</div>
                    <div>• At Your Doorstep</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* One-Time Plans */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-400 text-center mb-8">One-Time Premium Wash</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oneTimePlans.map((plan, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all">
                <CardContent className="p-6 text-center">
                  <h4 className="text-white font-semibold text-lg mb-2">{plan.name}</h4>
                  <div className="text-2xl font-bold text-green-400 mb-2">₹{plan.price}</div>
                  <div className="text-gray-400 text-sm mb-4">{plan.car}</div>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div>• Professional Service</div>
                    <div>• At Your Location</div>
                    <div>• Quality Materials</div>
                    <div>• Same Day Service</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services Preview */}
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Additional Premium Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-green-400 font-bold">₹1299</div>
              <div className="text-gray-300 text-sm">Paint Rubbing</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-bold">₹399</div>
              <div className="text-gray-300 text-sm">3M Wax</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-bold">₹599</div>
              <div className="text-gray-300 text-sm">Dry Cleaning</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-bold">₹1999</div>
              <div className="text-gray-300 text-sm">Full Package</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-green-400 hover:bg-green-500 text-black font-semibold px-12 py-4 text-xl"
            onClick={() => navigate('/booking')}
          >
            Book Your Service Now
          </Button>
          <p className="text-gray-400 text-sm mt-4">Quick booking • Same day service • Professional quality</p>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
