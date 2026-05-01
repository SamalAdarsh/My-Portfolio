import { TypeAnimation } from "react-type-animation";
import AvatarLoader from "../common/AvatarLoader";

const About = () => {
  return (
    <section
      id="about"
      /* FIX 1: Aligned padding exactly with the new Navbar to give the whole section more room */
      className="py-4 px-[5vw] md:px-[5vw] lg:px-[8vw] xl:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      {/* FIX 2: Added gap-10 md:gap-12 lg:gap-24 to explicitly push the two columns apart */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-12 lg:gap-24">
        {/* ========================================== */}
        {/* Left Side: Text Content & Animations       */}
        {/* ========================================== */}
        {/* FIX 3: Changed md:w-1/2 to lg:w-[50%] to ensure the flex-gap has room to exist without breaking the layout */}
        <div className="w-full md:w-1/2 lg:w-[50%] text-center md:text-left mt-8 sm:mt-12 md:mt-0 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I'm
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Adarsh Samal
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Fullstack AI Engineer",
                2000,
                "App Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            A Full Stack Developer with nearly 3 years of hands-on experience
            developing end-to-end production grade web applications. Experienced
            in turning ideas into functional products with clean UI and
            efficient backend logic. Currently expanding into AI-driven features
            to enhance application intelligence and user experience.
          </p>

          <a
            href="https://drive.google.com/file/d/1pq8QdoFGmbr7cPARuExHTsf5gqbIP0Sr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* ========================================== */}
        {/* Right Side: Animated Meta-Style Avatar     */}
        {/* ========================================== */}
        <div className="w-full md:w-1/2 lg:w-[45%] flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
            <AvatarLoader />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
