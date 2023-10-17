import { NODEMAILER_EMAIL, NODEMAILER_PASS, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_REFRESH_TOKEN } from "@/Constants";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

///////////////////////////////////////////////////////////
//      PROBLEMS THAT NEED TO BE FIXED 
//      THE PIN IS NOT UNIQUE TO THE USER.
//      OTHER USERS CAN ENTER THE PIN SEND TO THE USER BY EMAIL
//      ONE PIN CAN VERIFY TWO EMAILS.
//      TODO THIS I WILL NEED TOKEN ? WHICH I WILL SEND TO SERVER
//      ALSO I WILL NNED TO CHECK WITH REQUEST IF THE EMAIL ALREADY EXISTS 


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: NODEMAILER_EMAIL,
        pass: NODEMAILER_PASS, 
        clientId: OAUTH_CLIENT_ID,
        clientSecret: OAUTH_CLIENT_SECRET,
        refreshToken: OAUTH_REFRESH_TOKEN
    }
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const action = req.headers["action"]
    console.log(action);

    let PIN;

    if (action === 'Send-Email') {

        const { name, email } = req.body

        PIN = Math.floor(Math.random() * 1000000)
        const mailOptions = {
            from: NODEMAILER_EMAIL,
            to: `${email}`,
            subject: `Hello ${name}`,
            text: 'This is a test email sent with Nodemailer!',
            html: `<p>This is a test email sent with <b>${PIN}</b>!</p>`,
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
    if (action === 'Verify-PIN') {
        const { pin } = req.body
        if (pin === PIN) {
            console.log('YESSSSSSSSSSSSSSSSs');
        }

    }

}
