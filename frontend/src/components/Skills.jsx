import React from "react";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Python",
  "Django",
  "SQL",
  "MongoDB",
  "Docker",
  "Git & GitHub",
  "Redis",
  "Shell Scripting",
  "Debugging",
];

const Skills = () => {
  return (
    <motion.div
      className="min-h-screen px-6 py-12 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded shadow p-4 text-center font-medium text-gray-800 dark:text-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
