import type { NextApiRequest, NextApiResponse } from "next";
import CreateUserSession from "@/models/CreateUserSession";
import { connect } from "@/dbConfig/dbConfig";
import { terminateSignInSession } from "@/services/ServerSide/register";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect();
  const { PIN } = req.body;
  // const sessionToken = req.headers["authorization"]?.slice(7);
  const sessionToken = req.headers["authorization"]?.split(" ")[1];

  const response = await CreateUserSession.findOne({
    PIN,
    token: sessionToken,
  });

  if (!response) {
    res.json({ error: "PIN dont match" });
  }

  if (response) {
    try {
      terminateSignInSession(sessionToken);
      res.json({ success: "OK" });
    } catch (error) {
      res.json({ error: "Could not find the session" });
    }
  }
}
