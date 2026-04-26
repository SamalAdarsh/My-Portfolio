import { useState } from "react";
import { projects } from "../../utils/constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      /* Changed lg:px-[20vw] to lg:px-[10vw] to widen the desktop cards */
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2 line-clamp-1">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3 flex-1">
                {project.description}
              </p>
              
              {/* Updated Tags Section - Shows ALL tags and wraps them neatly */}
              <div className="mb-2 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-12">
          
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row relative overflow-hidden max-h-[90vh] border border-gray-700">
            
            {/* Absolute Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-black/50 hover:bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-2xl font-bold transition-colors z-20"
            >
              &times;
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 bg-gray-950 relative border-b md:border-b-0 md:border-r border-gray-800 p-4 flex items-center justify-center shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-40 sm:h-56 md:h-full object-contain md:object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-5 sm:p-8 flex flex-col bg-gray-900 overflow-hidden">
              
              {/* Internal Scrollable Text Area */}
              <div className="overflow-y-auto pr-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 pr-8">
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-400 border border-purple-500/20 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fixed Buttons */}
              <div className="flex-shrink-0 flex gap-4 mt-4 pt-4 border-t border-gray-800">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold text-center transition-colors shadow-lg"
                >
                  Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold text-center transition-colors shadow-[0_0_15px_rgba(130,69,236,0.5)]"
                >
                  Live Demo
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;