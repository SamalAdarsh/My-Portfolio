
import { TypeAnimation } from 'react-type-animation';
// import Tilt from 'react-parallax-tilt';
// Import the AvatarLoader component. Make sure the path matches where you saved it!
import AvatarLoader from '../common/AvatarLoader'; 

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* ========================================== */}
        {/* Left Side: Text Content & Animations       */}
        {/* ========================================== */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I'm
          </h1>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Adarsh Samal
          </h2>
          
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                'Fullstack AI Engineer', // Updated based on your recent career switch focus!
                2000, 
                'App Developer',
                2000,
                'UI/UX Designer',
                2000,
                'Coder',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>
          
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            A full-stack developer with over 3 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1_LZE10JM25zIOePYj3bkGwOLr3dZl85m/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* ========================================== */}
        {/* Right Side: Animated Meta-Style Avatar     */}
        {/* ========================================== */}
        {/* Right Side: Animated Meta-Style Avatar */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
         <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
            <AvatarLoader />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




      // <Tilt
      //       /* RESTORED DIMENSIONS: Using precise pixel sizes for that large, premium look */
      //       className="w-56 h-56 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] rounded-full"
      //       tiltMaxAngleX={20}
      //       tiltMaxAngleY={20}
      //       perspective={1000}
      //       scale={1.05}
      //       transitionSpeed={1000}
      //       gyroscope={true}
      //     >
      //       <AvatarLoader />
      //     </Tilt>