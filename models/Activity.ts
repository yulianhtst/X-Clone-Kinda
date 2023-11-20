import mongoose, { Schema, Types } from "mongoose";
const { ObjectId } = Types;

export const ActivitySchema = new Schema({
  // title: { type: String },//For testing 
  // user: { type: ObjectId, ref: "User" },
  
  posts: { type: [ObjectId], ref: "Post" },
  comments: { type: [ObjectId], ref: "Comment" },
  comments_likes: { type: [ObjectId], ref: "CommentLikes" },
  posts_likes: { type: [ObjectId], ref: "PostLikes" },
});

export default mongoose.models.Activity ||
  mongoose.model("Activity", ActivitySchema);
