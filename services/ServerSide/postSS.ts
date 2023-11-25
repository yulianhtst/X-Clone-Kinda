import { connectDb } from "@/dbConfig/dbConfig";
import Post from "@/models/Post";
import User from "@/models/User";

export const getAllPostsSS = async () => {
  const data = await Post.find({});
  const posts = JSON.parse(JSON.stringify(data));

  return posts;
};
export const createPost = async (postData: any) => {
  connectDb();
  const { user_id } = postData;

  const createdPost = await new Post({ ...postData });
  const savedPost = await createdPost.save();
  await User.findByIdAndUpdate(user_id, {
    $push: { "activity.posts": savedPost._id },
  });

  return savedPost;
};
