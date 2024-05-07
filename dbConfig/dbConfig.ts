import { CONNECTION_STRING } from "@/Constants";
import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");
  } catch (error) {
    console.error(error);
  }
}
