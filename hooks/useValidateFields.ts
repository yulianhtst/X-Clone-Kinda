import { checkEmailAvailabilityCS } from "@/services/clientSide/registerCS";
import { useEffect, useState } from "react";

export const useValidateFields = (
  setCustomError: (
    errorKey: string,
    message: string,
    err?: Error | null
  ) => void
) => {
  const validateEmail = (email: string) => {
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

    useEffect(() => {
      const pattern = new RegExp("([a-zA-Z0-9]+)@([a-zA-Z]+)\\.([a-zA-Z]+)");
      const emailValid = pattern.test(email);
      setIsEmailValid(emailValid);

      if (!emailValid) {
        setCustomError(
          "emailError",
          "Please enter a valid email.",
          new Error("Invalid email")
        );
      } else {
        setCustomError("emailError", "");
      }

      if (email === "") {
        setCustomError("emailError", "");
      }
    }, [email]);

    return isEmailValid;
  };


  const checkEmailDbExistance = (email: string) => {
    const [isEmailAvailable, setIsEmailAvailable] = useState<boolean>(false);
    useEffect(() => {
      (async () => {
        const emailAvailable = await checkEmailAvailabilityCS(email);

        setIsEmailAvailable(emailAvailable);

        if (!emailAvailable) {
          setCustomError(
            "emailError",
            "Email has already been taken.",
            new Error("Invalid email")
          );
        }
      })();
    }, [email]);

    return isEmailAvailable;
  };

  const validatePassword = (password: string) => {
    useEffect(() => {
      if (password?.length < 5 && password?.length !== 0) {
        setCustomError(
          "passwordError",
          "The password is too short",
          new Error("Invalid password")
        );
      } else {
        setCustomError("passwordError", "");
      }
    }, [password]);
  };

  const validateName = (name: string) => {
    const [isNameValid, setIsNameValid] = useState<boolean>(false);
    useEffect(() => {
      setIsNameValid(!!name);
    }, [name]);
    return isNameValid;
  };

  return {
    validateEmail,
    checkEmailDbExistance,
    validateName,
    validatePassword,
  };
};
