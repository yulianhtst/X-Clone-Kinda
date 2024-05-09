import { connectDb } from "@/dbConfig/dbConfig";
import { createPostCS, getAllPostsSS } from "@/services/serverSide/postSS";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    connectDb();
    //I need to validate the body
    if (req.method === "POST") {
      const body = req.body;
      const createdPost = await createPostCS(body);

      res.json(createdPost);
    } else if (req.method === "GET") {
      const data = await getAllPostsSS();
      res.json(data);
    }
  } catch (error) {
    console.error(error);
  }
}
