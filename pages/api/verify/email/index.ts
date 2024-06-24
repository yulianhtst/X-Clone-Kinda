import type { NextApiRequest, NextApiResponse } from "next";
import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('email');
  await connectDb();
  const { email } = req.body;

  const response = await User.findOne({ email });

  if (!response) {
    //If response is null email is available
    return res.json({ success: true, isEmailFree: true });
  } else {
    //If response return a instance then the email is already taken
    return res.json({ success: true, isEmailFree: false });
  }
}
