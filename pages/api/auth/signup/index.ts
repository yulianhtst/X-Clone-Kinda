import { connect } from "@/dbConfig/dbConfig";
import next, { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import bcryptjs, { hash } from "bcryptjs";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { JWT_LOGIN_SECRET } from "@/Constants";

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
  const { name, email, password } = req.body;

  const hashedPassword = await bcryptjs.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    //This will be removed to service
    const { _id, username, password } = await newUser.save();

    console.log(_id);

    const payload = {
      _id: _id.toString(),
      username,
      password,
    };

    const loginToken = jwt.sign(payload, JWT_LOGIN_SECRET, {
      expiresIn: "1d",
    });

    console.log(loginToken);

    const nextRes = NextResponse.json({
      message: "Successfully  created a user",
      token: loginToken,
    });
    // nextRes.cookies.set("loginToken", loginToken, { httpOnly: true });
    return nextRes;
  } catch (error) {
    console.error(error);
  }
}
