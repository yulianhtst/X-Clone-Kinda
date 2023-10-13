import { timeStamp } from "console";
import { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;

const PostSchema = new Schema({
  user_id: { type: ObjectId },
  content: { type: String },
  craeted_at: { type: timeStamp },
  //Video gif picture  //   media: { type: String },
  comments: { type: [ObjectId] },
  likes: { type: [ObjectId] },
});

export const Post = model("Post", PostSchema);
