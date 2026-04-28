import { experiences } from "../../utils/constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="animated-gradient-text">EXPERIENCE</span>
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex items-center w-full mb-16 relative justify-end ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle - Fixed aspect ratio so logos don't squish */}
            <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 overflow-hidden">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-3/4 h-3/4 object-contain"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-[75%] sm:w-[45%] p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Company Logo/Image Inside Card - Fixed visibility & scaling */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg flex-shrink-0 flex items-center justify-center p-2 shadow-inner">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-semibold text-white leading-tight">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300 mt-1">
                    {experience.company}
                  </h4>
                  {/* Date right below the company name */}
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed">
                {experience.desc}
              </p>

              <div className="mt-6">
                <h5 className="font-medium text-white mb-3">Skills:</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-[#8245ec] text-white px-3 py-1 text-xs sm:text-sm rounded-lg border border-purple-400/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
