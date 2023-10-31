import { CONNECTION_STRING } from "@/Constants";
import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("db connected");
  } catch (error) {
    console.error(error);
  }
}
