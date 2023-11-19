import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectDb();



  res.end();
}
