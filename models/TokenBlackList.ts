import mongoose, { Schema } from "mongoose";

const TokenBlackListSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.TokenBlackList ||
  mongoose.model("TokenBlackList", TokenBlackListSchema);
