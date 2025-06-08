
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  showNav?: boolean;
  onCartOpen?: () => void;
}

const Header =  ({ showNav = true, onCartOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6 ">
      <div className="flex items-center justify-between ">
        {/* Logo */}
        
        <div className="text-xl md:text-2xl font-bold text-white italic">
          Car Wash
        </div>
        
        {/* Desktop Navigation */}
        {showNav && (
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="#home" className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">HOME</a>
          <a href="#booking" onClick={() => navigate('/booking')} className="text-white hover:text-green-400 transition-colors cursor-pointer text-sm xl:text-base">BOOKING</a>
          <a href="#about" className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">ABOUT US</a>
          <a href="#contact" className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">CONTACT</a>
          {/* <a href="#rental" className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">CAR RENTAL</a> */}
        </nav>
        )}
        {/* Right Side - Desktop */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {/* {isLoggedIn ? (
            <span className="text-white text-sm lg:text-base">HELLO <span className="text-green-400">RAHUL</span></span>
          ) : (
            <Button 
              variant="ghost" 
              className="text-white hover:text-green-400 text-sm lg:text-base px-2 lg:px-4"
              onClick={() => navigate('/auth')}
            >
              SIGN IN
            </Button>
          )} */}
          
          {/* <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:text-green-400 h-8 w-8 lg:h-10 lg:w-10"
            onClick={() => navigate('/auth')}
          >
            <User className="h-4 w-4 lg:h-5 lg:w-5" />
          </Button> */}
          
          {/* <Button 
            variant="ghost" 
            size="icon"
            className="text-green-400 hover:text-green-300 h-8 w-8 lg:h-10 lg:w-10"
            onClick={onCartOpen}
          >
            <ShoppingCart className="h-4 w-4 lg:h-5 lg:w-5" />
          </Button> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* <Button 
            variant="ghost" 
            size="icon"
            className="text-green-400 hover:text-green-300 h-8 w-8"
            onClick={onCartOpen}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button> */}
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:text-green-400 h-8 w-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && showNav &&(
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-700">
          <nav className="flex flex-col p-4 space-y-4">
            <a 
              href="#home" 
              className="text-white hover:text-green-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              href="#booking" 
              onClick={() => {
                navigate('/booking');
                setIsMobileMenuOpen(false);
              }} 
              className="text-white hover:text-green-400 transition-colors cursor-pointer py-2"
            >
              BOOKING
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-green-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-green-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </a>
           
            <div className="border-t border-gray-700 pt-4 space-y-2">
              {isLoggedIn ? (
                <span className="text-white block">HELLO <span className="text-green-400">RAHUL</span></span>
              ) : (
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-green-400 w-full justify-start px-0"
                  onClick={() => {
                    navigate('/auth');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  SIGN IN
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
