import mongoose from "mongoose";
import { Schema,  Types } from "mongoose";
const { ObjectId } = Types;

const CommentLikesSchema = new Schema({
  user_id: { type: ObjectId },
  comment_id: { type: ObjectId },
});
export default mongoose.models.CommentLikes ||
  mongoose.model("CommentLikes", CommentLikesSchema);
