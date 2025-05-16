const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fetch = require("node-fetch"); // Make sure this is installed: npm install node-fetch
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// CONTACT FORM ROUTE
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// AITOPIA PROXY ROUTE
app.get("/api/get_key", async (req, res) => {
  try {
    const response = await fetch("https://extensions.aitopia.ai/extensions/app/get_key");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Aitopia proxy error:", error);
    res.status(500).json({ error: "Failed to fetch data from Aitopia" });
  }
});

// You can add more proxy routes as needed for:
// /ai/prompts, /ai/model_settings, etc.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
