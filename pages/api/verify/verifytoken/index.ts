import { connectDb } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";

//Whats the difference ? And where should i apply each
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
//Whats the difference ? And where should i apply each

export default async function handler(req: NextRequest, res: NextApiResponse) {
  connectDb();

  const token = await getDataFromToken(req);
  console.log(token);
}
