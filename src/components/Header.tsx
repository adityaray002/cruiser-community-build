
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  showNav?: boolean;
  onCartOpen?: () => void;
}

const Header =  ({ showNav = true, onCartOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <img src="LOGOFINAL.png" alt="CleanCruisers Logo" className="h-14 w-14 md:h-13 md:w-13 object-contain rounded-full" />
          <span className="text-xl md:text-2xl font-bold text-white">CleanCruisers</span>
        </div>

        
        {/* Desktop Navigation */}
        {showNav && (
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="#home" className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">HOME</a>
          <a href="#booking" onClick={() => navigate('/booking')} className="text-white hover:text-green-400 transition-colors cursor-pointer text-sm xl:text-base">BOOKING</a>
          <a href="#about" className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">ABOUT US</a>
          <a href="#contact" className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">CONTACT</a>
        </nav>
        )}

        {/* Social Icons - Desktop and Mobile */}
        <div className="flex items-center space-x-3">
          <a 
            href="#" 
            className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 hover:bg-white/20 transition-all"
          >
            <Facebook className="h-4 w-4 md:h-5 md:w-5" />
          </a>
          <a 
            href="#" 
            className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 hover:bg-white/20 transition-all"
          >
            <Instagram className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
