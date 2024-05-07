import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

let PIN: number;

export const sendEmails = async (name: string, email: string) => {
  console.log({ name, email });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: `${email}`,
    subject: `Hello ${name}`,
    text: "This is a test email sent with Nodemailer!",
    html: `<p>This is a test email sent with <b>${PIN}</b>!</p>`,
  };

  return await transporter.sendMail(mailOptions);
};

export const createSessionTokenSS = (email: string) => {
  PIN = Math.floor(Math.random() * 1000000);
  const token = jwt.sign({ email, PIN }, process.env.JWT_SESSION_SECRET, {
    expiresIn: process.env.JWT_SESSION_EXPIRATION_TIME,
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
