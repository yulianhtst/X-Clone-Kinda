import { setDislikeSS } from "@/services/ServerSide/likesSS";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const userId = req.body.userId;
    const postId = req.query.id || "";

    await setDislikeSS(postId, userId);
  }
}
