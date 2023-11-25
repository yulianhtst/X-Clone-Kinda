import { connectDb } from "@/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { JWT_LOGIN_SECRET } from "@/Constants";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { createUserSS } from "@/services/ServerSide/userSS";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  ///....TO DO
  // Refactor the loginSession
  // Not storing it in db
  //Create User
  //---Hash password
  //---Create Authentication
  //---Will be redirected
  //Create Context for the form
  // WIll need to validate the Data  maybe DTO will be good to be added
  await connectDb();
  const formData = req.body;

  const createdUser = await createUserSS(formData);

  const payload = {
    _id: createdUser._id.toString(),
    name: createdUser.name,
    email: createdUser.email,
  };

  const loginToken = jwt.sign(payload, JWT_LOGIN_SECRET, {
    expiresIn: "1d",
  });

  res.setHeader(
    "Set-Cookie",
    `loggedUser=${loginToken};Expires=${new Date(
      Date.now() + 1000 * 60 * 60 * 60 * 24
    ).toUTCString()};Path=/;`
  );

  res.json({
    message: "Successfully  created a user",
    token: loginToken,
    user: payload,
  });
}
