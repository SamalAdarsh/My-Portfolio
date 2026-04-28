
import  { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const Activity = () => {
  const [activeTab, setActiveTab] = useState("github");

  const githubUsername = "SamalAdarsh"; 
  const leetcodeUsername = "AdarshSamal006"; 
  return (
    <section
      id="activity"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        {/* <h2 className="text-4xl font-bold text-white">DAYS I CODE</h2> */}
        <h2 className="text-3xl sm:text-4xl font-bold">
        <span className="animated-gradient-text">DAYS I CODE</span>
      </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Consistency is key. Here is my daily activity for building projects and solving DSA problems.
        </p>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-900 border border-gray-700 rounded-full p-1 flex shadow-lg">
          <button
            onClick={() => setActiveTab("github")}
            className={`px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === "github"
                ? "bg-purple-600 text-white shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            GitHub
          </button>
          <button
            onClick={() => setActiveTab("leetcode")}
            className={`px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === "leetcode"
                ? "bg-purple-600 text-white shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            LeetCode
          </button>
        </div>
      </div>

      {/* Graph Container */}
      <div className="w-full flex justify-center">
        {/* Removed overflow from this outer card so padding stays intact */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-4 sm:p-10 max-w-5xl w-full">
          
          {/* GitHub Tab */}
          {activeTab === "github" && (
            /* Added an inner scrolling wrapper with bottom padding to protect text */
            <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
              <div 
                /* justify-start on mobile, justify-center on desktop */
                className="flex justify-start md:justify-center animate-fade-in min-w-[750px]"
                style={{ color: "white" }} 
              >
                <GitHubCalendar
                  username={githubUsername}
                  colorScheme="dark"
                  blockSize={14}
                  blockMargin={5}
                  fontSize={16}
                  theme={{
                    dark: ["#161b22", "#3b1d6b", "#5a2ca6", "#8245ec", "#a855f7"], 
                  }}
                />
              </div>
            </div>
          )}

          {/* LeetCode Tab */}
          {activeTab === "leetcode" && (
            <div className="w-full flex flex-col items-center animate-fade-in text-center pb-4">
              <div className="flex justify-center w-full">
                <img 
                  src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Poppins&ext=heatmap`} 
                  alt="LeetCode Stats" 
                  className="w-full max-w-2xl rounded-xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] border border-gray-700"
                />
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Activity;




  