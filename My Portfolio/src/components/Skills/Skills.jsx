import  { useState, useEffect } from "react";
import { SkillsInfo } from "../../utils/constants";
import Tilt from "react-parallax-tilt";

// 1. Individual Skill Card Component (handles its own orbit/expand state)
const SkillCard = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Continuous revolving animation loop
  useEffect(() => {
    if (isExpanded) return; // Stop spinning when expanded

    let animationFrameId;
    const animate = () => {
      setRotation((prev) => (prev + 0.3) % 360); // 0.3 controls the speed
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
            
            {/* The 3D Wireframe Globe background */}
            <div className="absolute inset-0 rounded-full border border-gray-600/30" />
            <div className="absolute inset-0 rounded-full border border-gray-600/30" style={{ transform: "rotateX(65deg)" }} />
            <div className="absolute inset-0 rounded-full border border-gray-600/30" style={{ transform: "rotateY(65deg)" }} />

            {/* Orbiting Skill Logos */}
            {category.skills.map((skill, index) => {
              const totalSkills = category.skills.length;
              const angle = (index / totalSkills) * 360 + rotation;
              const radian = (angle * Math.PI) / 180;
              const radius = 105; // Distance from center
              
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

            {/* Center Animated Expand Icon */}
            <div className="absolute flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 bg-[#131025]/80 backdrop-blur-sm select-none pointer-events-none group-hover:border-purple-500 transition-colors">
              <div className="relative w-6 h-6 animate-pulse">
                {/* Top Left */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#8245ec] rounded-tl-sm transform translate-x-0 translate-y-0 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform"></div>
                {/* Top Right */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#8245ec] rounded-tr-sm transform translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></div>
                {/* Bottom Left */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#8245ec] rounded-bl-sm transform translate-x-0 translate-y-0 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                {/* Bottom Right */}
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#8245ec] rounded-br-sm transform translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

// 2. Main Skills Section Wrapper
const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2> */}
      <h2 className="text-3xl sm:text-4xl font-bold">
        <span className="animated-gradient-text">SKILLS</span>
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Rendering the Custom Skill Cards */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <SkillCard key={category.title} category={category} />
      ))}
    </div>
  </section>
);

export default Skills;