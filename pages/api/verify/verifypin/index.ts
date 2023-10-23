import type { NextApiRequest, NextApiResponse } from "next";
import CreateUserSession from "@/models/CreateUserSession";
import { connect } from "@/dbConfig/dbConfig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  const { PIN } = req.body;
  const sessionToken = req.headers["authorization"]?.slice(7);

  const response = await CreateUserSession.findOne({
    PIN,
    token: sessionToken,
  });
  console.log({
    sessionToken,
    PIN,
    response,
  });

  if (!response) {
    res.json({ error: "PIN dont match" });
  }
  if (response) {
    res.json({ success: "OK" });
  }
  res.end();
}
