import { checkEmailAvailability } from "@/services/ServerSide/register";
import { useEffect, useState } from "react";

export const useValidateFields = (formData: any) => {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isEmailAvailable, setIsEmailAvailable] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const pattern = new RegExp("([a-zA-Z0-9]+)@([a-zA-Z]+)\\.([a-zA-Z]+)");
    const isEmailValid = pattern.test(formData.email);
    setIsEmailValid(isEmailValid);
    setMessage(isEmailValid ? "" : "Please enter a valid email.");
    if (formData.email === "") setMessage("");
  }, [formData.email]);

  useEffect(() => {
    (async () => {
      const isEmailAvailable = await checkEmailAvailability(formData.email);

      setIsEmailAvailable(isEmailAvailable);

      if (isEmailAvailable) return;
      setMessage("Email has already been taken.");
      if (formData.email === "") setMessage("");
    })();
  }, [formData.email]);

  useEffect(() => {
    formData.name ? setIsNameValid(true) : setIsNameValid(false);
  }, [formData.name]);

  
  return {
    isEmailValid,
    isNameValid,
    isEmailAvailable,
    message,
  };
};
