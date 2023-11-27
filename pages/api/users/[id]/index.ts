import { connectDb } from "@/dbConfig/dbConfig";
import { findUserByIdSS } from "@/services/ServerSide/userSS";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectDb();
  const { id: userId } = req.query;
  console.log(userId, "idddddddddddddddddddddddddddd");

  const user = await findUserByIdSS(userId);
  console.log(user, "userrrrrrrrrrrrr");

  const userDTO = {
    name: user?.name,
    email: user?.email,
  };

  res.json(userDTO);
}
