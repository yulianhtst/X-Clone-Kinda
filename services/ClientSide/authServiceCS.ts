import axios from "axios";

type LoginArgs = {
  email: string;
  password: string;
};

export const loginCS = async (userCredentials: LoginArgs) => {

  const user = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/auth/login`,
    userCredentials
  );
  return user.data;
};
export const logoutCS = () => {
  localStorage.removeItem("auth");
  document.cookie =
    "loggedUser" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
