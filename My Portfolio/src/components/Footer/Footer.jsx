import { FaLinkedin, FaGithub, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Adarsh Samal</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Days I Code", id: "activity" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 whitespace-nowrap"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            // ADDED: Phone & WhatsApp placed first so they appear on the left
            // IMPORTANT: Replace the 'XXXXXXXXXX' with your actual 10-digit number.
            { icon: <FaPhoneAlt />, link: "tel:+917749046123" }, 
            { icon: <FaWhatsapp />, link: "https://wa.me/917749046123" }, 
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/adarsh-kumar-samal-9389b5207/" },
            { icon: <FaGithub />, link: "https://github.com/SamalAdarsh" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Adarsh Samal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;