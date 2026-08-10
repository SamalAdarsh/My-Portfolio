import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const Activity = () => {
  const [activeTab, setActiveTab] = useState("github");
  const [isLeetCodeLoaded, setIsLeetCodeLoaded] = useState(false);

  const githubUsername = "SamalAdarsh";
  const leetcodeUsername = "AdarshSamal006";

  return (
    <section
      id="activity"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="animated-gradient-text">DAYS I CODE</span>
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Consistency is key. Here is my daily activity for building projects
          and solving DSA problems.
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
        <div
          className={`bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-4 sm:p-8 w-full min-h-75 flex items-center justify-center mx-auto transition-all duration-500 ${
            activeTab === "github" ? "max-w-4xl" : "max-w-4xl lg:max-w-2xl"
          }`}
        >
          {/* GitHub Tab */}
          {activeTab === "github" && (
            <div className="w-full flex justify-center animate-fade-in">
              <div className="flex justify-center max-w-full text-white [&>article]:max-w-full [&_svg]:max-w-full [&_svg]:h-auto">
                <GitHubCalendar
                  username={githubUsername}
                  colorScheme="dark"
                  blockSize={14}
                  blockMargin={5}
                  fontSize={16}
                  theme={{
                    dark: [
                      "#161b22",
                      "#3b1d6b",
                      "#5a2ca6",
                      "#8245ec",
                      "#a855f7",
                    ],
                  }}
                />
              </div>
            </div>
          )}

          {/* LeetCode Tab */}
          {activeTab === "leetcode" && (
            <div className="w-full flex flex-col items-center animate-fade-in text-center">
              <div className="flex justify-center w-full relative">
                {!isLeetCodeLoaded && (
                  <div className="w-full max-w-2xl lg:max-w-137.5 min-h-55 sm:min-h-70 lg:min-h-60 rounded-xl border border-gray-800 bg-[#131025] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(130,69,236,0.1)]">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4">
                      <div className="absolute inset-0 rounded-full border-t-2 border-purple-600 animate-spin"></div>
                      <div className="absolute inset-2 rounded-full border-r-2 border-purple-400 animate-[spin_1.5s_reverse_infinite]"></div>
                      <div className="absolute inset-4 rounded-full border-b-2 border-teal-400 animate-spin"></div>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-purple-400 tracking-widest uppercase animate-pulse">
                      Fetching Stats...
                    </span>
                  </div>
                )}

               
                <img
                  src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Poppins&ext=heatmap`}
                  alt="LeetCode Stats"
                  onLoad={() => setIsLeetCodeLoaded(true)}
                  className={`w-full max-w-2xl lg:max-w-137.5 rounded-xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] border border-gray-700 transition-opacity duration-700 ease-in-out ${
                    isLeetCodeLoaded
                      ? "opacity-100 block"
                      : "opacity-0 absolute -z-10"
                  }`}
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
