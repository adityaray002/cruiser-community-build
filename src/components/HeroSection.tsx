import { motion } from "framer-motion";
import { Play, Sparkles, Phone } from "lucide-react";
import { useState } from "react";

// 🎬 CHANGE THIS YOUTUBE VIDEO ID TO UPDATE THE VIDEO
// Extract the ID from YouTube URL: https://www.youtube.com/watch?v=VIDEO_ID
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+918920230357";
  };

  return (
    <section className="bg-black min-h-screen flex items-center px-4 py-8 md:px-6 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        
        {/* Video Section - Shows FIRST on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative w-full order-1 lg:order-2"
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-3 bg-gradient-to-r from-green-500/20 via-green-400/10 to-green-600/20 rounded-2xl blur-xl opacity-60" />
          
          {/* Video Container */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
            {/* Decorative corner accents - smaller on mobile */}
            <div className="absolute -top-1.5 -left-1.5 md:-top-2 md:-left-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-green-400 rounded-tl-lg" />
            <div className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-green-400 rounded-tr-lg" />
            <div className="absolute -bottom-1.5 -left-1.5 md:-bottom-2 md:-left-2 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-green-400 rounded-bl-lg" />
            <div className="absolute -bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-green-400 rounded-br-lg" />

            {/* Main Video Card */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl md:rounded-2xl overflow-hidden border border-green-500/30 shadow-2xl shadow-green-500/10">
              {/* Header Badge */}
              <div className="absolute top-2 left-2 md:top-3 md:left-3 z-20 flex items-center gap-1.5 md:gap-2 bg-black/70 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-green-500/30">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                <span className="text-[10px] md:text-xs font-semibold text-green-400 uppercase tracking-wide">Watch Now</span>
              </div>

              {/* Video Aspect Ratio Container - 9:16 for mobile, 16:9 for desktop */}
              <div className="relative aspect-[9/16] md:aspect-video">
                {!isPlaying ? (
                  // Thumbnail with Play Button
                  <div 
                    className="absolute inset-0 cursor-pointer group"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* YouTube Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                      alt="CleanCruisers Car Wash Video"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        {/* Ripple Effect */}
                        <div className="absolute inset-0 bg-green-400/30 rounded-full animate-ping" />
                        <div className="relative w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 active:scale-95 transition-transform">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-black fill-black ml-0.5" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Text */}
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                      <p className="text-white font-semibold text-sm md:text-base leading-tight">See How We Transform Your Car</p>
                      <p className="text-gray-300 text-xs md:text-sm mt-0.5">Professional detailing in action</p>
                    </div>
                  </div>
                ) : (
                  // YouTube Embed
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title="CleanCruisers Video"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg"
            >
              <span className="text-black font-bold text-[11px] md:text-sm whitespace-nowrap">✨ 1000+ Happy Customers</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Section - Shows SECOND on mobile */}
        <div className="flex flex-col justify-center space-y-5 md:space-y-6 order-2 lg:order-1 text-center lg:text-left mt-6 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Premium
            </span>
            <span className="text-white">Car Wash at Your </span>
            <span className="text-green-400">Doorstep</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md mx-auto lg:mx-0"
          >
            We deliver expert car detailing services at your location — fast, eco-friendly, and convenient.
          </motion.p>

          {/* CTA Button for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="pt-2"
          >
            <button
              onClick={handleCall}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-black font-bold text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg shadow-green-500/30 active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span>Call Now to Book</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
