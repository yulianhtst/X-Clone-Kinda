import mongoose, { Schema, Types } from "mongoose";

const { ObjectId } = Types;

const UserOTPVerificationSchema = new Schema(
  {
    userId: { type: ObjectId },
    otp: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.UserOTPVerification ||
  mongoose.model("UserOTPVerification", UserOTPVerificationSchema);
