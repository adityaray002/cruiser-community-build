import { motion } from "framer-motion";
import { Play, Sparkles, Phone, Star } from "lucide-react";
import { useState } from "react";

// 🎬 CHANGE THIS YOUTUBE VIDEO ID TO UPDATE THE VIDEO
// For YouTube Shorts: https://youtube.com/shorts/VIDEO_ID → use VIDEO_ID
// For regular videos: https://www.youtube.com/watch?v=VIDEO_ID → use VIDEO_ID
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

// Custom thumbnail URL (optional) - leave empty to use YouTube's auto thumbnail
// If your YouTube thumbnail looks blurry, upload a custom high-quality image to public/ folder
const CUSTOM_THUMBNAIL_URL = "";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+918920230357";
  };

  // Get the best available YouTube thumbnail
  const getThumbnailUrl = () => {
    if (CUSTOM_THUMBNAIL_URL) return CUSTOM_THUMBNAIL_URL;
    // maxresdefault provides HD quality, fallback to sddefault for shorts
    return `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;
  };

  return (
    <section className="bg-black min-h-screen flex items-center px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 md:px-6 md:py-16 lg:pt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full">
        
        {/* Video Section - Shows FIRST on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative w-full order-1 lg:order-2"
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-green-500/20 via-green-400/10 to-green-600/20 rounded-2xl blur-xl opacity-60" />
          
          {/* Video Container - Optimized for shorts and mobile */}
          <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto lg:max-w-md">
            {/* Decorative corner accents */}
            <div className="absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-green-400 rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-green-400 rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 sm:-bottom-1.5 sm:-left-1.5 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-green-400 rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-green-400 rounded-br-lg" />

            {/* Main Video Card */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden border border-green-500/30 shadow-2xl shadow-green-500/10">
              {/* Header Badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-green-500/30">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                <span className="text-[10px] sm:text-xs font-semibold text-green-400 uppercase tracking-wide">Watch Now</span>
              </div>

              {/* Live Badge */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 flex items-center gap-1 bg-red-500/90 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-bold text-white uppercase">HD</span>
              </div>

              {/* Video Aspect Ratio Container - 9:16 for Shorts */}
              <div className="relative aspect-[9/16]">
                {!isPlaying ? (
                  // Thumbnail with Play Button
                  <div 
                    className="absolute inset-0 cursor-pointer group"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* YouTube Thumbnail with multiple fallbacks */}
                    <img
                      src={getThumbnailUrl()}
                      alt="CleanCruisers Car Wash Video"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Try different quality options as fallbacks
                        if (target.src.includes('maxresdefault')) {
                          target.src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/sddefault.jpg`;
                        } else if (target.src.includes('sddefault')) {
                          target.src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
                        } else if (target.src.includes('hqdefault')) {
                          target.src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/mqdefault.jpg`;
                        }
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
                    
                    {/* Play Button - Large and touch-friendly */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative"
                      >
                        {/* Outer ripple */}
                        <div className="absolute -inset-3 sm:-inset-4 bg-green-400/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                        {/* Inner glow */}
                        <div className="absolute -inset-2 bg-green-400/30 rounded-full animate-pulse" />
                        {/* Play button */}
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/50 active:scale-90 transition-transform">
                          <Play className="w-7 h-7 sm:w-9 sm:h-9 text-black fill-black ml-1" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-yellow-400" />
                        ))}
                        <span className="text-yellow-400 text-[10px] sm:text-xs ml-1 font-medium">5.0</span>
                      </div>
                      <p className="text-white font-bold text-sm sm:text-base leading-tight">See Our Premium Service</p>
                      <p className="text-gray-300 text-[11px] sm:text-xs mt-0.5">Tap to play video</p>
                    </div>
                  </div>
                ) : (
                  // YouTube Embed - High Quality Settings
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1&vq=hd1080&hd=1`}
                    title="CleanCruisers Video"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* Floating Badge - Below video */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg shadow-green-500/30"
            >
              <span className="text-black font-bold text-[10px] sm:text-xs whitespace-nowrap flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                1000+ Happy Customers
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Section - Shows SECOND on mobile */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 text-center lg:text-left mt-8 sm:mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-5">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs sm:text-sm font-medium">#1 Doorstep Car Wash in Delhi NCR</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                Premium
              </span>
              <span className="text-white">Car Wash at Your </span>
              <span className="text-green-400 relative">
                Doorstep
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-green-500/30" viewBox="0 0 200 8">
                  <path d="M0 7 Q50 0 100 7 Q150 14 200 7" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            We deliver expert car detailing services at your location — fast, eco-friendly, and convenient.
          </motion.p>

          {/* Features Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
          >
            {['✓ Same Day Service', '✓ Eco-Friendly', '✓ 100% Satisfaction'].map((feature, index) => (
              <span 
                key={index}
                className="text-[11px] sm:text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full"
              >
                {feature}
              </span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="pt-2 sm:pt-3"
          >
            <button
              onClick={handleCall}
              className="inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg shadow-green-500/30 active:scale-95 transition-all duration-200"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Call Now to Book</span>
            </button>
            <p className="text-gray-500 text-[10px] sm:text-xs mt-2">Available 7 days a week</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;