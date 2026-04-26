import { education } from "../../utils/constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex items-center w-full mb-16 relative justify-end ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle - Fixed aspect ratio so logos don't squish */}
            <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 overflow-hidden">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-3/4 h-3/4 object-contain"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-[75%] sm:w-[45%] p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md  transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center gap-4 sm:gap-6">
                
                {/* School Logo/Image Inside Card - Fixed visibility & scaling */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg shrink-0 flex items-center justify-center p-2 shadow-inner">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300 mt-1">
                    {edu.school}
                  </h4>
                  {/* Date right below the school name */}
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              <p className="mt-6 text-gray-300 font-bold tracking-wide">Grade: {edu.grade}</p>
              <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;