import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import Activity from "@/models/Activity";
import Post from "@/models/Post";

export const createPost = async (postData: any) => {
  connectDb();

  return await new Post({ ...postData }).save();
};
export const createUser = async (userData: any) => {
  connectDb();
  const activity = await new Activity({ title: "first" }).save();

  return await new User({
    ...userData,
    activity,
  }).save();
};
