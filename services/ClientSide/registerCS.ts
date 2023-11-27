import { API } from "@/Constants";
import axios from "axios";

export const createUserCS = async (form: any) => {
  try {
    const createdUser = await axios.post(`${API}/auth/signup`, form);

    return createdUser.data;
  } catch (error) {
    console.error("Error creating user", error);
  }
};

export const verifySessionTokenCS = async (
  token: string | null,
  PIN: number
) => {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = JSON.stringify({ PIN });

    const response = await axios.post(`${API}/verify/pin`, data, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendEmailCS = async (formData: any) => {
  const response = await axios.post(`${API}/mailer`, formData);
  return response.data;
};

export const checkEmailAvailabilityCS = async (email: string) => {
  try {
    const response = await fetch(`${API}/verify/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const { isEmailFree } = await response.json();
    return isEmailFree;
    // setFree(isEmailFree);
  } catch (error) {
    console.error(error);
  }
};
