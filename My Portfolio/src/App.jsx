import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Activity from "./components/Activity/Activity";
import Starfield from "./components/common/Starfield";
import CustomCursor from "./components/common/CustomCursor";
import Loader from "./components/common/Loader";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-[#050414] min-h-screen relative overflow-hidden">
      
      {/* Loading Screen Overlay */}
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}

      {/* Global Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      {/* Global Background Elements (These will now be visible DURING the loading screen!) */}
      <Starfield />
      <CustomCursor /> 
      
      {/* Main Content Layer */}
      {/* FIX: Keep this completely hidden (opacity-0 and h-screen) until the loader is fully finished, then fade it in */}
      <div 
        className={`relative z-10 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0 h-screen overflow-hidden pointer-events-none"
        }`}
      >
        <Navbar />
        <About />
        <Skills />
        <Activity/>
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;