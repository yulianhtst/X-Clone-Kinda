import { setDislikeSS } from "@/services/serverSide/likesSS";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const userId = req.body.userId;
    const postId = req.query.id || "";

    const dislike = await setDislikeSS(postId, userId);
    res.json(dislike);
  }
}
