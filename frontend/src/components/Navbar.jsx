import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Set dark mode class on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  // Links to different pages
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo or brand */}
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Prince Okwubali
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={link.path}
                className={`text-sm font-medium transition duration-200 ${
                  location.pathname === link.path
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right icons: dark mode + mobile menu toggle */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="text-xl text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile menu icon */}
          <button
            className="md:hidden text-xl text-gray-800 dark:text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown with animation */}
      {isMobileMenuOpen && (
        <motion.nav
          className="md:hidden px-6 pb-4 bg-white dark:bg-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {links.map((link) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
