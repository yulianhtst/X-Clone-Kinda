import { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;

const CommentLikesSchema = new Schema({
  user_id: { type: ObjectId },
  comment_id: { type: ObjectId },
});
export const CommentLikes = model("CommentLikes", CommentLikesSchema);
