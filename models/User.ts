import { Schema, model, Types } from "mongoose";
const { ObjectId } = Types;

const UserSchema = new Schema({
  username: { type: String },
  // password_hash: { type: String },
  email: { type: String },
  name: { type: String },
  bio: { type: String },
  // profile_picture_url: { type: String },
  // activity: { type: ObjectId, ref: "Activity" },
});

export const User = model("User", UserSchema);
