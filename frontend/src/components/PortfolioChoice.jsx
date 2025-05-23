import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioChoice = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <h1 className="text-white text-4xl font-bold mb-12 text-center">
        Welcome, what do you want to know about me
      </h1>

      <div className="flex flex-col md:flex-row gap-12 max-w-4xl w-full justify-center">
        {/* Software Engineer Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer bg-gray-800 rounded-lg shadow-lg p-10 flex flex-col items-center justify-center flex-1"
          onClick={() => onSelect("software")}
        >
          <h2 className="text-indigo-400 text-3xl font-semibold mb-4">
            <Link
              to="/hero"
              >
              Software Engineer Portfolio
            </Link>
          </h2>
          <p className="text-gray-300 text-center max-w-xs">
            Showcasing full-stack projects, coding skills, and software
            architecture.
          </p>
        </motion.div>

        {/* Cybersecurity Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer bg-gray-800 rounded-lg shadow-lg p-10 flex flex-col items-center justify-center flex-1"
          onClick={() => onSelect("cybersecurity")}
        >
          <h2 className="text-indigo-400 text-3xl font-semibold mb-4">
            <Link
              to="/portfolio"
              >
              Cybersecurity Portfolio
            </Link>
          </h2>
          <p className="text-gray-300 text-center max-w-xs">
            Highlighting security projects, threat detection, penetration
            testing, and incident response.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioChoice;
