/* eslint-disable react-hooks/purity */
import { useState, useEffect, useMemo } from "react";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // FIX 1: Increased the size multipliers to generate larger purple bubbles
  const particles = useMemo(() => {
    return Array.from({ length: 150 }).map(() => ({
      width: `${Math.random() * 6 + 3}px`,  /* Now ranges from 3px to 9px */
      height: `${Math.random() * 6 + 3}px`, /* Now ranges from 3px to 9px */
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 4 + 2}s`, 
      animationDelay: `${Math.random() * 5}s`, 
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 400); 
          setTimeout(onComplete, 1100); 
          return 100;
        }
        return prev + 1; 
      });
    }, 25); 

    return () => clearInterval(interval);
  }, [onComplete]);

  const words = ["IDEATE.", "DESIGN.", "DEVELOP.", "INNOVATE."];
  const activeIndex = Math.floor((progress / 100) * 4);

  return (
    <div
      /* FIX 2: Added bg-[#050414] back to hide the global white starfield while loading */
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#050414] transition-opacity duration-700 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Rising Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute bg-[#8245ec] rounded-full opacity-0 animate-rise shadow-[0_0_8px_#8245ec]"
            style={{
              ...style,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            }}
          ></div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center z-10 w-full px-5">
        {/* Name Identity */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-wide flex gap-3">
          Adarsh <span className="text-[#8245ec] font-black uppercase">Samal</span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-px w-8 md:w-16 bg-gray-600"></div>
          <span className="text-gray-400 text-xs md:text-sm tracking-[0.3em] uppercase">
            Personal Portfolio
          </span>
          <div className="h-px w-8 md:w-16 bg-gray-600"></div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-96 h-[2px] bg-gray-800 rounded-full mb-8 relative">
          <div
            className="h-full bg-[#8245ec] transition-all duration-75 ease-linear"
            style={{ 
              width: `${progress}%`, 
              boxShadow: "0 0 10px #8245ec, 0 0 20px #8245ec" 
            }}
          ></div>
        </div>

        {/* Sequential Illuminating Words */}
        <div className="flex space-x-3 md:space-x-8 text-sm md:text-base lg:text-lg tracking-widest font-semibold">
          {words.map((word, index) => (
            <span
              key={word}
              className={`transition-all duration-300 ${
                index <= activeIndex && progress > 0
                  ? "text-[#8245ec] drop-shadow-[0_0_12px_rgba(130,69,236,0.9)] opacity-100 scale-105"
                  : "text-gray-600 opacity-40"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;