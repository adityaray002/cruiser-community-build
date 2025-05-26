
const SocialIcons = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-4">
        <a 
          href="#" 
          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 hover:bg-white/20 transition-all"
        >
          <span className="text-lg">𝕏</span>
        </a>
        <a 
          href="#" 
          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 hover:bg-white/20 transition-all"
        >
          <span className="text-lg">f</span>
        </a>
        <a 
          href="#" 
          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 hover:bg-white/20 transition-all"
        >
          <span className="text-lg">📷</span>
        </a>
        <a 
          href="#" 
          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-green-400 hover:bg-white/20 transition-all"
        >
          <span className="text-lg">in</span>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
