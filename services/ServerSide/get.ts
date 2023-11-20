import { connectDb } from "@/dbConfig/dbConfig";
import Post from "@/models/Post";

export const getAllPosts = async () => {
  connectDb();

//   const dates = await Post.find({});

//   return dates;
};
