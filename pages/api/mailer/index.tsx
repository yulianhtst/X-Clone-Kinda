import { NODEMAILER_EMAIL, NODEMAILER_PASS, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_REFRESH_TOKEN } from "@/Constants";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     // host: 'smtp.gmail.com', // Gmail SMTP server
//     // port: 465,
//     // secure: true, // Use secure connection
//     auth: {
//         user: NODEMAILER_EMAIL, // Your Gmail email address
//         pass: NODEMAILER_PASS, // App-specific password generated in your Gmail settings
//     },
// });
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: NODEMAILER_EMAIL, // Your Gmail email address
        pass: NODEMAILER_PASS, // App-specific password generated in your Gmail settings
        clientId: OAUTH_CLIENT_ID,
        clientSecret: OAUTH_CLIENT_SECRET,
        refreshToken: OAUTH_REFRESH_TOKEN
    }
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const mailOptions = {
        from: NODEMAILER_EMAIL,
        to: 'yulianhtst3@gmail.com',
        subject: 'Hello from Nodemailer',
        text: 'This is a test email sent with Nodemailer!',
        html: '<p>This is a test email sent with <b>Nodemailer</b>!</p>',
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email: ', error);
        res.status(500).json({ error: 'Email could not be sent' });
    }
}
