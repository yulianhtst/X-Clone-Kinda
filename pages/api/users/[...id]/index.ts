import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectDb();
  const [userId] = req.query.id;

  const user = await User.findById(userId);
  const userDTO = {
    name: user.name,
    email: user.email,
  };

  res.json(userDTO);
}

