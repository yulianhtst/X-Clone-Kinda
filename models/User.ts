import mongoose, { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;

const UserSchema = new Schema({
  name: { type: String },
  username: { type: String },
  // password_hash: { type: String },
  email: { type: String },
  bio: { type: String },
  // profile_picture_url: { type: String },
  // activity: { type: ObjectId, ref: "Activity" },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
