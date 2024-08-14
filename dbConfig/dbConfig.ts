import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/SocialApp");
    console.log("db connected");
  } catch (error) {
    console.error(error);
  }
}
