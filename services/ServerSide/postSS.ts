import { connectDb } from "@/dbConfig/dbConfig";
import Post from "@/models/Post";
import User from "@/models/User";

export const getAllPostsSS = async () => {
  connectDb();
  const data = await Post.find({});
  const posts = JSON.parse(JSON.stringify(data));

  return posts;
};

export const createPost = async (postData: any) => {
  connectDb();
  const { user_id } = postData;

  const user = await User.findById(user_id);

  const createdPost = await new Post({ ...postData });
  const savedPost = await createdPost.save();

  console.log(savedPost);

  user.activity.posts.push(createdPost);

  await user.save();
  return savedPost;
};

export const getPostByID = async (postId: string) => {
  connectDb();

  const post = await Post.findById(postId);

  return post;
};
