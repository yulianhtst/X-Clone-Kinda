import { connectDb } from "@/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";
import { createUserSS } from "@/services/ServerSide/userSS";
import jwt from "jsonwebtoken";

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

  const day = new Date();
  day.setDate(day.getDate() + 1);

  const token = jwt.sign(payload, process.env.JWT_LOGIN_SECRET, {
    expiresIn: process.env.JWT_LOGIN_EXPIRATION_TIME,
  });

  res.setHeader("Set-Cookie", `loggedUser=${token};Expires=${day};Path=/;`);

  res.json({
    message: "Successfully  created a user",
    token,
    user: payload,
  });
}
