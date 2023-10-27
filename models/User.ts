import mongoose, { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;

const UserSchema = new Schema({
  name: { type: String },
  // username: { type: String },
  password: { type: String, required: true },
  email: { type: String },
  bio: { type: String, default: "" },
  // profile_picture_url: { type: String },
  // activity: { type: ObjectId, ref: "Activity" },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
