import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendMagicLinkEmail = async (email, magicLink) => {
  const mailOptions = {
    from: `"Test Auth Magic Link" <info@majesticards.com>`,
    to: email,
    subject: "Login to Your App",
    text: `Click the link to log in: ${magicLink}`,
    html: `<p>Click the link to log in: <a href="${magicLink}">Log in</a></p>`,
  };
  await transporter.sendMail(mailOptions);
};
