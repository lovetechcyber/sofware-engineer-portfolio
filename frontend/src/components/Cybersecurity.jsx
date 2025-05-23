import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <main className="bg-gray-900 text-white font-sans min-h-screen px-4 md:px-8 py-10 space-y-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">Cybersecurity Professional</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Specializing in Offensive Security, penetration testing, vulnerability testing & Incident Response.
        </p>
      </motion.section>

      {/* About Me with Image */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8"
      >
                  <img
            src={profileImg}
            alt="Prince Okwubali"
            className="w-72 h-72 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        <div>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-300">
            I am a cybersecurity professional with hands-on experience in ethical hacking,
            network defense, and threat detection. My passion lies in building security tools and
            defending systems through automation and intelligence.
          </p>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "AI-Powered Intrusion Detection and Response System",
              description:
                "Detect and respond to network attacks using ML. Features include traffic analysis, anomaly detection, and automated IP blocking.",
              github: "https://github.com/lovetechcyber/ai-ids"
            },
            {
              title: "Offensive Security Toolkit",
              description:
                "A modular pentesting toolkit for scanning, exploitation simulation, and CVE integration using Python and Nmap.",
              github: "https://github.com/lovetechcyber/os-toolkit"
            },
            {
              title: "Web App Vulnerability Scanner",
              description:
                "Automated scanner to detect OWASP Top 10 vulnerabilities with payload injection, crawling, and report generation.",
              github: "https://github.com/lovetechcyber/owasp-scanner"
            },
            {
              title: "Incident Response Simulation Environment",
              description:
                "Simulated network attacks with logging, forensic timeline reconstruction, and response strategy demo.",
              github: "https://github.com/lovetechcyber/ir-sim-env"
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-700"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base text-center">
          {[
            "Network Security",
            "Penetration Testing",
            "Incident Response",
            "Python",
            "Metasploit",
            "Nmap",
            "Wireshark",
            "Machine Learning",
            "OWASP ZAP",
            "Forensics",
            "Fail2ban",
            "Linux Logs"
          ].map((skill, i) => (
            <li
              key={i}
              className="bg-gray-700 py-2 px-4 rounded-md hover:bg-gray-600 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-sm md:text-base mb-2">
          Email: <a href="mailto:lovetechcyb@gmail.com" className="text-blue-400">lovetechcyb@gmail.com</a>
        </p>
        <p className="text-sm md:text-base">
          LinkedIn: <a href="https://www.linkedin.com/in/prince-okwubali" className="text-blue-400" target="_blank" rel="noopener noreferrer">Prince Okwubali</a>
        </p>
      </motion.section>
    </main>
  );
};

export default Portfolio;