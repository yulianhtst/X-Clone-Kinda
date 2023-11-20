import { connectDb } from "@/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { JWT_LOGIN_SECRET } from "@/Constants";
// import { createUser } from "@/services/register";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import { createUser } from "@/services/ServerSide/create";

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

  // const createdUser = await createUser(formData).catch((err) =>
  //   console.error(err)
  // );
  const hashedPassword = await bcryptjs.hash(formData.password, 10);

  const userData = {
    name: formData.name,
    email: formData.email,
    password: hashedPassword,
  };

  const createdUser = await createUser(userData);

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

  // Path="/";

  res.json({
    message: "Successfully  created a user",
    token: loginToken,
    user: payload,
  });
}
