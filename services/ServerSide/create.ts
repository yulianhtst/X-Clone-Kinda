import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import Activity from "@/models/Activity";
import Post from "@/models/Post";

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

export const createUser = async (userData: any) => {
  connectDb();
  const activity = await new Activity({}).save();

  return await new User({
    ...userData,
    activity,
  }).save();
};
