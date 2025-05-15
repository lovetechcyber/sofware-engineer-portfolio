import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="min-h-screen px-4 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Image Section with Animation */}
        <motion.div
          className="flex-shrink-0"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImg}
            alt="Prince Okwubali"
            className="w-72 h-72 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-600">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m <strong>Prince Okwubali</strong>, a passionate and detail-oriented full-stack software engineer from Nigeria.
            With hands-on experience in building scalable web applications, I specialize in technologies like React.js,
            Node.js, Django, MongoDB, and PostgreSQL. I enjoy solving problems, building products that make lives easier, 
            and continuously improving my technical and soft skills.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            My journey started with ALX, where I graduated with a strong foundation in computer science principles and real-world 
            software development. Since then, I've contributed to startups and freelance projects, and I’m excited to collaborate 
            on innovative tech that drives change.
          </p>

          <div className="mt-6">
            <a
              href="/Okwubali_Prince_cv.pdf" 
              download
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
