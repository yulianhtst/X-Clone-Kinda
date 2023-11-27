import { API } from "@/Constants";
import axios from "axios";

export const loginCS = async (email: string, password: string) => {
  const userCredentials = { email, password };

  const user = await axios.post(`${API}/auth/login`, userCredentials);

  return user.data;
};
