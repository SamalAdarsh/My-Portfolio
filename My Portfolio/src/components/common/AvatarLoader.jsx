import { useState, useRef } from "react";

// 👇 Update these paths to your actual assets
import AnimatedVideoAsset from "../../assets/Professional Greeting_720p.mp4"; 
import StaticPhotoAsset from "../../assets/profile-pic.png"; 

const AvatarLoader = () => {
  const [showVideo, setShowVideo] = useState(false); 
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    setShowVideo(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Click playback failed:", e));
    }
  };

  const handleVideoEnded = () => setShowVideo(false);

  return (
    <div className="w-full h-full flex items-center justify-center font-sans relative">

      {/* THE MAIN PROFILE CIRCLE */}
      {/* ADDED 'aspect-square' and 'shrink-0' so it NEVER turns into an oval again */}
      <div 
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full h-full aspect-square shrink-0 mx-auto rounded-full cursor-pointer transition-transform duration-500 ease-out transform-gpu ${
          isHovered || showVideo ? "scale-[1.08]" : "scale-100"
        }`}
      >
        <div 
          className={`relative w-full h-full rounded-full overflow-hidden border-4 bg-[#e9e0d9] transition-all duration-500 ease-out ${
            isHovered || showVideo 
              ? "border-purple-400 shadow-[0_0_50px_rgba(130,69,236,0.7)]" 
              : "border-[#8245ec] shadow-[0_0_30px_rgba(130,69,236,0.3)]" 
          }`}
        >
          {/* Static Photo Layer */}
          <img
            src={StaticPhotoAsset}
            alt="Adarsh Samal - Profile"
            className={`w-full h-full object-cover rounded-full absolute inset-0 transition-opacity duration-700 ease-in-out ${
              showVideo ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Animated Video Layer */}
          <video
            ref={videoRef}
            src={AnimatedVideoAsset}
            playsInline
            onEnded={handleVideoEnded}
            className={`w-full h-full object-cover rounded-full absolute inset-0 transform scale-[1.34] transition-opacity duration-700 ease-in-out ${
              showVideo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          />
          
          {/* Purple Glow Overlay */}
          <div className={`absolute inset-0 bg-purple-500 mix-blend-overlay transition-opacity duration-500 rounded-full pointer-events-none ${
            showVideo ? "opacity-0" : "opacity-20"
          }`}></div>
        </div>
      </div>

      {/* THE CTA TEXT & HAND ICON */}
      {/* FIX: Used 'absolute' positioning to drop it below the circle without squishing it */}
      <div 
        className={`absolute -bottom-10 md:-bottom-12 flex items-center gap-2 text-purple-400 transition-opacity duration-300 pointer-events-none ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">
          Click to say hi
        </span>
        {/* FIX: Removed rotation so it points straight UP naturally */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="animate-bounce"
        >
          <path d="M14 11V6a2 2 0 0 0-4 0v10l-3-1.5a2 2 0 0 0-2 3l4 6h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-2Z"/>
        </svg>
      </div>

    </div>
  );
};

export default AvatarLoader;