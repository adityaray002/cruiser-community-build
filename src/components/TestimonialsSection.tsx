
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      title: "Marketing Executive",
      content: "Absolutely delighted with the service! The car looked brand new after the wash. Their attention to detail and doorstep convenience made the entire experience seamless. Highly recommended!",
      avatar: "PS"
    },
    {
      name: "Rohit Mehra", 
      title: "Business Owner",
      content: "Very professional and punctual team. They arrived on time and did a thorough job without cutting corners. Great value for money and hassle-free experience. Will definitely book again.",
      avatar: "RM"
    },
    {
      name: "Ananya Verma",
      title: "Teacher",
      content: "Consistently amazing service! I've been using CleanCruisers for a few months now and my car has never looked better. Their team is polite, efficient, and very reliable.",
      avatar: "AV"
    }
  ];
  
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-900/50" style={{ backgroundColor: "#0b0f10" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What our clients say</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/80 border-gray-700">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-sm md:text-base">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-green-400 text-xs md:text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-3 md:mt-4 leading-relaxed text-sm md:text-base">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
