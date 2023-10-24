import { connect } from "@/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from "bcryptjs";
import { object, string, number, date, InferType } from "yup";
import User from "@/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  ///....TO DO
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
    hashedPassword,
  });
  const s = await newUser.save();
  console.log(s);

  res.json({ user: s });
}
