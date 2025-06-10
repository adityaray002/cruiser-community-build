
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

