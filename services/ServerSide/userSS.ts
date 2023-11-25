import { connectDb } from "@/dbConfig/dbConfig";
import Activity from "@/models/Activity";
import User from "@/models/User";
import bcryptjs from "bcryptjs";

export const findUserByIdSS = async (id: string | string[] | undefined) => {
  connectDb();
  const data = await User.findById(id);
  const user = JSON.parse(JSON.stringify(data));
  return user;
};

export const createUserSS = async (formData: any) => {
  connectDb();
  const hashedPassword = await bcryptjs.hash(formData.password, 10);

  const userData = {
    name: formData.name,
    email: formData.email,
    password: hashedPassword,
  };

  const activity = await new Activity({}).save();

  return await new User({
    ...userData,
    activity,
  }).save();
};
