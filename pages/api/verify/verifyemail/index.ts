import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();

  const { email } = req.body;

  const response = await User.findOne({ email });
  console.log(response);
  
  if (!response) {
    return res.json({ success: true, isEmailFree: true });
  } else {
    return res.json({ success: true, isEmailFree: false });
  }
}
