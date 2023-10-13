import { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;

const ActivitySchema = new Schema({
  posts: { type: [ObjectId] },
  comments: { type: [ObjectId] },
  posts_likes: { type: [ObjectId] },
  comments_likes: { type: [ObjectId] },
});

export const Activity = model("Activity", ActivitySchema);
