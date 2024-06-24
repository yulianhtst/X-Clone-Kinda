import { getAllLieksSS } from "@/services/serverSide/likesSS";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id || "";
  if (req.method === "GET") {
    const likes = await getAllLieksSS(postId);

    res.json({
      likes,
    });
  }
  //  else if (req.method === "PUT") {
  //   const userId = req.body.userId;

  //   const like = await setLikeSS(postId, userId);
  //   console.log(like);
  // }
  res.end();
}
