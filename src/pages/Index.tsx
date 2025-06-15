
import { useState } from "react";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingPreview from "@/components/PricingPreview";
import AboutSection from "@/components/AboutSection";
import WhoWeAre from "@/components/WhoWeAre";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative h-[755px]" style={{ backgroundColor: "#1E1E1E" }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 w-full "
        style={{
          backgroundImage: "url('/MainViewWashing.png')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header onCartOpen={() => setCartOpen(true)} />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <PricingPreview />
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
