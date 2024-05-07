import { JWT_LOGIN_SECRET } from "@/Constants";
import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";

export const getDataFromToken = (req: NextRequest) => {
  const token = req.cookies.get("loggedUser")?.value || "";
  // const token = req.cookies?.loggedUser;

  const decodedToken = jwt.verify(token, process.env.JWT_LOGIN_SECRET);
  return decodedToken;
};
