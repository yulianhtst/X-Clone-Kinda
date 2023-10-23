import { connect } from "@/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from "bcryptjs";
import { object, string, number, date, InferType } from "yup";
import User from "@/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  const reqBody = req.body;
  console.log(reqBody);

  res.end();
}
