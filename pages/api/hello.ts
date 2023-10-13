// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../dbConfig/dbConfig";
import { User } from "@/models/User";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connect();

  const newUser = new User({
    username: "yulian",
    bio: "123131fasafa",
    email: "yulianhtst3@gmail.com",
    name: "yulian",
  });
  const response = await newUser.save();
  console.log(response);

  res.status(200);
}
