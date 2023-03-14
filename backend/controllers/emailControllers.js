const nodemailer = require("nodemailer");
const User = require("../models/userModel");
const { google } = require("googleapis");

const sendConfirmation = async (req, res) => {
  try {
    const html = req.body.html;
    const { email } = await User.findById(req.user.id);
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    );

    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const options = {
      from: process.env.EMAIL_SENDER,
      to: email,
      subject: "Thank you for your purchase!",
      html: html,
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
