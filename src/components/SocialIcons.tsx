
import { Facebook, Instagram } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-3 md:space-y-4">
        <a 
          href="#" 
          className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 hover:bg-white/20 transition-all"
        >
          <Facebook className="h-5 w-5 md:h-6 md:w-6" />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 hover:bg-white/20 transition-all"
        >
          <Instagram className="h-5 w-5 md:h-6 md:w-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
