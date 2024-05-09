import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { JWT_LOGIN_SECRET } from "@/Constants";
import { loginSS } from "@/services/serverSide/authServiceSS";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const loggedUser = await loginSS(email, password);
    console.log(loggedUser, "logged");

    const payload = {
      _id: loggedUser._id.toString(),
      name: loggedUser.name,
      email: loggedUser.email,
    };

    const day = new Date();
    day.setDate(day.getDate() + 1);

    const token = jwt.sign(payload, process.env.JWT_LOGIN_SECRET, {
      expiresIn: process.env.JWT_LOGIN_EXPIRATION_TIME,
    });
    res.setHeader("Set-Cookie", `loggedUser=${token};Expires=${day};Path=/;`);

    res.json({
      message: "Successfully  logged in",
      token,
      user: payload,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error,
    });
  }
}
