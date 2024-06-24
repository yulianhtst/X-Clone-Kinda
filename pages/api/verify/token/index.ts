import { connectDb } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";

//Whats the difference ? And where should i apply each
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
//Whats the difference ? And where should i apply each

export default async function handler(req: NextRequest, res: NextApiResponse) {
  connectDb();

  const token =  getDataFromToken(req);
  console.log(token);
}
