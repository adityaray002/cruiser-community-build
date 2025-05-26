
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Professional Washing<br />
              And Cleaning.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Car detailing is a process that involves thorough cleaning, restoration and finishing of a vehicle, both inside and out. It goes beyond a simple car wash to address every aspect of the vehicle's appearance and condition. Our expert team uses professional-grade tools and techniques to ensure your car looks its absolute best.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-green-400 hover:bg-green-500 text-black font-semibold w-full sm:w-auto"
              >
                GET OUR SERVICE
              </Button>
              <Button 
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto max-w-md">
              <div className="w-3/4 h-3/4 bg-cover bg-center rounded-full" 
                   style={{backgroundImage: "url('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3')"}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
