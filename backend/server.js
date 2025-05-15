const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Set up email transport (replace with your actual credentials)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const sendEmail = async ({ name, email, message }) => {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // your receiving email
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
  };
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
