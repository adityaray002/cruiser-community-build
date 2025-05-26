
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Wilson",
      title: "Marketing Executive",
      content: "Outstanding Experience! The car wash exceeded all my expectations. My car has never looked so pristine, and the attention to detail was remarkable. Highly recommend their services.",
      avatar: "SW"
    },
    {
      name: "Mike Johnson", 
      title: "Business Owner",
      content: "Professional and Prompt. The team was incredibly professional and completed the job quickly without compromising on quality. Great value for money and excellent customer service.",
      avatar: "MJ"
    },
    {
      name: "Emma Davis",
      title: "Teacher",
      content: "Exceptional Service. I've been using their services for months now and they consistently deliver exceptional results. My car always looks brand new after every visit.",
      avatar: "ED"
    }
  ];
  
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What our clients say</h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/80 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-green-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
