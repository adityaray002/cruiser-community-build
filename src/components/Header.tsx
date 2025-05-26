
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onCartOpen: () => void;
}

const Header = ({ onCartOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white italic">
          Car Wash
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-green-400 transition-colors">HOME</a>
          <a href="#booking" onClick={() => navigate('/booking')} className="text-white hover:text-green-400 transition-colors cursor-pointer">BOOKING</a>
          <a href="#about" className="text-white hover:text-green-400 transition-colors">ABOUT US</a>
          <a href="#contact" className="text-white hover:text-green-400 transition-colors">CONTACT</a>
          <a href="#rental" className="text-white hover:text-green-400 transition-colors">CAR RENTAL</a>
        </nav>
        
        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <span className="text-white">HELLO <span className="text-green-400">RAHUL</span></span>
          ) : (
            <Button 
              variant="ghost" 
              className="text-white hover:text-green-400"
              onClick={() => navigate('/auth')}
            >
              SIGN IN
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:text-green-400"
            onClick={() => navigate('/auth')}
          >
            <User className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-green-400 hover:text-green-300"
            onClick={onCartOpen}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
