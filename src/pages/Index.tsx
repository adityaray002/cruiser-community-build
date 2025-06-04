
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";
import WhoWeAre from "@/components/WhoWeAre";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(2);
  const totalSlides = 10;

  return (
    <div className="min-h-screen bg-black text-white relative h-[755px]" style={{ backgroundColor: "#1E1E1E" }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 w-full "
        style={{
         // backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80')"
         
          backgroundImage: "url('/MainViewWashing.png')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header onCartOpen={() => setCartOpen(true)} />
        
        <main>
          <HeroSection 
            // currentSlide={currentSlide}
            // totalSlides={totalSlides}
            // onSlideChange={setCurrentSlide}
          />
          <ServicesSection />
          <AboutSection />
          <WhoWeAre/>
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        <Footer />
        <SocialIcons />
        
        {/* Cart Overlay */}
        <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </div>
  );
};

export default Index;
