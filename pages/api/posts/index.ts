import { connectDb } from "@/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";
import Post from "@/models/Post";
import { createPost } from "@/services/ServerSide/create";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    connectDb();
    //I need to validate the body
    const body = req.body;
    const createdPost = await createPost(body);

    res.json(createdPost);
  } catch (error) {
    console.error(error);
  }
}
