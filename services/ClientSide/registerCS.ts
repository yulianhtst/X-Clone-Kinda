import axios from "axios";

export const createUserCS = async (form: any) => {
  try {
    const createdUser = await axios.post(`http://localhost:3000/auth/signup`, form);

    return createdUser.data;
  } catch (error) {
    console.error("Error creating user", error);
  }
};

export const verifySessionTokenCS = async (
  token: string | null,
  PIN: string
) => {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const data = JSON.stringify({ PIN });

    const response = await axios.post(`http://localhost:3000/verify/pin`, data, options);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
};

export const sendEmailCS = async (formData: any) => {
  try {
    const response = await axios.post(`http://localhost:3000/mailer`, formData);
    return response.data;
  } catch (error) {
    if(error instanceof Error){
      return error
    }
  }
};

export const checkEmailAvailabilityCS = async (email: string) => {
  try {
    const response = await fetch(`http://localhost:3000/verify/email`, {
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
