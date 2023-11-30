// import { NextApiRequest, NextApiResponse } from "next";
// import jwt from "jsonwebtoken";
// import TokenBlackList from "@/models/TokenBlackList";
// import { JWT_LOGIN_SECRET } from "@/Constants";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const token = req.headers.authorization?.split(" ")[1] || "";
//   const decodedToken = jwt.verify(token,JWT_LOGIN_SECRET);

//   await TokenBlackList.create({
//     token,
//     // @ts-expect-error
//     expirationDate: new Date(decodedToken?.exp),
//   });

//   res.json({ message: "yes" });
// }
// //