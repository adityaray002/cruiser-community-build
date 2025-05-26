
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Apply for a car wash.</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-800/80 border-gray-700">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input 
                  placeholder="Full Name"
                  className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Input 
                  placeholder="Email Address"
                  type="email"
                  className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input 
                  placeholder="Phone Number"
                  type="tel"
                  className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Input 
                  placeholder="Car Model"
                  className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              <Textarea 
                placeholder="Message"
                rows={4}
                className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 mb-6"
              />
              <Button 
                className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold"
              >
                SUBMIT APPLICATION
              </Button>
            </CardContent>
          </Card>
          
          {/* Map Placeholder */}
          <Card className="bg-gray-800/80 border-gray-700">
            <CardContent className="p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-400">Interactive Map</span>
                </div>
                <p className="text-gray-300">Find us at our convenient location</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
