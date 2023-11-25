import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

import {
  API,
  JWT_SESSION_SECRET,
  NODEMAILER_EMAIL,
  NODEMAILER_PASS,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
} from "@/Constants";

let PIN: number;

export const sendEmails = async (name: string, email: string) => {
  console.log("email");

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: NODEMAILER_EMAIL,
      pass: NODEMAILER_PASS,
      clientId: OAUTH_CLIENT_ID,
      clientSecret: OAUTH_CLIENT_SECRET,
      refreshToken: OAUTH_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: NODEMAILER_EMAIL,
    to: `${email}`,
    subject: `Hello ${name}`,
    text: "This is a test email sent with Nodemailer!",
    html: `<p>This is a test email sent with <b>${PIN}</b>!</p>`,
  };

  return await transporter.sendMail(mailOptions);
};

export const createSessionTokenSS = (email: string) => {
  PIN = Math.floor(Math.random() * 1000000);
  const token = jwt.sign({ email, PIN }, JWT_SESSION_SECRET, {
    expiresIn: "1h",
  });
  return token;
};



// export const createUser = async (userData: any) => {
//   connectDb();
//   const activity = await new Activity({}).save();

//   return await new User({
//     ...userData,
//     activity,
//   }).save();
// };

// export const createUser = async ({ name, email, password }:any) => {
//   connect()
//   const hashedPassword = await bcryptjs.hash(password, 10);

//   const userSchema = new User({
//     name,
//     email,
//     password: hashedPassword,
//   });

//   const createdUser = await userSchema.save();
//   return createdUser;
// };
