import { timeStamp } from "console";
import { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;

const CommentSchema = new Schema({
  user_id: { type: ObjectId },
  content: { type: String },
  craeted_at: { type: timeStamp },
  likes: { type: [ObjectId] },
});
export const Comment = model("Comment", CommentSchema);