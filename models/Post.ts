import mongoose, { Schema, Types } from "mongoose";
const { ObjectId } = Types;

const PostSchema = new Schema(
  {
    user_id: { type: ObjectId },
    content: { type: String },
    //Video gif picture  //   media: { type: String },
    comments: [{ type: [ObjectId], ref: "Comment" }],
    likes: { type: [ObjectId], ref: "PostLikes" },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
