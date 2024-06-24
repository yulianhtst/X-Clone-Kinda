import mongoose, { Schema, Types } from "mongoose";
// import Activity from "./Activity";
const { ObjectId } = Types;

export const ActivitySchema = new Schema({
  // title: { type: String },//For testing
  // user: { type: ObjectId, ref: "User" },

  posts: { type: [ObjectId], ref: "Post" },
  comments: { type: [ObjectId], ref: "Comment" },
  comments_likes: { type: [ObjectId], ref: "Comment" },
  // posts_likes: { type: [ObjectId], ref: "Comment" },
  posts_likes: { type: [ObjectId], ref: "PostLikes" },
});

const UserSchema = new Schema({
  name: { type: String },
  // username: { type: String },
  password: { type: String, required: true },
  email: { type: String },
  bio: { type: String, default: "" },
  // profile_picture_url: { type: String },
  // activity: { type: ObjectId, ref: "Activity" },
  activity: ActivitySchema,
  // activity: Activity.schema,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
