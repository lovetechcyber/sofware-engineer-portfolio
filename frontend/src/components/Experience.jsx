import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Brandcurb",
    year: "2021",
    location: "Onsite"
  },
  {
    role: "Frontend Developer",
    company: "Oladepe Farm",
    year: "2023",
    location: "Remote"
  },
  {
    role: "Freelance Software Engineer",
    company: "Lovetechcyber",
    year: "2024 - Present",
    location: "Remote"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

const Experience = () => (
  <section className="py-12 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
    <motion.h2
      className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Experience
    </motion.h2>

    <div className="max-w-4xl mx-auto grid gap-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company}
          className="p-6 border dark:border-gray-700 rounded-lg shadow-md bg-gray-50 dark:bg-gray-800"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h3 className="text-xl font-semibold mb-1">
            {exp.role} <span className="text-blue-500"> @ {exp.company}</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {exp.year} | {exp.location}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
