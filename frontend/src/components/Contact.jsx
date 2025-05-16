import React, { useState } from "react";
import axios from "axios";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
  e.preventDefault();
  try {
    await axios.post("https://sofware-engineer-portfolio.onrender.com/api/contact", formData);
    alert("Message sent successfully!");
    window.location.reload(); // Refreshes the page
  } catch (error) {
    alert("Failed to send message.");
    window.location.reload(); // Refreshes the page
  }
};

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-16 max-w-4xl mx-auto text-gray-800 dark:text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-blue-600 dark:text-blue-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Form Section */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-900"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-900"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full p-3 border rounded dark:bg-gray-900"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>

        {status && (
          <motion.p
            className={`mt-3 text-sm ${
              status.includes("successfully") ? "text-green-500" : "text-red-500"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>

      {/* Contact Info */}
      <motion.div
        className="mt-10 space-y-4 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <a
          href="mailto:lovetechcyb@gmail.com"
          className="flex items-center gap-2 text-blue-500 hover:underline"
        >
          <FaEnvelope /> lovetechcyb@gmail.com
        </a>

        <a
          href="https://wa.me/2349122149121"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-500 hover:underline"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
