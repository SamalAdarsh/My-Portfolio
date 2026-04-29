// src/components/Skills/Skills.jsx
import  { useState, useEffect } from "react";
import { SkillsInfo } from "../../utils/constants";
import Tilt from "react-parallax-tilt";

// Sub-Component for each Skill Category Card
// src/components/Skills/Skills.jsx (Replace ONLY the SkillCard component)

const SkillCard = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation, setRotation] = useState(0);

  // continuous revolving animation loop
  useEffect(() => {
    if (isExpanded) return; 

    let animationFrameId;
    const animate = () => {
      setRotation((prev) => (prev + 0.3) % 360); 
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId); 
  }, [isExpanded]);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="cursor-pointer bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 min-h-[350px] mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] flex flex-col items-center justify-center transition-all duration-500 hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.6)] group"
    >
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
        {category.title}
      </h3>

      <div className="flex-1 w-full flex items-center justify-center">
        {isExpanded ? (
          // ==========================================
          // STATE 1: EXPANDED (The Flat Pill List)
          // ==========================================
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="flex flex-wrap justify-center gap-3 w-full animate-fade-in">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-4 w-auto hover:border-purple-500 transition-colors"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        ) : (
          // ==========================================
          // STATE 2: REVOLVING (The Animated Sphere)
          // ==========================================
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center animate-fade-in">
            
            <div className="absolute inset-0 rounded-full border border-gray-600/30" />
            <div className="absolute inset-0 rounded-full border border-gray-600/30" style={{ transform: "rotateX(65deg)" }} />
            <div className="absolute inset-0 rounded-full border border-gray-600/30" style={{ transform: "rotateY(65deg)" }} />

            {category.skills.map((skill, index) => {
              const totalSkills = category.skills.length;
              const angle = (index / totalSkills) * 360 + rotation;
              const radian = (angle * Math.PI) / 180;
              const radius = 105; 
              const x = radius * Math.cos(radian);
              const y = radius * Math.sin(radian);

              return (
                <div
                  key={skill.name}
                  className="absolute p-2 bg-[#131025] rounded-full border border-gray-700 shadow-[0_0_15px_rgba(130,69,236,0.2)] transition-transform ease-linear"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
              );
            })}

            {/* ==========================================
                NEW: Envato-Style Swooping Pointer & Ripple
               ========================================== */}
            <div className="absolute flex items-center justify-center w-14 h-14 rounded-full border border-gray-700 bg-[#131025]/80 backdrop-blur-sm select-none pointer-events-none group-hover:border-purple-500 transition-colors overflow-visible">
              
              {/* This inner div handles the swooping and clicking motion */}
              <div className="relative w-8 h-8 animate-envato-motion">
                
                {/* 1. Cursor Arrow SVG (White) */}
                <svg 
                  className="w-full h-full text-white drop-shadow-[0_0_8px_rgba(130,69,236,0.5)] transform -translate-x-0.5 -translate-y-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13l6 6" />
                </svg>
                
                {/* 2. Synchronized Ripple Effect */}
                {/* The ripple fires exactly when the arrow physically scales down */}
                <div className="absolute top-[-8px] left-[-8px] w-8 h-8 pointer-events-none">
                  <div className="w-full h-full rounded-full border-[#8245ec] shadow-[0_0_15px_rgba(130,69,236,0.6)] animate-envato-ripple"></div>
                </div>
              
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

// Main Skills Component
const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold">
        <span className="animated-gradient-text">SKILLS</span>
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Rendering Category Cards */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <SkillCard key={category.title} category={category} />
      ))}
    </div>
  </section>
);

export default Skills;