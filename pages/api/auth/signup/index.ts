import { connect } from "@/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { JWT_LOGIN_SECRET } from "@/Constants";
import { createUser } from "@/services/register";

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
  connect();
  const formData = req.body;

  const createdUser = await createUser(formData).catch((err) =>
    console.error(err)
  );

  const payload = {
    _id: createdUser._id.toString(),
    username: createdUser.username,
    email: createdUser.email,
  };

  const loginToken = jwt.sign(payload, JWT_LOGIN_SECRET, {
    expiresIn: "1d",
  });

  res.setHeader(
    "set-cookie",
    `loggedUser=${loginToken};Expires=${1000 * 60 * 60 * 24}; HttpOnly;`
  );
  res.json({
    message: "Successfully  created a user",
    token: loginToken,
    user: payload,
  });
}