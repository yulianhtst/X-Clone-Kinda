import mongoose, { Schema, model } from "mongoose";

const CreateUserSessionSchema = new Schema({
  token: { type: String },
  PIN: { type: String },
});

// mongoose.models.Customer || mongoose.model('Customer', customerSchema);
// export const CreateUserSession = model("CreateUserSession", CreateUserSessionSchema);
// 
export default mongoose.models.CreateUserSession|| mongoose.model("CreateUserSession", CreateUserSessionSchema);