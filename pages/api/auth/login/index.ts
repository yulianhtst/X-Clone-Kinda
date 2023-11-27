import { loginSS } from "@/services/ServerSide/authServiceSS";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { JWT_LOGIN_SECRET } from "@/Constants";

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

    const token = jwt.sign(payload, JWT_LOGIN_SECRET, {
      expiresIn: "1d",
    });

    const day = new Date(Date.now() + 1000 * 60 * 60 * 60 * 24).toUTCString();
    res.setHeader("Set-Cookie", `loggedUser=${token};Expires=${day};Path=/;`);

    res.json({
      message: "Successfully  logged in",
      token,
      user: payload,
    });
  } catch (error) {
    console.log(error);
  }
}
