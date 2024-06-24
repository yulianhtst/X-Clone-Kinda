import mongoose, { Schema,  Types } from "mongoose";
const { ObjectId } = Types;

const PostLikesSchema = new Schema({
  user_id: { type: ObjectId },
  post_id: { type: ObjectId },
});
export default mongoose.models.PostLikes ||
  mongoose.model("PostLikes", PostLikesSchema);
