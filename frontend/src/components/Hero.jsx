import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Prince Okwubali
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I’m a driven and creative <strong className="text-blue-600 dark:text-blue-400">Full Stack Software Engineer</strong> with a passion for building elegant, scalable, and user-focused applications using React, Node.js, Django, and Python.
      </motion.p>

      {/* Animated CTA Button */}
      <motion.a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
