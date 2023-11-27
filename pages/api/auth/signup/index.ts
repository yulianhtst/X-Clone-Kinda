import { connectDb } from "@/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { JWT_LOGIN_SECRET } from "@/Constants";
import { createUserSS } from "@/services/ServerSide/userSS";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectDb();
  const formData = req.body;

  const createdUser = await createUserSS(formData);

  const payload = {
    _id: createdUser._id.toString(),
    name: createdUser.name,
    email: createdUser.email,
  };

  const token = jwt.sign(payload, JWT_LOGIN_SECRET, {
    expiresIn: "1d",
  });

  const day = new Date(Date.now() + 1000 * 60 * 60 * 60 * 24).toUTCString();
  res.setHeader("Set-Cookie", `loggedUser=${token};Expires=${day};Path=/;`);

  res.json({
    message: "Successfully  created a user",
    token,
    user: payload,
  });
}
