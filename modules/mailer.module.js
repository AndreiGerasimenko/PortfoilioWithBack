const config = require("config");

const nodemailer = require("nodemailer");
const nmEmail = config.get("email");
const nmPassword = config.get("password");
const sendToEmail = config.get("sendToEmail");

const sendMail = async (name, email, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: nmEmail,
      pass: nmPassword,
    },
  });

  await transporter.sendMail({
    from: nmEmail,
    to: sendToEmail,
    subject: `Potential job offer from ${name} <${email}>`,
    text,
  });
};

module.exports = sendMail;
