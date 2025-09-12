const express = require('express');
const  transporter  = require('../utils/nodemail');
const router = express.Router()

router.post("/sendConfirmationEmail/alert", async (req, res) => {
  try {
    const mailOptionsDriver = {
      from: "akhilmaindola18@gmail.com",
      to: 'amardeep1604@gmail.com',
      subject: `Vehicle is near you.`,
      text:`It will arrive in next 5 minutes`
    };
    await transporter.sendMail(mailOptionsDriver);
    res.send('Mail sent')
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .send({ error: "Failed to send email. Please try again later." });
  }
});

module.exports = router;
