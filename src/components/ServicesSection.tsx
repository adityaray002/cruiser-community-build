
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      icon: "❄️",
      title: "Contactless Washing",
      description: "Vestibulum tortor risus, rutrum at congue sed ultricies finibus.",
      rating: 4
    },
    {
      icon: "🛡️",
      title: "Safety Materials", 
      description: "Cras eleifend tristique metus, eu gravida diam tempor consectetur aliquam.",
      rating: 5
    },
    {
      icon: "⚙️",
      title: "Modern Equipment",
      description: "Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.",
      rating: 4
    },
    {
      icon: "🌪️",
      title: "Extensive Cleaning",
      description: "Sed blandit non dolor et amet mi metus tincidunt ut non velit.",
      rating: 4
    }
  ];
  
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Washing Services</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-green-400 font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-sm ${i < service.rating ? 'text-green-400' : 'text-gray-600'}`}
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
