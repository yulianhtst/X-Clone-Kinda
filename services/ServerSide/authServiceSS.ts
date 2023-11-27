import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import bcrypt from "bcryptjs";


export const loginSS = async (email: string, password: string) => {
  connectDb();
  const user = await User.findOne({ email });

  const hashedPassowrd = user.password;
  const isMatched = await bcrypt.compare(password, hashedPassowrd);

  // if (!isMatched) throw { error: "Wrong credentials" };
  // if (!user) throw { error: "Can't find user" };

  return user;
};
