import { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;

const ActivitySchema = new Schema({
  posts: { type: [ObjectId], ref: "Post" },
  comments: { type: [ObjectId], ref: "Comment" },
  comments_likes: { type: [ObjectId], ref: "CommentLikes" },
  posts_likes: { type: [ObjectId], ref: "PostLikes" },
});

export const Activity = model("Activity", ActivitySchema);
