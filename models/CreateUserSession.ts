import { Schema, model } from "mongoose";

const CreateUserSessionSchema = new Schema({
  token: { type: String },
  PIN: { type: String },
});

export const CreateUserSession = model("CreateUserSession", CreateUserSessionSchema);

