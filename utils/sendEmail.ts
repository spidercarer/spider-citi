import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const sendEmail = async (
  to: string,
  html: string,
  subject: string,
  attachments?: Mail.Attachment[] | undefined
) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP || `mail.privateemail.com`,
    port: Number(process.env.SMTP_PORT) || 465,
    auth: {
      user: process.env.EMAIL_ADDRESS || `support@rocketapps.me`,
      pass: process.env.PASSWORD || `hYrF4z$aCmNbHK3`,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Fred Foo 👻" ${
        process.env.EMAIL_ADDRESS || `support@rocketapps.me`
      }`,
      to,
      subject,
      html,
      attachments,
    });

    console.log(`Message sent: %s`, info.messageId);
  } catch (error) {
    console.log(`error: `, error);
  }
};
