import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Software Engineering Certificate click to view",
    issuer: "ALX Africa",
    year: "2024",
    link: "https://drive.google.com/file/d/1SsV3lDewyYTZx0TyTRbv2xgH6E-j-7y9/view?usp=sharing"
  }
];

const Certifications = () => {
  return (
    <motion.section
      className="min-h-screen px-6 py-12 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Certifications</h2>
      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <li
            key={index}
            className="bg-gray-50 dark:bg-gray-800 p-5 rounded shadow transition hover:shadow-lg"
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {cert.title}
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer} — {cert.year}</p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Certifications;
