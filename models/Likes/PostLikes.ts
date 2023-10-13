import { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;

const PostLikesSchema = new Schema({
  user_id: { type: ObjectId },
  post_id: { type: ObjectId },
});
export const PostLikes = model("PostLikes", PostLikesSchema);
