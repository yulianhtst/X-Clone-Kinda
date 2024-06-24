import mongoose from "mongoose";
import { Schema, Types } from "mongoose";
const { ObjectId } = Types;

const CommentSchema = new Schema(
  {
    post_id: { type: ObjectId },
    user_id: { type: ObjectId },
    content: { type: String },
    //If something break is here
    likes: { type: [ObjectId], ref: "CommentLikes" },
  },
  { timestamps: true }
);
export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
