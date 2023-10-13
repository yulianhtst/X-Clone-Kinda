import { CONNECTION_STRING } from "@/Constants";
import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(CONNECTION_STRING);
  } catch (error) {
    console.error(error);
  }
}
