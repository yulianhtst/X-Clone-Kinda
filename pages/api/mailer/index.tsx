import { NODEMAILER_EMAIL, NODEMAILER_PASS, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_REFRESH_TOKEN } from "@/Constants";
import type { NextApiRequest, NextApiResponse } from "next";
import { createSessionDb, sendEmails } from "@/services/register";
import { connect } from "@/dbConfig/dbConfig";

///////////////////////////////////////////////////////////
//      PROBLEMS THAT NEED TO BE FIXED 
//      THE PIN IS NOT UNIQUE TO THE USER.----FIXED
//      OTHER USERS CAN ENTER THE PIN SEND TO THE USER BY EMAIL
//      ONE PIN CAN VERIFY TWO EMAILS.
//      TODO THIS I WILL NEED TOKEN ? WHICH I WILL SEND TO SERVER
//      ALSO I WILL NNED TO CHECK WITH REQUEST IF THE EMAIL ALREADY EXISTS 



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const { name, email } = req.body;


    try {
        const token = await createSessionDb(email)
        const info = await sendEmails(name, email)
        console.log('Email sent: ', info.response);

        res.status(200).json({ message: 'Email sent successfully', sessionToken: token });
    } catch (error) {
        console.error('Error sending email: ', error);
        res.status(500).json({ error: 'Email could not be sent' });
    }

}
