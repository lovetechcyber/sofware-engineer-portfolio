import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Job Hunting Website",
    description: "A full-featured job board for job seekers and recruiters.",
    url: "https://jobhunt-1-cdii.onrender.com/",
  },
  {
    title: "Employee Onboarding System",
    description: "An internal tool to manage employee onboarding processes.",
    url: "https://github.com/lovetechcyber/Employee_onboarding_portal",
  },
  {
    title: "Airbnb Clone",
    description: "A functional clone of Airbnb with modern UI features.",
    url: "https://github.com/lovetechcyber/AirBnB_clone_v4.git",
  },
];

const Projects = () => {
  return (
    <motion.div
      className="min-h-screen px-6 py-12 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow rounded p-6 hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
