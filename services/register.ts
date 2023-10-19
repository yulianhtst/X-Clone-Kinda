import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

import {
  API,
  JWT_SECRET,
  NODEMAILER_EMAIL,
  NODEMAILER_PASS,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
} from "@/Constants";
import CreateUserSession from "@/models/CreateUserSession";
import { connect } from "@/dbConfig/dbConfig";
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

export const createSessionDb = async (email: string) => {
  await connect();
  PIN = Math.floor(Math.random() * 1000000);

  console.log("db");

  const token = jwt.sign({ email, PIN }, JWT_SECRET, { expiresIn: "1h" });

  const userSession = new CreateUserSession({
    token,
    PIN,
  });
  userSession.save();
  return token;
};

export const checkEmailAvailability = async (email: string) => {
  try {
    const response = await fetch(API + "verify/verifyemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const { isEmailFree } = await response.json();
    return isEmailFree;
    // setFree(isEmailFree);
  } catch (error) {
    console.error(error);
  }
};
