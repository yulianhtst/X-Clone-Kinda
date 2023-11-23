import { checkEmailAvailability } from "@/services/ServerSide/register";
import { useEffect, useState } from "react";

export const useValidateFields = () => {
  const [error, setError] = useState<any>({
    emailError: "",
    passwordError: "",
    nameError: "",
  });

  const validateEmail = (email: string) => {
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    useEffect(() => {
      const pattern = new RegExp("([a-zA-Z0-9]+)@([a-zA-Z]+)\\.([a-zA-Z]+)");
      const emailValid = pattern.test(email);
      setIsEmailValid(emailValid);
      // setError(emailValid ? "" : "Please enter a valid email.");

      if (emailValid) {
        setError((prevState: any) => ({
          ...prevState,
          emailError: "",
        }));
      } else {
        setError((prevState: any) => ({
          ...prevState,
          emailError: "Please enter a valid email.",
        }));
      }

      if (email === "") {
        setError((prevState: any) => ({
          ...prevState,
          emailError: "",
        }));
      }
    }, [email]);
    return isEmailValid;
  };

  const checkEmailDbExistance = (email: string) => {
    const [isEmailAvailable, setIsEmailAvailable] = useState<boolean>(false);
    useEffect(() => {
      (async () => {
        const emailAvailable = await checkEmailAvailability(email);

        setIsEmailAvailable(emailAvailable);

        if (emailAvailable) {
          return;
        } else {
          setError((prevState:any) => ({
            ...prevState,
            emailError: "Email has already been taken.",
          }));
        }
        if (email === "") {
          setError((prevState:any) => ({
            ...prevState,
            emailError: "",
          }));
        }
      })();
    }, [email]);
    return isEmailAvailable;
  };

  const validateName = (name: string) => {
    const [isNameValid, setIsNameValid] = useState<boolean>(false);
    useEffect(() => {
      name ? setIsNameValid(true) : setIsNameValid(false);
    }, [name]);
    return isNameValid;
  };

  const validatePassword = (password: string) => {
    useEffect(() => {
      if (password?.length < 5 && password?.length !== 0) {
        setError((prevState:any) => ({
          ...prevState,
          passwordError: "The password is too short",
        }));
      } else {
        setError((prevState:any) => ({
          ...prevState,
          passwordError: "",
        }));
      }
    }, [password]);
  };

  return {
    validateEmail,
    checkEmailDbExistance,
    validateName,
    validatePassword,
    error,
  };
};
