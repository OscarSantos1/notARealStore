const nodemailer = require("nodemailer");
const User = require("../models/userModel");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendConfirmation = async (req, res) => {
  try {
    const { email } = await User.findById(req.user.id);
    const options = {
      from: "notarealstore@outlook.com",
      to: email,
      subject: "Thank you for your purchase!",
      html: req.body.html,
    };
    await transporter.sendMail(options);
    res.status(200).send();
  } catch (error) {
    console.log(error.response);
    res.status(500).send({ msg: error.response });
  }
};

module.exports = {
  sendConfirmation,
};
