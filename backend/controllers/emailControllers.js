const nodemailer = require("nodemailer");
const User = require("../models/userModel");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendConfirmation = async (req, res) => {
  try {
    const { email } = await User.findById(req.user.id);
    const options = {
      from: process.env.EMAIL_SENDER,
      to: email,
      subject: "Thank you for your purchase!",
      html: req.body.html,
    };
    await transporter.sendMail(options);
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
};

module.exports = {
  sendConfirmation,
};
