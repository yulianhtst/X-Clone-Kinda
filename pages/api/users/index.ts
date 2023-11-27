import { connectDb } from "@/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectDb();
  const token = req.headers["Authorization"];


}
