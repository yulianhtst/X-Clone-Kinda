import { API } from "@/Constants";
import axios from "axios";

export const createUserCS = async (form: any) => {
  try {
    const data = JSON.stringify(form);
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const createdUser = await axios.post(`${API}/auth/signup`, data, options);

    return createdUser.data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const verifySessionTokenCS = async (
  token: string | null,
  PIN: number
) => {
  try {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ PIN }),
    };
    const data = JSON.stringify({ PIN });

    const response = await axios.post(`${API}/verify/verifypin`,data, options);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const sendEmailCS = async (formData: any) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Action: "Send-Email",
    },
    body: JSON.stringify(formData),
  };
  const response = await axios(`${API}/mailer`, options);
  return response.data;
};

export const checkEmailAvailabilityCS = async (email: string) => {
  try {
    const response = await fetch(`${API}/verify/verifyemail`, {
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
