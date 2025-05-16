import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Experience", path: "experience" },
    { name: "Certifications", path: "certifications" },
    { name: "Contact", path: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let link of links) {
        const section = document.getElementById(link.path);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.path);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-blue-600">
          Prince Okwubali
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={`#${link.path}`}
              className={`text-sm font-medium transition duration-200 ${
                activeSection === link.path
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-800 dark:text-white hover:text-blue-500"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-gray-800 dark:text-white"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden px-6 pb-4 bg-white dark:bg-gray-900 shadow-inner"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={`#${link.path}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  activeSection === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-800 dark:text-white hover:text-blue-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;