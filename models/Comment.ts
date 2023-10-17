import { timeStamp } from "console";
import mongoose from "mongoose";
import { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;

const CommentSchema = new Schema({
  user_id: { type: ObjectId },
  content: { type: String },
  craeted_at: { type: timeStamp },
  //If something break is here
  likes: { type: [ObjectId], ref: "CommentLikes" },
});
export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
